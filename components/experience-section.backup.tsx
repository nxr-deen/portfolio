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
  Trophy,
  Calendar as CalendarIcon,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

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
    title: "Algerian E-Traveling Platform",
    company: "Higher School of Computer Science & Digital Technologies",
    companyUrl: "https://estin.dz",
    period: "Feb 2024 - May 2024",
    description:
      "In my second year, I helped build Wonderlust, a modern website promoting tourism in Algeria. The project includes source code, docs, and platform features. I also joined school clubs to grow my teamwork and tech skills.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tourism Platform",
      "Documentation",
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
    period: "Jan - May 2025",
  },
];

// Certifications data
const certifications = [
  {
    id: 1,
    title: "Competitive Programming - CodeCraft",
    organization: "ByteCraft",
    year: "2025",
    image: "/Certificate of Participation.png", // Using the actual certificate image
    icon: "🏅",
    color: "purple",
    issueDate: "February 2025",
    credentialId: "BC-CP-2025",
    description:
      "Awarded for exceptional performance in the ByteCraft competitive programming competition, demonstrating advanced problem-solving skills and algorithmic thinking.",
    skills: [
      "Algorithms",
      "Data Structures",
      "Problem Solving",
      "Competitive Programming",
    ],
  },
  {
    id: 2,
    title: "The Complete Web Developer Bootcamp",
    organization: "Udemy (Angela Yu)",
    year: "2025",
    image: "/udemy-cer.jpg", // Using the actual Udemy certificate
    icon: "🚀",
    color: "blue",
    issueDate: "May 2025",
    credentialId: "UC-eb6a8d0c-f36b-41a0-9f4d-73d789a284f2",
    description:
      "Comprehensive web development bootcamp covering front-end and back-end technologies. Mastered responsive design principles and modern JavaScript frameworks.",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "React"],
    comingSoon: false, // Updated: Certificate is now available
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
  const [openCertId, setOpenCertId] = useState<number | null>(null);
  // Add state to control dialog open/close
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const certificationsPerPage = 2;
  const totalPages = Math.ceil(certifications.length / certificationsPerPage);

  // Get current certificates based on active page
  const currentCertifications = useMemo(() => {
    const startIndex = (activePage - 1) * certificationsPerPage;
    return certifications.slice(startIndex, startIndex + certificationsPerPage);
  }, [activePage]);

  // Function to handle opening a certification
  const handleOpenCert = (cert: any) => {
    setSelectedCert(cert);
    setOpen(true);
  };

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
              </div>              <div className="space-y-3">
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
                      onClick={() => handleOpenCert(cert)}
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
                      </div>                    </button>
                  </motion.div>
                ))}
              </div>
              
              {/* Certificate dialog - separated from the list */}
              <Dialog open={open} onOpenChange={setOpen}>
                {selectedCert && (
                  <DialogContent className="sm:max-w-md md:max-w-lg">
                    <DialogHeader>
                      <DialogTitle className="text-xl flex items-center gap-2">
                        <span className="text-lg">
                          {selectedCert.icon}
                        </span>
                        {selectedCert.title}
                      </DialogTitle>                          <DialogDescription className="text-sm">
                            <div className="flex items-center gap-2 text-foreground">
                              <span>{selectedCert.organization}</span>
                              <span>•</span>
                              <span className="text-primary font-medium">
                                Issued: {selectedCert.issueDate}
                              </span>
                            </div>
                          </DialogDescription>
                        </DialogHeader>

                        <div className="mt-4 space-y-4">
                          {/* Certificate Image */}
                          <div className="relative w-full h-64 md:h-80 rounded-md overflow-hidden border border-border">
                            {selectedCert?.comingSoon ? (
                              <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/50">
                                <CalendarIcon className="h-12 w-12 text-muted-foreground mb-2 opacity-50" />
                                <p className="text-muted-foreground font-medium">
                                  Certificate Coming Soon
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Will be added upon course completion
                                </p>
                              </div>
                            ) : (
                              <Image
                                src={selectedCert?.image}
                                alt={`${selectedCert?.title} Certificate`}
                                fill
                                className="object-contain"
                              />
                            )}
                          </div>

                          {/* Certificate details */}
                          <div>
                            <h3 className="text-sm font-medium mb-1">
                              About this certification:
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {selectedCert?.description}
                            </p>
                          </div>

                          {/* Skills section */}
                          <div>
                            <h3 className="text-sm font-medium mb-2">
                              Skills:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedCert?.skills.map((skill, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className={`
                                    ${
                                      selectedCert?.color === "purple"
                                        ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                                        : selectedCert?.color === "blue"
                                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                        : "bg-primary/10 text-primary"
                                    }
                                  `}
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Additional details */}
                          {selectedCert?.details && (
                            <div className="mt-4">
                              <h3 className="text-sm font-medium mb-2">
                                Additional Details:
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                <strong>Instructor:</strong>{" "}
                                {selectedCert?.details.instructor}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                <strong>Duration:</strong>{" "}
                                {selectedCert?.details.duration}
                              </p>
                              <div className="mt-2">
                                <h4 className="text-sm font-medium">
                                  Projects:
                                </h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground">
                                  {selectedCert?.details.projects.map(
                                    (project, idx) => (
                                      <li key={idx}>{project}</li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className="mt-2">
                                <h4 className="text-sm font-medium">
                                  Topics Covered:
                                </h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground">
                                  {selectedCert?.details.topics.map(
                                    (topic, idx) => (
                                      <li key={idx}>{topic}</li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>

                        <DialogFooter className="mt-4">
                          <Button
                            variant="outline"
                            className="mr-2"
                            onClick={() => setOpen(false)}
                          >
                            Close
                          </Button>

                          {selectedCert?.comingSoon ? (
                            <>
                              <Button
                                variant="outline"
                                className="mr-2"
                                onClick={() =>
                                  window.open(
                                    "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
                                    "_blank"
                                  )
                                }
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Course
                              </Button>
                              <Button>
                                <Trophy className="h-4 w-4 mr-2" />
                                Get Certificate
                              </Button>
                            </>
                          ) : (
                            <>
                              {selectedCert?.id === 2 && (
                                <Button
                                  variant="outline"
                                  className="mr-2"
                                  onClick={() =>
                                    window.open(
                                      "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
                                      "_blank"
                                    )
                                  }
                                >
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  View Course
                                </Button>
                              )}
                              <Button
                                onClick={() =>
                                  window.open(selectedCert?.image, "_blank")
                                }
                              >
                                <Trophy className="h-4 w-4 mr-2" />
                                Show Certificate
                              </Button>
                            </>
                          )}
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
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
