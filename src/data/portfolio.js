export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' }
];

export const heroContent = {
  title: 'Building resilient platforms for teams who operate offline.',
  subtitle:
    "I'm Aldi, a system engineer and data platform developer creating Android tools, geospatial infrastructure, and automation pipelines that keep organisations moving even when the signal drops.",
  ctaPrimary: { href: '#projects', label: 'Explore case studies' },
  ctaSecondary: { href: '#contact', label: 'Work with me' },
  stats: [
    { label: 'Deployments', value: 32, suffix: '+', decimals: 0 },
    { label: 'Active field teams', value: 12, suffix: '', decimals: 0 },
    { label: 'Tooling uptime', value: 99.7, suffix: '%', decimals: 1 }
  ]
};

export const aboutContent = {
  paragraphs: [
    'From rugged Android apps that track patrols in remote forests to containerised geospatial portals that serve gigabytes of data, I help teams capture, understand, and act on information in the field.',
    'I lead with reliability and clarity: offline-first architectures, automated delivery pipelines, documentation that outlives handovers, and human-friendly interfaces that teams adopt quickly.'
  ],
  highlights: [
    'Android (Kotlin/Java), MapLibre, hardware sensors, sync pipelines',
    'PostgreSQL/PostGIS, GeoServer, Supabase, telemetry, RBAC',
    'Docker, Traefik, GitHub Actions, observability, automated testing'
  ]
};

export const projects = [
  {
    id: 'terratrack',
    name: 'TerraTrack Patrol Suite',
    year: '2023 - Present',
    blurb:
      'Offline-first Android toolkit and analytics portal used by conservation patrols to map routes, incidents, and intelligence with resilient syncing back to HQ.',
    stack: ['Kotlin', 'MapLibre', 'Room', 'GeoServer', 'PostgreSQL', 'Next.js'],
    metrics: ['12 active patrol teams', '3 countries in production', 'Sub-1% data loss across 6 months']
  },
  {
    id: 'terraflow',
    name: 'TerraFlow Data Platform',
    year: '2022 - Present',
    blurb:
      'Containerised geospatial data infrastructure with automated backups, high-availability PostGIS, and dashboards consumed by programme teams.',
    stack: ['PostGIS', 'GeoServer', 'React', 'Traefik', 'Docker'],
    metrics: ['150+ datasets served', '4.5k monthly users', 'Automated tile caching under 300ms']
  },
  {
    id: 'envirodash',
    name: 'EnviroDash Analytics',
    year: '2022 - 2024',
    blurb:
      'Indicator tracking for climate and social programmes with interactive layers, role-based insights, and scheduled digests delivered to stakeholders.',
    stack: ['Next.js', 'Supabase', 'MapLibre', 'TypeScript'],
    metrics: ['120+ indicators', '5 export formats', '55% fewer ad-hoc report requests']
  }
];

export const experience = [
  {
    role: 'System Engineer & Data Platform Developer',
    period: '2018 - Present',
    detail:
      'Lead delivery of geospatial data stacks, mobile field tooling, and automation workflows for organisations operating in emerging markets and remote environments.'
  },
  {
    role: 'Mobile Engineering (Android Kotlin/Java)',
    period: '2015 - Present',
    detail:
      'Design offline-first experiences that combine hardware sensors, background services, and sync strategies to keep field teams productive.'
  }
];

export const services = [
  {
    title: 'Offline-first Android apps',
    description: 'Field-ready experiences with background tracking, sensor fusion, offline basemaps, and failsafe data syncing.'
  },
  {
    title: 'Geospatial data platforms',
    description: 'PostGIS + GeoServer stacks packaged in Docker with observability, RBAC, caching, and automated backups.'
  },
  {
    title: 'Dashboards & analytics',
    description: 'Next.js/Supabase dashboards with role-based insights, exports, telemetry, and digest automation.'
  },
  {
    title: 'Automation pipelines',
    description: 'Apps Script and n8n workflows converting form entries into PDFs, notifications, and downstream integrations.'
  }
];
