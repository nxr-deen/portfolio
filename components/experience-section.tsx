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
    <div
      className={cn(
        "flex items-center gap-2 mb-6 group hover:cursor-pointer",
        className
      )}
    >
      <div className="text-primary group-hover:text-blue-500 transition-colors">
        {icon}
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h2>
    </div>
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
    <div
      className="relative pb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isLast && (
        <div className="absolute left-2 top-4 h-full w-0.5 bg-muted-foreground/20"></div>
      )}
      <div className="relative flex items-start">
        <div className="absolute left-0 mt-1.5">
          <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
        </div>
        <div className="ml-10 hover:translate-x-2 transition-transform duration-300">
          <div className="mb-2">
            <span className="text-sm text-muted-foreground py-1 px-2 bg-primary/10 text-primary rounded-md">
              {item.period}
            </span>
          </div>
          <h3
            className={`text-lg font-semibold ${
              isHovered ? "text-primary" : ""
            }`}
          >
            {item.title}
          </h3>
          {item.company && (
            <div className="flex items-center gap-1.5 mt-1">
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
            </div>
          )}
          <p className="mt-2 text-muted-foreground">{item.description}</p>

          {item.technologies && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.technologies.map((tech, idx) => (
                <div key={idx}>
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
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
    <div
      className="relative pb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isLast && (
        <div className="absolute left-2 top-4 h-full w-0.5 bg-muted-foreground/20"></div>
      )}
      <div className="relative flex items-start">
        <div className="absolute left-0 mt-1.5">
          <div className="h-4 w-4 rounded-full bg-blue-500 ring-4 ring-background"></div>
        </div>
        <div className="ml-10 hover:translate-x-2 transition-transform duration-300">
          <div className="mb-2">
            <span className="text-sm text-muted-foreground py-1 px-2 bg-blue-500/10 text-blue-500 rounded-md">
              {item.period}
            </span>
          </div>
          <h3
            className={`text-lg font-semibold ${
              isHovered ? "text-primary" : ""
            }`}
          >
            {item.degree}
          </h3>
          {item.institution && (
            <div className="flex items-center gap-1.5 mt-1">
              {item.institutionUrl ? (
                <Link
                  href={item.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 hover:underline flex items-center transition-colors"
                >
                  <span>
                    {item.institution}{" "}
                    <ExternalLink className="h-3 w-3 ml-0.5" />
                  </span>
                </Link>
              ) : (
                <span>{item.institution}</span>
              )}
            </div>
          )}
          <p className="mt-2 text-muted-foreground">{item.description}</p>
        </div>
      </div>
    </div>
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
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <Card className="overflow-hidden transition-all hover:border-primary/50 group border-border/50 bg-background/80 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div
                className={`relative flex-shrink-0 h-12 w-12 rounded-md overflow-hidden bg-primary/10 flex items-center justify-center border border-primary/20 ${
                  isHovered ? "shadow-md shadow-primary/20" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3
                    className={`font-semibold transition-colors ${
                      isHovered ? "text-primary" : ""
                    }`}
                  >
                    {item.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all" />
                </div>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <span>{item.organization}</span>
                  <span className="text-xs">•</span>
                  <span
                    className={`text-blue-500/70 hover:text-primary transition-colors ${
                      isHovered ? "font-semibold" : ""
                    }`}
                  >
                    {item.year}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Basic scroll position tracking for active section
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

  return (
    <section
      id="experience"
      className="py-16 md:py-24 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 text-sm py-1 px-3">
            MY JOURNEY
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-3 overflow-hidden">
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent inline-block">
              Experience & Education
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional background, education, and notable
            achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
          {/* Work Experience Column */}
          <div
            ref={(el) => {
              experienceSectionRefs.current[0] = el;
            }}
            className={`transition-all duration-500 ${
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
          </div>

          {/* Education Column */}
          <div
            ref={(el) => {
              experienceSectionRefs.current[1] = el;
            }}
            className={`transition-all duration-500 ${
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
          </div>

          {/* Certifications Column */}
          <div
            ref={(el) => {
              experienceSectionRefs.current[2] = el;
            }}
            className={`transition-all duration-500 ${
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
          </div>
        </div>

        {/* Resume button */}
        <div className="text-center mt-16">
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-primary/90 to-blue-500/90 hover:from-primary hover:to-blue-600 text-white transition-all"
            size="lg"
          >
            <Link href="/resume.pdf" target="_blank">
              <span className="flex items-center">
                View Full Resume
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </Button>
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
