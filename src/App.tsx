import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Menu, MoveRight, X } from 'lucide-react';

const services = [
  { number: '01', name: 'Reels & short-form', detail: 'Made to stop the scroll, built around a real idea.' },
  { number: '02', name: 'Ads & campaign films', detail: 'A clear point of view, from first frame to final cut.' },
  { number: '03', name: 'Corporate video', detail: 'The human story behind what your business does.' },
  { number: '04', name: 'YouTube content', detail: 'Thoughtful formats, designed for the long watch.' },
  { number: '05', name: 'Documentaries', detail: 'People, places and stories worth taking the time for.' },
  { number: '06', name: 'VFX & compositing', detail: 'A little visual alchemy, always in service of the story.' },
  { number: '07', name: 'Social media motion', detail: 'A living visual language for every-sized screen.' },
  { number: '08', name: 'Campaign content', detail: 'One strong idea, carried all the way through.' },
];

const workStudies = [
  {
    number: 'STUDY 01',
    title: 'A softer kind of impact',
    type: 'Light / material / movement',
    image: '/asr-study-hero.png',
    alt: 'Concept visual study of fabric sweeping through a cinematic blue-toned architectural space',
    className: 'study-frame study-frame--fabric',
  },
  {
    number: 'STUDY 02',
    title: 'The shape of a pause',
    type: 'Glass / reflection / stillness',
    image: '/asr-study-glass.png',
    alt: 'Abstract concept study of rippling water and a glass sphere in cool blue light',
    className: 'study-frame study-frame--glass',
  },
  {
    number: 'STUDY 03',
    title: 'Color, let loose',
    type: 'Pigment / energy / contrast',
    image: '/asr-study-ink.png',
    alt: 'Abstract ink plume floating in a dark, cinematic blue-violet space',
    className: 'study-frame study-frame--ink',
  },
];

