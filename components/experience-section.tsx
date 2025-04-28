"use client";

import {
  Briefcase,
  Calendar,
  ArrowUpRight,
  ExternalLink,
  Building,
  Award,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect, useMemo } from "react";

// Experience data
const workExperience = [
  {
    id: 1,
    title: "Freelance Developer",
    company: "Fiverr",
    companyUrl: "https://fiverr.com",
    period: "2022 - Present",
    description:
      "Developing custom web applications and websites for clients worldwide. Maintaining a high satisfaction rate with clients through effective communication and quality deliverables.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "TailwindCSS",
      "MongoDB",
      "and more",
    ],
  },
  {
    id: 2,
    title: "Web Development Intern",
    company: "Exclusive Labs",
    period: "December 2023 - February 2024",
    description:
      "Assisted in the development of client websites and web applications. Gained hands-on experience with modern web development technologies and methodologies.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "REST APIs",
      "Team Collaboration",
    ],
  },
];

// Education data
const education = [
  {
    id: 1,
    degree: "Engineering Degree in Computer Science",
    institution:
      "Higher School of Computer Science and Digital Technologies (ESTIN)",
    institutionUrl: "https://estin.dz",
    period: "2022 - Present",
    description:
      "Coursework includes Data Structures, Algorithms, Database Systems, and Web Development.",
  },
];

// Certifications data
const certifications = [
  {
    id: 1,
    title: "ByteCraft Ideathon Winner - First Place",
    organization: "ByteCraft",
    year: "2024",
    image: "/placeholder-logo.svg",
  },
  {
    id: 2,
    title: "ByteCraft Competitive Programming",
    organization: "ByteCraft",
    year: "2023",
    image: "/placeholder-logo.svg",
  },
  {
    id: 3,
    title: "Salam Hack Online",
    organization: "Salam Tech",
    year: "2023",
    image: "/placeholder-logo.svg",
  },
];

