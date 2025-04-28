"use client";

import * as React from "react";
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
  Code2,
  FileType,
  Layout,
  Wind,
  Pencil,
  Paintbrush,
  Terminal,
  Database,
  TableProperties,
  RefreshCw,
  Network,
  CornerDownRight,
  Share2,
  Boxes,
  Wrench,
  BarChart2,
  Speech,
  UsersRound,
  Timer,
  Recycle,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
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

// Custom Express.js icon
const ExpressIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-full h-full"
  >
    <path
      d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"
      fill="#9993D3"
    />
  </svg>
);

// Skill data with icons and proficiency levels
const skills = {
  frontend: [
    {
      name: "React",
      proficiency: 95,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      hoverIcon: <Code className="h-10 w-10 text-blue-500" />,
    },
    {
      name: "Next.js",
      proficiency: 85,
      icon: <NextJsIcon />,
      hoverIcon: <Server className="h-10 w-10 text-black dark:text-white" />,
    },
    {
      name: "TypeScript",
      proficiency: 90,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      hoverIcon: <Code2 className="h-10 w-10 text-blue-700" />,
    },
    {
      name: "JavaScript",
      proficiency: 95,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      hoverIcon: <FileType className="h-10 w-10 text-yellow-500" />,
    },
    {
      name: "HTML5",
      proficiency: 95,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      hoverIcon: <Layout className="h-10 w-10 text-orange-600" />,
    },
    {
      name: "CSS3",
      proficiency: 90,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      hoverIcon: <Paintbrush className="h-10 w-10 text-blue-500" />,
    },
    {
      name: "Tailwind CSS",
      proficiency: 90,
      icon: <TailwindIcon />,
      hoverIcon: <Wind className="h-10 w-10 text-cyan-400" />,
    },
    {
      name: "Figma",
      proficiency: 80,
      icon: <Figma className="h-6 w-6 text-purple-500" />,
      hoverIcon: <Pencil className="h-10 w-10 text-purple-500" />,
    },
  ],
  backend: [
    {
      name: "Node.js",
      proficiency: 80,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      hoverIcon: <Terminal className="h-10 w-10 text-green-500" />,
    },
    {
      name: "Express",
      proficiency: 85,
      icon: <ExpressIcon />,
      hoverIcon: <CornerDownRight className="h-10 w-10 text-purple-600" />,
    },
    {
      name: "MongoDB",
      proficiency: 85,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      hoverIcon: <Database className="h-10 w-10 text-green-600" />,
    },
    {
      name: "PostgreSQL",
      proficiency: 80,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      hoverIcon: <TableProperties className="h-10 w-10 text-blue-600" />,
    },
    {
      name: "REST APIs",
      proficiency: 90,
      icon: <Server className="h-6 w-6 text-blue-500" />,
      hoverIcon: <RefreshCw className="h-10 w-10 text-blue-500" />,
    },
    {
      name: "GraphQL",
      proficiency: 75,
      icon: <Globe className="h-6 w-6 text-pink-500" />,
      hoverIcon: <Network className="h-10 w-10 text-pink-500" />,
    },
  ],
  devops: [
    {
      name: "Git",
      proficiency: 85,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      hoverIcon: <GitBranch className="h-10 w-10 text-orange-500" />,
    },
    {
      name: "GitHub",
      proficiency: 90,
      icon: <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />,
      hoverIcon: <Share2 className="h-10 w-10 text-white" />,
    },
    {
      name: "Docker",
      proficiency: 75,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      hoverIcon: <Boxes className="h-10 w-10 text-blue-600" />,
    },
    {
      name: "VS Code",
      proficiency: 95,
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      hoverIcon: <Code className="h-10 w-10 text-blue-500" />,
    },
    {
      name: "CI/CD",
      proficiency: 80,
      icon: <GitBranch className="h-6 w-6 text-green-500" />,
      hoverIcon: <Wrench className="h-10 w-10 text-green-500" />,
    },
    {
      name: "Jira",
      proficiency: 85,
      icon: <Trello className="h-6 w-6 text-blue-600" />,
      hoverIcon: <BarChart2 className="h-10 w-10 text-blue-600" />,
    },
  ],
  soft: [
    {
      name: "Problem Solving",
      proficiency: 95,
      icon: <Brain className="h-6 w-6 text-indigo-500" />,
      hoverIcon: <Lightbulb className="h-10 w-10 text-yellow-500" />,
    },
    {
      name: "Communication",
      proficiency: 90,
      icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
      hoverIcon: <Speech className="h-10 w-10 text-blue-500" />,
    },
    {
      name: "Teamwork",
      proficiency: 95,
      icon: <Users className="h-6 w-6 text-green-500" />,
      hoverIcon: <UsersRound className="h-10 w-10 text-green-600" />,
    },
    {
      name: "Time Management",
      proficiency: 85,
      icon: <Clock className="h-6 w-6 text-amber-500" />,
      hoverIcon: <Timer className="h-10 w-10 text-amber-500" />,
    },
    {
      name: "Adaptability",
      proficiency: 90,
      icon: <RefreshCcw className="h-6 w-6 text-purple-500" />,
      hoverIcon: <Recycle className="h-10 w-10 text-purple-500" />,
    },
    {
      name: "Creativity",
      proficiency: 95,
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      hoverIcon: <Award className="h-10 w-10 text-yellow-500" />,
    },
  ],
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
};

