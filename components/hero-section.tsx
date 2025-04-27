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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

// Social media links configuration
const socialLinks = {
  github: "https://github.com/nxr-deen",
  linkedin: "https://www.linkedin.com/in/n-bouderbala/",
  leetcode: "https://leetcode.com/nxr-deen/",
  instagram: "https://instagram.com/nxr.deen",
  email: "mailto:n_bouderbala@estin.dz",
};

// Animated text rotation component
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
        <motion.div
          key={phrase}
          className="absolute w-full"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: index === i ? 0 : -50,
            opacity: index === i ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
          }}
        >
          {phrase}
        </motion.div>
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
      {techs.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
        >
          <Badge
            variant="secondary"
            className={`${tech.color} font-medium text-xs`}
          >
            {tech.name}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen py-20 flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute right-1/4 top-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/3 bottom-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-sm py-1 px-3">
                Welcome to my portfolio
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              I'm{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Noureddine Bouderbala
              </span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <AnimatedText />
            </motion.div>

            <motion.p
              className="text-base md:text-lg text-muted-foreground mb-6 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              I build exceptional digital experiences that are fast, accessible,
              visually appealing, and responsive. Specialized in crafting modern
              web applications with cutting-edge technologies.
            </motion.p>

            <TechStack />

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button asChild size="lg" className="rounded-full">
                <Link href="#projects">
                  View My Work
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 hover:from-primary/20 hover:to-blue-500/20 border-primary/20"
              >
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="rounded-full"
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all border border-border"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background hover:bg-[#0077B5] hover:text-white transition-all border border-border"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background hover:bg-[#FFA116] hover:text-white transition-all border border-border"
                  aria-label="LeetCode"
                >
                  <Code2 className="h-4 w-4" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background hover:bg-gradient-to-tr from-[#FD5949] via-[#D6249F] to-[#285AEB] hover:text-white transition-all border border-border"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image & Visual Elements */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative">
              {/* Main photo with glowing effect */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20 z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
                <Image
                  src="/placeholder.svg"
                  alt="Noureddine Bouderbala"
                  fill
                  className="object-cover"
                  priority
                  quality={95}
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -left-8 -bottom-8 p-4 bg-background rounded-xl shadow-lg border border-border z-20"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Code className="h-6 w-6 text-primary" />
              </motion.div>

              <motion.div
                className="absolute -right-8 top-1/2 p-4 bg-background rounded-xl shadow-lg border border-border z-20"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <Layout className="h-6 w-6 text-blue-500" />
              </motion.div>

              <motion.div
                className="absolute -top-8 -right-8 p-4 bg-background rounded-xl shadow-lg border border-border z-20"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <Server className="h-6 w-6 text-green-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute left-1/2 bottom-10 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Link href="#about" className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">
              Scroll down
            </span>
            <ArrowDown className="h-4 w-4 text-muted-foreground" />
          </Link>
        </motion.div>
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

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 15s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
