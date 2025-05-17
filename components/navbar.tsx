"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isNotFoundPage =
    pathname === "/not-found" || pathname.includes("/not-found/");

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't render navbar on 404 pages
  if (isNotFoundPage) {
    return null;
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <div>
          <Link
            href="/"
            className="font-bold text-xl bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
          >
            Noureddine Bouderbala
          </Link>
        </div>

        {/* Mobile controls: theme toggle + menu button */}
        <div className="md:hidden flex items-center gap-2">
          <div>
            <ModeToggle />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6">
            {[
              { name: "About", href: "#about" },
              { name: "Experience", href: "#experience" },
              { name: "Projects", href: "#projects" },
              { name: "Skills", href: "#skills" },
              { name: "Testimonials", href: "#testimonials" },
            ].map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium relative group"
                >
                  <span className="text-foreground group-hover:text-primary transition-colors duration-200">
                    {link.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
            ))}
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b md:hidden shadow-lg transition-opacity duration-300">
            <div className="container py-4 flex flex-col space-y-4 px-4">
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Testimonials", href: "#testimonials" },
              ].map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium rounded-md flex items-center group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:text-primary transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
