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
  Certificate,
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
      <div className="text-primary group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
        {icon}
      </div>
      <h2 className="text-xl md:text-2xl font-bold group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
        {title}
      </h2>
    </div>
  );
}

function ExperienceItem({
  item,
  isLast,
}: {
  item: (typeof workExperience)[0];
  isLast: boolean;
}) {
  return (
    <div className="relative pb-8">
      {!isLast && (
        <div className="absolute left-2 top-4 h-full w-0.5 bg-muted-foreground/20"></div>
      )}
      <div className="relative flex items-start">
        <div className="absolute left-0 mt-1.5">
          <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
        </div>
        <div className="ml-10">
          <div className="mb-2">
            <span className="text-sm text-muted-foreground py-1 px-2 bg-muted rounded-md">
              {item.period}
            </span>
          </div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
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
              {item.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-secondary/30"
                >
                  {tech}
                </Badge>
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
}: {
  item: (typeof education)[0];
  isLast: boolean;
}) {
  return (
    <div className="relative pb-8">
      {!isLast && (
        <div className="absolute left-2 top-4 h-full w-0.5 bg-muted-foreground/20"></div>
      )}
      <div className="relative flex items-start">
        <div className="absolute left-0 mt-1.5">
          <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
        </div>
        <div className="ml-10">
          <div className="mb-2">
            <span className="text-sm text-muted-foreground py-1 px-2 bg-muted rounded-md">
              {item.period}
            </span>
          </div>
          <h3 className="text-lg font-semibold">{item.degree}</h3>
          {item.institution && (
            <div className="flex items-center gap-1.5 mt-1">
              {item.institutionUrl ? (
                <Link
                  href={item.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center"
                >
                  {item.institution} <ExternalLink className="h-3 w-3 ml-0.5" />
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

function CertificationItem({ item }: { item: (typeof certifications)[0] }) {
  return (
    <Card className="overflow-hidden transition-all hover:border-primary/50 group">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-shrink-0 h-12 w-12 rounded-md overflow-hidden bg-muted flex items-center justify-center">
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
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <span>{item.organization}</span>
              <span className="text-xs">•</span>
              <span>{item.year}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute right-0 top-1/3 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute left-0 bottom-1/4 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400"
          >
            MY JOURNEY
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional background, education, and notable
            achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
          {/* Work Experience Column */}
          <div>
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
                />
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
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
                />
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <SectionTitle
              icon={<Award className="h-6 w-6" />}
              title="Certifications & Achievements"
            />
            <div className="space-y-3">
              {certifications.map((cert) => (
                <CertificationItem key={cert.id} item={cert} />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild className="group" size="lg">
            <Link href="/resume.pdf" target="_blank">
              View Full Resume
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
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
    </section>
  );
}
