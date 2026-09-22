'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, animate, motion, stagger, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowDownRight, ArrowRight, Building2, Camera, Check, ChevronRight, Factory, Hammer, House, Mail, MapPin, Menu, MessageCircle, Phone, ShieldCheck, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const services = [
  { icon: House, number: '01', title: 'Residential', statement: ['Living begins', 'here'], scope: 'Homes · Villas · Renovations', image: '/media/rs-residence.png', copy: 'Thoughtful homes, precisely built around the people, rituals and ambitions they are made to hold.' },
  { icon: Building2, number: '02', title: 'Commercial', statement: ['Business moves', 'here'], scope: 'Hospitality · Retail · Workspaces', image: '/media/coyaba-facade.webp', copy: 'High-performing spaces that elevate the customer experience and strengthen the business behind it.' },
  { icon: Factory, number: '03', title: 'Industrial', statement: ['Industry grows', 'here'], scope: 'Facilities · Planning · Execution', image: '/media/rs-resort.png', copy: 'Robust facilities engineered for safer workflows, dependable performance and tomorrow’s growth.' },
  { icon: Hammer, number: '04', title: 'Turnkey interiors', statement: ['Detail lives', 'here'], scope: 'Civil · Services · Finishes', image: '/media/rs-hotel.png', copy: 'Every service, material and finish resolved through one vision—and delivered by one accountable team.' },
];

const projects = [
  { number: '01', slug: 'the-coyaba', title: 'The Coyaba', type: 'Resort · Delivered', size: '98,000 square feet', place: 'Ludhiana', images: ['/media/coyaba-facade.webp', '/media/coyaba-garden.webp', '/media/coyaba-detail-1.webp', '/media/coyaba-detail-2.webp'], logo: '/brand/coyaba-logo.webp', url: 'https://coyaba.in/', credit: 'Project photography · The Coyaba', copy: 'A 98,000-square-foot hospitality destination shaped from planning through construction and final interior detail.' },
  { number: '02', slug: 'nirvana-luxury-hotel', title: 'Nirvana Luxury Hotel', type: 'Hospitality · In progress', size: 'Expansion and renewal', place: 'Ludhiana', images: ['/media/nirvana-facade.jpg', '/media/nirvana-pool.jpg', '/media/nirvana-interior.jpg'], logo: '/brand/nirvana-logo.png', url: 'https://www.nirvanahotels.co.in/', credit: 'Project photography · Nirvana', copy: 'A considered expansion and renewal of guest rooms and banquet spaces within a landmark luxury hotel.' },
  { number: '03', slug: 'gold-dust-residence', title: 'Gold Dust Residence', type: 'Residential · Turnkey', size: '1,925 square feet', place: 'Ludhiana', images: ['/media/rs-residence.png'], credit: 'Design representation · photography forthcoming', copy: 'A complete 1,925-square-foot home, coordinated from the first plan to the final handover.' },
  { number: '04', slug: 'the-soir-7', title: 'The Soir 7', type: 'Restaurant · Interiors', size: 'Hospitality interiors', place: 'Ludhiana', images: ['/media/soir7-interior-1.jpg', '/media/soir7-interior-2.jpg', '/media/soir7-interior-3.jpg'], url: 'https://www.instagram.com/soir7xbabas/', credit: 'Location photography · The Soir 7', copy: 'An atmospheric restaurant interior where warm materiality and intimate lighting shape every guest moment.' },
];

const projectRegister = [
  { type: 'Commercial', name: 'Commercial development', scale: '5,000 square feet' },
  { type: 'Sports', name: 'Box cricket ground', scale: 'Ludhiana' },
  { type: 'Residential', name: 'Residence in progress', scale: '500 square yards' },
  { type: 'Healthcare', name: 'Two facilities in progress', scale: '300 and 350 square yards' },
];

