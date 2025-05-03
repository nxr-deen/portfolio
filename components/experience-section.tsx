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
import { useState, useRef, useEffect, useMemo, useCallback } from "react";

// Experience data
const workExperience = [
  {
    id: 1,
    title: "Freelance Developer",
    company: "Fiverr",
    companyUrl: "https://fiverr.com",
    period: "2022 - Present",
    rating: 4.8,
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
  },
  {
    id: 2,
    degree: "The Complete Web Developer Bootcamp",
    institution: "Udemy (Angela Yu)",
    institutionUrl:
      "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    period: "Jan - Apr 2024",
  },
];

// Certifications data
const certifications = [
  {
    id: 1,
    title: "AWS Certified Developer - Associate",
    organization: "Amazon Web Services",
    year: "2025",
    image: "/placeholder-logo.svg",
    icon: "🏆",
    color: "green",
    credentialId: "AWS-CDA-123456",
    issueDate: "February 2025",
    expiryDate: "February 2028",
    skills: ["AWS Lambda", "DynamoDB", "API Gateway", "CloudFormation"],
  },
  {
    id: 2,
    title: "ByteCraft Ideathon Winner - First Place",
    organization: "ByteCraft",
    year: "2024",
    image: "/placeholder-logo.svg",
    icon: "🥇",
    color: "gold",
    credentialId: "BC-IDT-2024-01",
    issueDate: "March 2024",
    project: "Smart Campus Solution",
  },
  {
    id: 3,
    title: "Meta Frontend Developer Professional Certificate",
    organization: "Meta (Facebook)",
    year: "2023",
    image: "/placeholder-logo.svg",
    icon: "🚀",
    color: "blue",
    credentialId: "META-FE-789123",
    issueDate: "November 2023",
    skills: ["React", "JavaScript", "Responsive Design"],
  },
  {
    id: 4,
    title: "Competitive Programming - Gold Medal",
    organization: "ByteCraft",
    year: "2023",
    image: "/placeholder-logo.svg",
    icon: "🏅",
    color: "purple",
    issueDate: "August 2023",
  },
];

// Star rating component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="text-green-500">
          ★
        </span>
      ))}
      <span className="ml-2 text-muted-foreground">{rating} on Fiverr</span>
    </div>
  );
}

// Technology badge component
function TechBadge({ tech }: { tech: string }) {
  // Use a deterministic approach based on the tech name instead of Math.random()
  // Using the string length modulo 3 to determine the style
  const styleIndex = tech.length % 3;

  return (
    <span
      className={`inline-block px-3 py-1 mr-2 mb-2 text-sm rounded-md transition-colors ${
        styleIndex === 0
          ? "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
          : styleIndex === 1
          ? "bg-primary/10 text-primary hover:bg-primary/20"
          : "bg-green-500/10 text-green-500 hover:bg-green-500/20"
      }`}
    >
      {tech}
    </span>
  );
}

