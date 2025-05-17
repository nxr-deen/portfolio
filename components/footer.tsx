"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Code2,
  ArrowUp,
  FileText,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isNotFoundPage =
    pathname === "/not-found" || pathname.includes("/not-found/");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Don't render footer on 404 pages
  if (isNotFoundPage) {
    return null;
  }

  return (
    <footer className="border-t bg-background py-16 relative z-10">
      {/* Background with static elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/3 bottom-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute left-1/4 top-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Social links */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Follow Me
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com/nxr-deen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm group"
              >
                <div className="bg-background mr-3 border border-muted p-2 rounded-md group-hover:border-primary group-hover:bg-gray-900 dark:group-hover:bg-white dark:group-hover:text-gray-900 transition-colors group-hover:shadow-sm group-hover:shadow-primary/10">
                  <Github className="h-4 w-4 group-hover:text-white dark:group-hover:text-gray-900 transition-colors" />
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
                <div className="bg-background mr-3 border border-muted p-2 rounded-md group-hover:border-blue-500 group-hover:bg-[#0077B5] group-hover:text-white transition-colors group-hover:shadow-sm group-hover:shadow-blue-500/10">
                  <Linkedin className="h-4 w-4" />
                </div>
                <span className="group-hover:text-blue-500 transition-colors">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://leetcode.com/u/nxr_deen/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm group"
              >
                <div className="bg-background mr-3 border border-muted p-2 rounded-md group-hover:border-primary group-hover:bg-[#FFA116] group-hover:text-white transition-colors group-hover:shadow-sm group-hover:shadow-primary/10">
                  <Code2 className="h-4 w-4" />
                </div>
                <span className="group-hover:text-primary transition-colors">
                  LeetCode
                </span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
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
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Contact
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:n_bouderbala@estin.dz"
                className="flex items-center text-sm group"
              >
                <div className="bg-background mr-3 border border-muted p-2 rounded-md group-hover:border-primary group-hover:text-primary transition-colors group-hover:shadow-sm group-hover:shadow-primary/10">
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
                <div className="bg-background mr-3 border border-muted p-2 rounded-md group-hover:border-blue-500 group-hover:text-blue-500 transition-colors group-hover:shadow-sm group-hover:shadow-blue-500/10">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="group-hover:text-blue-500 transition-colors">
                  +213 540 194 210
                </span>
              </a>
              <div className="flex items-center text-sm group">
                <div className="bg-background mr-3 border border-muted p-2 rounded-md group-hover:border-primary group-hover:text-primary transition-colors group-hover:shadow-sm group-hover:shadow-primary/10">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  Lakhdaria-Bouira, Algeria
                </span>
              </div>
            </div>
          </div>

          {/* Resume */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Resume
            </h4>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center bg-gradient-to-r from-primary/90 to-blue-500/90 hover:from-primary hover:to-blue-600 text-white px-4 py-2 rounded-full text-sm transition-all"
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
            className="h-9 w-9 rounded-full text-muted-foreground hover:text-primary hover:border-primary hover:shadow-sm hover:shadow-primary/10 mt-4 md:mt-0 transition-all"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </div>

      {/* Static background grid pattern */}
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