const steps = [
  { title: 'Understand the requirements', copy: 'We begin with the real brief: how the space must feel, function and perform—then align scope, priorities and investment.' },
  { title: 'Site visit and consultation', copy: 'We read the site closely, uncover its constraints and opportunities, and define the smartest way forward.' },
  { title: 'Estimate and BOQ', copy: 'Every quantity, specification and cost is made visible before work begins—so confidence replaces guesswork.' },
  { title: 'Final discussion and agreement', copy: 'We close every open decision and set clear ownership, milestones and terms before anyone steps on site.' },
  { title: 'Planning and execution', copy: 'Plans become coordinated action as our team manages trades, materials, quality and progress on the ground.' },
  { title: 'Snagging and final handover', copy: 'We resolve every final detail and hand over a finished space that is ready to perform from day one.' },
];

function BrandMark() {
  return <span className="brand-mark"><Image src="/brand/rs-developers-logo-v2.png" alt="RS Developers — Construction & Interior" width={1774} height={887} priority /></span>;
}

function OpeningLoader() {
  const [visible, setVisible] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.documentElement.classList.add('loader-active');
    const timer = window.setTimeout(() => setVisible(false), reduce ? 120 : 2900);
    return () => {
      window.clearTimeout(timer);
      document.documentElement.classList.remove('loader-active');
    };
  }, [reduce]);

  useEffect(() => {
    if (!visible) document.documentElement.classList.remove('loader-active');
  }, [visible]);

  return <AnimatePresence>
    {visible && <motion.output
      className="opening-loader"
      initial={{ opacity: 1 }}
      exit={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: reduce ? .12 : .82, ease: [.76, 0, .24, 1] }}
      aria-label="Opening RS Developers"
    >
      <motion.div
        className="loader-architecture"
        initial={reduce ? false : { scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.6, ease: [.22, 1, .36, 1] }}
        aria-hidden="true"
      >
        <Image src="/media/coyaba-detail-2.webp" alt="" fill priority sizes="100vw" />
      </motion.div>
      <div className="loader-coordinate loader-coordinate-top">30.9010° N</div>
      <div className="loader-coordinate loader-coordinate-bottom">75.8573° E</div>
      <motion.div
        className="loader-lockup"
        initial={reduce ? false : { opacity: 0, scale: .88, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: .9, delay: .18, ease: [.22, 1, .36, 1] }}
      >
        <motion.div
          className="loader-logo"
          initial={reduce ? false : { clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 1.05, delay: .12, ease: [.22, 1, .36, 1] }}
        >
          <BrandMark />
        </motion.div>
        <motion.p
          className="loader-tagline"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .65, delay: .92, ease: [.22, 1, .36, 1] }}
        >
          <span>You dream it.</span> <em>We build it.</em>
        </motion.p>
        <motion.span
          className="loader-rule"
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: .8, delay: 1.25, ease: [.22, 1, .36, 1] }}
        />
        <motion.div
          className="loader-meta"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .55, delay: 1.48 }}
        >
          <span>Construction</span><i />
          <span>Interiors</span><i />
          <span>Turnkey</span>
        </motion.div>
      </motion.div>
      <motion.p className="loader-place" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.75, duration: .5 }}>Ludhiana · Punjab</motion.p>
    </motion.output>}
  </AnimatePresence>;
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 45 }} whileInView={reduce ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .85, ease: [.2, .7, .2, 1] }}>{children}</motion.div>;
}

