import { useState, useRef } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import LoginDropdown from "./LoginDropdown";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const loginWrapperRef = useRef<HTMLDivElement>(null);

  function toggleLogin() {
    setLoginOpen((prev) => !prev);
    setMobileMenuOpen(false);
  }

  function openMobileLogin() {
    setLoginOpen(true);
    setMobileMenuOpen(false);
  }

  function closeLogin() {
    setLoginOpen(false);
  }

  function toggleMobileMenu() {
    setMobileMenuOpen((prev) => !prev);
    setLoginOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-sm border-b border-navy-800">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center">
            <Logo height={46} />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium rounded-md transition-colors text-navy-200 hover:text-white hover:bg-navy-800/30"
              >
                {item.name}
              </a>
            ))}
            <span className="w-px h-5 bg-navy-700 mx-2" />
            <div className="relative" ref={loginWrapperRef}>
              <button
                onClick={toggleLogin}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 transition-colors"
              >
                <LogIn size={16} />
                Login
              </button>
              <AnimatePresence>
                {loginOpen && (
                  <LoginDropdown mode="dropdown" onClose={closeLogin} containerRef={loginWrapperRef} />
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-navy-200 hover:text-white p-2"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-navy-800 mt-2 pt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium rounded-md transition-colors text-navy-200 hover:text-white hover:bg-navy-800/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={openMobileLogin}
              className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium rounded-md text-gold-400 hover:text-gold-300 hover:bg-navy-800/30 transition-colors"
            >
              <LogIn size={16} />
              Login
            </button>
          </div>
        )}
      </nav>

      {/* Mobile login modal */}
      <AnimatePresence>
        {loginOpen && (
          <div className="md:hidden">
            <LoginDropdown mode="modal" onClose={closeLogin} />
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
