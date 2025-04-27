"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// You can edit this data later
const projects = [
  {
    id: 1,
    title: "LandCo - Business Platform",
    description:
      "A modern business platform built with Next.js, Prisma, and PostgreSQL. Features user authentication, subscriptions, customer management, support system, and a sleek UI.",
    image: "/business.png", // Replace with a real image path
    tags: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Authentication"],
    liveUrl:
      "https://landco-business-platform-hszu944iq-nxr-deens-projects.vercel.app", // Add your live deployment link when available
    githubUrl: "https://github.com/nxr-deen/landco", // Replace with your GitHub repo URL
  },

  {
    id: 2,
    title: "Athar Baqi - Quranic Recitations and Education",
    description:
      "An Islamic educational platform providing high-quality Quranic recitations, Tajweed lessons, Islamic articles, and a modern responsive design.",
    image: "/athar.png", // Replace with your real project image
    tags: [
      "Next.js",
      "TypeScript",
      "CSS Modules",
      "Font Awesome",
      "Google Fonts",
    ],
    liveUrl: "https://athar-baqi.vercel.app", // if you have a live version
    githubUrl: "https://github.com/nxr-deen/athar-baqi",
  },

  {
    id: 3,
    title: "Fun Games Hub",
    description:
      "A collection of simple, includes multiplayer games like Tic Tac Toe and Rock Paper Scissors, as well as solo games like Snake and Memory Match.",
    image: "/games.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://nxr-deen.github.io/fun-games-hub/",
    githubUrl: "https://github.com/nxr-deen/fun-games-hub",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute right-1/4 bottom-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/2 top-2/3 w-64 h-64 lg:w-80 lg:h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-muted/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 text-sm py-1 px-3">
            PORTFOLIO
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              My Latest Projects
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents a
            unique challenge and solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 bg-background/80 backdrop-blur-sm">
                <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-blue-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                <CardHeader className="border-b border-primary/10">
                  <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 text-xs rounded-full ${
                            idx % 2 === 0
                              ? "bg-primary/10 text-primary"
                              : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-sm md:text-base text-muted-foreground">
                    {project.description}
                  </p>
                  {project.features && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">
                        Key Features:
                      </h4>
                      <ul className="text-xs md:text-sm list-disc pl-5 space-y-1 text-muted-foreground">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="rounded-full bg-gradient-to-r from-primary/90 to-blue-500/90 hover:from-primary hover:to-blue-600 text-white transition-all"
                  >
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
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
