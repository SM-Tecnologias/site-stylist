import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoPrelaje from "@/assets/logo-prelaje.png";

type NavLink = { label: string; href: string; isRoute?: boolean };

const navLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Produtos", href: "/produtos", isRoute: true },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoPrelaje} alt="Prelaje Logo" className="h-12 md:h-14 object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-primary-foreground/80 hover:text-accent font-medium text-sm tracking-wide uppercase transition-colors duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/80 hover:text-accent font-medium text-sm tracking-wide uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#contato"
            className="bg-accent text-accent-foreground font-semibold text-sm px-6 py-2.5 rounded-lg hover:brightness-110 transition-all duration-200 shadow-accent"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-primary-foreground p-2"
          aria-label="Menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary/95 backdrop-blur-md overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-primary-foreground/80 hover:text-accent font-medium text-sm tracking-wide uppercase transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-primary-foreground/80 hover:text-accent font-medium text-sm tracking-wide uppercase transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="#contato"
                onClick={() => setIsMobileOpen(false)}
                className="bg-accent text-accent-foreground font-semibold text-sm px-6 py-2.5 rounded-lg mt-2"
              >
                Fale Conosco
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