// Component for showing a skill with icon and circular progress
function SkillItem({
  name,
  proficiency,
  icon,
  iconPath,
  hoverIcon,
  animate = false,
  index = 0,
}: {
  name: string;
  proficiency: number;
  icon?: React.ReactNode;
  iconPath?: string;
  hoverIcon?: React.ReactNode;
  animate?: boolean;
  index?: number;
}) {
  const [showProgress, setShowProgress] = useState(false);
  const [hovering, setHovering] = useState(false);
  const isMobile = useIsMobile();

  const circleRef = useRef<SVGCircleElement>(null);
  const radius = 38;
  const circumference = 2 * Math.PI * radius;

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

  useEffect(() => {
    if (circleRef.current && showProgress) {
      const offset = circumference - (proficiency / 100) * circumference;
      circleRef.current.style.strokeDashoffset = offset.toString();
    }
  }, [showProgress, proficiency, circumference]);

  // Get proficiency level description
  const getProficiencyLevel = (value: number) => {
    if (value >= 90) return "Expert";
    if (value >= 80) return "Advanced";
    if (value >= 70) return "Proficient";
    if (value >= 50) return "Intermediate";
    return "Beginner";
  };

  // Get color based on proficiency
  const getColor = () => {
    if (proficiency >= 90) return "from-green-500 to-emerald-600";
    if (proficiency >= 80) return "from-blue-500 to-indigo-600";
    if (proficiency >= 70) return "from-indigo-500 to-purple-600";
    return "from-amber-500 to-orange-600";
  };

  // Determine the star rating (1-5) based on proficiency
  const getStarRating = (proficiency: number) => {
    return Math.round(proficiency / 20);
  };

  // MOBILE VERSION
  if (isMobile) {
    // Simpler mobile version
    return (
      <div className="flex flex-col items-center relative">
        {/* Simple background */}
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center bg-background border border-border shadow-sm relative ${
            hovering ? "scale-110" : ""
          } transition-transform duration-200`}
          onClick={() => {
            setHovering(!hovering);
          }}
          onTouchStart={() => setHovering(true)}
          onTouchEnd={(e) => {
            e.preventDefault(); // Prevent default to maintain tooltip
          }}
        >
          {/* Show the icon directly */}
          {iconPath ? (
            <div className="w-8 h-8">
              <img
                src={iconPath}
                alt={name}
                width="32"
                height="32"
                className="w-full h-full object-contain"
              />
            </div>
          ) : icon ? (
            <div className="w-8 h-8">
              {typeof icon === "function" ? (
                icon()
              ) : React.isValidElement(icon) ? (
                React.cloneElement(icon, {
                  style: { width: "100%", height: "100%" },
                })
              ) : (
                <Code className="w-8 h-8" />
              )}
            </div>
          ) : (
            <Code className="w-8 h-8" />
          )}
        </div>

        {/* Persistent name under icon */}
        <div className="mt-2 text-center">
          <span className="text-xs whitespace-nowrap opacity-80">{name}</span>
        </div>
      </div>
    );
  }

  // DESKTOP VERSION - simplified without numbers and stars
  return (
    <motion.div
      className="group relative overflow-hidden hover:bg-muted/50 rounded-xl p-5 transition-all duration-500 border border-transparent hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 backdrop-blur-sm"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Background glow effect */}
      <motion.div
        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl ${
          proficiency >= 90
            ? "bg-green-500"
            : proficiency >= 80
            ? "bg-blue-500"
            : proficiency >= 70
            ? "bg-indigo-500"
            : "bg-amber-500"
        }`}
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.5, rotate: 15 }}
      />

      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative w-28 h-28">
          {/* Circular progress */}
          <svg
            width="112"
            height="112"
            viewBox="0 0 112 112"
            className="rotate-[-90deg] transform"
          >
            <circle
              cx="56"
              cy="56"
              r={radius}
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              className="text-secondary/30"
            />
            <circle
              cx="56"
              cy="56"
              r={radius}
              stroke="url(#gradient)"
              strokeWidth="5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              className={`transition-all duration-1500 ease-out ${
                showProgress ? "" : "opacity-0"
              }`}
              ref={circleRef}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  className={`stop-color-start ${getColor().split(" ")[0]}`}
                />
                <stop
                  offset="100%"
                  className={`stop-color-end ${getColor().split(" ")[1]}`}
                />
              </linearGradient>
            </defs>
          </svg>
          {/* Icon in the center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-16 h-16 flex items-center justify-center rounded-full bg-background shadow-inner border border-border p-2 relative overflow-hidden"
              whileHover={{
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 },
              }}
            >
              {/* Default icon that rotates away on hover */}
              <motion.div
                className="relative w-10 h-10 flex items-center justify-center"
                animate={{
                  rotateY: hovering ? 180 : 0,
                  opacity: hovering ? 0 : 1,
                  zIndex: hovering ? 0 : 10,
                }}
                transition={{ duration: 0.3 }}
              >
                {icon ? (
                  icon
                ) : iconPath ? (
                  <Image
                    src={iconPath}
                    alt={`${name} icon`}
                    fill
                    className="object-contain"
                  />
                ) : null}
              </motion.div>

              {/* Hover icon that rotates in */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  rotateY: hovering ? 0 : -180,
                  opacity: hovering ? 1 : 0,
                  zIndex: hovering ? 10 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {hoverIcon ? (
                  hoverIcon
                ) : (
                  <motion.div
                    animate={{ rotate: hovering ? 360 : 0 }}
                    transition={{ duration: 1.5, ease: "linear" }}
                  >
                    {icon ? (
                      icon
                    ) : iconPath ? (
                      <Image
                        src={iconPath}
                        alt={`${name} icon`}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    ) : null}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="mt-1 w-full">
          <h3 className="font-medium text-lg group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

// Featured skill card component with enhanced design
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          viewport={{ once: true }}
          className="h-full perspective-1000"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div
            className="relative h-full transform-style-3d transition-all duration-500 w-full"
            animate={{
              rotateX: isHovered ? 5 : 0,
              rotateY: isHovered ? 5 : 0,
              translateZ: isHovered ? 20 : 0,
            }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <Card
              className={`w-full h-full transition-all duration-300 hover:shadow-md backdrop-blur-sm group overflow-hidden relative bg-background/90 ${
                index % 2 === 0
                  ? "hover:shadow-primary/10 border-primary/10"
                  : index % 3 === 0
                  ? "hover:shadow-purple-500/10 border-purple-500/10"
                  : "hover:shadow-blue-500/10 border-blue-500/10"
              }`}
            >
              {/* Background gradient effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-xl ${
                  index % 2 === 0
                    ? "bg-gradient-to-br from-primary via-primary/50 to-transparent"
                    : index % 3 === 0
                    ? "bg-gradient-to-br from-purple-500 via-purple-500/50 to-transparent"
                    : "bg-gradient-to-br from-blue-500 via-blue-500/50 to-transparent"
                }`}
              ></div>

              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon with floating effect */}
                  <motion.div
                    className={`mb-6 p-4 rounded-full transition-all duration-300 relative ${
                      index % 2 === 0
                        ? "bg-primary/10 ring-1 ring-primary/20 group-hover:bg-primary/20"
                        : index % 3 === 0
                        ? "bg-purple-500/10 ring-1 ring-purple-500/20 group-hover:bg-purple-500/20"
                        : "bg-blue-500/10 ring-1 ring-blue-500/20 group-hover:bg-blue-500/20"
                    }`}
                    animate={{
                      y: isHovered ? [0, -5, 0] : 0,
                    }}
                    transition={{
                      repeat: isHovered ? Infinity : 0,
                      duration: 2,
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: isHovered ? [0, 5, 0, -5, 0] : 0,
                      }}
                      transition={{
                        repeat: isHovered ? Infinity : 0,
                        duration: 3,
                      }}
                      className="relative z-10"
                    >
                      <div className="w-12 h-12 flex items-center justify-center">
                        {icon}
                      </div>
                    </motion.div>

                    {/* Glow effect behind icon */}
                    <motion.div
                      className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-70 ${
                        index % 2 === 0
                          ? "bg-primary/20"
                          : index % 3 === 0
                          ? "bg-purple-500/20"
                          : "bg-blue-500/20"
                      }`}
                      animate={{
                        scale: isHovered ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        repeat: isHovered ? Infinity : 0,
                        duration: 2,
                      }}
                    />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-medium mb-3 group-hover:text-primary transition-colors duration-300"
                    animate={{
                      scale: isHovered ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {name}
                  </motion.h3>

                  <motion.p
                    className="text-sm text-muted-foreground"
                    animate={{
                      opacity: isHovered ? 0.9 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {description}
                  </motion.p>

                  {/* Read more indicator */}
                  <div className="mt-auto pt-5 flex items-center justify-center">
                    <motion.div className="text-xs font-medium text-muted-foreground/70 flex items-center gap-2 group-hover:text-primary/70 transition-colors">
                      <span>Details</span>
                      <motion.div
                        animate={{
                          y: isHovered ? [0, 3, 0] : [0, 2, 0],
                          x: isHovered ? [0, 3, 0] : 0,
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: isHovered ? 1 : 1.5,
                        }}
                        className="group-hover:text-primary"
                      >
                        ↗
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>

              {/* Animated border glow effect */}
              {isHovered && (
                <>
                  <motion.div
                    className={`absolute -bottom-1 left-0 right-0 h-[2px] ${
                      index % 2 === 0
                        ? "bg-gradient-to-r from-transparent via-primary to-transparent"
                        : index % 3 === 0
                        ? "bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                        : "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    }`}
                    initial={{ width: 0, left: "50%" }}
                    animate={{ width: "100%", left: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </>
              )}
            </Card>
          </motion.div>
        </motion.div>
      </HoverCardTrigger>

      <HoverCardContent
        side="top"
        align="center"
        className="w-80 p-6 z-50 shadow-xl border-primary/20"
      >
        <div className="space-y-3">
          <h4 className="text-base font-medium text-primary">{name}</h4>
          <p className="text-sm text-muted-foreground">{details}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

// Optimized compact version of SkillItem for the "All Skills" tab
function CompactSkillItem({
  name,
  proficiency,
  icon,
  iconPath,
  hoverIcon,
  animate = false,
  index = 0,
}: {
  name: string;
  proficiency: number;
  icon?: React.ReactNode;
  iconPath?: string;
  hoverIcon?: React.ReactNode;
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

  // Get color based on proficiency
  const getColor = (value: number) => {
    if (value >= 90) return "text-green-600 dark:text-green-400";
    if (value >= 80) return "text-blue-600 dark:text-blue-400";
    if (value >= 70) return "text-indigo-600 dark:text-indigo-400";
    return "text-amber-600 dark:text-amber-400";
  };

  return (
    <motion.div
      className="group relative overflow-hidden hover:bg-muted/50 rounded-lg p-2 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-md hover:shadow-primary/10 backdrop-blur-sm"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 + index * 0.03 }}
      viewport={{ once: true }}
      whileHover={{ y: -3, scale: 1.01 }}
    >
      <div className="flex items-center gap-2">
        {/* Simplified icon that just shows the proficiency color */}
        <div className="relative w-3 h-10 flex-shrink-0">
          <motion.div
            className={`absolute bottom-0 w-full rounded-sm ${getColor(
              proficiency
            )}`}
            style={{
              height: `${proficiency}%`,
              backgroundColor: "currentColor",
              opacity: 0.2,
            }}
            initial={{ height: 0 }}
            animate={{ height: showProgress ? `${proficiency}%` : 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: showProgress ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                proficiency >= 90
                  ? "bg-green-500/10 text-green-600 dark:text-green-400"
                  : proficiency >= 80
                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                  : proficiency >= 70
                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                  : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
              }`}
            >
              {proficiency}%
            </motion.span>
          </div>

          <div className="flex items-center mt-1">
            {/* Star rating */}
            <div className="flex gap-px">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className={
                    i < Math.round(proficiency / 20)
                      ? "text-yellow-500 text-[0.6rem]"
                      : "text-gray-300 text-[0.6rem]"
                  }
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: showProgress ? 1 : 0,
                    scale: showProgress ? 1 : 0.5,
                  }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.2 }}
                >
                  ★
                </motion.span>
              ))}
            </div>

            <span className="mx-1 text-muted-foreground text-[0.6rem]">•</span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: showProgress ? 0.8 : 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className={`text-[0.6rem] ${getColor(proficiency)}`}
            >
              {getProficiencyLevel(proficiency)}
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();
  const [showCategoryHeading, setShowCategoryHeading] = useState(false);

  // Filter skills based on proficiency level
  const filteredSkills = (category: string) => {
    const categorySkills = skills[category as keyof typeof skills];
    if (!Array.isArray(categorySkills) || category === "featured")
      return categorySkills;
    return categorySkills;
  };

  useEffect(() => {
    // Set loaded after initial render
    setIsLoaded(true);
  }, []);

  // Show category heading when tab changes - but only in mobile view
  useEffect(() => {
    setShowCategoryHeading(false);
    if (isMobile) {
      const timer = setTimeout(() => {
        setShowCategoryHeading(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeTab, isMobile]);

  const tabItems = [
    { value: "all", label: "All", icon: <Layout /> },
    { value: "frontend", label: "Frontend", icon: <Globe /> },
    { value: "backend", label: "Backend", icon: <Server /> },
    { value: "devops", label: "DevOps", icon: <GitBranch /> },
    { value: "soft", label: "Soft Skills", icon: <Brain /> },
  ];

  // Color mapping for each tab
  const tabColors = {
    all: "text-orange-500 bg-orange-500/5",
    frontend: "text-primary bg-primary/5",
    backend: "text-blue-500 bg-blue-500/5",
    devops: "text-amber-400 bg-amber-400/5",
    soft: "text-purple-500 bg-purple-500/5",
  };

  // Get the current category color
  const getCategoryColor = (tab: string) => {
    switch (tab) {
      case "frontend":
        return "text-primary";
      case "all":
        return "text-orange-500";
      case "backend":
        return "text-blue-500";
      case "devops":
        return "text-amber-400";
      case "soft":
        return "text-purple-500";
      default:
        return "text-primary";
    }
  };

  // Get gradient colors for category heading
  const getCategoryGradient = (tab: string) => {
    switch (tab) {
      case "frontend":
        return "from-primary to-blue-400";
      case "all":
        return "from-orange-500 to-amber-300";
      case "backend":
        return "from-blue-500 to-indigo-400";
      case "devops":
        return "from-amber-400 to-yellow-300";
      case "soft":
        return "from-purple-500 to-pink-400";
      default:
        return "from-primary to-blue-400";
    }
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 relative bg-gradient-to-b from-background/80 via-background to-background"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/4 top-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.35, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute left-1/3 top-2/3 w-64 h-64 lg:w-96 lg:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.25, 0.2] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Section badge */}
          <Badge className="mb-3 bg-background border-primary text-primary border py-1 px-3">
            EXPERTISE
          </Badge>

          {/* Main heading with gradient text */}
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              My Skills & Expertise
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of skills and technologies I've mastered to
            deliver exceptional digital experiences and solutions.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Tabs
            defaultValue="frontend"
            className="mb-8"
            onValueChange={(value) => {
              setActiveTab(value);
              // For smoother transition between tabs
              setIsLoaded(false);
              setTimeout(() => setIsLoaded(true), 50);
            }}
          >
            {/* Mobile Navigation - improved with modern card-style tabs */}
            {isMobile ? (
              <div className="mb-8">
                <TabsList className="grid grid-cols-5 w-full gap-1 rounded-xl p-1 bg-background/80 border border-border/50 shadow-inner overflow-x-auto snap-x snap-mandatory">
                  {tabItems.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className={`relative px-3 py-4 snap-center
                        flex flex-col items-center justify-center gap-2 
                        transition-all duration-300 rounded-lg
                        data-[state=active]:bg-background data-[state=active]:shadow-sm
                        ${
                          activeTab === tab.value
                            ? tabColors[tab.value as keyof typeof tabColors]
                            : ""
                        }
                        data-[state=active]:scale-105`}
                    >
                      <motion.div
                        initial={{ scale: 1 }}
                        animate={{
                          scale: activeTab === tab.value ? [1, 1.2, 1] : 1,
                          y: activeTab === tab.value ? [0, -2, 0] : 0,
                        }}
                        transition={{
                          repeat: activeTab === tab.value ? Infinity : 0,
                          repeatType: "reverse",
                          duration: 2,
                        }}
                        className="flex justify-center items-center"
                      >
                        {React.cloneElement(tab.icon, {
                          className: `h-5 w-5 ${
                            activeTab === tab.value
                              ? "opacity-100"
                              : "opacity-60"
                          }`,
                        })}
                      </motion.div>
                      <span className="text-[10px] font-medium leading-none">
                        {tab.label}
                      </span>

                      {/* Active indicator dot */}
                      {activeTab === tab.value && (
                        <motion.div
                          layoutId="mobileDot"
                          className={`absolute -bottom-0.5 h-1 w-1 rounded-full ${
                            tab.value === "frontend"
                              ? "bg-primary"
                              : tab.value === "all"
                              ? "bg-orange-500"
                              : tab.value === "backend"
                              ? "bg-blue-500"
                              : tab.value === "devops"
                              ? "bg-amber-400"
                              : "bg-purple-500"
                          }`}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Category heading for mobile view only */}
                {showCategoryHeading && (
                  <motion.div
                    className="text-center my-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`inline-block px-6 py-1 relative`}
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <motion.h3
                        className={`text-base font-semibold flex items-center justify-center gap-2 ${getCategoryColor(
                          activeTab
                        )}`}
                      >
                        {React.cloneElement(
                          tabItems.find((tab) => tab.value === activeTab)
                            ?.icon || <Layout />,
                          {
                            className: "h-4 w-4",
                          }
                        )}
                        <span
                          className={`bg-gradient-to-r ${getCategoryGradient(
                            activeTab
                          )} bg-clip-text text-transparent`}
                        >
                          {
                            tabItems.find((tab) => tab.value === activeTab)
                              ?.label
                          }
                        </span>
                      </motion.h3>

                      {/* Underline effect instead of container border */}
                      <motion.div
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-${
                          activeTab === "frontend"
                            ? "primary"
                            : activeTab === "all"
                            ? "orange-500"
                            : activeTab === "backend"
                            ? "blue-500"
                            : activeTab === "devops"
                            ? "amber-400"
                            : "purple-500"
                        } rounded-full`}
                        initial={{ width: "0%", left: "50%" }}
                        animate={{ width: "100%", left: "0%" }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                          delay: 0.1,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </div>
            ) : (
              // Desktop Navigation - horizontal tabs with enhanced animation
              <TabsList className="w-full mb-8 p-1.5 rounded-xl bg-gradient-to-br from-muted/70 to-muted/50 backdrop-blur-sm border border-muted/30 shadow-inner relative overflow-hidden">
                {/* Animated glow effect that follows active tab */}
                <motion.div
                  className="absolute -z-10 w-1/5 h-full opacity-70 blur-xl"
                  animate={{
                    x:
                      activeTab === "all"
                        ? "0%"
                        : activeTab === "frontend"
                        ? "100%"
                        : activeTab === "backend"
                        ? "200%"
                        : activeTab === "devops"
                        ? "300%"
                        : "400%",
                    backgroundColor:
                      activeTab === "all"
                        ? "rgba(249, 115, 22, 0.15)"
                        : activeTab === "frontend"
                        ? "rgb(var(--primary-rgb) / 0.15)"
                        : activeTab === "backend"
                        ? "rgba(59, 130, 246, 0.15)"
                        : activeTab === "devops"
                        ? "rgba(34, 197, 94, 0.15)"
                        : "rgba(168, 85, 247, 0.15)",
                  }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                />

                <div className="grid w-full grid-cols-5">
                  {tabItems.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className={`data-[state=active]:bg-background/80 py-3 
                      data-[state=active]:${
                        tab.value === "frontend"
                          ? "text-primary"
                          : tab.value === "all"
                          ? "text-orange-500"
                          : tab.value === "backend"
                          ? "text-blue-500"
                          : tab.value === "devops"
                          ? "text-amber-400"
                          : "text-purple-500"
                      } 
                      data-[state=active]:shadow-md rounded-lg transition-all duration-500 relative overflow-hidden`}
                    >
                      <motion.div
                        className="flex items-center gap-3 relative z-10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          animate={
                            activeTab === tab.value
                              ? {
                                  scale: [1, 1.2, 1],
                                  transition: {
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 2,
                                  },
                                }
                              : {}
                          }
                          transition={{ duration: 0.5 }}
                          className={`${
                            activeTab === tab.value
                              ? tab.value === "frontend"
                                ? "text-primary"
                                : tab.value === "all"
                                ? "text-orange-500"
                                : tab.value === "backend"
                                ? "text-blue-500"
                                : tab.value === "devops"
                                ? "text-amber-400"
                                : "text-purple-500"
                              : ""
                          } transition-colors duration-300`}
                        >
                          {React.cloneElement(tab.icon, {
                            className: "h-5 w-5",
                          })}
                        </motion.div>
                        <span className="font-medium">{tab.label}</span>
                      </motion.div>

                      {/* Active tab indicator */}
                      {activeTab === tab.value && (
                        <>
                          {/* Solid line with glow effect */}
                          <motion.div
                            className={`absolute bottom-0 left-0 right-0 h-[3px]`}
                            layoutId="activeTabLine"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 1, transition: { duration: 0 } }}
                            style={{
                              background:
                                tab.value === "frontend"
                                  ? "hsl(var(--primary) / 1)"
                                  : tab.value === "all"
                                  ? "rgb(249, 115, 22)"
                                  : tab.value === "backend"
                                  ? "rgb(59, 130, 246)"
                                  : tab.value === "devops"
                                  ? "rgb(250, 204, 21)"
                                  : "rgb(168, 85, 247)",
                              boxShadow: `0 0 10px 1px ${
                                tab.value === "frontend"
                                  ? "hsl(var(--primary) / 0.5)"
                                  : tab.value === "all"
                                  ? "rgba(249, 115, 22, 0.5)"
                                  : tab.value === "backend"
                                  ? "rgba(59, 130, 246, 0.5)"
                                  : tab.value === "devops"
                                  ? "rgba(250, 204, 21, 0.5)"
                                  : "rgba(168, 85, 247, 0.5)"
                              }`,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                              opacity: { duration: 0 }, // Ensure opacity transition is instant
                            }}
                          />

                          <motion.div
                            className="absolute inset-0 -z-10"
                            style={{
                              background:
                                tab.value === "frontend"
                                  ? "var(--primary-rgb, rgb(0, 149, 246))"
                                  : tab.value === "all"
                                  ? "rgb(249, 115, 22)"
                                  : tab.value === "backend"
                                  ? "rgb(59, 130, 246)"
                                  : tab.value === "devops"
                                  ? "rgb(250, 204, 21)"
                                  : "rgb(168, 85, 247)",
                              opacity: 0.05,
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.05, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                          />
                        </>
                      )}
                    </TabsTrigger>
                  ))}
                </div>
              </TabsList>
            )}

            {/* Tab content with improved animations */}
            <AnimatePresence mode="sync">
              <TabsContent
                key="frontend"
                value="frontend"
                className="animate-in fade-in-50 duration-300"
              >
                <Card className="border border-border/40 bg-background/80 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg">
                  <CardContent className="pt-6 pb-6">
                    <motion.div
                      className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {filteredSkills("frontend").map(
                        (skill: any, idx: number) => (
                          <SkillItem
                            key={skill.name}
                            name={skill.name}
                            proficiency={skill.proficiency}
                            iconPath={skill.iconPath}
                            icon={skill.icon}
                            animate={activeTab === "frontend" && isLoaded}
                            index={idx}
                          />
                        )
                      )}
                    </motion.div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent
                key="backend"
                value="backend"
                className="animate-in fade-in-50 duration-300"
              >
                <Card className="border border-border/40 bg-background/80 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg">
                  <CardContent className="pt-6 pb-6">
                    <motion.div
                      className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {filteredSkills("backend").map(
                        (skill: any, idx: number) => (
                          <SkillItem
                            key={skill.name}
                            name={skill.name}
                            proficiency={skill.proficiency}
                            iconPath={skill.iconPath}
                            icon={skill.icon}
                            animate={activeTab === "backend" && isLoaded}
                            index={idx}
                          />
                        )
                      )}
                    </motion.div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent
                key="devops"
                value="devops"
                className="animate-in fade-in-50 duration-300"
              >
                <Card className="border border-border/40 bg-background/80 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg">
                  <CardContent className="pt-6 pb-6">
                    <motion.div
                      className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {filteredSkills("devops").map(
                        (skill: any, idx: number) => (
                          <SkillItem
                            key={skill.name}
                            name={skill.name}
                            proficiency={skill.proficiency}
                            iconPath={skill.iconPath}
                            icon={skill.icon}
                            animate={activeTab === "devops" && isLoaded}
                            index={idx}
                          />
                        )
                      )}
                    </motion.div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent
                key="soft"
                value="soft"
                className="animate-in fade-in-50 duration-300"
              >
                <Card className="border border-border/40 bg-background/80 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg">
                  <CardContent className="pt-6 pb-6">
                    <motion.div
                      className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {filteredSkills("soft").map((skill: any, idx: number) => (
                        <SkillItem
                          key={skill.name}
                          name={skill.name}
                          proficiency={skill.proficiency}
                          icon={skill.icon}
                          animate={activeTab === "soft" && isLoaded}
                          index={idx}
                        />
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent
                key="all"
                value="all"
                className="animate-in fade-in-50 duration-300"
              >
                <Card className="border border-border/40 bg-background/80 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg">
                  <CardContent className="pt-6 pb-6">
                    <motion.div
                      className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Reorganized skills in a more logical flow */}
                      {[
                        // Core development technologies
                        filteredSkills("frontend")[0], // React
                        filteredSkills("frontend")[1], // Next.js
                        filteredSkills("frontend")[2], // TypeScript
                        filteredSkills("backend")[0], // Node.js

                        // Database & APIs
                        filteredSkills("backend")[2], // MongoDB
                        filteredSkills("backend")[4], // REST APIs

                        // Styling/UI
                        filteredSkills("frontend")[6], // Tailwind CSS

                        // DevOps & Workflow
                        filteredSkills("devops")[0], // Git
                        filteredSkills("devops")[1], // GitHub
                        filteredSkills("devops")[4], // CI/CD
                      ].map((skill: any, idx: number) => (
                        <SkillItem
                          key={`all-skills-${skill.name}`}
                          name={skill.name}
                          proficiency={skill.proficiency}
                          iconPath={skill.iconPath}
                          icon={skill.icon}
                          hoverIcon={skill.hoverIcon}
                          animate={activeTab === "all" && isLoaded}
                          index={idx}
                        />
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </TabsContent>
            </AnimatePresence>
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
          animation-delay: 2000ms;
        }

        .animation-delay-4000 {
          animation-delay: 4000ms;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
