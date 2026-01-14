// Mock data for Biofilia CoCreativa website

export const services = [
  {
    id: 1,
    name: 'Marketing',
    description: 'Estrategias creativas que conectan tu marca con el mundo de manera sostenible.',
    icon: 'TrendingUp'
  },
  {
    id: 2,
    name: 'Branding',
    description: 'Construimos identidades de marca únicas que reflejan tus valores y visión.',
    icon: 'Palette'
  },
  {
    id: 3,
    name: 'Designing UX/UI',
    description: 'Experiencias digitales intuitivas que cautivan a tus usuarios.',
    icon: 'Layout'
  },
  {
    id: 4,
    name: 'Printing',
    description: 'Impresiones de alta calidad con materiales eco-amigables.',
    icon: 'Printer'
  },
  {
    id: 5,
    name: 'Packing',
    description: 'Packaging sostenible que cuenta la historia de tu producto.',
    icon: 'Package'
  },
  {
    id: 6,
    name: 'Book making',
    description: 'Libros y publicaciones diseñados con pasión y creatividad.',
    icon: 'BookOpen'
  }
];

export const portfolioItems = [
  {
    id: 1,
    title: 'EcoVerde Branding',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    description: 'Identidad visual completa para empresa de productos orgánicos'
  },
  {
    id: 2,
    title: 'NaturaPack',
    category: 'Packing',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
    description: 'Packaging sostenible para línea de cosméticos naturales'
  },
  {
    id: 3,
    title: 'BioTech App',
    category: 'Designing UX/UI',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80',
    description: 'Aplicación móvil para monitoreo de huella de carbono'
  },
  {
    id: 4,
    title: 'Green Living Magazine',
    category: 'Book making',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80',
    description: 'Revista trimestral sobre vida sostenible'
  },
  {
    id: 5,
    title: 'Campaña Terra Verde',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    description: 'Campaña digital para concienciación ambiental'
  },
  {
    id: 6,
    title: 'Catálogo Semillas',
    category: 'Printing',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&q=80',
    description: 'Catálogo impreso en papel reciclado'
  }
];

export const companyValues = [
  {
    id: 1,
    title: 'Creatividad',
    description: 'Transformamos ideas en experiencias visuales únicas que conectan emocionalmente.',
    icon: 'Sparkles'
  },
  {
    id: 2,
    title: 'Sostenibilidad',
    description: 'Cada proyecto es una oportunidad para cocrear un futuro más verde.',
    icon: 'Leaf'
  },
  {
    id: 3,
    title: 'Innovación',
    description: 'Exploramos nuevas formas de comunicar respetando el medio ambiente.',
    icon: 'Lightbulb'
  },
  {
    id: 4,
    title: 'Colaboración',
    description: 'Trabajamos junto a nuestros clientes para lograr resultados extraordinarios.',
    icon: 'Users'
  }
];

export const companyHistory = {
  title: 'Nuestra Historia',
  content: `Biofilia CoCreativa nació de la pasión por fusionar creatividad y naturaleza. 
  
  Fundada en 2018, nuestra agencia surgió de la visión de crear comunicación visual que no solo impacte, sino que también respete y celebre el mundo natural que nos rodea.
  
  El término "Biofilia" —el amor innato por la vida y los sistemas vivos— es el corazón de todo lo que hacemos. Creemos que la mejor publicidad es aquella que conecta con nuestra esencia humana y nuestro vínculo con la naturaleza.
  
  Hoy, después de más de 6 años de trayectoria, hemos ayudado a más de 150 marcas a comunicar sus valores de manera auténtica y sostenible, demostrando que la efectividad y la responsabilidad ambiental pueden ir de la mano.`
};

export const socialLinks = [
  { id: 'fb', label: 'FB', icon: 'Facebook', url: '#' },
  { id: 'ig', label: 'IG', icon: 'Instagram', url: '#' },
  { id: 'wa', label: 'WA', icon: 'MessageCircle', url: '#' },
  { id: 'ce', label: 'CE', icon: 'Mail', url: '#' }
];

export const footerLinks = {
  navigation: [
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Portafolio', path: '/portafolio' },
    { label: 'Servicios', path: '/servicios' }
  ],
  legal: [
    { label: 'Biotaping', path: '#' },
    { label: 'BioPrint', path: '#' },
    { label: 'Política de privacidad', path: '#' },
    { label: 'Términos de servicio', path: '#' },
    { label: 'Configuración cookies', path: '#' }
  ]
};

export const contactFormFields = {
  services: [
    { id: 'branding', label: 'Branding' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'packing', label: 'Packing' },
    { id: 'printing', label: 'Printing' },
    { id: 'uxui', label: 'Designing UX/UI' },
    { id: 'bookmaking', label: 'Bookmaking' }
  ]
};
