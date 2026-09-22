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
  status: string;
  lead: string;
  copy: string;
  images: string[];
  logo?: string;
  brandUrl?: string;
};

export type ContactDetails = {
  businessName: string;
  tagline: string;
  taglineLine1: string;
  taglineLine2: string;
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
  yearsInBusiness: string;
  projectsCompleted: string;
  instagramUrl: string;
  values: string[];
  founder: {
    name: string;
    designation: string;
    experience: string;
    memberships: string[];
  };
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
] as const;

export const capabilities: Capability[] = [
  {
    number: '01',
    slug: 'residential',
    title: 'Residential',
    scope: 'Homes · Renovations · Turnkey',
    image: '/media/rs-residence.png',
    lead: 'Homes planned and built around how people live.',
    copy: 'From planning and civil work to finishing and handover, we deliver residential projects with clear scopes, visible timelines and one accountable team.',
  },
  {
    number: '02',
    slug: 'commercial',
    title: 'Commercial',
    scope: 'Hotels · Retail · Complexes',
    image: '/media/coyaba-facade.webp',
    lead: 'Commercial spaces built for performance and presence.',
    copy: 'We deliver hospitality, retail and commercial complexes that balance guest experience, daily operations and long-term durability.',
  },
  {
    number: '03',
    slug: 'industrial',
    title: 'Industrial',
    scope: 'Facilities · Planning · Execution',
    image: '/media/rs-resort.png',
    lead: 'Facilities engineered for workflow, safety and growth.',
    copy: 'Industrial projects are planned around process, service coordination and future capacity—ready for everyday use.',
  },
  {
    number: '04',
    slug: 'interior-turnkey',
    title: 'Interior Turnkey',
    scope: 'Concept · Execution · Handover',
    image: '/media/soir7-interior-1.jpg',
    lead: 'Concept to completion under one roof.',
    copy: 'Interior turnkey delivery from planning to handover—procurement, finishes, site coordination and final snagging through one responsible team.',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'the-coyaba',
    number: '01',
    title: 'The Coyaba',
    type: 'Resort · Hospitality',
    size: '98,000 square feet',
    location: 'Ludhiana',
    service: 'Construction · Planning · Interiors',
    status: 'Completed',
    lead: 'A 98,000 sq ft resort delivered with construction, interiors and planning under one team.',
    copy: 'RS Developers handled construction, interior work and planning for The Coyaba resort in Ludhiana—a landmark hospitality destination completed about two years ago.',
    images: ['/media/coyaba-facade.webp', '/media/coyaba-garden.webp', '/media/coyaba-detail-1.webp', '/media/coyaba-detail-2.webp'],
    logo: '/brand/coyaba-logo.webp',
    brandUrl: 'https://coyaba.in/',
  },
  {
    slug: 'nirvana-luxury-hotel',
    number: '02',
    title: 'Nirvana Luxury Hotel',
    type: 'Hotel · Ongoing',
    size: 'Expansion and renovation',
    location: 'Ludhiana',
    service: 'Expansion · Guest rooms · Banquet',
    status: 'In progress',
    lead: 'Ongoing expansion with guest-room renovation and banquet hall services.',
    copy: 'This live programme covers a new expansion, renovation of rooms and banquet hall services at Nirvana Luxury Hotel, Ludhiana.',
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
    service: 'Turnkey delivery',
    status: 'Completed',
    lead: 'A 1,925 sq ft residence delivered as a complete turnkey project.',
    copy: 'This Gold Dust residence was delivered turnkey—from requirements and planning through execution, finishing and handover.',
    images: ['/media/rs-residence.png'],
  },
  {
    slug: 'commercial-complex',
    number: '04',
    title: 'Commercial Complex',
    type: 'Commercial',
    size: '5,000 square feet',
    location: 'Ludhiana',
    service: 'Commercial construction',
    status: 'Completed',
    lead: 'A 5,000 sq ft commercial complex delivered in Ludhiana.',
    copy: 'RS Developers executed this 5,000-square-foot commercial complex with coordinated planning, construction and finishing.',
    images: ['/media/rs-hotel.png'],
  },
  {
    slug: 'the-soir-7',
    number: '05',
    title: 'The Soir 7',
    type: 'Restaurant · Interiors',
    size: 'Hospitality interiors',
    location: 'Ludhiana',
    service: 'Interior turnkey',
    status: 'Completed',
    lead: 'A Ludhiana restaurant shaped through atmosphere, material and light.',
    copy: 'The Soir 7 is a restaurant interior project in Ludhiana—resolved through material, lighting and carefully finished hospitality details.',
    images: ['/media/soir7-interior-1.jpg', '/media/soir7-interior-2.jpg', '/media/soir7-interior-3.jpg'],
    brandUrl: 'https://www.instagram.com/soir7xbabas/',
  },
  {
    slug: 'box-cricket-ground',
    number: '06',
    title: 'Box Cricket Ground',
    type: 'Recreation · Commercial',
    size: 'Sports facility',
    location: 'Ludhiana',
    service: 'Construction · Delivery',
    status: 'Completed',
    lead: 'A box cricket ground delivered in Ludhiana.',
    copy: 'RS Developers delivered this box cricket ground in Ludhiana as part of our commercial and recreational project work.',
    images: ['/media/rs-resort.png'],
  },
];

export const ongoingProjects = [
  '500 sq yard residential',
  '200 sq yard commercial complex',
  '225 sq yard commercial complex',
  '300 sq yard hospital',
  '350 sq yard hospital',
  'Hotel rooms renovation',
  'Banquet hall at hotel',
] as const;

export const processSteps: string[] = [
  'Understanding the requirements',
  'Site visit and consultation',
  'Estimate or BOQ',
  'Final discussion',
  'Agreement',
  'Planning',
  'Execution',
  'Snagging',
  'Final handover',
];

export const contactDetails: ContactDetails = {
  businessName: 'RS Developers',
  tagline: 'You Dream It. We Build It.',
  taglineLine1: 'You Dream It.',
  taglineLine2: 'We Build It.',
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
  yearsInBusiness: '4+',
  projectsCompleted: '30+',
  instagramUrl: 'https://www.instagram.com/rs_construction_interiors',
  values: [
    'Transparency',
    'Quality',
    'On-time delivery culture',
    'All things under one roof',
  ],
  founder: {
    name: 'Er. Rahul Bhardwaj',
    designation: 'Founder · Owner',
    experience: '13 years',
    memberships: ['JCI India', 'BNI', 'NPC Club', 'Rotary Club'],
  },
};