const navItems = [
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site film-grain">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-lockup" href="#top" aria-label="ASR Motion Studio — home" data-testid="link-home">
            <img className="brand-logo" src={`${import.meta.env.BASE_URL}asr-motion-studio-logo.jpg`} alt="ASR Motion Studio" />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} className="nav-link" href={item.href} data-testid={`link-nav-${item.label.toLowerCase()}`}>{item.label}</a>
            ))}
          </nav>
          <a className="header-cta" href="mailto:morerushi@gmail.com" data-testid="link-header-email">
            <span>Let’s talk</span><ArrowUpRight size={15} strokeWidth={1.8} />
          </a>
          <button
            type="button"
            className="mobile-menu-button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                <span className="mono">0{index + 1}</span>{item.label}<ArrowUpRight size={16} />
              </a>
            ))}
            <a className="mobile-nav-contact" href="mailto:morerushi@gmail.com" onClick={() => setMenuOpen(false)}>Start a conversation</a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow hero-kicker reveal"><span className="status-dot" /> Independent creative studio <span className="kicker-divider">/</span> India + everywhere</div>
            <h1 className="hero-word reveal delay-1" id="hero-title">Stories<br />that <em className="serif">stay</em><br />in motion<span className="period">.</span></h1>
            <p className="hero-description reveal delay-2">Strategy with a pulse. Films with a point of view. We help brands make the feeling behind the message impossible to miss.</p>
            <div className="hero-actions reveal delay-3">
              <a className="button-primary" href="#work" data-testid="link-explore-work">Explore the studio <ArrowDown className="arrow-shift" size={16} /></a>
              <span className="hero-caption mono">BRAND THINKING<br />MEETS MOVING IMAGE</span>
            </div>
          </div>
          <div className="hero-visual hero-image">
            <img src={`${import.meta.env.BASE_URL}asr-study-hero.png`} alt="Concept visual study of a fabric form moving through a cinematic architectural space" data-testid="img-hero-study" />
            <div className="hero-frame-top"><span className="record-dot" /> <span className="mono">ASR / VISUAL STUDY 001</span></div>
            <div className="hero-frame-bottom">
              <span className="hero-frame-caption">An idea, finding its shape.</span>
              <span className="frame-index mono">01—03</span>
            </div>
            <div className="hero-stamp mono">CONCEPT<br />VISUAL STUDY</div>
          </div>
          <div className="hero-side-note mono">THINK<br />FEEL<br />MOVE <span>↘</span></div>
          <a className="scroll-cue mono" href="#studio" aria-label="Scroll to studio" data-testid="link-scroll-studio"><span />SCROLL TO FEEL IT</a>
        </section>

        <div className="ticker" aria-label="Ideas in motion">
          <div className="ticker-track">
            {Array.from({ length: 4 }, (_, index) => (
              <span className="ticker-unit" key={index} aria-hidden={index > 0}>
                <span>Make it matter</span><i /> <span>Make it move</span><b aria-hidden="true">+</b>
              </span>
            ))}
          </div>
        </div>

        <section className="studio-section" id="studio" aria-labelledby="studio-title">
          <div className="section-shell studio-grid">
            <div className="studio-label">
              <span className="eyebrow"><span className="section-number">01</span> / THE STUDIO</span>
              <div className="studio-orbit" aria-hidden="true"><span>ASR</span><i /><b /></div>
              <p className="mono studio-note">SMALL BY DESIGN.<br />BIG ON THE IDEA.</p>
            </div>
            <div className="studio-copy">
              <h2 id="studio-title">Good stories don’t<br />just <em className="serif">show up.</em><br />They stay with you.</h2>
              <div className="studio-copy-bottom">
                <span className="studio-rule" />
                <p>ASR Motion Studio is an independent creative practice led by a brand strategist and freelance creative guide. From the first “what if?” to the final frame, we turn what makes a brand <em>itself</em> into stories people can see, feel and remember.</p>
              </div>
              <div className="studio-values">
                <span><b>01</b> Strategy before spectacle</span>
                <span><b>02</b> Clarity in every frame</span>
                <span><b>03</b> Made together, not handed off</span>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="section-shell">
            <div className="services-heading">
              <div>
                <span className="eyebrow"><span className="section-number section-number--light">02</span> / WHAT WE MAKE</span>
                <h2 id="services-title">One story.<br /><em className="serif">Many ways</em> in.</h2>
              </div>
              <p>Pick a format. Bring a half-formed thought. We’ll find the right way to give it shape and momentum.</p>
            </div>
            <div className="services-list">
              {services.map((service) => (
                <div className="service-row" key={service.number} data-testid={`service-${service.number}`}>
                  <span className="service-number mono">{service.number}</span>
                  <h3>{service.name}</h3>
                  <p>{service.detail}</p>
                  <ArrowUpRight className="service-arrow" size={18} strokeWidth={1.4} />
                </div>
              ))}
              <div className="service-row service-row--strategy" data-testid="service-strategy">
                <span className="service-number mono">09</span>
                <h3>Brand strategy & creative direction</h3>
                <p>Find the story underneath the story. Then give it a visual world.</p>
                <ArrowUpRight className="service-arrow" size={18} strokeWidth={1.4} />
              </div>
            </div>
            <div className="services-foot">
              <span className="mono">FROM A SINGLE FRAME TO THE WHOLE CAMPAIGN</span>
              <a href="mailto:morerushi@gmail.com">Tell us what you’re imagining <MoveRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-shell">
            <div className="work-heading">
              <div>
                <span className="eyebrow"><span className="section-number">03</span> / A FEEL FOR THE FRAME</span>
                <h2 id="work-title">Work in<br /><em className="serif">progress.</em></h2>
              </div>
              <div className="work-intro">
                <span className="work-note-mark">↘</span>
                <p>These are visual studies, not client projects — a glimpse at the textures, moods and motion we love to explore.</p>
              </div>
            </div>
            <div className="work-grid">
              {workStudies.map((study) => (
                <article className="work-card" key={study.number} data-testid={`card-study-${study.number.replaceAll(' ', '-').toLowerCase()}`}>
                  <div className={study.className}>
                    <img className="work-study" src={`${import.meta.env.BASE_URL}${study.image.replace(/^\//, '')}`} alt={study.alt} loading="lazy" />
                    <span className="study-tag mono">CONCEPT / VISUAL STUDY</span>
                    <span className="study-count mono">{study.number}</span>
                    <span className="study-open" aria-hidden="true"><ArrowUpRight size={18} /></span>
                  </div>
                  <div className="work-card-caption">
                    <div><h3>{study.title}</h3><span className="mono">{study.type}</span></div>
                    <span className="caption-number mono">{study.number.replace('STUDY ', '')}</span>
                  </div>
                </article>
              ))}
            </div>
            <p className="work-replace mono">A PLACE FOR THE REAL THING — PROJECTS CAN LIVE HERE AS THEY COME TO LIFE.</p>
          </div>
        </section>

        <section className="approach-section" aria-labelledby="approach-title">
          <div className="section-shell approach-layout">
            <div className="approach-heading">
              <span className="eyebrow"><span className="section-number">04</span> / HOW WE GET THERE</span>
              <h2 id="approach-title">Clear heads.<br /><em className="serif">Open minds.</em></h2>
              <p>No bloated process. No production for production’s sake. Just the right people around one good idea.</p>
            </div>
            <div className="approach-steps">
              <article className="approach-step">
                <span className="step-index mono">01 / LISTEN</span>
                <div><h3>Find the real story.</h3><p>We get close to your audience, your ambition and the thing only you can say.</p></div>
                <span className="step-symbol" aria-hidden="true">↘</span>
              </article>
              <article className="approach-step">
                <span className="step-index mono">02 / SHAPE</span>
                <div><h3>Make a point of view.</h3><p>We turn the brief into a thoughtful concept, a strong visual language and a plan that fits.</p></div>
                <span className="step-symbol" aria-hidden="true">↗</span>
              </article>
              <article className="approach-step">
                <span className="step-index mono">03 / MOVE</span>
                <div><h3>Bring it into the world.</h3><p>From production through post, the idea stays in good hands — all the way to the final frame.</p></div>
                <span className="step-symbol" aria-hidden="true">→</span>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-inner">
            <div className="contact-orbit" aria-hidden="true"><span>ASR</span></div>
            <span className="eyebrow"><span className="contact-live-dot" /> 05 / THE NEXT FRAME IS YOURS</span>
            <h2 id="contact-title">Got a story<br />on your <em className="serif">mind?</em></h2>
            <div className="contact-bottom">
              <p>Let’s give it somewhere to go.<br />Tell us what you’re thinking — no polished brief required.</p>
              <a className="contact-button" href="mailto:morerushi@gmail.com" data-testid="link-contact-email">
                Start a conversation <ArrowUpRight className="arrow-shift" size={19} />
              </a>
            </div>
            <div className="contact-details">
              <a href="mailto:morerushi@gmail.com" data-testid="link-email">morerushi@gmail.com</a>
              <a href="tel:9130287749" data-testid="link-phone">+91 91302 87749</a>
              <span className="mono">INDEPENDENT / AVAILABLE WORLDWIDE</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <a className="brand-lockup footer-brand" href="#top" aria-label="ASR Motion Studio — back to top" data-testid="link-footer-home">
            <img className="brand-logo" src={`${import.meta.env.BASE_URL}asr-motion-studio-logo.jpg`} alt="ASR Motion Studio" />
          </a>
          <span className="footer-note">Stories made to move you.</span>
          <div className="footer-right"><span className="mono">© {new Date().getFullYear()} ASR MOTION STUDIO</span><a href="#top" className="back-top" data-testid="link-back-top">BACK TO TOP <ArrowUpRight size={13} /></a></div>
        </div>
      </footer>
    </div>
  );
}

export default Home;