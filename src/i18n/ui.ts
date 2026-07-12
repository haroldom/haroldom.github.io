export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    // meta
    'meta.title': 'Harold Ormeño — Freelance Developer & Designer',
    'meta.description':
      'Web design, branding and development. I create digital experiences that are visually refined, technically solid, and designed to grow with your business.',

    // nav
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.process': 'Process',
    'nav.services': 'Services',
    'nav.bookCall': 'Book a call',
    'nav.language': 'English',

    // menu overlay
    'menu.explore': 'Explore',
    'menu.follow': 'Follow',
    'menu.touch': 'Get in touch',
    'menu.home': 'Home',

    // hero
    'hero.tagline.1': 'Web design, branding, development.',
    'hero.tagline.2': 'You bring the idea — I become your partner',
    'hero.role.1': 'Freelance',
    'hero.role.2': 'Developer & Designer',
    'hero.available': 'Available for projects',
    'hero.cta': "Let's build something great together.",
    'hero.scroll': 'Scroll to explore',

    // statement
    'statement.aria': 'More than building websites. I create digital experiences that are visually refined, technically solid, and designed to grow with your business',

    // 3d playground
    'playground.line': 'of creating modern websites and digital products that people enjoy using.',
    'playground.years': '+2 years',

    // projects
    'projects.label': 'Selected work',

    // transition
    'transition.behind': 'Behind',
    'transition.the': 'the',
    'transition.process': 'Process',

    // process
    'process.heading.1': 'From concept',
    'process.heading.2': 'to launch.',
    'process.intro':
      'A clear and collaborative process that turns ideas into digital experiences that connect and perform.',
    'process.approach': 'My approach',
    'process.approachNote':
      'Every project is unique, but the process is what ensures consistency, quality and results.',
    'process.cta': "Let's work together",

    'process.01.title': 'Discover',
    'process.01.desc':
      'I dive deep into your goals, audience and vision to uncover opportunities, define the right direction and build a strategy that sets every decision on solid ground.',
    'process.02.title': 'Design',
    'process.02.desc':
      'I translate strategy into clear structure and elegant visuals: thoughtful UX, intentional UI and a design system that scales.',
    'process.03.title': 'Develop',
    'process.03.desc':
      'I build fast, responsive and reliable experiences with clean code, modern stacks and best practices.',
    'process.04.title': 'Deliver',
    'process.04.desc':
      'I test, refine and launch with confidence. Continuous monitoring and iteration to keep improving.',

    // curtain transition into services
    'curtain.label': 'Next',
    'curtain.word': 'Services',

    // services
    'services.heading.1': 'Strategy.',
    'services.heading.2': 'Design.',
    'services.heading.3': 'Development.',
    'services.01.title': 'Brand Strategy',
    'services.01.desc': 'Define your value, position and message.',
    'services.02.title': 'Visual Identity',
    'services.02.desc': 'Define your value, position and message.',
    'services.03.title': 'Website Design',
    'services.03.desc': 'Strategic, modern and conversion-focused.',
    'services.04.title': 'Website Development',
    'services.04.desc': 'Fast, responsive and built to scale.',
    'services.05.title': '3D Development',
    'services.05.desc': 'Define your value, position and message.',
    'services.testimonial.01':
      'Harold has demonstrated responsibility, commitment, and an excellent willingness to learn. He performed his duties efficiently, contributed technological solutions, and consistently maintained a proactive and professional attitude.',

    // achievements
    'achievements.label': 'Recognition',
    'achievements.heading': 'Achievements.',
    'achievements.01.title': 'Academic Excellence Award',
    'achievements.01.meta': 'High school',
    'achievements.02.title': 'First place — Class of 2023',
    'achievements.02.meta': '2023',
    'achievements.03.title': 'Top-tenth of class, Systems Engineering',
    'achievements.03.meta': 'UNICA · ongoing',
    'achievements.favorite.quote': 'He who knows his purpose can endure almost any challenge.<br />Let your only competition be the person you were yesterday.',
    'achievements.favorite.label': 'My philosophy',
    

    // footer
    'footer.navigation': 'Navigation',
    'footer.studio': 'Studio details',
    'footer.socials': 'Socials',
    'footer.based': 'Based in Ica, Peru.',
    'footer.working': 'Working worldwide',
    'footer.about': 'About',
    'footer.work': 'Work',
    'footer.process': 'Process',
    'footer.services': 'Services',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact',
    'footer.localTime': 'Local time',
    'footer.booking': 'Booking projects for Q3 2026',
    'footer.rights': 'All rights reserved.',
    'footer.blurb':
      'Web design, branding, development. You bring the idea — I become your partner',
  },
  es: {
    // meta
    'meta.title': 'Harold Ormeño — Desarrollador y Diseñador Freelance',
    'meta.description':
      'Diseño web, branding y desarrollo. Creo experiencias digitales visualmente refinadas, técnicamente sólidas y diseñadas para hacer crecer tu negocio.',

    // nav
    'nav.menu': 'Menú',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.process': 'Proceso',
    'nav.services': 'Servicios',
    'nav.bookCall': 'Agenda una llamada',
    'nav.language': 'Español',

    // menu overlay
    'menu.explore': 'Explora',
    'menu.follow': 'Sígueme',
    'menu.touch': 'Hablemos',
    'menu.home': 'Inicio',

    // hero
    'hero.tagline.1': 'Diseño web, branding, desarrollo.',
    'hero.tagline.2': 'Tú traes la idea — yo me convierto en tu socio',
    'hero.role.1': 'Freelance',
    'hero.role.2': 'Desarrollador y Diseñador',
    'hero.available': 'Disponible para proyectos',
    'hero.cta': 'Construyamos algo grande juntos.',
    'hero.scroll': 'Scrollea y explora',

    // statement
    'statement.aria': 'Más que construir sitios web. Creo experiencias digitales visualmente refinadas, técnicamente sólidas y diseñadas para crecer con tu negocio',

    // 3d playground
    'playground.line': 'creando sitios web modernos y productos digitales que la gente disfruta usar.',
    'playground.years': '+2 años',

    // projects
    'projects.label': 'Trabajo seleccionado',

    // transition
    'transition.behind': 'Detrás',
    'transition.the': 'del',
    'transition.process': 'Proceso',

    // process
    'process.heading.1': 'Del concepto',
    'process.heading.2': 'al lanzamiento.',
    'process.intro':
      'Un proceso claro y colaborativo que convierte ideas en experiencias digitales que conectan y funcionan.',
    'process.approach': 'Mi enfoque',
    'process.approachNote':
      'Cada proyecto es único, pero el proceso es lo que garantiza consistencia, calidad y resultados.',
    'process.cta': 'Trabajemos juntos',

    'process.01.title': 'Descubrir',
    'process.01.desc':
      'Me sumerjo en tus objetivos, audiencia y visión para descubrir oportunidades, definir la dirección correcta y construir una estrategia con bases sólidas.',
    'process.02.title': 'Diseñar',
    'process.02.desc':
      'Traduzco la estrategia en estructura clara y visuales elegantes: UX pensada, UI intencional y un sistema de diseño que escala.',
    'process.03.title': 'Desarrollar',
    'process.03.desc':
      'Construyo experiencias rápidas, responsivas y confiables con código limpio, stacks modernos y buenas prácticas.',
    'process.04.title': 'Entregar',
    'process.04.desc':
      'Pruebo, refino y lanzo con confianza. Monitoreo continuo e iteración para seguir mejorando.',

    // curtain transition into services
    'curtain.label': 'Siguiente',
    'curtain.word': 'Servicios',

    // services
    'services.heading.1': 'Estrategia.',
    'services.heading.2': 'Diseño.',
    'services.heading.3': 'Desarrollo.',
    'services.01.title': 'Estrategia de Marca',
    'services.01.desc': 'Define tu valor, posicionamiento y mensaje.',
    'services.02.title': 'Identidad Visual',
    'services.02.desc': 'Define tu valor, posicionamiento y mensaje.',
    'services.03.title': 'Diseño Web',
    'services.03.desc': 'Estratégico, moderno y enfocado en conversión.',
    'services.04.title': 'Desarrollo Web',
    'services.04.desc': 'Rápido, responsivo y hecho para escalar.',
    'services.05.title': 'Desarrollo 3D',
    'services.05.desc': 'Define tu valor, posicionamiento y mensaje.',
    'services.testimonial.01':
      'Harold ha demostrado responsabilidad, compromiso y una excelente disposición para aprender. Cumplió sus funciones de manera eficiente, aportó soluciones tecnológicas y mantuvo siempre una actitud proactiva y profesional.',

    // achievements
    'achievements.label': 'Reconocimientos',
    'achievements.heading': 'Logros.',
    'achievements.01.title': 'Premio a la excelencia académica',
    'achievements.01.meta': 'Secundaria',
    'achievements.02.title': 'Primer puesto — Promoción 2023',
    'achievements.02.meta': '2023',
    'achievements.03.title': 'Décimo superior, Ing. de Sistemas',
    'achievements.03.meta': 'UNICA · en curso',
    'achievements.favorite.quote': 'El que conoce su propósito puede soportar casi cualquier desafío.<br />Deja que tu única competencia sea la persona que fuiste ayer.',
    'achievements.favorite.label': 'Mi filosofía',

    // footer
    'footer.navigation': 'Navegación',
    'footer.studio': 'Detalles del estudio',
    'footer.socials': 'Redes',
    'footer.based': 'Desde Ica, Perú.',
    'footer.working': 'Trabajando para el mundo',
    'footer.about': 'Sobre mí',
    'footer.work': 'Trabajo',
    'footer.process': 'Proceso',
    'footer.services': 'Servicios',
    'footer.resources': 'Recursos',
    'footer.contact': 'Contacto',
    'footer.localTime': 'Hora local',
    'footer.booking': 'Agendando proyectos para Q3 2026',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.blurb':
      'Diseño web, branding, desarrollo. Tú traes la idea — yo me convierto en tu socio',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in languages) return maybeLang as Lang;
  return defaultLang;
}

/** Path helper: localizePath('/', 'es') -> '/es/' */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}
