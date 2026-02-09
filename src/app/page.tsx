import Link from "next/link";
import {
  ArrowRight,
  Building2,
  TrendingUp,
  Handshake,
  MapPin,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-800/40 via-navy-950 to-navy-950" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-44">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-navy-800/60 border border-navy-700 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-gold-500 rounded-full" />
              <span className="text-navy-300 text-sm">
                Established 2017 &middot; London
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Innovative Development
              <span className="text-gold-400"> Solutions</span> Across the UK
            </h1>
            <p className="text-navy-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              A privately owned company specialising in land acquisition,
              development, investment and funding in both private and public
              sectors. We invest our own money alongside external investors to
              ensure proper alignment of interest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 text-navy-950 font-semibold px-8 py-3.5 rounded-md hover:bg-gold-400 transition-colors"
              >
                Our Services
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-navy-600 text-white font-medium px-8 py-3.5 rounded-md hover:bg-navy-800/50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500,000+", label: "Sq Ft Developed" },
              { value: "£150m+", label: "Pipeline Completed" },
              { value: "300,000+", label: "Sqft Residential" },
              { value: "20+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-navy-900 mb-2">
                  {stat.value}
                </p>
                <p className="text-navy-500 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              A Proven Track Record
            </h2>
            <p className="text-navy-500 text-lg leading-relaxed">
              We have been planning, designing and delivering innovative
              development solutions, having developed over 500,000 sq ft of
              residential, commercial, retail and office space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Land Acquisition & Development",
                description:
                  "We work with land owners and planners to acquire sites that meet specific briefs, leveraging deep local knowledge of what makes a location desirable.",
              },
              {
                icon: TrendingUp,
                title: "Investment & Funding",
                description:
                  "A proven track record of adding value to clients' portfolios, successfully increasing investments and providing bespoke exit solutions.",
              },
              {
                icon: Handshake,
                title: "Strategic Partnerships",
                description:
                  "Unsurpassed long-standing relationships with planners, occupiers, and investors, and the ability to turn projects around quickly.",
              },
              {
                icon: MapPin,
                title: "UK & European Reach",
                description:
                  "A diverse range of investment, production and development opportunities throughout the UK and Europe.",
              },
              {
                icon: ShieldCheck,
                title: "Healthcare & Supply Chains",
                description:
                  "CRF IV Fund is fully resourced to invest in healthcare, drug research companies, and public safety supply chains.",
              },
              {
                icon: BarChart3,
                title: "Aligned Interests",
                description:
                  "We invest our own money alongside external investors to ensure proper alignment of interest across every project.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:border-gold-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-5">
                  <item.icon size={24} className="text-gold-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funds CTA */}
      <section className="bg-navy-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-10">
              <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1 mb-6">
                <span className="text-gold-400 text-sm font-medium">
                  CRF IV
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Cryfield Regions Fund
              </h3>
              <p className="text-navy-300 leading-relaxed mb-6">
                With local knowledge, we understand the issues that make a
                location desirable for a particular project. We work with land
                owners and planners to acquire sites that meet a specific brief.
                Fully resourced to invest in Healthcare and supply chains.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-gold-400 font-medium hover:text-gold-300 transition-colors"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-10">
              <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1 mb-6">
                <span className="text-gold-400 text-sm font-medium">
                  CSF II
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Cryfield SouthEast Fund
              </h3>
              <p className="text-navy-300 leading-relaxed mb-6">
                Completed a pipeline of over &pound;150m, fully funded, with
                primary focus on delivering over 300,000 sqft of quality new
                residential space through a string of landmark developments.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-gold-400 font-medium hover:text-gold-300 transition-colors"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="bg-navy-950 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Discuss Your Next Project?
            </h2>
            <p className="text-navy-300 text-lg max-w-2xl mx-auto mb-8">
              With over 20 years of investment banking experience and a proven
              track record, we offer fund diversity, product specialism, and
              strong client relationships.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-950 font-semibold px-8 py-3.5 rounded-md hover:bg-gold-400 transition-colors"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