function Odometer({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, amount: .8 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!visible) return;
    const controls = animate(count, value, { duration: reduce ? 0 : 2.1, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [count, reduce, value, visible]);
  return <div className="stat" ref={ref}><p><motion.strong>{rounded}</motion.strong><b>{suffix}</b></p><span>{label}</span></div>;
}

function ProjectVisual({ images, title, credit }: { images: string[]; title: string; credit: string }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const visualRef = useRef<HTMLFieldSetElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: visualRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
  useEffect(() => {
    if (!playing || reduce || images.length < 2) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % images.length), 1500);
    return () => window.clearInterval(timer);
  }, [images.length, playing, reduce]);
  // The fieldset exposes button controls for every image; hover/focus only adds automatic progression.
  // oxlint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  return <motion.fieldset ref={visualRef} className="project-visual" aria-label={`${title} image gallery`} variants={{ hidden: { clipPath: 'inset(0 0 100% 0)' }, visible: { clipPath: 'inset(0 0 0% 0)', transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] } } }} onFocus={() => setPlaying(true)} onBlur={() => { setPlaying(false); setActive(0); }} onMouseEnter={() => setPlaying(true)} onMouseLeave={() => { setPlaying(false); setActive(0); }}>
    <motion.div className="project-image-track" style={{ y: reduce ? 0 : imageY }}><AnimatePresence initial={false}>{<motion.div className="project-image-layer" key={`${title}-${active}`} initial={reduce ? false : { opacity: 0, scale: 1.08, clipPath: 'inset(0 0 0 12%)' }} animate={{ opacity: 1, scale: 1, clipPath: 'inset(0 0 0 0%)' }} exit={reduce ? undefined : { opacity: 0, scale: 1.025 }} transition={{ duration: .8, ease: [.22, 1, .36, 1] }}><Image src={images[active]} alt={`${title} project view ${active + 1}`} fill sizes="(max-width: 760px) 100vw, 62vw" /></motion.div>}</AnimatePresence></motion.div>
    <div className="image-count"><AnimatePresence mode="wait" initial={false}><motion.span key={active} initial={reduce ? false : { y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={reduce ? undefined : { y: -10, opacity: 0 }} transition={{ duration: .25 }}>{String(active + 1).padStart(2, '0')}</motion.span></AnimatePresence> / {String(images.length).padStart(2, '0')}</div>
    <div className="project-dots">{images.map((image, index) => <button key={image} type="button" className={index === active ? 'is-active' : ''} onClick={() => setActive(index)} aria-label={`Show ${title} image ${index + 1}`} />)}</div>
    <legend>{credit}{images.length > 1 && ' · hover to explore'}</legend>
  </motion.fieldset>;
}

function ProjectCase({ project }: { project: (typeof projects)[number] }) {
  const reduce = useReducedMotion();
  const detail = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: .65, ease: [.22, 1, .36, 1] as const } } };
  return <div className="project-reveal"><motion.article initial={reduce ? false : 'hidden'} whileInView={reduce ? undefined : 'visible'} viewport={{ once: true, amount: .2 }} variants={{ hidden: {}, visible: { transition: { delayChildren: stagger(.11, { startDelay: .12 }) } } }}><ProjectVisual images={project.images} title={project.title} credit={project.credit} /><motion.div className="project-data" variants={{ hidden: {}, visible: { transition: { delayChildren: stagger(.085, { startDelay: .32 }) } } }}><motion.span variants={detail}>{project.number}</motion.span>{project.logo && <motion.div className="project-logo-wrap" variants={detail}><Image className="project-logo" src={project.logo} alt={`${project.title} logo`} width={500} height={500} /></motion.div>}<motion.p variants={detail}>{project.type}</motion.p><motion.h3 variants={detail}>{project.title}</motion.h3><motion.p className="project-copy" variants={detail}>{project.copy}</motion.p><motion.dl variants={detail}><div><dt>Scale</dt><dd>{project.size}</dd></div><div><dt>Location</dt><dd>{project.place}</dd></div></motion.dl><motion.a className="project-link" href={`/projects/${project.slug}`} variants={detail}>Explore case study <ArrowRight /></motion.a></motion.div></motion.article></div>;
}

