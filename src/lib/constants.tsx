import { Database, Code, Github, Linkedin, Mail, MapPin, Phone, Smartphone, Youtube, XIcon } from "lucide-react";


export const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/gc-marcos" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/gc-marcos" },
    { icon: <Youtube size={20} />, href: "https://www.youtube.com/@gc-marcos" },
    { icon: <XIcon size={20} />, href: "https://x.com/gc_marcos1" },
]

export const stats = [
    { number: "3", text: "Experiência Acadêmica" },
    { number: "20", text: "Projetos" },
    { number: "6", text: "Tecnologias" },
    { number: "63", text: "Commits de código" }
];

export const menuItems = [
    { title: "Home", path: "/" },
    { title: "Serviços", path: "/services" },
    { title: "Resumo", path: "/resume" },
    { title: "Projetos", path: "/work" },
    { title: "Contato", path: "/contact" },
];

export const services = [
    {
        number: "01",
        icon: <Code size={32} />,
        title: "Estágio em Desenvolvimento Frontend",
        description: "Atue com tecnologias web modernas para construir interfaces intuitivas e acessíveis, focando em usabilidade e impacto social.",
        features: [
            "HTML, CSS, JavaScript e React",
            "Projetos com foco em acessibilidade e UX",
            "Integração com APIs REST e dados em JSON",
            "Versionamento com Git e GitHub"
        ]
    },
    {
        number: "02",
        icon: <Smartphone size={32} />,
        title: "Estágio em Desenvolvimento Mobile",
        description: "Participe da criação de aplicativos móveis com foco em saúde e bem-estar, utilizando tecnologias híbridas e nativas.",
        features: [
            "React Native, Expo e Ionic",
            "Android Studio e Consumo de sensores",
            "Armazenamento local com JSON e SQLite"
        ]
    },
    {
        number: "03",
        icon: <Database size={32} />,
        title: "Estágio em Desenvolvimento Fullstack",
        description: "Atue no desenvolvimento de aplicações completas, conectando frontend e backend com foco em soluções eficientes.",
        features: [
            "Node.js, Express e SQLite",
            "Integração entre frontend e APIs",
            "Criação de rotas e manipulação de dados",
            "Deploy local e boas práticas de código"
        ]
    },
    // {
    //     number: "04",
    //     icon: <HeartPulse size={32} />,
    //     title: "Estágio em Tecnologia para Impacto Social",
    //     description: "Contribua com soluções tecnológicas voltadas para saúde, educação e segurança, usando inovação com propósito.",
    //     features: [
    //         "Aplicações com foco em inclusão e acessibilidade",
    //         "Monitoramento de sinais vitais com IoT e mobile",
    //         "Projetos baseados em problemas reais da comunidade",
    //         "Metodologias ágeis e design centrado no usuário"
    //     ]
    // }
];


export const ExperienceTabs = [
    { title: "Experiência", id: "experience" },
    { title: "Educação", id: "education" },
    { title: "Habilidades", id: "skills" },
    { title: "Sobre mim", id: "about" }
];

