export type Capability = {
  number: string;
  slug: string;
  title: string;
  scope: string;
  image: string;
  lead: string;
  copy: string;
};

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  type: string;
  size: string;
  location: string;
  service: string;
  lead: string;
  copy: string;
  images: string[];
  logo?: string;
  brandUrl?: string;
};

export type ContactDetails = {
  businessName: string;
  tagline: string;
  email: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  alternatePhone: string;
  alternatePhoneHref: string;
  addressLine1: string;
  addressLine2: string;
  mapsUrl: string;
  areasServed: string;
  founder: {
    name: string;
    designation: string;
    experience: string;
  };
};

export const capabilities: Capability[] = [
  {
    number: '01',
    slug: 'residential',
    title: 'Residential Construction',
    scope: 'Homes · Villas · Renovations',
    image: '/media/rs-residence.png',
    lead: 'Homes planned and built around how people actually live.',
    copy: 'From planning and civil work to services and finishing, we deliver residential projects with clear scopes, visible timelines and one accountable team through handover.',
  },
  {
    number: '02',
    slug: 'commercial',
    title: 'Commercial Construction',
    scope: 'Hospitality · Retail · Workspaces',
    image: '/media/coyaba-facade.webp',
    lead: 'Commercial spaces built for performance and presence.',
    copy: 'We deliver hospitality, retail and workspace projects that balance guest experience, daily operations and long-term durability under one coordinated build process.',
  },
  {
    number: '03',
    slug: 'industrial',
    title: 'Industrial Construction',
    scope: 'Facilities · Planning · Execution',
    image: '/media/rs-resort.png',
    lead: 'Facilities engineered for workflow, safety and growth.',
    copy: 'Industrial projects are planned around process, service coordination and future capacity—delivering robust facilities ready for everyday use.',
  },
  {
    number: '04',
    slug: 'interior-works',
    title: 'Interior Works',
    scope: 'Material · Light · Finish',
    image: '/media/soir7-interior-1.jpg',
    lead: 'Interiors resolved through material, light and detail.',
    copy: 'We execute interior works that protect the design intent—coordinating finishes, custom elements and site details so the completed space feels considered end to end.',
  },
  {
    number: '05',
    slug: 'turnkey-projects',
    title: 'Turnkey Projects',
    scope: 'Planning · Design · Handover',
    image: '/media/nirvana-interior.jpg',
    lead: 'Complete turnkey execution from planning to handover.',
    copy: 'RS Developers provides complete turnkey delivery—planning, design coordination, procurement, construction, interiors and final handover through one responsible team.',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'the-coyaba',
    number: '01',
    title: 'The Coyaba',
    type: 'Hospitality · Residential / Commercial',
    size: '98,000 square feet',
    location: 'Ludhiana',
    service: 'Construction · Planning · Interiors',
    lead: 'A hospitality destination delivered at the scale of a complete experience.',
    copy: 'RS Developers led construction, planning and interior execution across this 98,000-square-foot resort—coordinating architecture, landscape-facing spaces and guest experience into one destination.',
    images: ['/media/coyaba-facade.webp', '/media/coyaba-garden.webp', '/media/coyaba-detail-1.webp', '/media/coyaba-detail-2.webp'],
    logo: '/brand/coyaba-logo.webp',
    brandUrl: 'https://coyaba.in/',
  },
  {
    slug: 'nirvana-luxury-hotel',
    number: '02',
    title: 'Nirvana Luxury Hotel',
    type: 'Commercial · Hospitality',
    size: 'Expansion and renewal',
    location: 'Ludhiana',
    service: 'Expansion · Guest rooms · Banquet',
    lead: 'Renewing a working luxury hotel without losing its character.',
    copy: 'This programme covers expansion, guest-room renewal and banquet-hall services—respecting operational demands while upgrading the guest experience.',
    images: ['/media/nirvana-facade.jpg', '/media/nirvana-pool.jpg', '/media/nirvana-interior.jpg'],
    logo: '/brand/nirvana-logo.png',
    brandUrl: 'https://www.nirvanahotels.co.in/',
  },
  {
    slug: 'gold-dust-residence',
    number: '03',
    title: 'Gold Dust Residence',
    type: 'Residential · Turnkey',
    size: '1,925 square feet',
    location: 'Ludhiana',
    service: 'Planning · Construction · Finishes',
    lead: 'A complete home delivered through one clear line of responsibility.',
    copy: 'This 1,925-square-foot residence is delivered as a turnkey project—from requirements and planning through execution, coordination, finishing and handover.',
    images: ['/media/rs-residence.png'],
  },
  {
    slug: 'the-soir-7',
    number: '04',
    title: 'The Soir 7',
    type: 'Interior · Commercial',
    size: 'Hospitality interiors',
    location: 'Ludhiana',
    service: 'Interior works · Hospitality',
    lead: 'A restaurant shaped through atmosphere, material and light.',
    copy: 'The Soir 7 brings together warm materiality, layered lighting and carefully resolved details to create a memorable guest experience with a clear sense of place.',
    images: ['/media/soir7-interior-1.jpg', '/media/soir7-interior-2.jpg', '/media/soir7-interior-3.jpg'],
    brandUrl: 'https://www.instagram.com/soir7xbabas/',
  },
];

export const processSteps: string[] = [
  'Understand the requirements',
  'Site visit and consultation',
  'Estimate and BOQ',
  'Final discussion and agreement',
  'Planning and execution',
  'Snagging and final handover',
];

export const contactDetails: ContactDetails = {
  businessName: 'RS Developers',
  tagline: 'Your Vision. Our Construction.',
  email: 'rsdrsdevelopers@gmail.com',
  phone: '+91 98032 47476',
  phoneHref: 'tel:+919803247476',
  whatsapp: '919803247476',
  alternatePhone: '+91 79869 84675',
  alternatePhoneHref: 'tel:+917986984675',
  addressLine1: '303, Second Floor, Sethi Complex',
  addressLine2: 'Bharat Nagar Chowk, Ludhiana',
  mapsUrl: 'https://maps.google.com/?q=303+Second+Floor+Sethi+Complex+Bharat+Nagar+Chowk+Ludhiana',
  areasServed: 'Punjab · Himachal Pradesh',
  founder: {
    name: 'Rahul Bhardwaj',
    designation: 'Founder · Owner',
    experience: '13+ years',
  },
};