function SectionTitle({
  icon,
  title,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(
        "flex items-center gap-2 mb-6 group hover:cursor-pointer",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-primary group-hover:text-blue-500 transition-colors">
        {icon}
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h2>
    </motion.div>
  );
}

function ExperienceItem({
  item,
  isLast,
  index = 0,
}: {
  item: (typeof workExperience)[0];
  isLast: boolean;
  index?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative pb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {!isLast && (
        <motion.div
          className="absolute left-2 top-4 h-full w-0.5 bg-muted-foreground/20"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 * index }}
          viewport={{ once: true }}
        ></motion.div>
      )}
      <div className="relative flex items-start">
        <motion.div
          className="absolute left-0 mt-1.5"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.15 * index,
          }}
          viewport={{ once: true }}
          animate={
            isHovered
              ? {
                  scale: [1, 1.2, 1],
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2,
                  },
                }
              : {}
          }
        >
          <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/30"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              repeatDelay: 1,
            }}
          />
        </motion.div>
        <motion.div
          className="ml-10"
          whileHover={{
            x: 10,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
        >
          <motion.div
            className="mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-muted-foreground py-1 px-2 bg-primary/10 text-primary rounded-md">
              {item.period}
            </span>
          </motion.div>
          <motion.h3
            className="text-lg font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 * index }}
            viewport={{ once: true }}
            animate={isHovered ? { color: "hsl(var(--primary))" } : {}}
          >
            {item.title}
          </motion.h3>
          {item.company && (
            <motion.div
              className="flex items-center gap-1.5 mt-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 * index }}
              viewport={{ once: true }}
            >
              {item.companyUrl ? (
                <Link
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center"
                >
                  {item.company} <ExternalLink className="h-3 w-3 ml-0.5" />
                </Link>
              ) : (
                <span>{item.company}</span>
              )}
            </motion.div>
          )}
          <motion.p
            className="mt-2 text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 * index }}
            viewport={{ once: true }}
          >
            {item.description}
          </motion.p>

          {item.technologies && (
            <motion.div
              className="mt-3 flex flex-wrap gap-1.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 * index }}
              viewport={{ once: true }}
            >
              {item.technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.45 * index + 0.1 * idx,
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                >
                  <Badge
                    variant="secondary"
                    className={`text-xs ${
                      idx % 2 === 0
                        ? "bg-primary/10 text-primary border-primary/20"
                        : "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                    }`}
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

function EducationItem({
  item,
  isLast,
  index = 0,
}: {
  item: (typeof education)[0];
  isLast: boolean;
  index?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative pb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {!isLast && (
        <motion.div
          className="absolute left-2 top-4 h-full w-0.5 bg-muted-foreground/20"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 * index }}
          viewport={{ once: true }}
        ></motion.div>
      )}
      <div className="relative flex items-start">
        <motion.div
          className="absolute left-0 mt-1.5"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.15 * index,
          }}
          viewport={{ once: true }}
          animate={
            isHovered
              ? {
                  scale: [1, 1.2, 1],
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2,
                  },
                }
              : {}
          }
        >
          <div className="h-4 w-4 rounded-full bg-blue-500 ring-4 ring-background"></div>
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500/30"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              repeatDelay: 1,
            }}
          />
        </motion.div>
        <motion.div
          className="ml-10"
          whileHover={{
            x: 10,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
        >
          <motion.div
            className="mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-muted-foreground py-1 px-2 bg-blue-500/10 text-blue-500 rounded-md">
              {item.period}
            </span>
          </motion.div>
          <motion.h3
            className="text-lg font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 * index }}
            viewport={{ once: true }}
            animate={isHovered ? { color: "hsl(var(--primary))" } : {}}
          >
            {item.degree}
          </motion.h3>
          {item.institution && (
            <motion.div
              className="flex items-center gap-1.5 mt-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 * index }}
              viewport={{ once: true }}
            >
              {item.institutionUrl ? (
                <Link
                  href={item.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 hover:underline flex items-center transition-colors"
                >
                  <motion.span
                    whileHover={{
                      x: 2,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                  >
                    {item.institution}{" "}
                    <ExternalLink className="h-3 w-3 ml-0.5" />
                  </motion.span>
                </Link>
              ) : (
                <span>{item.institution}</span>
              )}
            </motion.div>
          )}
          <motion.p
            className="mt-2 text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 * index }}
            viewport={{ once: true }}
          >
            {item.description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function CertificationItem({
  item,
  index = 0,
}: {
  item: (typeof certifications)[0];
  index?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{
          scale: 1.02,
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
      >
        <Card className="overflow-hidden transition-all hover:border-primary/50 group border-border/50 bg-background/80 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <motion.div
                className="relative flex-shrink-0 h-12 w-12 rounded-md overflow-hidden bg-primary/10 flex items-center justify-center border border-primary/20"
                whileHover={{
                  rotateY: 180,
                  transition: { duration: 0.7, ease: "easeInOut" },
                }}
                animate={
                  isHovered
                    ? {
                        boxShadow: "0 0 15px rgba(var(--primary-rgb), 0.5)",
                      }
                    : {}
                }
              >
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={isHovered ? { rotateY: 180 } : { rotateY: 0 }}
                  transition={{ duration: 0.7 }}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-primary text-white"
                  initial={{ rotateY: -180 }}
                  animate={isHovered ? { rotateY: 0 } : { rotateY: -180 }}
                  transition={{ duration: 0.7 }}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Award className="h-6 w-6" />
                </motion.div>
              </motion.div>
              <div className="flex-1">
                <motion.div
                  className="flex justify-between items-start"
                  animate={isHovered ? { x: 3 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.h3
                    className="font-semibold transition-colors"
                    animate={isHovered ? { color: "hsl(var(--primary))" } : {}}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.div
                    animate={
                      isHovered
                        ? {
                            x: 5,
                            transition: { type: "spring", stiffness: 300 },
                          }
                        : { x: 0 }
                    }
                  >
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all" />
                  </motion.div>
                </motion.div>
                <motion.div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <span>{item.organization}</span>
                  <motion.span
                    className="text-xs"
                    animate={
                      isHovered
                        ? {
                            scale: [1, 1.5, 1],
                            transition: { repeat: 1, duration: 0.5 },
                          }
                        : {}
                    }
                  >
                    •
                  </motion.span>
                  <motion.span
                    className="text-blue-500/70 hover:text-primary transition-colors"
                    animate={isHovered ? { fontWeight: "600" } : {}}
                  >
                    {item.year}
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track scroll position to animate based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      experienceSectionRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const offsetTop = ref.getBoundingClientRect().top + window.scrollY;
        const offsetBottom = offsetTop + ref.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Pre-calculate deterministic particle positions for server/client consistency
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => {
      // Use index-based calculations for consistent values between server and client
      const xPercent = ((i * 7) % 100).toFixed(2);
      const yPercent = ((i * 9) % 100).toFixed(2);
      const opacity = (0.3 + (i % 5) * 0.1).toFixed(2);
      const scale = (0.5 + (i % 5) * 0.1).toFixed(2);
      const duration = 10 + i;
      const yOffset = -(i * 10 + 50);

      return {
        id: i,
        xPercent,
        yPercent,
        opacity,
        scale,
        duration,
        yOffset,
      };
    });
  }, []);

  return (
    <section
      id="experience"
      className="py-16 md:py-24 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background effects with responsive animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/4 bottom-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className="absolute right-1/3 top-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className="absolute left-1/2 bottom-1/2 w-64 h-64 lg:w-80 lg:h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        ></motion.div>

        {/* Animated grid pattern overlay */}
        <motion.div
          className="absolute inset-0 bg-grid-pattern opacity-[0.03]"
          initial={{ opacity: 0.01 }}
          whileInView={{ opacity: 0.03 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Deterministic particle effect - using fixed values instead of random */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute bg-primary/20 rounded-full w-2 h-2"
              initial={{
                opacity: particle.opacity,
                scale: particle.scale,
              }}
              animate={{
                y: [0, particle.yOffset],
                opacity: [particle.opacity, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              style={{
                left: `${particle.xPercent}%`,
                top: `${particle.yPercent}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with text reveal animation */}
        <motion.div
          className="max-w-xl mx-auto text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 text-sm py-1 px-3">
              <motion.span
                animate={{ scale: [0.9, 1.05, 0.9] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                MY JOURNEY
              </motion.span>
            </Badge>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-3 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent inline-block"
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
              viewport={{ once: true }}
            >
              Experience & Education
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A timeline of my professional background, education, and notable
            achievements
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
          {/* Work Experience Column */}
          <motion.div
            ref={(el) => {
              experienceSectionRefs.current[0] = el;
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`transform transition-all duration-500 ${
              activeSection === 0 ? "lg:scale-105" : "lg:scale-100"
            }`}
          >
            <SectionTitle
              icon={<Briefcase className="h-6 w-6" />}
              title="Work Experience"
            />
            <div className="space-y-2">
              {workExperience.map((item, index) => (
                <ExperienceItem
                  key={item.id}
                  item={item}
                  isLast={index === workExperience.length - 1}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            ref={(el) => {
              experienceSectionRefs.current[1] = el;
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`transform transition-all duration-500 ${
              activeSection === 1 ? "lg:scale-105" : "lg:scale-100"
            }`}
          >
            <SectionTitle
              icon={<GraduationCap className="h-6 w-6" />}
              title="Education"
            />
            <div className="space-y-2">
              {education.map((item, index) => (
                <EducationItem
                  key={item.id}
                  item={item}
                  isLast={index === education.length - 1}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            ref={(el) => {
              experienceSectionRefs.current[2] = el;
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className={`transform transition-all duration-500 ${
              activeSection === 2 ? "lg:scale-105" : "lg:scale-100"
            }`}
          >
            <SectionTitle
              icon={<Award className="h-6 w-6" />}
              title="Certifications & Achievements"
            />
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <CertificationItem key={cert.id} item={cert} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced button animation */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="group rounded-full bg-gradient-to-r from-primary/90 to-blue-500/90 hover:from-primary hover:to-blue-600 text-white transition-all relative overflow-hidden"
              size="lg"
            >
              <Link href="/resume.pdf" target="_blank">
                <motion.span
                  className="absolute inset-0 bg-white/20 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{
                    scale: 1.5,
                    opacity: 0.3,
                    transition: { duration: 0.5 },
                  }}
                />
                <motion.span className="relative flex items-center">
                  View Full Resume
                  <motion.span
                    animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </motion.span>
              </Link>
            </Button>
          </motion.div>
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
      `}</style>
    </section>
  );
}
