import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center">
                <span className="text-navy-950 font-bold text-xl">C</span>
              </div>
              <div>
                <span className="text-white font-semibold text-lg">
                  Cryfield
                </span>
                <span className="text-gold-400 font-light text-lg ml-1">
                  Investments
                </span>
              </div>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed">
              A privately owned company specialising in land acquisition,
              development, investment and funding in both private and public
              sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-navy-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Funds */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Funds
            </h3>
            <ul className="space-y-3">
              <li className="text-navy-400 text-sm">
                Cryfield Regions Fund (CRF IV)
              </li>
              <li className="text-navy-400 text-sm">
                Cryfield SouthEast Fund (CSF II)
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-gold-500 mt-0.5 shrink-0" />
                <span>
                  51 New Cavendish Street
                  <br />
                  London, W1G 9TG
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-gold-500 shrink-0" />
                <a
                  href="mailto:info@cryfieldinvestments.com"
                  className="hover:text-gold-400 transition-colors"
                >
                  info@cryfieldinvestments.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-500 text-sm">
            &copy; {new Date().getFullYear()} Cryfield Investments Ltd. All
            rights reserved.
          </p>
          <p className="text-navy-600 text-xs">
            Company No. 11001318 | Registered in England and Wales
          </p>
        </div>
      </div>
    </footer>
  );
}