function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: footerRef, offset: ['start end', 'end end'] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 92, damping: 28, mass: .32, restDelta: .001 });
  const imageX = useTransform(smoothProgress, [0, .58], ['-14%', '0%']);
  const imageScale = useTransform(smoothProgress, [0, .58], [.82, 1]);
  const copyY = useTransform(smoothProgress, [0, .52], [86, 0]);
  const copyOpacity = useTransform(smoothProgress, [.06, .38], [0, 1]);
  const wordmarkY = useTransform(smoothProgress, [.32, .88], [140, 0]);
  const wordmarkScale = useTransform(smoothProgress, [.32, .88], [.88, 1]);
  const lineScale = useTransform(smoothProgress, [0, .42], [0, 1]);

  return <footer className="site-footer" ref={footerRef}>
    <section className="footer-scroll-scene">
      <div className="footer-sticky">
        <div className="footer-topline"><BrandMark /><p>Construction · Interiors · Turnkey<br />Punjab &amp; Himachal Pradesh</p></div>
        <motion.span className="footer-rule" style={{ scaleX: reduce ? 1 : lineScale }} />
        <div className="footer-focus">
          <motion.figure className="footer-scene-image" style={{ x: reduce ? 0 : imageX, scale: reduce ? 1 : imageScale }}><Image src="/media/coyaba-garden.webp" alt="The Coyaba grounds in Ludhiana" fill sizes="(max-width: 720px) 72vw, 30vw" /><figcaption>Built by RS Developers · Ludhiana</figcaption></motion.figure>
          <motion.div className="footer-invitation" style={{ y: reduce ? 0 : copyY, opacity: reduce ? 1 : copyOpacity }}><p className="eyebrow">Your next landmark</p><h2>Let’s shape what<br /><em>Ludhiana remembers.</em></h2><p>Bring us the vision. We’ll engineer the path from first conversation to final handover.</p><a href="https://wa.me/919803247476" target="_blank" rel="noreferrer">Build with us <ArrowRight /></a></motion.div>
        </div>
        <motion.div className="footer-mega" aria-hidden="true" style={{ y: reduce ? 0 : wordmarkY, scale: reduce ? 1 : wordmarkScale }}>RS <span>DEVELOPERS</span></motion.div>
      </div>
    </section>
    <section className="footer-directory">
      <div className="footer-signoff"><span>You dream it.</span><strong>We build it.</strong></div>
      <div><span>Office</span><address>303, Second Floor<br />Sethi Complex<br />Bharat Nagar Chowk<br />Ludhiana, Punjab</address></div>
      <div><span>Contact</span><a href="tel:+919803247476">+91 98032 47476</a><a href="tel:+917986984675">+91 79869 84675</a><a href="mailto:rsdrsdevelopers@gmail.com">rsdrsdevelopers@gmail.com</a></div>
      <div><span>Explore</span><a href="#about">Who we are</a><a href="#services">What we build</a><a href="#projects">Selected work</a><a href="#instagram">Instagram</a><a href="#process">Our process</a></div>
    </section>
    <div className="footer-bottom"><p>© 2026 RS Developers. All rights reserved.</p><p>Punjab · Himachal Pradesh</p><a href="#home">Back to top <ArrowRight /></a></div>
  </footer>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();
  const sendToWhatsApp = (event: { preventDefault: () => void; currentTarget: HTMLFormElement }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (field: string) => {
      const entry = data.get(field);
      return typeof entry === 'string' ? entry.trim() : '';
    };
    const message = [
      'Hello RS Developers, I would like to discuss a project.',
      '',
      `Name: ${value('name')}`,
      `Phone: ${value('phone')}`,
      `Project type: ${value('type')}`,
      `Location: ${value('location') || 'Not specified'}`,
      `Project brief: ${value('message') || 'Not provided'}`,
    ].join('\n');
    window.open(`https://wa.me/919803247476?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };
  return <main>
    <OpeningLoader />
    <header className="site-header"><Link href="/"><BrandMark /></Link><nav className="desktop-nav" aria-label="Primary navigation"><Link href="/about">Studio</Link><Link href="/services">Capabilities</Link><Link href="/projects">Projects</Link><Link href="/#process">Process</Link></nav><Link className="header-contact" href="/contact">Start a project <ArrowRight /></Link><button className="menu-toggle" type="button" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Menu /></button></header>
    <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}><div><BrandMark /><button type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation"><X /></button></div><nav>{[{ label: 'Studio', href: '/about' }, { label: 'Capabilities', href: '/services' }, { label: 'Projects', href: '/projects' }, { label: 'Process', href: '/#process' }, { label: 'Contact', href: '/contact' }].map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ChevronRight /></Link>)}</nav></div>

    <section className="hero" id="home"><video autoPlay={!reduceMotion} muted loop playsInline preload="metadata" poster="/media/coyaba-facade.webp"><source src="/media/nirvana-rooms.mp4" type="video/mp4" /></video><div className="hero-wash" /><div className="hero-index">Ludhiana · Punjab</div><div className="hero-copy"><p className="kicker">Construction · Interiors · Turnkey</p><h1><motion.span initial={reduceMotion ? false : { opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .15 }}>You dream it.</motion.span><motion.em initial={reduceMotion ? false : { opacity: 0, x: 90 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .3 }}>We build it.</motion.em></h1><div className="hero-lower"><p>Engineered with discipline. Finished with intent. Delivered by one accountable team.</p><div className="hero-actions"><a className="solid-button" href="#contact">Bring us your vision <ArrowRight /></a><a className="line-link" href="#projects">See what we’ve built <ArrowDownRight /></a></div></div></div><div className="hero-project"><span>Project film</span><p>Nirvana Luxury Hotel</p></div><a className="hero-scroll" href="#about">Discover RS Developers <span /></a></section>

    <section className="proof" aria-label="RS Developers at a glance"><Odometer value={13} suffix="+" label="Years of leadership experience" /><Odometer value={30} suffix="+" label="Projects delivered and in progress" /><Odometer value={4} label="Years building as RS Developers" /><Odometer value={2} label="States served" /></section>

    <section className="client-strip" id="clients" aria-labelledby="client-strip-title">
      <div className="client-strip-heading"><span>Trusted spaces</span><p id="client-strip-title">Selected clients &amp;<br />project brands</p></div>
      <div className="client-strip-track">
        <motion.a href="https://coyaba.in/" target="_blank" rel="noreferrer" initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .7 }} transition={{ duration: .55 }} aria-label="Visit The Coyaba"><Image src="/brand/coyaba-logo.webp" alt="The Coyaba" width={500} height={500} /></motion.a>
        <motion.a className="client-logo-nirvana" href="https://www.nirvanahotels.co.in/" target="_blank" rel="noreferrer" initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .7 }} transition={{ duration: .55, delay: .08 }} aria-label="Visit Nirvana Luxury Hotel"><Image src="/brand/nirvana-logo.png" alt="Nirvana Luxury Hotel" width={500} height={500} /></motion.a>
        <motion.a className="client-wordmark client-wordmark-soir" href="https://www.instagram.com/soir7xbabas/" target="_blank" rel="noreferrer" initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .7 }} transition={{ duration: .55, delay: .16 }} aria-label="Visit The Soir 7 on Instagram"><small>The</small><strong>Soir 7</strong><span>Restaurant · Ludhiana</span></motion.a>
        <motion.div className="client-wordmark" initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .7 }} transition={{ duration: .55, delay: .24 }}><strong>Gold Dust</strong><span>Residence · Ludhiana</span></motion.div>
      </div>
    </section>

    <section className="intro section" id="about"><div className="section-label"><span>01</span><p>Who we are</p></div><Reveal className="intro-copy"><p className="eyebrow">Engineering certainty into every square foot.</p><h2>We don’t just build spaces. We take responsibility for them.</h2><p>RS Developers brings planning, construction and interiors under one accountable roof. From Ludhiana across Punjab and Himachal Pradesh, we turn complex briefs into clear decisions, disciplined execution and spaces made to endure.</p></Reveal><Reveal className="principles"><span>The RS standard</span><ul><li><Check /> Clear scopes</li><li><Check /> Uncompromised quality</li><li><Check /> Visible timelines</li><li><Check /> One accountable team</li></ul></Reveal></section>

    <section className="services section" id="services"><div className="services-topline"><div className="section-label light-label"><span>02</span><p>What we build</p></div><p>Four capabilities. One uncompromising standard.</p></div><div className="service-manifesto" aria-live="polite"><AnimatePresence mode="wait"><motion.h2 key={activeService} initial={reduceMotion ? false : { opacity: 0, y: 55 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -40 }} transition={{ duration: .55, ease: [.2, .7, .2, 1] }}><span>{services[activeService].statement[0]}</span><em>{services[activeService].statement[1]}</em></motion.h2></AnimatePresence></div><div className="service-showcase"><div className="service-stage">{services.map((service, index) => <Image key={service.title} className={index === activeService ? 'is-active' : ''} src={service.image} alt="" fill sizes="(max-width: 720px) 100vw, 52vw" />)}<div className="service-stage-shade" /><div className="service-stage-title"><span>{services[activeService].number}</span><p>{services[activeService].scope}</p><strong>{services[activeService].title}</strong></div></div><div className="service-index">{services.map(({ icon: Icon, ...service }, index) => <motion.button type="button" className={index === activeService ? 'is-active' : ''} onMouseEnter={() => setActiveService(index)} onFocus={() => setActiveService(index)} onClick={() => setActiveService(index)} initial={reduceMotion ? false : { opacity: 0, x: 35 }} whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} key={service.number}><span>{service.number}</span><div><h3>{service.title}</h3><p>{service.copy}</p><small>{service.scope}</small></div><Icon /><ArrowRight className="service-arrow" /></motion.button>)}<a className="service-cta" href="#contact">Explore your project <ArrowRight /></a></div></div></section>

    <section className="projects section" id="projects"><div className="projects-head"><div className="section-label"><span>03</span><p>Selected work</p></div><Reveal><p className="eyebrow">Built to be experienced. Made to endure.</p><h2>The work is our word.</h2><p>From landmark hospitality to considered homes, every project carries the same signature: clarity in planning, control in execution and care in every finish.</p></Reveal></div><div className="project-list">{projects.map((project) => <ProjectCase project={project} key={project.number} />)}</div><div className="project-register"><div className="project-register-heading"><span>Project register</span><p>More taking shape across Ludhiana</p></div>{projectRegister.map((project, index) => <motion.div className="project-register-row" initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .8 }} transition={{ delay: index * .07, duration: .5 }} key={project.name}><small>{String(index + 1).padStart(2, '0')} · {project.type}</small><p>{project.name}</p><em>{project.scale}</em></motion.div>)}</div></section>

    <section className="process section" id="process"><div className="process-heading"><div className="section-label"><span>04</span><p>Our process</p></div><Reveal><p className="eyebrow">No blind spots. No loose ends.</p><h2>A clear path from first brief to final handover.</h2></Reveal></div><ol>{steps.map((step, index) => <motion.li className={index === activeStep ? 'is-active' : ''} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .55 }} transition={{ delay: (index % 2) * .08, duration: .55 }} key={step.title} onMouseEnter={() => setActiveStep(index)}><button type="button" aria-expanded={index === activeStep} onFocus={() => setActiveStep(index)} onClick={() => setActiveStep(index)}><span>0{index + 1}</span><div className="process-step-copy"><strong>{step.title}</strong><AnimatePresence initial={false}>{index === activeStep && <motion.p initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: .3 }}>{step.copy}</motion.p>}</AnimatePresence></div><ArrowRight /></button></motion.li>)}</ol><div className="process-note"><p>You always know what is happening, what comes next and who is responsible for it.</p><a href="#contact">Plan with confidence <ArrowRight /></a></div></section>

    <section className="founder section" id="leadership">
      <Reveal className="founder-card">
        <figure className="founder-portrait"><Image src="/media/rahul-bhardwaj-founder.jpg" alt="Rahul Bhardwaj, owner and founder of RS Developers" fill sizes="(max-width: 720px) 100vw, 46vw" /><figcaption><span>Owner &amp; founder</span><strong>Engineer-led</strong></figcaption></figure>
        <div className="founder-story"><p className="kicker dark-kicker">Engineer-led leadership</p><h2>Rahul Bhardwaj</h2><p className="founder-role">Owner &amp; Founder · 13 years of experience</p><p>Rahul leads from the site, not from a distance. His engineering judgment, exacting eye and belief in complete transparency shape every RS Developers project—from the first conversation to the final key.</p><div className="leadership-pillars"><article><span>01 · Vision</span><h3>To set the regional standard for construction built on trust.</h3><p>Enduring spaces, delivered with integrity—and relationships that outlast the handover.</p></article><article><span>02 · Mission</span><h3>Make ambitious projects feel clear, controlled and achievable.</h3><p>One accountable team. Visible decisions. Quality without compromise.</p></article></div>
          <div className="affiliations" aria-label="Professional memberships"><div><Image src="/affiliations/jci.svg" alt="JCI" width={512} height={205} /><span>JCI India</span></div><div><Image src="/affiliations/bni.png" alt="BNI" width={200} height={77} /><span>BNI</span></div><div className="affiliation-monogram" aria-label="NPC Club"><strong>NPC</strong><span>Club</span></div><div><Image src="/affiliations/rotary.svg" alt="Rotary International" width={392} height={148} /><span>Rotary Club</span></div></div>
        </div>
      </Reveal>
      <div className="active-work"><span>Projects in progress</span><div><strong>500</strong><small>Square yards · Residence</small></div><div><strong>200 / 225</strong><small>Square yards · Commercial</small></div><div><strong>300 / 350</strong><small>Square yards · Healthcare</small></div><div><strong>Hotel renewal</strong><small>Guest rooms · Banquet hall</small></div></div>
    </section>

    <section className="instagram section" id="instagram"><div className="instagram-heading"><div className="section-label"><span>05</span><p>On Instagram</p></div><Reveal><p className="eyebrow">Beyond the finished frame</p><h2>See the thinking, craft and progress behind the reveal.</h2><p>Step inside our active sites and finished spaces—the details, decisions and daily discipline that turn drawings into landmarks.</p></Reveal></div><div className="instagram-grid">{[{ src: '/media/coyaba-detail-1.webp', label: 'Hospitality' }, { src: '/media/soir7-interior-1.jpg', label: 'Interiors' }, { src: '/media/nirvana-interior.jpg', label: 'Renovation' }, { src: '/media/rs-residence.png', label: 'Residential' }].map((item, index) => <motion.figure key={item.src} initial={reduceMotion ? false : { opacity: 0, y: 48 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: index * .09, duration: .7, ease: [.2, .7, .2, 1] }}><Image src={item.src} alt={`${item.label} work by RS Developers`} fill sizes="(max-width: 720px) 50vw, 25vw" /><figcaption><span>{String(index + 1).padStart(2, '0')} · {item.label}</span><Camera /></figcaption></motion.figure>)}</div><div className="instagram-callout"><p>Follow the making, not just the reveal.</p><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Step inside our sites <Camera /></a></div></section>

    <section className="contact section" id="contact"><div className="contact-details"><div className="section-label light-label"><span>06</span><p>Start a project</p></div><h2>Your next landmark starts with a clear conversation.</h2><p>Tell us what you want to create, where you are building and what matters most. We’ll help define the smartest path forward.</p><div className="contact-links"><a href="tel:+919803247476"><Phone /> +91 98032 47476</a><a href="tel:+917986984675"><Phone /> +91 79869 84675</a><a href="mailto:rsdrsdevelopers@gmail.com"><Mail /> rsdrsdevelopers@gmail.com</a><a href="https://maps.google.com/?q=303+Second+Floor+Sethi+Complex+Bharat+Nagar+Chowk+Ludhiana" target="_blank" rel="noreferrer"><MapPin /> 303, Second Floor, Sethi Complex,<br />Bharat Nagar Chowk, Ludhiana</a></div></div><div className="contact-form-wrap">{sent ? <div className="success"><ShieldCheck /><h3>Your brief is ready.</h3><p>WhatsApp has opened with your project details. Send the message there to begin the conversation with our team.</p><a href="https://wa.me/919803247476" target="_blank" rel="noreferrer">Return to WhatsApp <MessageCircle /></a><button onClick={() => setSent(false)}>Share another brief</button></div> : <form onSubmit={sendToWhatsApp}><Field><FieldLabel htmlFor="name">Your name *</FieldLabel><Input id="name" name="name" required /></Field><Field><FieldLabel htmlFor="phone">Phone number *</FieldLabel><Input id="phone" name="phone" type="tel" required /></Field><Field><FieldLabel htmlFor="type">Project type *</FieldLabel><select id="type" name="type" required defaultValue=""><option value="" disabled>Select project type</option><option>Residential</option><option>Commercial</option><option>Industrial</option><option>Turnkey interiors</option><option>Hospitality</option></select></Field><Field><FieldLabel htmlFor="location">Project location</FieldLabel><Input id="location" name="location" /></Field><Field className="full"><FieldLabel htmlFor="message">Share your vision</FieldLabel><Textarea id="message" name="message" rows={4} /></Field><Button className="full" type="submit">Start on WhatsApp <MessageCircle /></Button></form>}</div></section>

    <a className="whatsapp-float" href="https://wa.me/919803247476?text=Hello%20RS%20Developers%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" aria-label="Chat with RS Developers on WhatsApp"><MessageCircle /><span>WhatsApp</span></a>

    <SiteFooter />
  </main>;
}
