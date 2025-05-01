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
import { motion } from "framer-motion";

// Social media links configuration
const socialLinks = {
  github: "https://github.com/nxr-deen",
  linkedin: "https://www.linkedin.com/in/n-bouderbala/",
  leetcode: "https://leetcode.com/u/nxr_deen/",
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

// Social link component with animation
const SocialLink = ({
  href,
  ariaLabel,
  icon,
  hoverIcon,
  hoverClass,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get proper classes based on social platform
  const getBgColorClass = () => {
    if (href === socialLinks.github) {
      return "bg-white text-gray-900";
    } else if (href === socialLinks.linkedin) {
      return "bg-[#0077B5] text-white";
    } else if (href === socialLinks.leetcode) {
      return "bg-[#FFA116] text-white";
    } else if (href === socialLinks.instagram) {
      return "bg-gradient-to-tr from-[#FD5949] via-[#D6249F] to-[#285AEB] text-white";
    }
    return "";
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-background transition-all border border-border relative overflow-hidden group"
      aria-label={ariaLabel}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className="relative z-10"
        animate={{
          rotateY: isHovered ? 180 : 0,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.span>
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-20"
        animate={{
          rotateY: isHovered ? 0 : -180,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {hoverIcon}
      </motion.div>
      <motion.div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${getBgColorClass()}`}
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen py-20 flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/4 top-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className="absolute right-1/4 top-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.35, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className="absolute left-1/3 bottom-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        ></motion.div>
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
              <span className="animate-gradient-text">
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="rounded-full">
                  <Link href="#projects">
                    <motion.span
                      className="flex items-center"
                      initial={{ gap: "0.25rem" }}
                      whileHover={{ gap: "0.5rem" }}
                    >
                      View My Work
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </motion.span>
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 hover:from-primary/20 hover:to-blue-500/20 border-primary/20"
                >
                  <Link href="#contact">
                    <motion.span className="flex items-center">
                      <motion.span
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                      </motion.span>
                      Get in Touch
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="rounded-full"
                >
                  <a href="/resume.pdf" download>
                    <motion.span className="flex items-center">
                      <motion.span
                        animate={{ y: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Download className="mr-2 h-4 w-4" />
                      </motion.span>
                      Resume
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
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
                <SocialLink
                  href={socialLinks.github}
                  ariaLabel="GitHub"
                  icon={<Github className="h-4 w-4" />}
                  hoverIcon={<FileType className="h-4 w-4 text-gray-900" />}
                  hoverClass="bg-white text-gray-900 dark:bg-white dark:text-gray-900"
                  index={0}
                />
                <SocialLink
                  href={socialLinks.linkedin}
                  ariaLabel="LinkedIn"
                  icon={<Linkedin className="h-4 w-4" />}
                  hoverIcon={<Globe className="h-4 w-4" />}
                  hoverClass="bg-[#0077B5] text-white"
                  index={1}
                />
                <SocialLink
                  href={socialLinks.leetcode}
                  ariaLabel="LeetCode"
                  icon={<Code2 className="h-4 w-4" />}
                  hoverIcon={<Code className="h-4 w-4" />}
                  hoverClass="bg-[#FFA116] text-white"
                  index={2}
                />
                <SocialLink
                  href={socialLinks.instagram}
                  ariaLabel="Instagram"
                  icon={<Instagram className="h-4 w-4" />}
                  hoverIcon={<Database className="h-4 w-4" />}
                  hoverClass="bg-gradient-to-tr from-[#FD5949] via-[#D6249F] to-[#285AEB] text-white"
                  index={3}
                />
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
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20 z-10"
                initial={{ rotateY: 25 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(var(--primary-rgb), 0.35)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent z-10"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 0.7 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                ></motion.div>
                <Image
                  src="/placeholder.svg"
                  alt="Noureddine Bouderbala"
                  fill
                  className="object-cover"
                  priority
                  quality={95}
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -left-8 -bottom-8 p-4 bg-background rounded-xl shadow-lg border border-border z-20"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  boxShadow: "0 10px 20px -5px rgba(var(--primary-rgb), 0.25)",
                }}
                drag
                dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
                dragElastic={0.1}
              >
                <Code className="h-6 w-6 text-primary" />
              </motion.div>

              <motion.div
                className="absolute -right-8 top-1/2 p-4 bg-background rounded-xl shadow-lg border border-border z-20"
                initial={{ x: 20, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  y: [0, -8, 0],
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 3,
                      repeatType: "reverse",
                    },
                  },
                }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 20px -5px rgba(59, 130, 246, 0.3)",
                }}
                drag
                dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
                dragElastic={0.1}
              >
                <Layout className="h-6 w-6 text-blue-500" />
              </motion.div>

              <motion.div
                className="absolute -top-8 -right-8 p-4 bg-background rounded-xl shadow-lg border border-border z-20"
                initial={{ y: -20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  x: [0, 8, 0],
                  transition: {
                    x: {
                      repeat: Infinity,
                      duration: 4,
                      repeatType: "reverse",
                    },
                  },
                }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  boxShadow: "0 10px 20px -5px rgba(34, 197, 94, 0.3)",
                }}
                drag
                dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
                dragElastic={0.1}
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
