import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
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
    liveUrl: "#", // Add your live deployment link when available
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
    <section id="projects" className="py-12 sm:py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My Projects
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project represents a unique
          challenge and solution.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col h-full group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">
                  {project.title}
                </CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm md:text-base">{project.description}</p>
                {project.features && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                    <ul className="text-xs md:text-sm list-disc pl-5 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
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
                  className="group-hover:border-primary transition-colors"
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="group-hover:bg-primary/90 transition-colors"
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
          ))}
        </div>
      </div>
    </section>
  );
}
