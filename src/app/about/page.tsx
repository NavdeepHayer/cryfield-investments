import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Shield,
  Users,
  Award,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Cryfield Investments",
  description:
    "Learn about Cryfield Investments - a privately owned company with 20+ years of investment banking experience, specialising in land acquisition and development across the UK.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-gold-400">Cryfield</span>
            </h1>
            <p className="text-navy-300 text-lg md:text-xl leading-relaxed">
              A privately owned company with a 20+ year Investment Banking
              career, providing a foundation for offering fund diversity, product
              specialism, senior management skills, regulatory knowledge, and
              client relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Cryfield Investments is a privately owned company specialising
                  in land acquisition, development, investment and funding in
                  both private and public sectors. Incorporated in 2017 and based
                  in London&rsquo;s West End, we have been planning, designing
                  and delivering innovative development solutions.
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
                  throughout the UK, with experience ranging from multi-million
                  pound urban regeneration projects to local social housing
                  schemes as well as a variety of healthcare, drug research
                  companies and public safety supply chains.
                </p>
              </div>
            </div>

            <div className="bg-navy-50 rounded-2xl p-10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "2017", label: "Founded" },
                  { value: "500k+", label: "Sq Ft Built" },
                  { value: "£150m+", label: "Pipeline" },
                  { value: "20+", label: "Years Experience" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white rounded-lg p-6 text-center shadow-sm"
                  >
                    <p className="text-2xl font-bold text-navy-900 mb-1">
                      {item.value}
                    </p>
                    <p className="text-navy-500 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-navy-500 text-lg">
              Our values define how we operate and the relationships we build
              with investors, partners and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-8 border border-gray-200"
              >
                <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center mb-5">
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

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="bg-navy-950 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Partner With Us
            </h2>
            <p className="text-navy-300 text-lg max-w-2xl mx-auto mb-8">
              Whether you&rsquo;re a landowner, investor, or developer, we have
              the expertise and resources to bring your project to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-950 font-semibold px-8 py-3.5 rounded-md hover:bg-gold-400 transition-colors"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
