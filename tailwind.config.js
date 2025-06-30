/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", "Arial", "sans-serif"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                'skin-base': 'var(--background)',
                'skin-foreground': 'var(--foreground)',
            },
        },
    },
    plugins: [],
};
