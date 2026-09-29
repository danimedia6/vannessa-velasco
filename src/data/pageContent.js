// Fuente factual inicial: source/vanessavelasco_v7 (3) (1).html.
// El HTML se usa como contenido, no como referencia visual.
export const pageContent = {
  source: {
    file: 'source/vanessavelasco_v7 (3) (1).html',
    note: 'Fuente HTML original suministrada para extracción factual inicial.',
  },

  siteTitle: 'Vanessa Velasco',

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
    timeline: [
      {
        period: '2001–06',
        role: 'Teaching & urban planning, Bogotá',
      },
      {
        period: '2007–13',
        role: 'Public sector Bogotá · ERU · Min. Cultura',
      },
      {
        period: '2014–16',
        role: 'Korea LH Corp · Regional consultancy',
      },
      {
        period: '2017–2024',
        role: 'World Bank Group · 7 countries · USD 1B+ portfolio',
      },
      {
        period: '2024 –',
        role: 'Habitat Chief Secretary · Bogotá',
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
        name: 'Mi Casa en Bogotá',
        description:
          "An integrated district housing policy addressing 61% of the city's housing deficit through 8 differentiated programs targeting both demand and supply across the housing value chain. Investment tripled compared to previous administrations.",
        image: '/images/projects/micasa1.jpg',
        link: {
          label: 'Explore project',
          href: 'https://habitatbogota.gov.co/desarrollo-sostenible-ciudades/vivienda-transformacion/revolucion-vivienda',
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
        name: 'Revitaliza tu Barrio',
        description:
          'Neighborhood revitalization across 75 neighborhoods in 20 zones, following principles of sustainable construction, social cohesion, and strategic proximity to Metro, BRT, and Metrocable corridors. Coordinated within 400m buffer zones around mobility networks.',
        image: '/images/projects/revitaliza1.png',
        link: {
          label: 'Explore project',
          href: 'https://habitatbogota.gov.co/desarrollo-sostenible-ciudades/estrategia-revitalizacion',
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
        value: '31,000+',
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
        organization: 'UN-Habitat · World Urban Forum 13',
        name:
          'Mi Casa en Bogotá: Housing as a driver of economic and social transformation in the Global South',
        meta: [
          'Baku, Azerbaijan · May 22, 2026',
          'Voices From Cities · Room B · Panel lead',
          'Co-panelists: ONU-Habitat, CAMACOL, Caja de Vivienda Popular',
        ],
        tag: 'Panel Speaker',
      },
      {
        organization: 'UN-Habitat · World Cities Day 2025',
        name: 'People-Centered Smart Cities — Bogotá as global host city',
        meta: [
          'Bogotá, Colombia · October 30–31, 2025',
          'Launch of the Housing & Urban Transformation Hub',
          'South–South cooperation platform with UN-Habitat',
        ],
        tag: 'Host City Lead',
      },
      {
        organization: 'Columbia University · GSAPP',
        name: "The Doryan Winkelman '86 MSRED Real Estate Development Lecture",
        meta: [
          'New York, USA · June 2022',
          'International real estate and urban development',
          'M.S.RED annual lecture series',
        ],
        tag: 'Invited Lecturer',
      },
      {
        organization: 'International recognition',
        name: 'Premio Shanghai',
        meta: ['Year and award category to be confirmed'],
        status: 'Pending confirmation',
      },
      {
        organization: 'UN-Habitat · Multiple editions',
        name: 'World Urban Forum — 10 panel appearances',
        meta: ['Multiple editions, topics, and roles', 'Full breakdown pending'],
        status: 'Details pending',
      },
    ],
  },

  press: {
    label: 'Press & Media',
    headline: 'In the media',

    items: [
      {
        outlet: 'La República',
        title:
          'Secretaría Distrital del Hábitat lanzó “Mejora tu Cuota” para el mejoramiento de vivienda',
        date: 'Sep 9, 2026',
        language: 'ES',
        href:
          'https://www.larepublica.co/economia/subsidio-mejora-tu-cuota-de-la-secretaria-distrital-del-habitat-4478435',
      },

      {
        outlet: 'El Espectador',
        title:
          'Vivienda digna y central: el plan de Bogotá para romper la segregación urbana',
        date: 'Sep 1, 2026',
        language: 'ES',
        href:
          'https://www.elespectador.com/bogota/vivienda-digna-y-central-el-plan-de-bogota-para-romper-la-segregacion-urbana/',
      },

      {
        outlet: 'El Espectador',
        title:
          'Vivienda con cuotas de $100.000: logro en medio de los retos de generar techo en Bogotá',
        date: 'Aug 31, 2026',
        language: 'ES',
        href:
          'https://www.elespectador.com/bogota/vivienda-con-cuotas-de-100000-logro-en-medio-de-los-retos-de-generar-techo-en-bogota/',
      },

      {
        outlet: 'Portafolio',
        title:
          'Tributaria de Galán busca llevar la vivienda VIS y VIP a zonas de renovación urbana y proteger a Bogotá de sismos',
        date: '',
        language: 'ES',
        href:
          'https://www.portafolio.co/mis-finanzas/vivienda/tributaria-de-galan-busca-llevar-la-vivienda-vis-y-vip-a-zonas-de-renovacion-urbana-y-proteger-a-bogota-de-sismos-503191',
      },

      {
        outlet: 'Caracol Radio',
        title:
          '¿Qué le espera a Bogotá en temas de vivienda con el nuevo gobierno de Abelardo de la Espriella?',
        date: 'Jul 21, 2026',
        language: 'ES',
        href:
          'https://caracol.com.co/2026/07/21/que-le-espera-a-bogota-en-temas-de-vivienda-con-el-nuevo-gobierno-de-abelardo-de-la-espriella/',
      },

      {
        outlet: 'La República',
        title:
          'La Secretaría de Hábitat liderará la agenda de Bogotá en el Foro Urbano Mundial',
        date: 'May 19, 2026',
        language: 'ES',
        href:
          'https://www.larepublica.co/economia/la-secretaria-de-habitat-liderara-la-agenda-de-bogota-en-el-foro-urbano-mundial-4395908',
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
