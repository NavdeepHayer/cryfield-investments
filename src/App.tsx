import { useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  Building2,
  TrendingUp,
  BarChart3,
  Target,
  Eye,
  Shield,
  Users,
  Award,
  Landmark,
  Home,
  Factory,
  Stethoscope,
  Mail,
  Clock,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import {
  FadeUp,
  SlideLeft,
  SlideRight,
  BlurIn,
  FlipUp,
  RotateIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  AnimatedStat,
  ParallaxOrb,
  ScrollProgress,
} from "./components/Animations";

const values = [
  {
    icon: Target,
    title: "Aligned Interests",
    description:
      "We invest our own money alongside external investors to ensure proper alignment of interest in every project we undertake.",
  },
  {
    icon: Eye,
    title: "Local Knowledge",
    description:
      "We understand the issues that make a location desirable for a particular project, enabling us to acquire the right sites for the right briefs.",
  },
  {
    icon: Shield,
    title: "Proven Track Record",
    description:
      "Over 500,000 sq ft of development across residential, commercial, retail and office space demonstrates our consistent delivery.",
  },
  {
    icon: Users,
    title: "Strong Relationships",
    description:
      "Unsurpassed long-standing relationships with planners, occupiers, and investors built over decades in the industry.",
  },
  {
    icon: Award,
    title: "Specialist Expertise",
    description:
      "A 20+ year Investment Banking career provides fund diversity, product specialism, and regulatory knowledge.",
  },
  {
    icon: Landmark,
    title: "Rapid Execution",
    description:
      "Our ability to turn projects around quickly sets us apart, from acquisition through to delivery and exit.",
  },
];

const services = [
  {
    icon: Building2,
    title: "Land Acquisition",
    description:
      "Having local knowledge, we understand the issues that make a location desirable for a particular project. We work with land owners and planners to acquire sites that meet a specific brief.",
  },
  {
    icon: Home,
    title: "Residential Development",
    description:
      "Delivering quality new residential space through landmark developments. Our CSF II fund has completed a pipeline of over £150m focused on delivering over 300,000 sqft of premium residential property.",
  },
  {
    icon: Factory,
    title: "Commercial & Retail",
    description:
      "Over 500,000 sq ft of residential, commercial, retail and office space developed. We plan, design and deliver innovative solutions for commercial properties across the UK and Europe.",
  },
  {
    icon: TrendingUp,
    title: "Investment & Funding",
    description:
      "A proven track record of adding value to clients' portfolios, successfully increasing investments, growing pipeline and providing bespoke exit solutions.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Investment",
    description:
      "CRF IV Fund is fully resourced to invest in healthcare, drug research companies, and public safety supply chains.",
  },
  {
    icon: BarChart3,
    title: "Urban Regeneration",
    description:
      "Experience ranging from multi-million pound urban regeneration projects to local social housing schemes. We transform communities through thoughtful, commercially viable development.",
  },
];

const heroSlides = [
  {
    image: "/images/hero-skyscraper.jpg",
    alt: "Dramatic upward view of towering skyscrapers",
    tagline: "Confide Recte Agens",
    heading: (
      <>
        Have the <span className="text-gold-400">Confidence</span> to Do What
        Is Right
      </>
    ),
    description:
      "Bold decisions built on integrity. We stand behind every investment with transparency, conviction, and an unwavering commitment to doing what is right.",
  },
  {
    image: "/images/hero-london-4.jpg",
    alt: "London's iconic St Paul's Cathedral",
    tagline: "Established 2017 · London",
    heading: (
      <>
        Innovative <span className="text-gold-400">Investment</span> Solutions
        Across the UK
      </>
    ),
    description:
      "A privately owned company specialising in land acquisition, development, investment and funding in both private and public sectors. We invest our own money alongside external investors to ensure proper alignment of interest.",
  },
];

function HeroSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToNext = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, 10000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const slide = heroSlides[activeSlide];

  return (
    <section id="hero" className="relative bg-gray-900 overflow-hidden min-h-screen flex flex-col">
      {/* Background images with crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={activeSlide}
          src={slide.image}
          alt={slide.alt}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/30" />

      <ParallaxOrb
        className="bg-gold-500/8 blur-3xl top-20 right-[-100px]"
        speed={0.5}
        size={400}
      />
      <ParallaxOrb
        className="bg-navy-400/10 blur-3xl bottom-0 left-[-50px]"
        speed={0.3}
        size={300}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 flex-1 flex items-center">
        <div className="max-w-3xl">
          <div className="min-h-[320px] md:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="block w-10 h-px bg-gold-500" />
                  <p className="text-gold-400 text-sm md:text-base font-semibold tracking-[0.25em] uppercase">
                    {slide.tagline}
                  </p>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  {slide.heading}
                </h1>

                <p className="text-navy-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 text-navy-950 font-semibold px-8 py-3.5 rounded-md hover:bg-gold-400 transition-colors"
            >
              Our Services
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-navy-600 text-white font-medium px-8 py-3.5 rounded-md hover:bg-navy-800/50 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-3 mt-10">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === activeSlide
                    ? "w-10 bg-gold-500"
                    : "w-6 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <ScrollProgress />
      <main className="pt-20">
        {/* ===== HERO ===== */}
        <HeroSlideshow />

        {/* ===== STATS ===== */}
        <section className="bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "500,000+", label: "Sq Ft Developed" },
                { value: "£150m+", label: "Pipeline Completed" },
                { value: "300,000+", label: "Sqft Residential" },
                { value: "20+", label: "Years Experience" },
              ].map((stat, i) => (
                <AnimatedStat
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  delay={i * 0.12}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section
          id="about"
          className="bg-gray-50 scroll-mt-20 relative overflow-hidden"
        >
          <ParallaxOrb
            className="bg-gold-200/20 blur-3xl top-10 right-[-80px]"
            speed={0.4}
            size={350}
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <SlideLeft>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                    About{" "}
                    <span className="text-gold-600">Cryfield Investments</span>
                  </h2>
                  <div className="space-y-4 text-navy-600 leading-relaxed">
                    <p>
                      Cryfield Investments is a privately owned company
                      specialising in land acquisition, development, investment
                      and funding in both private and public sectors.
                      Incorporated in 2017 and based in London&rsquo;s West End,
                      we have been planning, designing and delivering innovative
                      development solutions.
                    </p>
                    <p>
                      Having developed over 500,000 sq ft of residential,
                      commercial, retail and office space, we have a proven track
                      record of adding value to clients&rsquo; portfolios and
                      successfully increasing investments, growing pipeline and
                      providing bespoke exit solutions for a diverse range of
                      opportunities throughout the UK and Europe.
                    </p>
                    <p>
                      We source, invest and manage in businesses that stretch
                      throughout the UK, with experience ranging from
                      multi-million pound urban regeneration projects to local
                      social housing schemes as well as a variety of healthcare,
                      drug research companies and public safety supply chains.
                    </p>
                  </div>
                </div>
              </SlideLeft>

              <SlideRight>
                <div className="space-y-8">
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/images/building-modern.jpg"
                      alt="Modern commercial building"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <StaggerContainer
                      staggerDelay={0.1}
                      className="grid grid-cols-2 gap-4"
                    >
                      {[
                        { value: "2017", label: "Founded" },
                        { value: "500k+", label: "Sq Ft Built" },
                        { value: "£150m+", label: "Pipeline" },
                        { value: "20+", label: "Years Experience" },
                      ].map((item) => (
                        <StaggerItem key={item.label} variant="scaleUp">
                          <div className="bg-gray-50 rounded-lg p-5 text-center">
                            <p className="text-xl font-bold text-navy-900 mb-1">
                              {item.value}
                            </p>
                            <p className="text-navy-500 text-xs">
                              {item.label}
                            </p>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </div>
              </SlideRight>
            </div>
          </div>
        </section>

        {/* ===== VALUES ===== */}
        <section className="bg-white relative overflow-hidden">
          <ParallaxOrb
            className="bg-navy-200/15 blur-3xl bottom-[-50px] left-[-100px]"
            speed={0.25}
            size={400}
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24">
            <RotateIn>
              <div className="max-w-2xl mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  What Drives Us
                </h2>
                <p className="text-navy-500 text-lg leading-relaxed">
                  Our values define how we operate and the relationships we build
                  with investors, partners and communities.
                </p>
              </div>
            </RotateIn>

            <StaggerContainer
              staggerDelay={0.08}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {values.map((item) => (
                <StaggerItem key={item.title} variant="flipUp" className="h-full">
                  <div className="h-full flex flex-col bg-white rounded-lg p-8 border border-gray-200 hover:border-gold-300 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center mb-5">
                      <item.icon size={24} className="text-gold-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-navy-500 text-sm leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section
          id="services"
          className="bg-gray-50 scroll-mt-20 relative overflow-hidden"
        >
          <ParallaxOrb
            className="bg-gold-300/10 blur-3xl top-[-50px] right-[-60px]"
            speed={0.35}
            size={350}
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24">
            <FlipUp>
              <div className="max-w-2xl mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  Our <span className="text-gold-600">Services</span>
                </h2>
                <p className="text-navy-500 text-lg leading-relaxed">
                  From multi-million pound urban regeneration projects to local
                  social housing schemes, we source, invest and manage businesses
                  that stretch throughout the UK.
                </p>
              </div>
            </FlipUp>

            <StaggerContainer
              staggerDelay={0.1}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, i) => (
                <StaggerItem
                  key={service.title}
                  variant={i % 2 === 0 ? "slideLeft" : "slideRight"}
                  className="h-full"
                >
                  <div className="h-full flex flex-col group bg-white rounded-lg p-8 border border-gray-200 hover:border-gold-300 hover:shadow-lg transition-all">
                    <div className="w-14 h-14 bg-navy-50 group-hover:bg-gold-50 rounded-lg flex items-center justify-center mb-6 transition-colors">
                      <service.icon
                        size={28}
                        className="text-navy-600 group-hover:text-gold-600 transition-colors"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-navy-500 text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ===== FUNDS ===== */}
        <section className="bg-navy-900 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block">
            <img
              src="/images/residential.jpg"
              alt="Residential development"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent" />
          </div>
          <ParallaxOrb
            className="bg-gold-500/5 blur-3xl top-[-80px] left-[20%]"
            speed={0.45}
            size={500}
          />
          <ParallaxOrb
            className="bg-navy-400/10 blur-3xl bottom-[-60px] right-[10%]"
            speed={0.2}
            size={300}
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24">
            <BlurIn>
              <div className="max-w-2xl mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Our Funds
                </h2>
                <p className="text-navy-300 text-lg">
                  Our 20+ year Investment Banking career has provided a
                  foundation for offering fund diversity, product specialism,
                  senior management skills, regulatory knowledge, and client
                  relationships covering both the Private Equity community and
                  Corporate clients.
                </p>
              </div>
            </BlurIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <SlideLeft delay={0.15} className="h-full">
                <div className="h-full flex flex-col bg-navy-800/50 border border-navy-700 rounded-lg p-10">
                  <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1 mb-6">
                    <span className="text-gold-400 text-sm font-medium">
                      CRF IV
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Cryfield Regions Fund
                  </h3>
                  <p className="text-navy-300 leading-relaxed mb-4">
                    Under the Cryfield Regions Fund (CRF IV), having local
                    knowledge, we understand the issues that make a location
                    desirable for a particular project and can work with land
                    owners and planners to acquire sites that meet a specific
                    brief.
                  </p>
                  <p className="text-navy-300 leading-relaxed flex-grow">
                    We source, invest and manage in businesses throughout the UK,
                    from multi-million pound urban regeneration projects to local
                    social housing schemes, healthcare, drug research companies
                    and public safety supply chains.
                  </p>
                </div>
              </SlideLeft>

              <SlideRight delay={0.15} className="h-full">
                <div className="h-full flex flex-col bg-navy-800/50 border border-navy-700 rounded-lg p-10">
                  <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1 mb-6">
                    <span className="text-gold-400 text-sm font-medium">
                      CSF II
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Cryfield SouthEast Fund
                  </h3>
                  <p className="text-navy-300 leading-relaxed mb-4">
                    Completed a pipeline of over &pound;150m, fully funded, with
                    primary focus on delivering over 300,000 sqft of quality new
                    residential space through a string of landmark developments.
                  </p>
                  <p className="text-navy-300 leading-relaxed flex-grow">
                    We pride ourselves on unsurpassed long-standing
                    relationships with planners, occupiers, and investors, and
                    our ability to turn projects around quickly.
                  </p>
                </div>
              </SlideRight>
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section
          id="contact"
          className="bg-white scroll-mt-20 relative overflow-hidden"
        >
          <ParallaxOrb
            className="bg-gold-200/15 blur-3xl top-[20%] right-[-100px]"
            speed={0.3}
            size={350}
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24">
            <FadeUp>
              <div className="max-w-2xl mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  Get in <span className="text-gold-600">Touch</span>
                </h2>
                <p className="text-navy-500 text-lg leading-relaxed">
                  We welcome enquiries from landowners, investors, developers and
                  partners. Reach out to discuss how we can work together.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <StaggerContainer staggerDelay={0.12} className="space-y-8">
                  <StaggerItem variant="slideLeft">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                        <Building2 size={20} className="text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-1">
                          Registered Office
                        </h3>
                        <p className="text-navy-500 text-sm leading-relaxed">
                          Cryfield Investments Ltd
                          <br />
                          51 New Cavendish Street
                          <br />
                          London, W1G 9TG
                          <br />
                          United Kingdom
                        </p>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem variant="slideLeft">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                        <Mail size={20} className="text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:info@cryfieldinvestments.com"
                          className="text-gold-600 hover:text-gold-500 text-sm transition-colors"
                        >
                          info@cryfieldinvestments.com
                        </a>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem variant="slideLeft">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                        <Clock size={20} className="text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-1">
                          Business Hours
                        </h3>
                        <p className="text-navy-500 text-sm leading-relaxed">
                          Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM
                          <br />
                          Saturday &ndash; Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>

                <ScaleIn delay={0.3}>
                  <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-navy-600 text-sm leading-relaxed">
                      <span className="font-semibold text-navy-800">
                        Company Registration:
                      </span>
                      <br />
                      Company No. 11001318
                      <br />
                      Registered in England and Wales
                      <br />
                      Incorporated 6 October 2017
                    </p>
                  </div>
                </ScaleIn>
              </div>

              {/* Contact Form */}
              <SlideRight className="lg:col-span-3">
                <ContactForm />
              </SlideRight>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
