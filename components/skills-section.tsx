"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Globe,
  Server,
  GitBranch,
  Brain,
  MessageSquare,
  Users,
  Clock,
  RefreshCcw,
  Lightbulb,
  Github,
  Figma,
  Trello,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Custom SVG icons for Next.js and Tailwind CSS
const NextJsIcon = () => (
  <svg
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <mask
      id="mask0_408_134"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="180"
      height="180"
    >
      <circle cx="90" cy="90" r="90" fill="black" />
    </mask>
    <g mask="url(#mask0_408_134)">
      <circle
        cx="90"
        cy="90"
        r="87"
        fill="black"
        stroke="white"
        strokeWidth="6"
      />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="url(#paint0_linear_408_134)"
      />
      <rect
        x="115"
        y="54"
        width="12"
        height="72"
        fill="url(#paint1_linear_408_134)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_408_134"
        x1="109"
        y1="116.5"
        x2="144.5"
        y2="160.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_408_134"
        x1="121"
        y1="54"
        x2="120.799"
        y2="106.875"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const TailwindIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-full h-full"
  >
    <title>Tailwind CSS</title>
    <path
      d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
      fill="#38bdf8"
    />
  </svg>
);

// Skill data with icons and proficiency levels
const skills = {
  featured: [
    {
      name: "Full-Stack Development",
      icon: <Code className="h-6 w-6 text-primary" />,
      description:
        "Building web applications with client and server side expertise",
      details:
        "Specializing in building scalable and maintainable applications from frontend to backend, employing best practices like clean architecture and test-driven development.",
    },
    {
      name: "Frontend Excellence",
      icon: <Globe className="h-6 w-6 text-primary" />,
      description:
        "Creating responsive, accessible, and interactive user interfaces",
      details:
        "Crafting pixel-perfect interfaces with a focus on performance, accessibility, and user experience. Experienced in modern frontend frameworks and design systems.",
    },
    {
      name: "Backend Architecture",
      icon: <Server className="h-6 w-6 text-primary" />,
      description: "Designing robust backend systems with scalability in mind",
      details:
        "Building secure, scalable APIs and services using modern backend technologies. Experienced with microservices, serverless architecture, and database optimization.",
    },
    {
      name: "DevOps & CI/CD",
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      description:
        "Automating deployment pipelines and infrastructure management",
      details:
        "Setting up efficient CI/CD pipelines, implementing infrastructure as code, and ensuring smooth development workflows for teams of all sizes.",
    },
  ],
  technical: [
    {
      name: "JavaScript",
      proficiency: 95,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      proficiency: 90,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      proficiency: 95,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    { name: "Next.js", proficiency: 85, icon: <NextJsIcon /> },
    {
      name: "Node.js",
      proficiency: 80,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "HTML5",
      proficiency: 95,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      proficiency: 90,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    { name: "Tailwind CSS", proficiency: 90, icon: <TailwindIcon /> },
  ],
  soft: [
    {
      name: "Problem Solving",
      proficiency: 95,
      icon: <Brain className="h-6 w-6 text-indigo-500" />,
    },
    {
      name: "Communication",
      proficiency: 90,
      icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
    },
    {
      name: "Teamwork",
      proficiency: 95,
      icon: <Users className="h-6 w-6 text-green-500" />,
    },
    {
      name: "Time Management",
      proficiency: 85,
      icon: <Clock className="h-6 w-6 text-amber-500" />,
    },
    {
      name: "Adaptability",
      proficiency: 90,
      icon: <RefreshCcw className="h-6 w-6 text-purple-500" />,
    },
    {
      name: "Creativity",
      proficiency: 95,
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
    },
  ],
  tools: [
    {
      name: "VS Code",
      proficiency: 95,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "GitHub",
      proficiency: 90,
      icon: <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />,
    },
    {
      name: "Git",
      proficiency: 85,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Figma",
      proficiency: 80,
      icon: <Figma className="h-6 w-6 text-purple-500" />,
    },
    {
      name: "Docker",
      proficiency: 75,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "MongoDB",
      proficiency: 85,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      proficiency: 80,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Jira",
      proficiency: 85,
      icon: <Trello className="h-6 w-6 text-blue-600" />,
    },
  ],
};

// Component for showing a skill with icon and proficiency bar
function SkillItem({
  name,
  proficiency,
  icon,
  iconPath,
  animate = false,
  index = 0,
}: {
  name: string;
  proficiency: number;
  icon?: React.ReactNode;
  iconPath?: string;
  animate?: boolean;
  index?: number;
}) {
  const [showProgress, setShowProgress] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only start animation when the tab becomes active or when animate prop changes
    if (animate) {
      const timer = setTimeout(() => {
        setShowProgress(true);
      }, 200 + index * 50);
      return () => clearTimeout(timer);
    } else {
      setShowProgress(false);
    }
  }, [animate, index]);

  // Get proficiency level description
  const getProficiencyLevel = (value: number) => {
    if (value >= 90) return "Expert";
    if (value >= 80) return "Advanced";
    if (value >= 70) return "Proficient";
    if (value >= 50) return "Intermediate";
    return "Beginner";
  };

  return (
    <motion.div
      className="group hover:bg-muted/50 rounded-lg p-3 transition-all duration-300 border border-transparent hover:border-primary/10"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 p-2.5">
          {icon ? (
            icon
          ) : iconPath ? (
            <div className="relative w-8 h-8">
              <Image
                src={iconPath}
                alt={`${name} icon`}
                fill
                className="object-contain"
              />
            </div>
          ) : null}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="font-medium group-hover:text-primary transition-colors duration-300">
              {name}
            </span>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                proficiency >= 90
                  ? "bg-green-500/20 text-green-600 dark:text-green-400"
                  : proficiency >= 80
                  ? "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                  : proficiency >= 70
                  ? "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400"
                  : "bg-amber-500/20 text-amber-600 dark:text-amber-400"
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            >
              {getProficiencyLevel(proficiency)}
            </span>
          </div>
          <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
            <div
              className={`h-full bg-primary rounded-full transition-all duration-1000 ease-out ${
                showProgress ? "w-full" : "w-0"
              }`}
              style={{
                width: showProgress ? `${proficiency}%` : "0%",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Featured skill card component
function FeaturedSkill({
  name,
  icon,
  description,
  details,
  index = 0,
}: {
  name: string;
  icon: React.ReactNode;
  description: string;
  details: string;
  index?: number;
}) {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card
            className={`w-full transition-all duration-300 hover:shadow-md ${
              index % 2 === 0
                ? "hover:shadow-primary/10 border-primary/10"
                : "hover:shadow-blue-500/10 border-blue-500/10"
            } cursor-pointer bg-background/80 backdrop-blur-sm`}
          >
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div
                  className={`mb-4 p-3 rounded-full ${
                    index % 2 === 0
                      ? "bg-primary/10 ring-1 ring-primary/20"
                      : "bg-blue-500/10 ring-1 ring-blue-500/20"
                  }`}
                >
                  {icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{name}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </HoverCardTrigger>
      <HoverCardContent side="top" align="center" className="w-80 p-4 z-50">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">{name}</h4>
          <p className="text-sm text-muted-foreground">{details}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute right-1/4 bottom-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/3 top-2/3 w-64 h-64 lg:w-96 lg:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
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
            EXPERTISE
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of skills and tools that I've mastered to
            deliver exceptional digital experiences.
          </p>
        </motion.div>

        {/* Featured skills carousel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Featured Expertise
          </h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {skills.featured.map((skill, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <FeaturedSkill
                    name={skill.name}
                    icon={skill.icon}
                    description={skill.description}
                    details={skill.details}
                    index={index}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs
            defaultValue="technical"
            className="mb-8"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
              <TabsTrigger value="tools">Tools & Software</TabsTrigger>
            </TabsList>

            <TabsContent
              value="technical"
              className="animate-in fade-in-50 duration-300"
            >
              <Card className="border border-border/40 bg-background/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.technical.map((skill, idx) => (
                      <SkillItem
                        key={skill.name}
                        name={skill.name}
                        proficiency={skill.proficiency}
                        iconPath={skill.iconPath}
                        icon={skill.icon}
                        animate={activeTab === "technical"}
                        index={idx}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent
              value="soft"
              className="animate-in fade-in-50 duration-300"
            >
              <Card className="border border-border/40 bg-background/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.soft.map((skill, idx) => (
                      <SkillItem
                        key={skill.name}
                        name={skill.name}
                        proficiency={skill.proficiency}
                        icon={skill.icon}
                        animate={activeTab === "soft"}
                        index={idx}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent
              value="tools"
              className="animate-in fade-in-50 duration-300"
            >
              <Card className="border border-border/40 bg-background/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.tools.map((skill, idx) => (
                      <SkillItem
                        key={skill.name}
                        name={skill.name}
                        proficiency={skill.proficiency}
                        iconPath={skill.iconPath}
                        icon={skill.icon}
                        animate={activeTab === "tools"}
                        index={idx}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
