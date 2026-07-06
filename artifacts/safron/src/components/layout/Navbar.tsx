import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Capabilities", href: "/#capabilities" },
    { label: "Industries", href: "/#industries" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location !== "/"
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-100"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled || location !== "/" ? "text-secondary" : "text-white"}`}>
            Safron<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                isScrolled || location !== "/"
                  ? "text-gray-600 hover:text-secondary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className={`rounded-none px-6 py-5 tracking-wide transition-all ${
              isScrolled || location !== "/"
                ? "bg-secondary text-white hover:bg-secondary/90"
                : "bg-white text-secondary hover:bg-white/90"
            }`}
          >
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 ${
            isScrolled || location !== "/" ? "text-secondary" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-secondary font-medium py-2 border-b border-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-none w-full bg-secondary text-white mt-4">
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
