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
    title: "Fun Games Hub",
    description:
      "A collection of simple, engaging browser games built with HTML, CSS, and vanilla JavaScript. Includes multiplayer games like Tic Tac Toe and Rock Paper Scissors, as well as solo games like Snake and Memory Match.",
    image: "/images/homepage.png", // Make sure to add this image to your public folder
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "#", // Replace with your actual live URL when available
    githubUrl: "https://github.com/nxr-deen/fun-games-hub", // Replace with your actual GitHub URL if different
    features: [
      "Responsive design works on mobile and desktop",
      "Score tracking in multiplayer games",
      "Clean, modern UI with smooth animations",
    ],
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "A brief description of your second project. What was your role? What were the challenges?",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["TypeScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A brief description of your third project. What did you learn? What are you proud of?",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Firebase", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project represents a unique
          challenge and solution.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col h-full group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
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
                <p>{project.description}</p>

                {project.features && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex gap-4">
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