export const resumeData = {
    experience: [
        {
            period: "2022 - Presente",
            title: "Desenvolvedor em Formação",
            company: "Projetos Acadêmicos e Pessoais",
            description: "Em transição de carreira, venho me dedicando ao desenvolvimento de projetos acadêmicos e pessoais com foco em soluções web e mobile. Tenho conhecimento prático em HTML, CSS, JavaScript, React Native, Node.js, Python e SQL. Estou em busca da minha primeira oportunidade como estagiário na área de desenvolvimento, onde possa aplicar meus conhecimentos e continuar evoluindo com apoio de uma equipe experiente."
        }
        ,
        {
            period: "2012 - 2022",
            title: "Conferente",
            company: "Inoxplasma",
            description: "Atuei na otimização de processos logísticos de expedição e recebimento, integrando ERP para validação de pedidos e notas fiscais e utilizando Power BI para análise de estoque e monitoramento de indicadores. Meu foco em eficiência e precisão contribuiu para operações mais seguras e eficazes."
        }
    ],
    education: [
        {
            period: "2024 - 2026",
            title: "Informática Para Negócio",
            institution: "FATEC Mauá",
            description: "Graduando em Informática para Negócios, integrando tecnologia, dados e gestão para inovar nas organizações."
        },
        {
            period: "2023 - 2024",
            title: "Desenvolvimento Mobile",
            institution: "Universidade Anhanguera",
            description: "Formado em Desenvolvimento Mobile, com foco em apps Android e iOS."
        },

        {
            period: "2020 - 2021",
            title: "Desenvolvimento de Sistemas",
            institution: "ETEC Mauá",
            description: "Técnico em Desenvolvimento de Sistemas, com foco em programação e banco de dados."
        },
        {
            period: "2013 - 2016",
            title: "Gestão da Produção Industrial",
            institution: "Universidade Anhanguera",
            description: "Formado em Gestão da Produção Industrial, com foco em processos e produtividade."
        }
    ],
    skills: [
        { name: "Frontend", items: ["React", "Next.js", "TypeScript"] },
        { name: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
        { name: "DevOps", items: ["Git", "Docker", "AWS", "CI/CD"] },
        { name: "Soft Skills", items: ["Comunicação", "Liderança", "Trabalho em Equipe"] }
    ],
    about: {
        description: "Sou profissional em transição de carreira para tecnologia, atualmente estudante de Informática para Negócios com foco em desenvolvimento frontend e mobile. Tenho conhecimento em HTML, CSS, JavaScript, React Native, Node.js, Python e SQL. Desenvolvi projetos acadêmicos e pessoais, como um app de monitoramento de crises para smartwatch, e organizei oficinas de IA com foco em saúde e educação. Sou rápido para aprender, gosto de resolver problemas e me motiva usar a tecnologia para gerar impacto social.",
        interests: [
            "Desenvolvimento Frontend",
            "Desenvolvimento Mobile",
            "Inteligência Artificial Aplicada",
            "UX e Acessibilidade",
            "Impacto Social com Tecnologia",
            "Ciclismo e Natureza"
        ]
    }
    
}

export const skillsData = [
    {
        name: "HTML5",
        icon: "/skills/html.svg"
    },
    {
        name: "CSS3",
        icon: "/skills/css.svg"
    },
    {
        name: "JavaScript",
        icon: "/skills/javascript.svg"
    },
    {
        name: "React",
        icon: "/skills/react.svg"
    },
    {
        name: "Java.js",
        icon: "/skills/java.svg"
    },
    {
        name: "Node.js",
        icon: "/skills/nodejs.svg"
    },
    {
        name: "C",
        icon: "/skills/c.svg"
    },
    {
        name: "TypeScript",
        icon: "/skills/typescript.svg"
    }
]

export const projects = [
    {
        number: "01",
        title: "App Monitoramento de Crises",
        description: "Aplicativo para smartwatch que monitora sinais vitais (frequência cardíaca e pressão arterial) e envia alertas com geolocalização em caso de emergência, oferecendo autonomia e segurança para pessoas com doenças crônicas.",
        image: "/work/thumb1.png",
        technologies: ["React Native", "JavaScript", "Node.js", "Git"],
        demoLink: "",
        githubLink: "https://github.com/gc-marcos/app-monitoramento-crises",
    },

    {
        number: "02",
        title: "HamburgueriaZ App",
        description: "Aplicativo mobile Android que permite personalizar pedidos de hambúrguer, calcular o valor e enviar resumo por e-mail. Desenvolvido como prática do curso de Desenvolvimento Mobile.",
        image: "/work/hamburgueScreen.png",
        technologies: ["Java", "Android Studio", "XML"],
        demoLink: "https://youtu.be/z_0JxATPQak",
        githubLink: "https://github.com/gc-marcos/android-hamburgueriaZ-app"
    },
    
    {
        number: "03",
        title: "Campo Minado",
        description: "Um jogo estilo Campo Minado desenvolvido em React Native, com foco em experiência mobile fluida e intuitiva. O objetivo é encontrar todas as minas no tabuleiro sem explodir nenhuma.",
        image: "/work/minesScreens.png",
        technologies: ["React Native", "JavaScript", "StyleSheet", "Android Studio"],
        demoLink: "https://youtu.be/2Mgj_UvDvfY",
        githubLink: "https://github.com/gc-marcos/mine-game"
    },
    {
        number: "04",
        title: "Site responsivo",
        description: "Site responsivo, com seções adaptativas, menu mobile, grid flexível e imagens otimizadas para diferentes tamanhos de tela.",
        image: "/work/siteScreen.png",
        technologies: ["HTML", "CSS", "JavaScript", "Media Queries", "Flexbox", "CSS Grid"],
        demoLink: "https://youtu.be/nfjKKr8Zv5Q",
        githubLink: "https://github.com/gc-marcos/responsive-website"
    },
    {
        number: "05",
        title: "App de Salvar Dados",
        description: "Aplicativo híbrido desenvolvido com Ionic e Angular para salvar e exibir dados localmente utilizando o Ionic Storage. Ideal para testes de persistência e prototipagem de formulários simples.",
        image: "/work/savedDataScreen.png",
        technologies: ["Ionic", "Angular", "TypeScript", "HTML", "SCSS", "Ionic Storage"],
        demoLink: "https://youtu.be/acwUz0B6TJo",
        githubLink: "https://github.com/gc-marcos/saves-data-app"
    }
    
]


export const contactInfo = [
    {
        icon: <Phone className="w-6 h-6" />,
        title: "Phone",
        content: "(11) 99684 0013",
        bg: "bg-emerald-400/10"
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: "Email",
        content: "gcmarcoss@gmail.com",
        bg: "bg-emerald-400/10"
    },
    {
        icon: <MapPin className="w-6 h-6" />,
        title: "Address",
        content: "Mauá, SP",
        bg: "bg-emerald-400/10"
    }
]