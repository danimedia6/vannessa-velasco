// Fuente factual inicial: source/vanessavelasco_v7 (3) (1).html.
// El HTML se usa como contenido, no como referencia visual.
export const pageContent = {
  source: {
    file: 'source/vanessavelasco_v7 (3) (1).html',
    note: 'Fuente HTML original suministrada para extracción factual inicial.',
  },

  siteTitle: 'Vanessa Velasco',

  navigation: {
    homeLabel: 'Home',

    mainAriaLabel:
      'Main navigation',

    mobileAriaLabel:
      'Mobile navigation',

    languageAriaLabel:
      'Language selector',

    menuOpenLabel:
      'Open navigation',

    menuCloseLabel:
      'Close navigation',

    items: [
      {
        label: 'PROFILE',
        href: '#perfil',
      },
      {
        label: 'PATH',
        href: '#trayectoria',
      },
      {
        label: 'PROJECTS',
        href: '#proyectos',
      },
      {
        label: 'WORLD BANK',
        href: '#world-bank',
      },
      {
        label: 'PUBLICATIONS',
        href: '#publicaciones',
      },
      {
        label: 'SPEAKING',
        href: '#agenda',
      },
      {
        label: 'PRESS',
        href: '#prensa',
      },
      {
        label: 'CONTACT',
        href: '#contacto',
      },
    ],
  },

  // Adaptador temporal para la interfaz base actual; proviene del hero del HTML.
  intro: {
    eyebrow: 'Habitat Chief Secretary · Bogotá',
    title: 'Vanessa Velasco',
    description:
      '"Housing as a driver of economic and social transformation in the Global South"',
  },

  profile: {
    fullName: 'Vanessa Velasco Bernal',
    displayName: 'Vanessa Velasco',
    location: 'Bogotá, Colombia',
    currentRole: 'Habitat Chief Secretary · Bogotá',

    title:
      'Secretaria Distrital del Hábitat de Bogotá · Board Member · IDU · RenoBo · EAAB',

    footerTitle: 'Habitat Chief Secretary of Bogotá',

    languages: ['EN', 'ES'],

    areasLabel: 'Áreas de trabajo',
    educationLabel: 'Education',

    pressKit: {
      label: 'Download press kit',
      href: '/press-kit/Vanessa-Velasco-Press-Kit.zip',
      download: 'Vanessa-Velasco-Press-Kit.zip',
    },

    areas: [
    {
      label: 'Urban housing policy',
      href: '#proyectos',
    },
    {
      label: 'Land value capture',
      href: '#world-bank',
    },
    {
      label: 'Transit-oriented development',
      href: '#world-bank',
    },
    {
      label: 'Urban regeneration',
      href: '#proyectos',
    },
    {
      label: 'SDG 11',
      href: '#publicaciones',
    },
    {
      label: 'Global South',
      href: '#publicaciones',
    },
    {
      label: 'South–South cooperation',
      href: '#agenda',
    },
  ],
  },

  hero: {
    eyebrow: 'Habitat Chief Secretary · Bogotá',

    name: {
      first: 'Vanessa',
      last: 'Velasco',
      full: 'Vanessa Velasco Bernal',
    },

    roles: [
      'Secretaria Distrital del Hábitat de Bogotá',
      'Board Member · IDU · RenoBo · EAAB',
    ],

    tagline:
      'Housing as a driver of economic and social transformation in the Global South.',

    image: {
      src: '/images/vanessa-velasco-hero.jpg',
      alt: 'Vanessa Velasco Bernal — Habitat Chief Secretary of Bogotá',
      locationLabel: 'Bogotá, Colombia',
      isPlaceholder: false,
    },

    actions: [
      {
        label: 'Contact',
        href: '#contacto',
      },
      {
        label: 'Press kit',
        href: '/press-kit/Vanessa-Velasco-Press-Kit.zip',
        download: 'Vanessa-Velasco-Press-Kit.zip',
      },
    ],
  },

  bio: {
    label: 'Biography',
    headline: 'Urban leader',
    paragraphs: [
      "Vanessa Velasco Bernal is the Habitat Chief Secretary of Bogotá, where she leads the city's housing and urban development policy. An architect and urban planner with over 20 years of experience, she has worked across Latin America, Southeast Asia, and the Caribbean designing policies that connect housing, land management, mobility, and economic inclusion.",
      "Before leading Bogotá's Secretariat, she spent nearly seven years as an Urban Specialist at the World Bank, co-leading operations in Colombia, Ecuador, Peru, Mexico, Jamaica, Korea, and Indonesia — including a USD 500M territorial development program for Colombia and a USD 235M resilient housing project in Ecuador. In 2022 she was invited to deliver the Doryan Winkelman Lecture at Columbia University's MSRED program.",
      'Her intellectual framework positions housing not as a sectoral intervention but as a platform for economic inclusion, social mobility, and climate-sustainable urban growth — a thesis she has advanced at the World Urban Forum, through UN-Habitat, and in publications with the World Bank.',
      "She holds a Master's in Urban Administration and Planning from the University of Seoul, a Master's in Urban Planning from UPC Barcelona, and completed programs at Wharton and Universität Wien. She chairs the boards of RenoBo and the Empresa de Acueducto y Alcantarillado de Bogotá, and serves as Board Member of the Instituto de Desarrollo Urbano.",
    ],
  },

  impact: {

    ariaLabel: 'Impacto',
    metrics: [
      {
        value: '37K+',
        count: 37,
        prefix: '',
        suffix: 'K+',
        label: 'Subsidios entregados · Plan Integrado de Vivienda',
      },
      {
        value: 'USD 344M',
        count: 344,
        prefix: 'USD ',
        suffix: 'M',
        label: 'Investment led · SDHT Bogotá',
      },
      {
        value: '20+ yrs',
        count: 20,
        prefix: '',
        suffix: '+ yrs',
        label: 'Urban development expertise',
      },
      {
        value: '7',
        count: 7,
        prefix: '',
        suffix: '',
        label: 'Countries · World Bank operations',
      },
      {
        value: 'WUF 13',
        count: null,
        prefix: '',
        suffix: '',
        label: 'Baku 2026 · Panel lead · UN-Habitat',
      },
    ],
  },

  media: {
    videoInterlude: {
      src: '/videos/ciudad-mosaico.mp4',
      type: 'video/mp4',
      label: 'Video Ciudad Mosaico',
    },
  },

  experience: {

    timelineTitle: {
      first: 'From Bogotá',
      second: 'to the world',
    },
    
    timeline: [
      {
        period: '2001–06',
        role: 'Teaching & Urban Planning',
        detail:
          'During the early stages of her career, Vanessa combined urban planning practice with teaching at Pontificia Universidad Javeriana and Universidad Nacional de Colombia. Her work focused on urban design, regional planning and the relationship between Bogotá and its expanding metropolitan edge, including research that informed a planning strategy for the western boundary of the Bogotá–Region.',
      },
      {
        period: '2007–13',
        role: 'Public-Sector Urban Leadership',
        detail:
          'In Colombia’s public sector, Vanessa worked on heritage-led regeneration, land management and large-scale urban renewal. At the Ministry of Culture, she coordinated IDB-supported projects for the recovery of ten historic centers. Later, as Technical Director of Bogotá’s Urban Renewal Company (ERU), she helped advance projects such as Estación Central, combining affordable housing, mixed uses, public space and heritage preservation.',
      },
      {
        period: '2013–15',
        role: 'South Korea',
        detail:
          'In South Korea, Vanessa completed a Master’s in Urban Administration and Planning at the University of Seoul and worked as an urban development consultant with Korea Land & Housing Corporation (LH). This period broadened her expertise in land markets, urban policy and land value capture, connecting Latin American planning challenges with international approaches to housing and urban development.',
      },
      {
        period: '2015–23',
        role: 'World Bank',
        detail:
          'At the World Bank, Vanessa provided operational and analytical support to urban projects in Colombia, Peru, Ecuador, Mexico and Jamaica. Her portfolio covered urban and housing policy, land value capture, urban regeneration, transit-oriented development and local economic development. She also contributed to resilient and inclusive housing operations and led or co-led technical work on initiatives such as Bogotá’s Vital Neighborhoods.',
      },
      {
        period: '2024–Present',
        role: 'Secretary of Habitat of Bogotá',
        detail:
          'Since January 2024, as Bogotá’s Secretary of Habitat, Vanessa has led the city’s housing and urban revitalization agenda. Her work brings together affordable housing, home improvement, land management, neighborhood revitalization, public services and climate resilience through programs such as Mi Casa en Bogotá and Revitaliza tu Barrio, expanding access to housing and improving the environments where people live.',
      },
    ],

    worldBank: {
      label: 'Prior Work · World Bank Group',
      headline: '2015 - 2024\nMulti-country impact',
      intro:
        "From 2015 to 2024, Vanessa Velasco contributed to analytical and operational work across Latin America, the Caribbean, and Southeast Asia, specializing in housing, land value capture, urban regeneration, territorial development, and transit-oriented development.",
      projects: [
        {
          geography: 'Colombia',
          name: 'Territorial Development Policy',
          description:
            "Co-led support for Colombia's national territorial development policy, including bond structuring and institutional design.",
          amount: 'USD 500M',
          file: {
            label: 'View document',
            href: '/documents/1.pdf'
          }
        },
        {
          geography: 'Colombia · Barranquilla + Medellín',
          name: 'Tax Increment Finance Districts',
          description:
            'Led TIF implementation for Malecón del Río Barranquilla, Corredor de la 80, and Innovation District Medellín. Land value capture instruments and bond-issuance frameworks.',
          file: {
            label: 'View document',
            href: '/documents/2.pdf'
          }
        },
        {
          geography: 'Colombia · Bogotá + Medellín',
          name: 'Transit-Oriented Development',
          description:
            'Co-led TOD strategy for Metro Bogotá Línea 1, Regiotram de Occidente, Corredor Carrera 80 Medellín, and Estación Calle 26 urban regeneration.',
          file: {
            label: 'View document',
            href: '/documents/1.pdf'
          }
        },
        {
          geography: 'Ecuador',
          name: 'Inclusive & Resilient Housing',
          description:
            'Co-led financing and technical support including home improvement, urban upgrading, infrastructure for social cohesion, and rental housing for vulnerable populations.',
          amount: 'USD 235M',
          file: {
            label: 'View document',
            href: 'https://blogs.worldbank.org/es/ppps/como-podemos-ayudar-financiar-el-desarrollo-urbano-en-las-ciudades-latinoamericanas?utm_source=chatgpt.com'
          }
        },
        {
          geography: 'Peru',
          name: 'Land Value Capture & Cadastre',
          description:
            'Led LVC instruments development. Team member for cadastre system and territorial development policies. Analytical studies for Metro de Lima Line 2 TOD areas.',
          file: {
            label: 'View document',
            href: 'https://blogs.worldbank.org/es/ppps/como-podemos-ayudar-financiar-el-desarrollo-urbano-en-las-ciudades-latinoamericanas?utm_source=chatgpt.com'
          }
        },
        {
          geography: 'Mexico · Jamaica · Indonesia',
          name: 'Housing & Risk Across Regions',
          description:
            'Led affordable housing technical assistance in Mexico; defined housing land bank pilot in Mérida. Co-led disaster risk project in Jamaica. LVC analytical studies for Indonesia.',
          file: {
            label: 'View document',
            href: 'https://documents1.worldbank.org/curated/en/911381540835286885/pdf/131472-WP-SPANISH-PUBLIC-MigracindesdeVenezuelaaColombia.pdf?utm_source=chatgpt.com'
          }
        },
      ],
      // Ambigüedad de fuente: el HTML dice "nearly seven years" y periodo 2017–2024, pero esta métrica dice "12 years".
      summaryMetrics: [
        {
          value: '7',
          label: 'Countries of operation',
        },
        {
          value: '12 years',
          label: 'Tenure at World Bank Group',
        },
        {
          value: 'USD 1B+',
          label: 'Portfolio co-led',
        },
      ],
      featuredLecture: {
        text:
          '"The Doryan Winkelman \'86 MSRED Real Estate Development Lecture — presenting the experience of Colombia at real estate and urban development before faculty, students, and global practitioners."',
        institution: 'Columbia University',
        location: 'New York',
        date: 'June 2022',
      },
    },
  },

  education: [
    {
      credential: 'BArch',
      institution: 'Pontificia Universidad Javeriana',
    },
    {
      credential: 'MSc Urban Planning',
      year: '2002',
      institution: 'Universitat Politècnica de Catalunya, Barcelona',
    },
    {
      credential: 'Specialist Land Markets',
      year: '2008',
      institution: 'Universidad Nacional de Colombia',
    },
    {
      credential: 'MA Urban Administration',
      year: '2015',
      institution: 'University of Seoul',
    },
    {
      credential: 'International Housing Finance',
      year: '2018',
      institution: 'The Wharton School',
    },
    {
      credential: 'Housing School Program',
      year: '2024',
      institution: 'Universität Wien',
    },
  ],

  boards: {
    label: 'Active Boards · since 2024',
    items: [
      {
        organization: 'IDU',
        role: 'Board Member',
        fullName: 'Instituto de Desarrollo Urbano',
      },
      {
        organization: 'RenoBo',
        role: 'Chairperson',
        fullName: 'Urban Redevelopment Agency of Bogotá',
      },
      {
        organization: 'EAAB',
        role: 'Chairperson',
        fullName: 'Empresa de Acueducto y Alcantarillado de Bogotá',
      },
    ],
  },

  policyWork: {
    label: 'Policy Work',
    headline: 'Housing as a platform for urban transformation',
    framing:
      'Housing policy cannot be addressed in isolation. It must be articulated with land management, mobility systems, access to public services, environmental sustainability, and social protection — positioning housing as a catalyst for opportunity rather than a standalone intervention.',
    programs: [
      {
        category: 'Flagship housing policy',
        name: 'My House in Bogotá',
        description:
          "An integrated district housing policy addressing 61% of the city's housing deficit through 8 differentiated programs targeting both demand and supply across the housing value chain. Investment tripled compared to previous administrations.",
        images: [
          {
            src: '/images/projects/micasa1.jpg',
            alt: 'Mi Casa en Bogotá',
            position: '20% center',
          },
          {
            src: '/images/projects/micasa2.jpeg',
            alt: 'Mi Casa en Bogotá',
          },
          {
            src: '/images/projects/micasa3.jpeg',
            alt: 'Mi Casa en Bogotá',
            position: '70% center',
          },
          {
            src: '/images/projects/micasa4.jpeg',
            alt: 'Mi Casa en Bogotá',
            position: '90% center',
          },
        ],
        link: {
          label: 'Explore project',
          href: 'https://habitatbogota.gov.co/view/mi-casa-bogota-en',
        },
        stats: [
          {
            value: '75,000',
            label: 'Subsidies target',
          },
          {
            value: 'USD 250M',
            label: 'Investment by 2027',
          },
          {
            value: '8',
            label: 'Programs',
          },
        ],
      },
      {
        category: 'Urban revitalization strategy',
        name: 'Revitalise Your Neighborhood',
        description:
          'Neighborhood revitalization across 75 neighborhoods in 20 zones, following principles of sustainable construction, social cohesion, and strategic proximity to Metro, BRT, and Metrocable corridors. Coordinated within 400m buffer zones around mobility networks.',
        images: [
          {
            src: '/images/projects/revitaliza1.jpeg',
            alt: 'Revitaliza tu Barrio',
            position: '20% center',
          },
          {
            src: '/images/projects/revitaliza2.jpeg',
            alt: 'Revitaliza tu Barrio',
          },
          {
            src: '/images/projects/revitaliza3.jpeg',
            alt: 'Revitaliza tu Barrio',
            position: '70% center',
          },
          {
            src: '/images/projects/revitaliza4.jpeg',
            alt: 'Revitaliza tu Barrio',
            position: '90% center',
          },
        ],
        link: {
          label: 'Explore project',
          href: 'https://habitatbogota.gov.co/view/revitalizacion-en',
        },
        stats: [
          {
            value: '75',
            label: 'Neighborhoods',
          },
          {
            value: 'USD 94M',
            label: 'Investment by 2027',
          },
          {
            value: '18',
            label: 'Revitalization areas',
          },
        ],
      },
    ],
    results: [
      {
        value: '37,000+',
        label:
          'Families with housing solutions in 24 months — exceeding 4 full years of any prior administration',
      },
      {
        value: '60%',
        label:
          'Of subsidies benefiting lowest-income households earning up to 1.5 minimum wages',
      },
      {
        value: '52%',
        label:
          'Of housing loans disbursed to women · female homeownership access up 19% in 2025',
      },
      {
        value: '89,769',
        label:
          'Direct jobs generated · +33,248 indirect · construction sector grew 30% annually',
      },
      {
        value: '265K m²',
        label:
          'Public space and social facilities improved · approximately 1 million people benefited',
      },
      {
        value: '3×',
        label:
          'Public housing investment tripled under current administration vs. previous governments',
      },
    ],
  },

 publications: {
  label: 'Publications',

  headline: 'Policy in writing',

  featured: {
    label: 'Featured · World Urban Forum 13 · 2026',

    title:
      'Mi Casa en Bogotá: Housing as a Driver of Economic and Social Transformation in the Global South',

    meta:
      'Concept Note · Bogotá District Secretariat for Habitat · May 2026',

    excerpt:
      "Bogotá's housing model presented as an integrated approach to access, urban development and economic and social transformation in the Global South.",

    file: {
      label: 'View technical note',
      href: 'https://habitatbogota.gov.co/view/mi-casa-bogota-en',
    },
  },

  filters: [
    'All',
    'Reports and Research',
    'Policy and Technical Notes',
    'Opinion and Articles',
    'International Media',
    'Newsletter',
  ],

  items: [
    /* =======================================================
       REPORTS AND RESEARCH
       ======================================================= */

    {
      type: 'Final Report',

      source:
        'World Bank Group · City Climate Finance Gap Fund · 2023',

      title:
        "Bogotá Low-Carbon Vital Neighborhoods: Case Study of Bogotá's Vital Neighborhoods Strategy",

      excerpt:
        'A neighborhood-scale model connecting sustainable mobility, public space and low-carbon development to support more accessible and resilient urban transformation.',

      categories: [
        'Reports and Research',
      ],

      file: {
        label: 'View report',
        href: 'https://documents1.worldbank.org/curated/en/099060123135042769/pdf/P1778510058dd905808852025216be0f230.pdf',
      },
    },

    {
      type: 'Final Report',

      source:
        'World Bank Group · PPIAF · 2022',

      title:
        'Using Land Value Capture to Finance Urban Redevelopment: Medellín and Barranquilla Pilot Cases',

      excerpt:
        'A practical framework for applying tax increment financing and land value capture to urban regeneration, based on pilot cases in Medellín and Barranquilla.',

      categories: [
        'Reports and Research',
      ],

      file: {
        label: 'View report',
        href: 'https://documents1.worldbank.org/curated/en/099350108032246435/pdf/P176193135d67b511bac01420f1a25a1497184b51284.pdf',
      },
    },

    {
      type: 'Report',

      source:
        'World Bank Group · Fedesarrollo · September 2021',

      title:
        'Striking a Balance: Toward a Comprehensive Housing Policy for a Post-COVID Colombia',

      excerpt:
        "A comprehensive assessment of Colombia's housing policy, with recommendations on affordability, home upgrading, resilience and stronger institutional coordination.",

      categories: [
        'Reports and Research',
      ],

      file: {
        label: 'View report',
        href: 'https://www.gfdrr.org/en/publication/striking-balance-toward-comprehensive-housing-policy-post-covid-colombia',
      },
    },


    /* =======================================================
       POLICY AND TECHNICAL NOTES
       ======================================================= */

    {
      type: 'Policy Presentation',

      source:
        'Bogotá District Secretariat for Habitat · September 2026',

      title:
        'Bogotá: A Housing Plan Built Around Real-Life Pathways',

      excerpt:
        'A data-led overview of how Bogotá connects land, housing supply, financing and household capacity within a single housing pathway.',

      categories: [
        'Policy and Technical Notes',
      ],

      file: {
        label: 'View presentation',
        href: 'https://es.linkedin.com/posts/vanessa-alexandra-velasco-bernal-4614b55b_bogot%C3%A1-un-plan-de-vivienda-basado-en-trayectorias-activity-7502725257980698624-Z1J_',
      },
    },

    {
      type: 'Technical Note',

      source:
        'World Bank Group · Ministry of Housing Colombia · January 2020',

      title:
        'Recommendations for Implementing Land Management and Urban Finance Instruments in Colombia',

      excerpt:
        'Guidance for Colombian cities on land management, value capture and financing instruments that can mobilize resources for urban infrastructure and redevelopment.',

      categories: [
        'Policy and Technical Notes',
      ],

      file: {
        label: 'View technical note',
        href: 'https://minvivienda.gov.co/node/39882',
      },
    },

    {
      type: 'Executive Document',

      source:
        'World Bank Group · PPIAF · June 2020',

      title:
        'Innovative Instruments to Finance Urban Development in Colombian Cities',

      excerpt:
        'An overview of land-based financing mechanisms designed to help Colombian cities fund infrastructure, urban regeneration and more inclusive development.',

      categories: [
        'Policy and Technical Notes',
      ],

      file: {
        label: 'View document',
        href: 'https://documents1.worldbank.org/curated/en/921731593563388387/pdf/Innovative-Instruments-to-Finance-Urban-Development-in-Colombian-Cities.pdf',
      },
    },


    /* =======================================================
       OPINION AND ARTICLES
       ======================================================= */

    {
      type: 'Opinion Column',

      source:
        'La República · July 2026',

      title:
        'Vivienda social, una plataforma de oportunidades',

      excerpt:
        "How Bogotá's housing policy connects subsidies, savings, financing and public-private coordination to turn access to housing into economic and social opportunity.",

      categories: [
        'Opinion and Articles',
      ],

      file: {
        label: 'Read column',
        href: 'https://rebrand.ly/2d1hi5f',
      },
    },

    {
      type: 'Opinion Column',

      source:
        'La República · April 2026',

      title:
        'Vivienda: el impulso que mueve la economía y transforma vidas en Bogotá',

      excerpt:
        'Why investing in housing creates jobs, mobilizes private capital and expands social mobility, and how Mi Casa en Bogotá is helping sustain the sector.',

      categories: [
        'Opinion and Articles',
      ],

      file: {
        label: 'Read column',
        href: 'https://www.larepublica.co/analisis/vanessa-velasco-bernal-4351599/vivienda-el-impulso-que-mueve-la-economia-y-transforma-vidas-en-bogota-4378241',
      },
    },

    {
      type: 'Opinion Column',

      source:
        'El Tiempo · April 2026',

      title:
        'Vivienda: el motor que Colombia no puede apagar',

      excerpt:
        'A case for protecting housing as a national engine of employment, economic growth and household well-being during a challenging period for the sector.',

      categories: [
        'Opinion and Articles',
      ],

      file: {
        label: 'Read column',
        href: 'https://www.eltiempo.com/bogota/opinion-vivienda-el-motor-que-colombia-no-puede-apagar-3549839',
      },
    },

    {
      type: 'Opinion Column',

      source:
        'La República · March 2026 · ES',

      title:
        'Para seguir produciendo resultados, Bogotá necesita reglas claras en vivienda',

      excerpt:
        'Why regulatory certainty is essential to sustain social-housing production, protect families and maintain the financial viability of new housing projects.',

      categories: [
        'Opinion and Articles',
      ],

      file: {
        label: 'Read column',
        href: 'https://www.larepublica.co/analisis/vanessa-velasco-bernal-4351599/para-seguir-produciendo-resultados-bogota-necesita-reglas-claras-en-vivienda-4351590',
      },
    },

    {
      type: 'Opinion Column',

      source:
        'Semana · February 2026 · ES',

      title:
        'El plan de vivienda de Bogotá transforma vidas y mueve la economía de la ciudad',

      excerpt:
        'How record housing starts, social-housing investment and stronger household support are translating into employment, economic activity and better access to housing.',

      categories: [
        'Opinion and Articles',
      ],

      file: {
        label: 'Read column',
        href: 'https://www.semana.com/opinion/articulo/el-plan-de-vivienda-de-bogota-transforma-vidas-y-mueve-la-economia-de-la-ciudad/202652/',
      },
    },

    {
      type: 'Article',

      source:
        'World Bank Group · July 2023',

      title:
        'Strengthening Housing and Urban Development in Colombia',

      excerpt:
        'Five priorities for expanding resilient housing, neighborhood upgrading and sustainable construction across urban and rural Colombia.',

      categories: [
        'Opinion and Articles',
      ],

      file: {
        label: 'Read article',
        href: 'https://blogs.worldbank.org/es/latinamerica/vivienda-desarrollo-urbano-colombia',
      },
    },

    {
      type: 'Article',

      source:
        'World Bank Group · July 2021',

      title:
        'How Can We Help Latin American Cities Finance Urban Development',

      excerpt:
        'An introduction to tax increment financing and its potential to mobilize investment for infrastructure and urban redevelopment in Latin American cities.',

      categories: [
        'Opinion and Articles',
      ],

      file: {
        label: 'Read article',
        href: 'https://blogs.worldbank.org/es/ppps/como-podemos-ayudar-financiar-el-desarrollo-urbano-en-las-ciudades-latinoamericanas',
      },
    },


    /* =======================================================
       INTERNATIONAL MEDIA
       ======================================================= */

    {
      type: 'Interview',

      source:
        'URBANET · August 25, 2026 · EN',

      title:
        "Bogotá's Housing Strategy for Inclusive Urban Transformation",

      excerpt:
        'A conversation on how Bogotá connects housing, urban revitalization, mobility and public services to expand access and opportunity.',

      categories: [
        'International Media',
      ],

      file: {
        label: 'Read interview',
        href: 'https://www.urbanet.info/bogota-housing-strategy-urban-transformation/',
      },
    },

    {
      type: 'International Article',

      source:
        'Reuters · August 3, 2026 · EN',

      title:
        'How Bogotá Offers a Blueprint for Climate-Smart, Resilient Urban Growth',

      excerpt:
        "International coverage of Bogotá's integrated approach to climate-smart growth through housing, infrastructure and neighborhood revitalization.",

      categories: [
        'International Media',
      ],

      file: {
        label: 'Read article',
        href: 'https://www.reuters.com/sustainability/society-equity/how-bogota-offers-blueprint-climate-smart-resilient-urban-growth--ecmii-2026-08-03/',
      },
    },

    {
      type: 'Interview',

      source:
        'Streetsblog · July 29, 2026 · EN',

      title:
        'Letter From Bogotá: How a Great World Capital Puts Housing, Transit and Public Space First',

      excerpt:
        "An interview on Bogotá's model for linking affordable housing, transit, public space, public services and community participation.",

      categories: [
        'International Media',
      ],

      file: {
        label: 'Read interview',
        href: 'https://usa.streetsblog.org/2026/07/29/letter-from-bogota-how-a-great-world-capital-puts-housing-transit-and-public-space-first',
      },
    },

    {
      type: 'Podcast',

      source:
        'CoMotion · June 17, 2026 · EN',

      title:
        'Fast Forward Podcast',

      excerpt:
        "A conversation with Vanessa Velasco on Bogotá's housing and urban transformation agenda.",

      categories: [
        'International Media',
      ],

      file: {
        label: 'Listen to podcast',
        href: 'https://open.spotify.com/episode/3t0tgSNBfwG658GzPWW6Pw',
      },
    },

    {
      type: 'International Article',

      source:
        'Cities Alliance · June 17, 2026 · EN',

      title:
        "Bogotá: Connecting Housing, Care and Women's Economic Autonomy",

      excerpt:
        "How Bogotá connects housing policy with care systems and financial inclusion to strengthen women's economic autonomy.",

      categories: [
        'International Media',
      ],

      file: {
        label: 'Read article',
        href: 'https://www.citiesalliance.org/newsroom/news/urban-news/bogota-connecting-housing-care-and-womens-economic-autonomy',
      },
    },

    {
      type: 'Authored Article',

      source:
        'WRI TheCityFix · June 9, 2026 · EN',

      title:
        "Bogotá's Vision for a Climate-Resilient Urban Future",

      excerpt:
        "Bogotá's integrated approach positions housing, public services and neighborhood revitalization as tools for climate resilience, inclusion and social equity.",

      categories: [
        'International Media',
      ],

      file: {
        label: 'Read article',
        href: 'https://thecityfix.com/blog/bogot%C3%A1s-vision-climate-resilient-urban-future/',
      },
    },

    {
      type: 'Media Article',

      source:
        'Forbes Colombia · May 21, 2026 · ES',

      title:
        'ONU-Hábitat destaca modelo de vivienda de Bogotá que prevé inversiones por US$350 millones a 2027',

      excerpt:
        'Coverage of Mi Casa en Bogotá and its integration of housing, employment, mobility and urban regeneration, presented at WUF13.',

      categories: [
        'International Media',
      ],

      file: {
        label: 'Read article',
        href: 'https://forbes.co/actualidad/onu-habitat-destaca-modelo-de-vivienda-de-bogota-que-preve-inversiones-por-us350-millones-a-2027',
      },
    },

    {
      type: 'International Article',

      source:
        'Cities Today · April 26, 2026 · EN',

      title:
        'How Bogotá Is Using Shared Data to Link Housing, Mobility and Climate',

      excerpt:
        'How shared data helps Bogotá coordinate housing, mobility and climate action across the urban-development ecosystem.',

      categories: [
        'International Media',
      ],

      file: {
        label: 'Read article',
        href: 'https://cities-today.com/how-bogota-is-using-shared-data-to-link-housing-mobility-and-climate/',
      },
    },


    /* =======================================================
       NEWSLETTER
       ======================================================= */

    {
      type: 'Newsletter',

      source:
        'LinkedIn · September 2026 · EN',

      title:
        "Housing Beyond the Home: Bogotá's Integrated Approach",

      excerpt:
        "A curated overview of Bogotá's housing model and the ideas shaping more inclusive, connected and resilient cities.",

      categories: [
        'Newsletter',
      ],

      file: {
        label: 'Read newsletter',
        href: 'https://www.linkedin.com/pulse/housing-beyond-home-bogot%C3%A1s-integrated-approach-velasco-bernal-4vwce/',
      },
    },

    {
      type: 'Newsletter',

      source:
        'LinkedIn · August 2026 · EN',

      title:
        'Beyond Building New Homes: Expanding the Housing Toolkit',

      excerpt:
        "Why housing policy needs multiple pathways: upgrading existing homes, building families' financial capacity and coordinating public and private action.",

      categories: [
        'Newsletter',
      ],

      file: {
        label: 'Read newsletter',
        href: 'https://www.linkedin.com/pulse/beyond-building-new-homes-expanding-housing-toolkit-velasco-bernal-lusle/',
      },
    },

    {
      type: 'Newsletter',

      source:
        'LinkedIn · July 2026 · EN',

      title:
        "Bogotá's Urban Model: Housing as a Platform for Transformation",

      excerpt:
        'Why housing works best when planned with mobility, care, public space, climate resilience and economic opportunity.',

      categories: [
        'Newsletter',
      ],

      file: {
        label: 'Read newsletter',
        href: 'https://www.linkedin.com/pulse/bogot%C3%A1s-urban-model-housing-platform-transformation-velasco-bernal-giife/',
      },
    },
  ],

  note: null,
},

  recognition: {
    label: 'Speaking & Recognition',
    headline: 'International agenda',

    events: [
      {
        year: '2022',
        place: 'Santiago',
        organization: 'International Seminar · Urban Regeneration in Chile',
        name: 'Paths Towards Urban Regeneration in Chile',

        meta: [
          'Santiago, Chile',
          'Presented the urban regeneration case of the Magdalena River in Barranquilla.',
          'International dialogue on urban regeneration and Latin American city-making.',
        ],

        tag: 'Speaker',

        href:
          'https://globalcenters.columbia.edu/news/innovative-solutions-urban-regeneration-explored-santiago-seminar',
      },

      {
        year: '2024',
        place: 'Madrid',
        organization: 'Foro de las Ciudades de Madrid',
        name: 'Urban Planning, Regeneration and Housing',

        meta: [
          'Madrid, Spain',
          'Official speaker at Foro de las Ciudades de Madrid.',
          'Participation focused on urban planning, regeneration, housing and Ibero-American urban experiences.',
        ],

        tag: 'Speaker',

        href:
          'https://www.ifema.es/foro-ciudades/notas-prensa/presenta-su-programa-completo',
      },

      {
        year: '2024',
        place: 'Barcelona',
        organization: 'Smart City Expo World Congress',
        name:
          'Transforming our Neighbourhoods: How to Get People and Politicians Onboard?',

        meta: [
          'Barcelona, Spain',
          'Panel with representatives from C40, IDB, Rome and Barcelona.',
          'Discussion on neighborhood transformation, governance and public support for urban change.',
        ],

        tag: 'Panelist',

        href:
          'https://www.tomorrow.city/transforming-our-neighbourhoods-how-to-get-people-and-politicians-onboard/',
      },

      {
        year: '2024',
        place: 'Cairo',
        organization: 'UN-Habitat · World Urban Forum 12',
        name: 'Green, Thriving and Climate-Resilient Neighbourhoods',

        meta: [
          'Cairo, Egypt',
          'Panelist · “Green and Thriving Neighbourhoods in Latin America and around the World.”',
          'Panelist · “Cities Leading Innovative Solutions Towards Climate Resilience in Migration Contexts.”',
        ],

        tag: 'Panelist',

        href:
          'https://wuf.unhabitat.org/event/wuf12/green-and-thriving-neighbourhoods-latin-america-and-around-world',
      },

      {
        year: '2025',
        place: 'Washington, D.C.',
        organization: 'World Bank Land Conference 2025',
        name: 'Resilient and Inclusive Housing and Urban Development in Bogotá',

        meta: [
          'Washington, D.C., USA',
          'World Bank Land Conference and Regional Workshop for Latin America and the Caribbean.',
          'Presented Bogotá’s approach to resilient and inclusive housing and urban development.',
        ],

        tag: 'Panelist',

        href:
          'https://www.alcaldiabogota.gov.co/sisjur/listados/tematica2.jsp?cadena=&subtema=40681',
      },

      {
        year: '2025',
        place: 'Guangzhou',
        organization: 'GPSC Regional City Academy for Asia · Infra4Dev',
        name: 'Land Value Capture, Urban Infrastructure and Resilience',

        meta: [
          'Guangzhou, China',
          'Panelist on land value capture, urban infrastructure, resilience and planning.',
          'Presented Bogotá’s Lagos de Torca experience as an urban development case.',
        ],

        tag: 'Panelist',

        href:
          'https://bogota.gov.co/mi-ciudad/habitat/bogota-invitada-al-primer-regional-city-academy-asia-en-guangzhou',
      },

      {
        year: '2025',
        place: 'Bogotá',
        organization: 'UN-Habitat · World Cities Day 2025',
        name: 'People-Centered Smart Cities',

        meta: [
          'Bogotá, Colombia',
          'Participated as panelist, keynote speaker and moderator.',
          'Conversations focused on affordable housing, urban revitalization and people-centered smart cities.',
        ],

        tag: 'Panelist · Keynote · Moderator',

        href:
          'https://habitatbogota.gov.co/prensa/noticias/bogota-lidero-dialogo-internacional-sobre-ciudades-inteligentes-centradas-las-personas',
      },

      {
        year: '2026',
        place: 'Baku',
        organization: 'UN-Habitat · World Urban Forum 13',
        name: 'Mi Casa en Bogotá and Urban Transformation',

        meta: [
          'Baku, Azerbaijan',
          'Led the panel focused on Mi Casa en Bogotá.',
          'Participated in nine additional sessions on housing, climate-responsive urbanism, mobility, biodiversity, public facilities and urban revitalization.',
        ],

        tag: 'Panel Lead · Speaker',

        href:
          'https://bogota.gov.co/mi-ciudad/habitat/participacion-de-bogota-13deg-foro-urbano-mundial-wuf13',
      },

      {
        year: '2026',
        place: 'Singapore',
        organization: 'World Cities Summit',
        name: 'Cities, Health, Hyperlocal Urbanism and Climate-Ready Housing',

        meta: [
          'Singapore',
          'Panelist · “Are Cities Good for Your Health?”',
          'Panelist · “Future Urban Liveability: The Hyperlocal Shift.”',
          'Panelist · “Where Housing Meets Climate: Solutions for Cities.”',
        ],

        tag: 'Panelist',

        href:
          'https://www.worldcitiessummit.com.sg/programme/wcs-thematic-tracks-n-sessions/cities-for-people',
      },

      {
        year: '2026',
        place: 'Medellín',
        organization: 'Climate Week Medellín · CAF',
        name: 'BiodiverCiudades: experiencias de éxito',

        meta: [
          'Medellín, Colombia',
          'Speaker on urban planning, regeneration, biodiversity and climate adaptation.',
          'Presented urban experiences linking city-making and environmental resilience.',
        ],

        tag: 'Speaker',

        href:
          'https://www.caf.com/es/actualidad/eventos/caf-en-climate-week-medellin-2026/',
      },

      {
        year: '2026',
        place: 'Barcelona',
        organization: 'Smart City Expo World Congress · HOWS Barcelona',
        name:
          'Place, People, Policy: Regenerating Neighbourhoods to Live and Belong In',

        meta: [
          'Barcelona, Spain · November 3–5, 2026',
          'Scheduled panel participation · November 5.',
          'Conversation on neighborhood regeneration, place, people and urban policy.',
        ],

        tag: 'Upcoming · Panelist',

        href:
          'https://www.smartcityexpo.com/speakers/maita-fernandez-armesto-sanchez/',
      },

      {
        year: '2026',
        place: 'Los Angeles',
        organization: 'CoMotion LA',
        name: 'CoMotion LA 2026',

        meta: [
          'Los Angeles, USA · November 18–19, 2026',
          'Scheduled participation in the international urban mobility gathering.',
        ],

        tag: 'Upcoming',

        href:
          'https://www.comotionglobal.com/los-angeles26',
      },
    ],
  },

  press: {
    label: 'Press & Media',
    headline: 'In the media',

    items: [
      {
        outlet: 'Cities Today',
        title:
          'How Bogota is using shared data to link housing, mobility and climate',
        date: 'Apr 26, 2026',
        language: 'EN',
        href:
          'https://cities-today.com/how-bogota-is-using-shared-data-to-link-housing-mobility-and-climate/',
      },

      {
        outlet: 'Forbes',
        title:
          'ONU-Hábitat destaca modelo de vivienda de Bogotá que prevé inversiones por US$350 millones a 2027',
        date: 'May 21, 2026',
        language: 'ES',
        href:
          'https://forbes.co/actualidad/onu-habitat-destaca-modelo-de-vivienda-de-bogota-que-preve-inversiones-por-us350-millones-a-2027',
      },

      {
        outlet: 'WRI · TheCityFix',
        title:
          'Bogotá’s Vision for a Climate-Resilient Urban Future',
        date: 'Jun 9, 2026',
        language: 'EN',
        href:
          'https://thecityfix.com/blog/bogot%C3%A1s-vision-climate-resilient-urban-future/',
      },

      {
        outlet: 'Cities Alliance',
        title:
          'Bogota: Connecting Housing, Care and Women’s Economic Autonomy',
        date: 'Jun 17, 2026',
        language: 'EN',
        href:
          'https://www.citiesalliance.org/newsroom/news/urban-news/bogota-connecting-housing-care-and-womens-economic-autonomy',
      },

      {
        outlet: 'CoMotion · Fast Forward',
        title:
          'Building at the Neighborhood Level with Vanessa Velasco',
        date: 'Jun 17, 2026',
        language: 'EN',
        href:
          'https://open.spotify.com/episode/3t0tgSNBfwG658GzPWW6Pw',
      },

      {
        outlet: 'Streetsblog',
        title:
          'Letter From Bogotá: How A Great World Capital Puts Housing, Transit and Public Space First',
        date: 'Jul 29, 2026',
        language: 'EN',
        href:
          'https://usa.streetsblog.org/2026/07/29/letter-from-bogota-how-a-great-world-capital-puts-housing-transit-and-public-space-first',
      },

      {
        outlet: 'Reuters',
        title:
          'How Bogota offers a blueprint for climate-smart, resilient urban growth',
        date: 'Aug 3, 2026',
        language: 'EN',
        href:
          'https://www.reuters.com/sustainability/society-equity/how-bogota-offers-blueprint-climate-smart-resilient-urban-growth--ecmii-2026-08-03/',
      },

      {
        outlet: 'Urbanet',
        title:
          'Housing Policy Must Focus on People Rather Than Products',
        date: 'Aug 25, 2026',
        language: 'EN',
        href:
          'https://www.urbanet.info/bogota-housing-strategy-urban-transformation/',
      },
    ],

    action: {
      description:
        'Press inquiries, interviews and media coordination.',
      label: 'Request an interview',
      href: '#contacto',
    },
  },

  contact: {
    label: 'Contact',
    headline: 'Get in touch',

    form: {
      fields: [
        {
          name: 'name',
          label: 'Name',
          placeholder: 'Full name',
          type: 'text',
        },
        {
          name: 'email',
          label: 'Email',
          placeholder: 'correo@ejemplo.com',
          type: 'email',
        },
        {
          name: 'organization',
          label: 'Organization',
          placeholder: 'Media outlet, institution',
          type: 'text',
        },
        {
          name: 'purpose',
          label: 'Purpose',
          type: 'select',
          options: [
            'Media inquiry',
            'Academic collaboration',
            'Speaking engagement',
            'Other',
          ],
        },
        {
          name: 'message',
          label: 'Message',
          placeholder: 'Briefly describe your inquiry',
          type: 'textarea',
        },
      ],

      submitLabel: 'Send message',
    },

    media: {
      label: 'Media & communications',
      text:
        'For press inquiries, interview requests, and media coordination, all requests are handled by the SDHT communications team.',
    },

    socials: {
      label: 'Social networks',

      items: [
        {
          network: 'LinkedIn',
          href:
            'https://www.linkedin.com/in/vanessa-alexandra-velasco-bernal-4614b55b/',
        },
        {
          network: 'X',
          href: 'https://x.com/vvbernal',
        },
        {
          network: 'Instagram',
          href:
            'https://www.instagram.com/welascobernal/',
        },
      ],
    },

    institutional: {
      label: 'Institutional',
      name: 'Secretaría Distrital del Hábitat',

      website: {
        label: 'habitatbogota.gov.co',
        href: 'https://habitatbogota.gov.co',
      },

      socials: [
        {
          network: "LinkedIn",
          href:
            "https://co.linkedin.com/company/secretaria-distrital-del-h%C3%A1bitat",
        },
        {
          network: "X",
          href: "https://x.com/habitatbogota",
        },
        {
          network: "Instagram",
          href: "https://www.instagram.com/habitatbogota/?hl=es",
        },
        {
          network: "Facebook",
          href: "https://www.facebook.com/HabitatBogota",
        },
      ],
    },

    bottom: {
      signature: 'Vanessa Velasco · 2026',
      backToTop: 'Return to the beginning',
    },
  },
}
