import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  TrendingUp,
  Stethoscope,
  Home,
  Factory,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Cryfield Investments",
  description:
    "Explore Cryfield Investments' services including land acquisition, property development, healthcare investment, and fund management across the UK and Europe.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-gold-400">Services</span>
            </h1>
            <p className="text-navy-300 text-lg md:text-xl leading-relaxed">
              From multi-million pound urban regeneration projects to local
              social housing schemes, we source, invest and manage businesses
              that stretch throughout the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Land Acquisition",
                description:
                  "Having local knowledge, we understand the issues that make a location desirable for a particular project. We work with land owners and planners to acquire sites that meet a specific brief, from brownfield regeneration to greenfield development.",
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
                  "A proven track record of adding value to clients' portfolios, successfully increasing investments, growing pipeline and providing bespoke exit solutions for a diverse range of opportunities.",
              },
              {
                icon: Stethoscope,
                title: "Healthcare Investment",
                description:
                  "CRF IV Fund is fully resourced to invest in healthcare, drug research companies, and public safety supply chains. We bring the same rigour and expertise to healthcare as we do to property.",
              },
              {
                icon: BarChart3,
                title: "Urban Regeneration",
                description:
                  "Experience ranging from multi-million pound urban regeneration projects to local social housing schemes. We transform communities through thoughtful, commercially viable development.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-lg p-8 border border-gray-200 hover:border-gold-300 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-navy-50 group-hover:bg-gold-50 rounded-lg flex items-center justify-center mb-6 transition-colors">
                  <service.icon
                    size={28}
                    className="text-navy-600 group-hover:text-gold-600 transition-colors"
                  />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funds Detail */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Our Funds
            </h2>
            <p className="text-navy-500 text-lg">
              Our 20+ year Investment Banking career has provided a foundation
              for offering fund diversity, product specialism, senior management
              skills, regulatory knowledge, and client relationships covering
              both the Private Equity community and Corporate clients.
            </p>
          </div>

          <div className="space-y-8">
            {/* CRF IV */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-navy-950 p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1 mb-4 w-fit">
                    <span className="text-gold-400 text-sm font-medium">
                      CRF IV
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Cryfield Regions Fund
                  </h3>
                  <p className="text-navy-400 text-sm">
                    National investment fund
                  </p>
                </div>
                <div className="lg:col-span-2 p-10">
                  <div className="space-y-4 text-navy-600 leading-relaxed">
                    <p>
                      Under the Cryfield Regions Fund (CRF IV), having local
                      knowledge, we understand the issues that make a location
                      desirable for a particular project and can work with land
                      owners and planners to acquire sites that meet a specific
                      brief.
                    </p>
                    <p>
                      We source, invest and manage in businesses that stretch
                      throughout the UK, with experience ranging from
                      multi-million pound urban regeneration projects to local
                      social housing schemes as well as a variety of healthcare,
                      drug research companies and public safety supply chains.
                    </p>
                    <p>
                      CRF IV Fund is fully resourced to invest in Healthcare and
                      supply chains.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CSF II */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-navy-950 p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1 mb-4 w-fit">
                    <span className="text-gold-400 text-sm font-medium">
                      CSF II
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Cryfield SouthEast Fund
                  </h3>
                  <p className="text-navy-400 text-sm">
                    South East focused fund
                  </p>
                </div>
                <div className="lg:col-span-2 p-10">
                  <div className="space-y-4 text-navy-600 leading-relaxed">
                    <p>
                      Under Cryfield SouthEast Fund (CSF II), we completed a
                      pipeline of over &pound;150m, fully funded, with primary
                      focus on delivering over 300,000 sqft of quality new
                      residential space through a string of landmark
                      developments.
                    </p>
                    <p>
                      We pride ourselves on unsurpassed long-standing
                      relationships with planners, occupiers, and investors, and
                      our ability to turn projects around quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="bg-navy-950 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Explore Investment Opportunities
            </h2>
            <p className="text-navy-300 text-lg max-w-2xl mx-auto mb-8">
              With a proven track record and aligned interests, we&rsquo;re
              ready to discuss how we can work together on your next project.
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
