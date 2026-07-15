export const languages = {
    en: "English",
    es: "Español",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
    en: {
        // meta
        "meta.title": "Harold Ormeño — Freelance Developer & Designer",
        "meta.description":
            "Web design, branding and development. I create digital experiences that are visually refined, technically solid, and designed to grow with your business.",

        // cv
        "cv.url": "Harold_CV_EN.pdf",

        // nav
        "nav.menu": "Menu",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.process": "Process",
        "nav.services": "Services",
        "nav.bookCall": "Book a call",
        "nav.cv": "Download CV",
        "nav.language": "English",

        // menu overlay
        "menu.explore": "Explore",
        "menu.follow": "Follow",
        "menu.touch": "Get in touch",
        "menu.home": "Home",

        // hero
        "hero.tagline.1": "Web design, branding, development.",
        "hero.tagline.2": "Brands that stand out. Experiences that connect.",
        "hero.role.1": "Freelance",
        "hero.role.2": "Developer & Designer",
        "hero.available": "Available for projects",
        "hero.cta": "Let's build something great together.",
        "hero.scroll": "Scroll to explore",

        // statement
        "statement.aria":
            "More than building websites. I create digital experiences that are visually refined, technically solid, and designed to grow with your business",

        // 3d playground
        "playground.line":
            "of creating modern websites and digital products that people enjoy using.",
        "playground.years": "+2 years",

        // projects
        "projects.label": "Selected work",
        "projects.01.meta":
            "Modern Website & Professional Design for a logistics services company",
        "projects.02.meta":
            "7-module Agricultural ERP (Commercial, Production, Logistics, Finance, HR, Quality)",
        "projects.03.meta": "Queue Optimization Software",
        "projects.04.meta": "Social Network for University Students",

        // transition
        "transition.behind": "Behind",
        "transition.the": "the",
        "transition.process": "Process",

        // process
        "process.heading.1": "Where ideas",
        "process.heading.2": "come to life.",
        "process.intro":
            "A clear and collaborative process that turns ideas into digital experiences that connect and perform.",
        "process.approach": "My approach",
        "process.approachNote":
            "Every project is unique, but the process is what ensures consistency, quality and results.",
        "process.cta": "Let's work together",

        "process.01.title": "Discover",
        "process.01.desc":
            "It all starts with understanding your business, your goals, and who you want to reach. With that foundation, we build a clear and effective strategy.",
        "process.02.title": "Design",
        "process.02.desc":
            "With a well-defined strategy, I turn ideas into intuitive, visually engaging digital experiences. Every design decision has a purpose — thoughtful UX paired with a consistent, elegant UI built to scale.",
        "process.03.title": "Develop",
        "process.03.desc":
            "Every interface comes to life through careful, efficient implementation. I use modern tools and best practices to build fast, stable, and maintainable products.",
        "process.04.title": "Deliver",
        "process.04.desc":
            "Before launch, I review every detail to ensure a stable, frictionless experience. Once live, I keep monitoring and improving so the product continues to evolve.",

        // curtain transition into services
        "curtain.label": "Next",
        "curtain.word": "Services",

        // services
        "services.heading.1": "Strategy.",
        "services.heading.2": "Design.",
        "services.heading.3": "Development.",
        "services.01.title": "Graphic Design",
        "services.01.desc":
            "Visual pieces that communicate clearly, strengthen your brand, and make an impact.",
        "services.02.title": "Video Editing",
        "services.02.desc":
            "Audiovisual content with rhythm, narrative, and a professional finish.",
        "services.03.title": "Web Design",
        "services.03.desc":
            "Intuitive, modern digital experiences centered around the user.",
        "services.04.title": "Web Development",
        "services.04.desc":
            "Fast, responsive solutions built with modern technologies.",
        "services.05.title": "3D Experiences",
        "services.05.desc":
            "Three-dimensional elements that add depth, interaction, and personality.",
        "services.testimonial.01":
            "Harold has demonstrated responsibility, commitment, and an excellent willingness to learn. He performed his duties efficiently, contributed technological solutions, and consistently maintained a proactive and professional attitude.",
        "services.testimonial.02": "Harold stands out for his maturity and resilience. Beyond his ability to learn quickly and his technical initiative in implementing tools, his dedication and team spirit added immense value to the comprehensive development of our ERP system.",

        // achievements
        "achievements.label": "Recognition",
        "achievements.heading": "Achievements.",
        "achievements.01.title": "Academic Excellence Award",
        "achievements.01.meta": "High school",
        "achievements.02.title": "First place — Class of 2023",
        "achievements.02.meta": "2023",
        "achievements.03.title": "Top-tenth of class, Systems Engineering",
        "achievements.03.meta": "UNICA · ongoing",
        "achievements.favorite.quote":
            "He who knows his purpose can endure almost any challenge.<br />Let your only competition be the person you were yesterday.",
        "achievements.favorite.label": "My philosophy",

        // footer
        "footer.navigation": "Navigation",
        "footer.studio": "Studio details",
        "footer.socials": "Socials",
        "footer.based": "Based in Ica, Peru.",
        "footer.working": "Working worldwide",
        "footer.about": "About",
        "footer.work": "Work",
        "footer.process": "Process",
        "footer.services": "Services",
        "footer.resources": "Resources",
        "footer.contact": "Contact",
        "footer.localTime": "Local time",
        "footer.booking": "Booking projects for Q3 2026",
        "footer.rights": "All rights reserved.",
        "footer.blurb":
            "Just feel free to contact if you wanna collaborate with me or simply have a conversation.",
    },
    es: {
        // meta
        "meta.title": "Harold Ormeño — Desarrollador y Diseñador Freelance",
        "meta.description":
            "Diseño web, branding y desarrollo. Creo experiencias digitales visualmente refinadas, técnicamente sólidas y diseñadas para hacer crecer tu negocio.",

        // CV
        "cv.url": "Harold_CV_ES.pdf",

        // nav
        "nav.menu": "Menú",
        "nav.about": "Sobre mí",
        "nav.projects": "Proyectos",
        "nav.process": "Proceso",
        "nav.services": "Servicios",
        "nav.bookCall": "Contáctame",
        "nav.cv": "Descargar CV",
        "nav.language": "Español",

        // menu overlay
        "menu.explore": "Explora",
        "menu.follow": "Sígueme",
        "menu.touch": "Hablemos",
        "menu.home": "Inicio",

        // hero
        "hero.tagline.1": "Diseño web, branding, desarrollo.",
        "hero.tagline.2": "Marcas que destacan. Experiencias que conectan.",
        "hero.role.1": "Freelance",
        "hero.role.2": "Desarrollador y Diseñador",
        "hero.available": "Disponible para proyectos",
        "hero.cta": "Construyamos algo grande juntos.",
        "hero.scroll": "Scrollea y explora",

        // statement
        "statement.aria":
            "Más que construir sitios web. Creo experiencias digitales visualmente refinadas, técnicamente sólidas y diseñadas para crecer con tu negocio",

        // 3d playground
        "playground.line":
            "creando sitios web modernos y productos digitales que la gente disfruta usar.",
        "playground.years": "+2 años",

        // projects
        "projects.label": "Proyectos destacados",
        "projects.01.meta":
            "Sitio Web Moderno & Diseño profesional para empresa de servicios logísticos",
        "projects.02.meta":
            "ERP agrícola de 7 módulos (Comercial, Producción, Logística, Finanzas, RRHH, Calidad)",
        "projects.03.meta": "Software para la optimización de colas",
        "projects.04.meta": "Red social para estudiantes universitarios",

        // transition
        "transition.behind": "Detrás",
        "transition.the": "del",
        "transition.process": "Proceso",

        // process
        "process.heading.1": "Donde las ideas",
        "process.heading.2": "cobran vida.",
        "process.intro":
            "Un proceso claro y colaborativo que convierte ideas en experiencias digitales que conectan y funcionan.",
        "process.approach": "Mi enfoque",
        "process.approachNote":
            "Cada proyecto es único, pero el proceso es lo que garantiza consistencia, calidad y resultados.",
        "process.cta": "Trabajemos juntos",

        "process.01.title": "Descubrir",
        "process.01.desc":
            "Todo comienza por entender tu negocio, tus objetivos y a quién quieres llegar. Con esa base, construimos una estrategia clara y efectiva.",
        "process.02.title": "Diseñar",
        "process.02.desc":
            "Con una estrategia bien definida, transformo las ideas en experiencias digitales intuitivas y visualmente atractivas. Cada decisión de diseño tiene un propósito, combinando una UX pensada en el usuario y con una UI consistente, elegante y preparada para crecer.",
        "process.03.title": "Desarrollar",
        "process.03.desc":
            "Cada interfaz cobra vida con una implementación cuidada y eficiente. Utilizo herramientas modernas y buenas prácticas para desarrollar productos rápidos, estables y fáciles de mantener.",
        "process.04.title": "Entregar",
        "process.04.desc":
            "Antes del lanzamiento, reviso cada detalle para asegurar una experiencia estable y sin fricciones. Una vez en marcha, continúo monitoreando y realizando mejoras para que el producto siga evolucionando.",

        // curtain transition into services
        "curtain.label": "Siguiente",
        "curtain.word": "Servicios",

        // services
        "services.heading.1": "Estrategia.",
        "services.heading.2": "Diseño.",
        "services.heading.3": "Desarrollo.",
        "services.01.title": "Diseño Gráfico",
        "services.01.desc":
            "Piezas visuales que comunican con claridad, fortalecen tu marca y generan impacto.",
        "services.02.title": "Edición de Video",
        "services.02.desc":
            "Contenido audiovisual con ritmo, narrativa y un acabado profesional.",
        "services.03.title": "Diseño Web",
        "services.03.desc":
            "Experiencias digitales intuitivas, modernas y centradas en el usuario.",
        "services.04.title": "Desarrollo Web",
        "services.04.desc":
            "Soluciones rápidas, responsivas y desarrolladas con tecnologías actuales.",
        "services.05.title": "Experiencias 3D",
        "services.05.desc":
            "Elementos tridimensionales que aportan profundidad, interacción y personalidad.",
        "services.testimonial.01":
            "Harold ha demostrado responsabilidad, compromiso y una excelente disposición para aprender. Cumplió sus funciones de manera eficiente, aportó soluciones tecnológicas y mantuvo siempre una actitud proactiva y profesional.",
        "services.testimonial.02": "Harold destaca por su madurez y capacidad de superación. Más allá de su rápido aprendizaje e iniciativa técnica al implementar herramientas, su dedicación y compañerismo aportaron un valor inmenso en la construcción integral de nuestro sistema ERP.",

        // achievements
        "achievements.label": "Reconocimientos",
        "achievements.heading": "Logros.",
        "achievements.01.title": "Premio a la excelencia académica",
        "achievements.01.meta": "Secundaria",
        "achievements.02.title": "Primer puesto — Promoción 2023",
        "achievements.02.meta": "2023",
        "achievements.03.title": "Décimo superior, Ing. de Sistemas",
        "achievements.03.meta": "UNICA · en curso",
        "achievements.favorite.quote":
            "El que conoce su propósito puede soportar casi cualquier desafío. Deja que tu única competencia sea la persona que fuiste ayer.",
        "achievements.favorite.label": "Mi filosofía",

        // footer
        "footer.navigation": "Navegación",
        "footer.studio": "Detalles del estudio",
        "footer.socials": "Redes",
        "footer.based": "Desde Ica, Perú.",
        "footer.working": "Trabajando para el mundo",
        "footer.about": "Sobre mí",
        "footer.work": "Proyectos",
        "footer.process": "Proceso",
        "footer.services": "Servicios",
        "footer.resources": "Recursos",
        "footer.contact": "Contacto",
        "footer.localTime": "Hora local",
        "footer.booking": "Agendando proyectos para Q3 2026",
        "footer.rights": "Todos los derechos reservados.",
        "footer.blurb":
            "No dudes en ponerte en contacto conmigo si quieres colaborar conmigo o simplemente charlar un rato.",
    },
} as const;

export function useTranslations(lang: Lang) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
        return ui[lang][key] ?? ui[defaultLang][key];
    };
}

export function getLangFromUrl(url: URL): Lang {
    const [, maybeLang] = url.pathname.split("/");
    if (maybeLang && maybeLang in languages) return maybeLang as Lang;
    return defaultLang;
}

/** Path helper: localizePath('/', 'es') -> '/es/' */
export function localizePath(path: string, lang: Lang): string {
    const clean = path.startsWith("/") ? path : `/${path}`;
    return lang === defaultLang
        ? clean
        : `/${lang}${clean === "/" ? "/" : clean}`;
}
