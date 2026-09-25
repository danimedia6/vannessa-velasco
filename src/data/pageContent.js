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
    areas: [
      'Urban housing policy',
      'Land value capture',
      'Transit-oriented development',
      'Urban regeneration',
      'SDG 11',
      'Global South',
      'South–South cooperation',
    ],
  },

  hero: {
    eyebrow: 'Habitat Chief Secretary · Bogotá',
    name: {
      first: 'Vanessa',
      last: 'Velasco',
      full: 'Vanessa Velasco Bernal',
    },
    title:
      'Secretaria Distrital del Hábitat de Bogotá · Board Member · IDU · RenoBo · EAAB',
    tagline:
      '"Housing as a driver of economic and social transformation in the Global South"',
    image: {
      src: '/images/vanessa-velasco-hero.jpg',
      alt: 'Vanessa Velasco Bernal — Habitat Chief Secretary of Bogotá',
      locationLabel: 'Bogotá, Colombia',
      isPlaceholder: false,
    },
    actions: [
      {
        label: 'Request interview',
        href: '#contact',
      },
      {
        label: 'Press kit',
        href: '#',
      },
    ],
  },

  bio: {
    label: 'Biography',
    headline: 'Urban leader.',
    paragraphs: [
      "Vanessa Velasco Bernal is the Habitat Chief Secretary of Bogotá, where she leads the city's housing and urban development policy. An architect and urban planner with over 20 years of experience, she has worked across Latin America, Southeast Asia, and the Caribbean designing policies that connect housing, land management, mobility, and economic inclusion.",
      "Before leading Bogotá's Secretariat, she spent nearly seven years as an Urban Specialist at the World Bank, co-leading operations in Colombia, Ecuador, Peru, Mexico, Jamaica, Korea, and Indonesia — including a USD 500M territorial development program for Colombia and a USD 235M resilient housing project in Ecuador. In 2022 she was invited to deliver the Doryan Winkelman Lecture at Columbia University's MSRED program.",
      'Her intellectual framework positions housing not as a sectoral intervention but as a platform for economic inclusion, social mobility, and climate-sustainable urban growth — a thesis she has advanced at the World Urban Forum, through UN-Habitat, and in publications with the World Bank.',
      "She holds a Master's in Urban Administration and Planning from the University of Seoul, a Master's in Urban Planning from UPC Barcelona, and completed programs at Wharton and Universität Wien. She chairs the boards of RenoBo and the Empresa de Acueducto y Alcantarillado de Bogotá, and serves as Board Member of the Instituto de Desarrollo Urbano.",
    ],
  },

  impact: {
    metrics: [
      {
        value: '31K+',
        label: 'Subsidios entregados · Plan Integrado de Vivienda',
      },
      {
        value: 'USD 344M',
        label: 'Investment led · SDHT Bogotá',
      },
      {
        value: '20+ yrs',
        label: 'Urban development expertise',
      },
      {
        value: '7',
        label: 'Countries · World Bank operations',
      },
      {
        value: 'WUF 13',
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
        image: '/images/projects/micasa.jpeg',
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
        image: '/images/projects/revitaliza.jpeg',
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
  label: 'Publications & Thinking',

  headline: 'Policy in writing',

  featured: {
    label: 'Featured · World Urban Forum 13 · 2026',

    title:
      'Mi Casa en Bogotá: Housing as a driver of economic and social transformation in the Global South',

    meta:
      'Concept Note · SDHT Bogotá + UN-Habitat · May 2026 · EN',

    file: {
      label: 'Download PDF',
      href: '#',
    },
  },

  filters: [
    'All',
    'World Bank',
    'Policy briefs',
    'Op-eds',
    'Academic',
  ],

  items: [
    {
      type: 'Policy Brief',

      source: 'World Bank Group · Colombia',

      title:
        'Tax Increment Finance Districts: implementation framework for urban regeneration in Barranquilla and Medellín',

      excerpt:
        'Analytical study covering bond-size estimation, legal and administrative schemes, and urban project proforma for TIF implementation.',

      categories: ['World Bank', 'Policy briefs'],

      file: {
        label: 'View document',
        href: '#',
      },
    },

    {
      type: 'Technical Note',

      source: 'World Bank Group · Colombia · Peru',

      title:
        'Land value capture instruments: analytical studies for transit-oriented development',

      excerpt:
        'Framework for LVC as financing source for urban infrastructure across Metro Bogotá, Regiotram, and Lima Metro Line 2 corridors.',

      categories: ['World Bank'],

      file: {
        label: 'View document',
        href: '#',
      },
    },

    {
      type: 'Technical Note',

      source: 'World Bank Group · Ecuador',

      title:
        'Inclusive and resilient housing: co-financing for home improvement, urban upgrading, and rental housing',

      excerpt:
        'Operational and analytical framework for the USD 235M resilient housing project serving vulnerable populations including migrants.',

      categories: ['World Bank'],

      file: {
        label: 'View document',
        href: '#',
      },
    },

    {
      type: 'Research',

      source: 'Lincoln Institute of Land Policy · 2012',

      title:
        'Methodology for identifying additional infrastructure costs in urban redevelopment projects — Bogotá',

      excerpt:
        'Academic research study defining cost identification methodology for urban redevelopment, produced as Urban Researcher at Lincoln Institute.',

      categories: ['Academic'],

      file: {
        label: 'View document',
        href: '#',
      },
    },

    {
      type: 'Policy Brief',

      source: 'SDHT Bogotá · 2024–2025',

      title:
        'Revitaliza tu Barrio: governance and management model for urban revitalization in Bogotá',

      excerpt:
        'Additionality-based urban revitalization framework coordinating public entities, private sector, and civil society within 400m transit buffer zones.',

      categories: ['Policy briefs'],

      file: {
        label: 'View document',
        href: '#',
      },
    },

    {
      type: 'Technical Note',

      source: 'World Bank Group · Peru',

      title:
        'Urban land national program — analytical studies to update housing and land management regulations',

      excerpt:
        "Contribution to updating Peru's PGSU (Programa General de Suelo Urbano) as part of the Ministry of Housing analytical framework.",

      categories: ['World Bank'],

      file: {
        label: 'View document',
        href: '#',
      },
    },
  ],

  note:
    '"Original thought pieces, op-eds, and academic contributions in progress — section will expand as new work is published."',
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
        outlet: 'UN-Habitat',
        title:
          'World Cities Day 2025 — Bogotá convenes global dialogue on people-centered smart cities',
        href: '#',
      },
      {
        outlet: 'WUF 13 · 2026',
        title:
          'Housing and Urban Transformation Hub — South–South cooperation platform launch, Baku',
        href: '#',
      },
      {
        outlet: 'World Bank',
        title:
          'Transit-oriented development and land value capture — Colombia metropolitan areas',
        href: '#',
      },
      {
        outlet: 'World Bank',
        title:
          'Inclusive and resilient housing in Colombia — Co-lead, USD 235M Ecuador program',
        href: '#',
      },
      {
        outlet: 'SDHT Bogotá',
        title:
          'Mi Casa en Bogotá: first subnational integrated housing plan in Latin America',
        href: '#',
      },
    ],
    action: {
      label: 'Request an interview',
      href: '#contact',
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
    channels: [
      {
        label: 'Media & communications',
        text:
          'For press inquiries, interview requests, and media coordination, all requests are handled by the SDHT communications team. Response within 48 hours.',
      },
      {
        label: 'Professional',
        links: [
          {
            label: 'LinkedIn',
            href:
              'https://www.linkedin.com/in/vanessa-alexandra-velasco-bernal-4614b55b/',
          },
        ],
      },
      {
        label: 'Institutional',
        links: [
          {
            label: 'habitatbogota.gov.co',
            href: 'https://habitatbogota.gov.co',
          },
          {
            label: '@welascobernal',
            href: 'https://www.instagram.com/welascobernal/',
          },
        ],
      },
    ],
  },
}