export default function ExperienceSection() {
  const [activePage, setActivePage] = useState(1);
  const certificationsPerPage = 2;
  const totalPages = Math.ceil(certifications.length / certificationsPerPage);

  // Get current certificates based on active page
  const currentCertifications = useMemo(() => {
    const startIndex = (activePage - 1) * certificationsPerPage;
    return certifications.slice(startIndex, startIndex + certificationsPerPage);
  }, [activePage]);

  return (
    <section
      id="experience"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 bottom-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute right-1/3 top-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-background border-primary text-primary border py-1 px-3">
            MY JOURNEY
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional background, education, and notable
            achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Experience Column - Takes 2 columns */}
          <div className="lg:col-span-2">
            <h2 className="flex items-center text-2xl font-bold mb-8">
              <span className="text-primary mr-2">
                <Briefcase className="h-6 w-6" />
              </span>
              Work Experience
            </h2>

            <div className="space-y-12">
              {workExperience.map((item, index) => (
                <div key={item.id} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <Badge
                          variant="outline"
                          className="bg-primary/5 text-primary border-primary/20"
                        >
                          {item.period}
                        </Badge>
                      </div>

                      {item.company && (
                        <div className="mt-1 text-primary">
                          {item.companyUrl ? (
                            <Link
                              href={item.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline flex items-center"
                            >
                              {item.company}{" "}
                              <ExternalLink className="h-3 w-3 ml-0.5" />
                            </Link>
                          ) : (
                            <span>{item.company}</span>
                          )}
                        </div>
                      )}

                      {item.rating && (
                        <div className="mt-2">
                          <StarRating rating={item.rating} />
                        </div>
                      )}

                      <p className="mt-2 text-muted-foreground">
                        {item.description}
                      </p>

                      {item.technologies && (
                        <div className="mt-4 flex flex-wrap">
                          {item.technologies.map((tech, idx) => (
                            <TechBadge key={idx} tech={tech} />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column - Takes 1 column */}
          <div>
            <h2 className="flex items-center text-2xl font-bold mb-8">
              <span className="text-green-500 mr-2">
                <GraduationCap className="h-6 w-6" />
              </span>
              Education
            </h2>

            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-card rounded-lg p-4 border border-border hover:border-green-500/30 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-semibold">{item.degree}</h3>
                    <Badge
                      variant="outline"
                      className="bg-green-500/5 text-green-500 border-green-500/20 text-[10px]"
                    >
                      {item.period}
                    </Badge>
                  </div>

                  {item.institution && (
                    <div>
                      <Link
                        href={item.institutionUrl || "#"}
                        className="text-green-500 hover:text-green-600 hover:underline transition-colors flex items-center text-xs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.institution}
                        <ExternalLink className="h-2.5 w-2.5 ml-1" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications Section */}
            <div className="mt-12">
              <div className="flex justify-between items-center mb-4">
                <h2 className="flex items-center text-lg font-bold">
                  <span className="text-primary mr-2">
                    <Award className="h-5 w-5" />
                  </span>
                  Certifications
                </h2>

                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                  <span>
                    {activePage} / {totalPages}
                  </span>
                  <div className="flex gap-1">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 rounded-full bg-primary/5 border-primary/20 hover:bg-primary/10 text-primary"
                      onClick={() =>
                        setActivePage((prev) => Math.max(1, prev - 1))
                      }
                      disabled={activePage === 1}
                    >
                      <ArrowRight className="h-3 w-3 rotate-180" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 rounded-full bg-primary/5 border-primary/20 hover:bg-primary/10 text-primary"
                      onClick={() =>
                        setActivePage((prev) => Math.min(totalPages, prev + 1))
                      }
                      disabled={activePage === totalPages}
                    >
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {currentCertifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    className="block group"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      className="w-full text-left bg-card rounded-lg p-3 border border-border hover:border-primary/50 hover:bg-card/80 transition-colors cursor-pointer"
                      onClick={() =>
                        window.open(
                          cert.credentialId
                            ? `https://www.credly.com/verify/${cert.credentialId}`
                            : "#",
                          "_blank"
                        )
                      }
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex items-center justify-center w-8 h-8 rounded-md ${
                            cert.color === "gold"
                              ? "bg-amber-500/10 text-amber-500"
                              : cert.color === "purple"
                              ? "bg-purple-500/10 text-purple-500"
                              : cert.color === "green"
                              ? "bg-green-500/10 text-green-500"
                              : cert.color === "blue"
                              ? "bg-blue-500/10 text-blue-500"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          <span className="text-lg">{cert.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors flex items-center">
                            {cert.title}
                            <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <span>{cert.organization}</span>
                            <span>•</span>
                            <span
                              className={
                                cert.color === "purple"
                                  ? "text-purple-500"
                                  : cert.color === "green"
                                  ? "text-green-500"
                                  : cert.color === "gold"
                                  ? "text-amber-500"
                                  : cert.color === "blue"
                                  ? "text-blue-500"
                                  : "text-primary"
                              }
                            >
                              {cert.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
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
