import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowDown,
  Download,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Instagram,
} from "lucide-react";

// Social media links configuration
const socialLinks = {
  github: "https://github.com/nxr-deen",
  linkedin: "https://www.linkedin.com/in/n-bouderbala/",
  twitter: "https://twitter.com/nxr_deen",
  instagram: "https://instagram.com/nxr.deen",
  email: "mailto:n_bouderbala@estin.dz",
};

export default function HeroSection() {
  return (
    <section className="py-16 md:py-32 flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-6 md:mb-8 relative inline-block">
          <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary mx-auto">
            <img
              src="/placeholder.svg?height=160&width=160"
              alt="Noureddine Bouderbala"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6">
          Hi, I&apos;m Noureddine Bouderbala
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground mb-6 md:mb-8">
          I&apos;m a Full Stack Developer specializing in the MERN stack and
          Next.js. Welcome to my portfolio.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-6 md:mb-8">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 md:h-6 md:w-6" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5 md:h-6 md:w-6" />
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5 md:h-6 md:w-6" />
          </a>
          <a
            href={socialLinks.email}
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 md:h-6 md:w-6" />
          </a>
        </div>

        {/* Mobile view has stacked buttons, desktop view has horizontal buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs mx-auto sm:max-w-none sm:mx-0 sm:justify-center">
          <Button asChild className="w-full sm:w-auto" size="default">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto"
            size="default"
          >
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="w-full sm:w-auto"
            size="default"
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
      </div>
      <div className="mt-10 md:mt-16 animate-bounce">
        <Link href="#about">
          <ArrowDown className="h-5 w-5 md:h-6 md:w-6" />
          <span className="sr-only">Scroll down</span>
        </Link>
      </div>
    </section>
  );
}
