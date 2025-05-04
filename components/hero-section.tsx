"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
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
  Code,
  Layout,
  Server,
  Database,
  FileType,
  Globe,
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
  const phrases = ["Full Stack Developer", "UI Designer", "Problem Solver"];

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
    { name: "React", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400" },
    { name: "Next.js", color: "bg-black/20 text-gray-800 dark:text-gray-200" },
    {
      name: "TypeScript",
      color: "bg-blue-700/20 text-blue-700 dark:text-blue-300",
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
const SocialLink = ({ href, ariaLabel, icon }) => {
  // Get proper classes based on social platform
  const getBgColorClass = () => {
    if (href === socialLinks.github) {
      return "hover:bg-white hover:text-gray-900";
    } else if (href === socialLinks.linkedin) {
      return "hover:bg-[#0077B5] hover:text-white";
    } else if (href === socialLinks.leetcode) {
      return "hover:bg-[#FFA116] hover:text-white";
    } else if (href === socialLinks.instagram) {
      return "hover:bg-gradient-to-tr hover:from-[#FD5949] hover:via-[#D6249F] hover:to-[#285AEB] hover:text-white";
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
    <section className="relative min-h-screen py-20 flex items-center">
      {/* Background effects - simplified */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute right-1/4 top-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute left-1/3 bottom-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-left">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-sm py-1 px-3">
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

            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-lg">
              I build exceptional digital experiences that are fast, accessible,
              visually appealing, and responsive. Specialized in crafting modern
              web applications with cutting-edge technologies.
            </p>

            <TechStack />

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
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
                  className="rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 hover:from-primary/20 hover:to-blue-500/20 border-primary/20"
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
            <div className="flex items-center gap-4 mt-10">
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

          {/* Right side - Image & Visual Elements */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main photo with simplified effect */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20 z-10 transition-transform duration-300 hover:scale-[1.03]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent z-10"></div>
                <Image
                  src="/placeholder.svg"
                  alt="Noureddine Bouderbala"
                  fill
                  className="object-cover"
                  priority
                  quality={95}
                />
              </div>

              {/* Decorative elements - simplified */}
              <div className="absolute -left-8 -bottom-8 p-4 bg-background rounded-xl shadow-lg border border-border z-20 hover:scale-110 hover:rotate-[-5deg] transition-all duration-300">
                <Code className="h-6 w-6 text-primary" />
              </div>

              <div className="absolute -right-8 top-1/2 p-4 bg-background rounded-xl shadow-lg border border-border z-20 hover:scale-110 hover:rotate-[5deg] transition-all duration-300">
                <Layout className="h-6 w-6 text-blue-500" />
              </div>

              <div className="absolute -top-8 -right-8 p-4 bg-background rounded-xl shadow-lg border border-border z-20 hover:scale-110 hover:rotate-[-5deg] transition-all duration-300">
                <Server className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - simplified */}
        <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2">
          <Link href="#about" className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">
              Scroll down
            </span>
            <ArrowDown className="h-4 w-4 text-muted-foreground animate-bounce" />
          </Link>
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
