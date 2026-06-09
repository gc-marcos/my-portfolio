"use client";

import { useEffect, useRef } from "react";

export default function ThreeHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    let cancelled = false;

    const init = async () => {
      try {
        const THREE = await import("three");

        const testCanvas = document.createElement("canvas");
        const testCtx =
          testCanvas.getContext("webgl2") || testCanvas.getContext("webgl");
        if (!testCtx) return;

        if (cancelled) return;

        const w = mount.clientWidth;
        const h = mount.clientHeight;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
        camera.position.set(0, 0, 5);

        const geometry = new THREE.TorusKnotGeometry(1.2, 0.38, 120, 18);

        // Malha principal: translúcida, cor suave quase imperceptível
        const material = new THREE.MeshPhysicalMaterial({
          color: 0x7c3aed,
          emissive: 0x0f0a1e,
          emissiveIntensity: 0.05,
          roughness: 0.15,
          metalness: 0.1,
          transparent: true,
          opacity: 0.07,
          transmission: 0.9,
          thickness: 0.5,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Wireframe ainda mais sutil
        const wireMat = new THREE.MeshBasicMaterial({
          color: 0x22d3ee,
          wireframe: true,
          transparent: true,
          opacity: 0.04,
        });
        const wireMesh = new THREE.Mesh(geometry, wireMat);
        scene.add(wireMesh);

        // Segunda camada wireframe roxo, rotação oposta
        const wireMat2 = new THREE.MeshBasicMaterial({
          color: 0x7c3aed,
          wireframe: true,
          transparent: true,
          opacity: 0.03,
        });
        const wireMesh2 = new THREE.Mesh(geometry, wireMat2);
        scene.add(wireMesh2);

        // Luzes bem fracas para manter translucidez
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
        scene.add(ambientLight);

        const pl1 = new THREE.PointLight(0x7c3aed, 0.6, 12);
        pl1.position.set(3, 3, 3);
        scene.add(pl1);

        const pl2 = new THREE.PointLight(0x22d3ee, 0.4, 12);
        pl2.position.set(-3, -2, 2);
        scene.add(pl2);

        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const onMouseMove = (e: MouseEvent) => {
          mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
          mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("mousemove", onMouseMove);

        let raf: number;
        const clock = new THREE.Clock();

        const animate = () => {
          if (cancelled) return;
          raf = requestAnimationFrame(animate);
          const t = clock.getElapsedTime();

          targetX += (mouseX * 0.3 - targetX) * 0.04;
          targetY += (-mouseY * 0.3 - targetY) * 0.04;

          mesh.rotation.x = t * 0.28 + targetY;
          mesh.rotation.y = t * 0.42 + targetX;
          wireMesh.rotation.x = mesh.rotation.x;
          wireMesh.rotation.y = mesh.rotation.y;
          wireMesh2.rotation.x = -mesh.rotation.x * 0.6;
          wireMesh2.rotation.y = -mesh.rotation.y * 0.6;
          mesh.position.y = Math.sin(t * 0.7) * 0.14;
          wireMesh.position.y = mesh.position.y;
          wireMesh2.position.y = mesh.position.y;

          renderer.render(scene, camera);
        };
        animate();

        const onResize = () => {
          if (!mount) return;
          const nw = mount.clientWidth;
          const nh = mount.clientHeight;
          camera.aspect = nw / nh;
          camera.updateProjectionMatrix();
          renderer.setSize(nw, nh);
        };
        window.addEventListener("resize", onResize);

        return () => {
          cancelled = true;
          cancelAnimationFrame(raf);
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("resize", onResize);
          renderer.dispose();
          geometry.dispose();
          material.dispose();
          wireMat.dispose();
          wireMat2.dispose();
          if (mount.contains(renderer.domElement)) {
            mount.removeChild(renderer.domElement);
          }
        };
      } catch {
        // WebGL não disponível — degradação silenciosa
      }
    };

    let cleanup: (() => void) | undefined;
    init().then((fn) => { cleanup = fn; });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
      style={{ zIndex: 1 }}
    />
  );
}
