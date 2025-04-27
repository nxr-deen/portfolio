"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  ArrowUp,
  FileText,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t bg-background py-16 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute right-0 bottom-1/4 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute left-0 top-1/4 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Social links */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Follow Me
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com/nxr-deen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm group"
              >
                <div className="bg-background mr-3 border border-muted p-2 rounded-md group-hover:border-primary group-hover:text-primary transition-colors">
                  <Github className="h-4 w-4" />
                </div>
                <span className="group-hover:text-primary transition-colors">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/n-bouderbala/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm group"
              >
                <div className="bg-background mr-3 border border-muted p-2 rounded-md group-hover:border-primary group-hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                </div>
                <span className="group-hover:text-primary transition-colors">
                  LinkedIn
                </span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm group"
              >
                <div className="bg-background mr-3 border border-muted p-2 rounded-md group-hover:border-primary group-hover:text-primary transition-colors">
                  <Twitter className="h-4 w-4" />
                </div>
                <span className="group-hover:text-primary transition-colors">
                  Twitter
                </span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#testimonials"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:n_bouderbala@estin.dz"
                className="flex items-center text-sm group"
              >
                <div className="bg-background mr-3 border border-muted p-2 rounded-md group-hover:border-primary group-hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="group-hover:text-primary transition-colors">
                  n_bouderbala@estin.dz
                </span>
              </a>
              <a
                href="tel:+213540194210"
                className="flex items-center text-sm group"
              >
                <div className="bg-background mr-3 border border-muted p-2 rounded-md group-hover:border-primary group-hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="group-hover:text-primary transition-colors">
                  +213 540 194 210
                </span>
              </a>
              <div className="flex items-center text-sm group">
                <div className="bg-background mr-3 border border-muted p-2 rounded-md">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-muted-foreground">
                  Lakhdaria-Bouira, Algeria
                </span>
              </div>
            </div>
          </div>

          {/* Resume */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Resume
            </h4>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md text-sm transition-colors"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download CV
            </Link>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Noureddine Bouderbala. All Rights Reserved.
          </p>
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-full text-muted-foreground hover:text-primary hover:border-primary mt-4 md:mt-0"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </div>

      {/* Add CSS for background grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(var(--foreground-rgb), 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(var(--foreground-rgb), 0.05) 1px,
              transparent 1px
            );
          background-size: 24px 24px;
        }
      `}</style>
    </footer>
  );
}
