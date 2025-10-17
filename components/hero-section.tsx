"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  Download,
  Github,
  Code2,
  Linkedin,
  Mail,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Social media links configuration
const socialLinks = {
  github: "https://github.com/nxr-deen",
  linkedin: "https://www.linkedin.com/in/n-bouderbala/",
  leetcode: "https://leetcode.com/u/nxr_deen/",
  instagram: "https://instagram.com/nxr.deen",
  email: "mailto:n_bouderbala@estin.dz",
};

// Simplified text rotation component
const AnimatedText = () => {
  const [index, setIndex] = useState(0);
  const phrases = ["Full Stack Developer", "UI UX Designer", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 md:h-12 overflow-hidden relative">
      {phrases.map((phrase, i) => (
        <div
          key={phrase}
          className={`absolute w-full transition-all duration-500 ease-in-out ${
            index === i
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform -translate-y-8"
          }`}
          style={{
            position: "absolute",
            top: 0,
          }}
        >
          {phrase}
        </div>
      ))}
    </div>
  );
};

// Technology icons
const TechStack = () => {
  const techs = [
    {
      name: "React",
      color: "bg-green-500/20 text-green-600 dark:text-green-400",
    },
    { name: "Next.js", color: "bg-black/20 text-gray-800 dark:text-gray-200" },
    {
      name: "TypeScript",
      color: "bg-green-700/20 text-green-700 dark:text-green-300",
    },
    {
      name: "Node.js",
      color: "bg-green-600/20 text-green-700 dark:text-green-400",
    },
    {
      name: "MongoDB",
      color: "bg-green-500/20 text-green-600 dark:text-green-400",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {techs.map((tech) => (
        <div
          key={tech.name}
          className="transition-all duration-300 ease-in-out"
        >
          <Badge
            variant="secondary"
            className={`${tech.color} font-medium text-xs`}
          >
            {tech.name}
          </Badge>
        </div>
      ))}
    </div>
  );
};

// Simple social link component without animations
const SocialLink = ({
  href,
  ariaLabel,
  icon,
}: {
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
}) => {
  // Get proper classes based on social platform
  const getBgColorClass = () => {
    if (href === socialLinks.github) {
      return "hover:bg-white hover:text-gray-900";
    } else if (href === socialLinks.linkedin) {
      return "hover:bg-[#0077B5] hover:text-white";
    } else if (href === socialLinks.leetcode) {
      return "hover:bg-[#FFA116] hover:text-white";
    } else if (href === socialLinks.instagram) {
      return "hover:bg-gradient-to-tr hover:from-[#FD5949] hover:via-[#D6249F] hover:to-[#22c55e] hover:text-white";
    }
    return "";
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2 rounded-full bg-background hover:scale-110 transition-all duration-300 border border-border relative overflow-hidden group ${getBgColorClass()}`}
      aria-label={ariaLabel}
    >
      {icon}
    </a>
  );
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-16 md:pt-32 pb-20 flex items-start justify-center">
      {/* Background effects - simplified */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute right-1/4 top-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute left-1/3 bottom-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-8">
        <div className="flex flex-col items-center justify-start text-center max-w-4xl mx-auto">
          {/* Centered Content */}
          <div className="w-full">
            <div className="flex justify-center mb-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 text-sm py-1 px-3">
                Welcome to my portfolio
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
              I'm{" "}
              <span className="animate-gradient-text">
                Noureddine Bouderbala
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
              <AnimatedText />
            </div>

            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              I build exceptional digital experiences that are fast, accessible,
              visually appealing, and responsive. Specialized in crafting modern
              web applications with cutting-edge technologies.
            </p>

            <TechStack />

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              <div className="hover:scale-105 transition-transform duration-300">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="#projects">
                    <span className="flex items-center gap-2 group">
                      View My Work
                      <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    </span>
                  </Link>
                </Button>
              </div>

              <div className="hover:scale-105 transition-transform duration-300">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-primary/10 to-green-500/10 hover:from-primary/20 hover:to-green-500/20 border-primary/20"
                >
                  <Link href="#contact">
                    <span className="flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      Get in Touch
                    </span>
                  </Link>
                </Button>
              </div>

              <div className="hover:scale-105 transition-transform duration-300">
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full"
                  onClick={() => {
                    const url = `${window.location.origin}/resume.pdf`;
                    window.open(url, "_blank");
                  }}
                >
                  <span className="flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </span>
                </Button>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex gap-3">
                <SocialLink
                  href={socialLinks.github}
                  ariaLabel="GitHub"
                  icon={<Github className="h-4 w-4" />}
                />
                <SocialLink
                  href={socialLinks.linkedin}
                  ariaLabel="LinkedIn"
                  icon={<Linkedin className="h-4 w-4" />}
                />
                <SocialLink
                  href={socialLinks.leetcode}
                  ariaLabel="LeetCode"
                  icon={<Code2 className="h-4 w-4" />}
                />
                <SocialLink
                  href={socialLinks.instagram}
                  ariaLabel="Instagram"
                  icon={<Instagram className="h-4 w-4" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
}
