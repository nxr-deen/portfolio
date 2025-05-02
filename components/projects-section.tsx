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
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useCallback, memo } from "react";

const projects = [
  {
    id: 1,
    title: "LandCo - Business Platform",
    description:
      "A modern business platform built with Next.js, Prisma, and PostgreSQL. Features user authentication, subscriptions, customer management, support system, and a sleek UI.",
    image: "/business.png",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Authentication"],
    liveUrl:
      "https://landco-business-platform-hszu944iq-nxr-deens-projects.vercel.app",
    githubUrl: "https://github.com/nxr-deen/landco",
  },

  {
    id: 2,
    title: "Athar Baqi - Quranic Recitations and Education",
    description:
      "An Islamic educational platform providing high-quality Quranic recitations, Tajweed lessons, Islamic articles, and a modern responsive design.",
    image: "/athar.png",
    tags: [
      "Next.js",
      "TypeScript",
      "CSS Modules",
      "Font Awesome",
      "Google Fonts",
    ],
    liveUrl: "https://athar-baqi.vercel.app",
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

const ProjectCard = memo(
  ({ project, index, isHovering, handleHoverStart, handleHoverEnd }) => {
    return (
      <div
        key={project.id}
        className="relative"
        onMouseEnter={() => handleHoverStart(project.id)}
        onMouseLeave={handleHoverEnd}
      >
        <Card
          className="overflow-hidden h-full group transition-all duration-300 border-border/50 bg-background/80 backdrop-blur-sm
        hover:shadow-[0_5px_15px_-10px_rgba(var(--green-rgb),0.3),0_2px_10px_-5px_rgba(var(--primary-rgb),0.2)]
        dark:hover:shadow-[0_5px_15px_-10px_rgba(var(--green-rgb),0.25),0_2px_10px_-5px_rgba(var(--primary-rgb),0.2)]
        hover:border-green-500/30 hover:translate-y-[-8px] transition-transform"
        >
          <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              loading={index <= 1 ? "eager" : "lazy"}
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <CardHeader className="border-b border-primary/10">
            <CardTitle
              className="text-xl md:text-2xl group-hover:text-primary transition-colors duration-300
            group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-500 
            group-hover:bg-clip-text group-hover:text-transparent"
            >
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
                <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                <ul className="text-xs md:text-sm list-disc pl-5 space-y-1 text-muted-foreground">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-wrap gap-3">
            <div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-primary/30 group-hover:border-primary group-hover:text-primary 
                transition-all duration-300 hover:bg-primary/5"
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
            </div>
            <div>
              <Button
                asChild
                size="sm"
                className="rounded-full relative overflow-hidden group/button"
              >
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }
);

export default function ProjectsSection() {
  const [isHovering, setIsHovering] = useState<number | null>(null);

  // Memoize projects data to prevent re-renders
  const projectsData = useMemo(() => projects, []);

  // Use callbacks for hover handlers to prevent recreation on each render
  const handleHoverStart = useCallback((id: number) => {
    setIsHovering(id);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setIsHovering(null);
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-muted/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 text-sm py-1 px-3">
            PORTFOLIO
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent inline-block">
              My Latest Projects
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents a
            unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovering={isHovering}
              handleHoverStart={handleHoverStart}
              handleHoverEnd={handleHoverEnd}
            />
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

        /* Add CSS variables for primary and green color RGB values */
        :root {
          --primary-rgb: 101, 31, 255;
          --green-rgb: 34, 197, 94;
        }
        .dark {
          --primary-rgb: 138, 92, 246;
          --green-rgb: 74, 222, 128;
        }
      `}</style>
    </section>
  );
}
