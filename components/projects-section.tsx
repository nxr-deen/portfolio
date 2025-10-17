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
import {
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  PaintBucket,
  Brain,
} from "lucide-react";
import {
  motion,
  useAnimationControls,
  Variants,
  MotionProps,
  isValidMotionProp,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo, useCallback, memo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Animation variants moved to separate object for better maintainability
const animations = {
  cardVariants: {
    offscreen: {
      y: 100,
      opacity: 0,
      scale: 0.9,
    },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: i * 0.2,
      },
    }),
  },

  tagVariants: {
    initial: { scale: 0.8, opacity: 0 },
    animate: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  },

  shimmerEffect: {
    hidden: { backgroundPosition: "200% 0" },
    visible: {
      backgroundPosition: "-200% 0",
      transition: { repeat: Infinity, duration: 3, ease: "linear" },
    },
  },
};

const projects = [
  {
    id: 1,
    title: "LandCo - Business Platform",
    description:
      "A modern business platform built with Next.js, Prisma, and PostgreSQL. Features user authentication, subscriptions, customer management, support system, and a sleek UI.",
    image: "/business.png", // Replace with a real image path
    tags: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Authentication"],
    liveUrl: "https://landco-business-platform.vercel.app", // Add your live deployment link when available
    githubUrl: "https://github.com/nxr-deen/landco-business-platform", // Replace with your GitHub repo URL
    category: "Web",
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
    category: "Web",
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
    category: "Web",
  },

  // Mobile Projects - Coming Soon
  {
    id: 4,
    title: "Mobile App - Coming Soon",
    description:
      "A new mobile application project currently in development. Stay tuned for updates on this exciting new app!",
    image: "/404-illustration.svg",
    tags: ["Coming Soon"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile",
    comingSoon: true,
  },

  {
    id: 5,
    title: "Mobile App - Coming Soon",
    description:
      "Another mobile project in the planning phase. Check back later for more details on this upcoming mobile experience.",
    image: "/404-illustration.svg",
    tags: ["Coming Soon"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile",
    comingSoon: true,
  },

  // UI/UX Projects - Coming Soon
  {
    id: 6,
    title: "UI/UX Project - Coming Soon",
    description:
      "A user interface design project currently underway. This space will showcase innovative UI/UX work in the near future.",
    image: "/404-illustration.svg",
    tags: ["Coming Soon"],
    liveUrl: "#",
    githubUrl: "#",
    category: "UI/UX",
    comingSoon: true,
  },

  {
    id: 7,
    title: "UI/UX Project - Coming Soon",
    description:
      "A design case study that will be featured here once completed. Check back for detailed insights into my design process.",
    image: "/404-illustration.svg",
    tags: ["Coming Soon"],
    liveUrl: "#",
    githubUrl: "#",
    category: "UI/UX",
    comingSoon: true,
  },

  // AI Projects - Coming Soon
  {
    id: 8,
    title: "AI Project - Coming Soon",
    description:
      "An artificial intelligence project in development. This space will soon feature innovative AI solutions and applications.",
    image: "/404-illustration.svg",
    tags: ["Coming Soon"],
    liveUrl: "#",
    githubUrl: "#",
    category: "AI",
    comingSoon: true,
  },

  {
    id: 9,
    title: "AI Project - Coming Soon",
    description:
      "A machine learning project currently being developed. Stay tuned for updates on this exciting AI application.",
    image: "/404-illustration.svg",
    tags: ["Coming Soon"],
    liveUrl: "#",
    githubUrl: "#",
    category: "AI",
    comingSoon: true,
  },

  {
    id: 10,
    title: "AI Project - Coming Soon",
    description:
      "An advanced AI tool that will be featured here once completed. Check back for updates on this innovative project.",
    image: "/404-illustration.svg",
    tags: ["Coming Soon"],
    liveUrl: "#",
    githubUrl: "#",
    category: "AI",
    comingSoon: true,
  },
];

const ProjectCard = memo(
  ({ project, index, isHovering, handleHoverStart, handleHoverEnd }) => {
    return (
      <motion.div
        key={project.id}
        custom={index}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={animations.cardVariants}
        whileHover={{
          y: -12,
          scale: 1.02,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 15,
          },
        }}
        onHoverStart={() => handleHoverStart(project.id)}
        onHoverEnd={handleHoverEnd}
        className="relative"
      >
        {/* Animated border effect outside card on hover */}
        <motion.div
          className="absolute -inset-1 md:-inset-2 rounded-2xl bg-gradient-to-r from-green-400 to-green-600 opacity-0 
          -z-10 blur-md transition-opacity duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering === project.id ? 0.1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <Card
          className="overflow-hidden h-full group transition-all duration-300 border-border/50 bg-background/80 backdrop-blur-sm
        hover:shadow-[0_5px_15px_-10px_rgba(var(--green-rgb),0.3),0_2px_10px_-5px_rgba(var(--primary-rgb),0.2)]
        dark:hover:shadow-[0_5px_15px_-10px_rgba(var(--green-rgb),0.25),0_2px_10px_-5px_rgba(var(--primary-rgb),0.2)]
        hover:border-green-500/30"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
            <Image
              src={project.image || "/404-illustration.svg"}
              alt={project.title}
              fill
              loading={index <= 1 ? "eager" : "lazy"}
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-primary/30 to-blue-500/10 opacity-0 group-hover:opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovering === project.id ? 0.15 : 0 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/50 opacity-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovering === project.id ? 0.2 : 0 }}
              transition={{ duration: 0.6 }}
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
                  <motion.span
                    key={tag}
                    variants={animations.tagVariants}
                    initial="initial"
                    animate="animate"
                    custom={idx}
                    whileHover={{
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    className={`px-2 py-1 text-xs rounded-full ${
                      idx % 2 === 0
                        ? "bg-primary/10 text-primary"
                        : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                    }`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow">
            <motion.p
              className="text-sm md:text-base text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.description}
            </motion.p>
            {project.features && (
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                <ul className="text-xs md:text-sm list-disc pl-5 space-y-1 text-muted-foreground">
                  {project.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-wrap gap-3">
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "subpixel-antialiased",
              }}
            >
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
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "subpixel-antialiased",
              }}
            >
              <Button
                asChild
                size="sm"
                className="rounded-full relative overflow-hidden group/button"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, var(--primary), #4a9fff 50%, var(--primary))",
                  backgroundSize: "200% 100%",
                  animation: "none",
                }}
              >
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500"
                    initial={{ x: "-100%" }}
                    whileHover={{
                      x: "0%",
                      transition: { duration: 0.4, ease: "easeOut" },
                    }}
                  />
                </Link>
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    );
  }
);

export default function ProjectsSection() {
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const controls = useAnimationControls();
  const [activeTab, setActiveTab] = useState("Web");

  // Memoize projects data to prevent re-renders
  const projectsData = useMemo(() => projects, []);

  // Use callbacks for hover handlers to prevent recreation on each render
  const handleHoverStart = useCallback((id: number) => {
    setIsHovering(id);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setIsHovering(null);
  }, []);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    });
  }, [controls]);

  const getTabIndex = (tab: string) => {
    return ["Web", "Mobile", "UI/UX", "AI"].indexOf(tab);
  };

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute right-1/4 bottom-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/2 top-2/3 w-64 h-64 lg:w-80 lg:h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-muted/30"></div>
      </div>

      {/* Animated floating shapes */}
      <motion.div
        className="absolute hidden md:block right-[5%] top-[15%] w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 opacity-60 blur-md"
        animate={controls}
      />
      <motion.div
        className="absolute hidden md:block left-[5%] bottom-[15%] w-10 h-10 rounded-md bg-gradient-to-tr from-primary to-pink-400 opacity-60 blur-sm"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="absolute hidden md:block left-[15%] top-[25%] w-8 h-8 rounded-sm bg-gradient-to-r from-yellow-400 to-amber-500 opacity-50 blur-sm"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
          rotate: [0, -15, 0],
          transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />

      {/* Green animated elements outside project cards - optimized to use transform instead of opacity/filter where possible */}
      <motion.div
        className="absolute hidden md:block left-[40%] top-[45%] w-32 h-32 bg-green-500/20 rounded-full 
          mix-blend-screen filter blur-xl z-0 pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          times: [0, 0.5, 1],
          // Using reducedMotion settings for better performance
          restDelta: 0.01,
          restSpeed: 0.01,
        }}
        style={{ willChange: "transform" }}
      />

      <motion.div
        className="absolute hidden lg:block right-[25%] top-[35%] w-40 h-40 bg-gradient-to-br from-green-300 to-green-600 
          rounded-full mix-blend-screen filter blur-xl opacity-30 z-0 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -20, 0],
          transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="absolute hidden md:block left-[20%] bottom-[15%] w-24 h-24 bg-green-400/30 
          rounded-full mix-blend-screen filter blur-xl z-0 pointer-events-none"
        animate={{
          scale: [1, 1.4, 1],
          y: [0, -15, 0],
          transition: {
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="absolute hidden lg:block right-[10%] bottom-[25%] w-16 h-16 bg-gradient-to-tl from-green-200 to-green-500 
          rounded-full mix-blend-screen filter blur-lg opacity-40 z-0 pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 45, 0],
          transition: {
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-3 bg-background border-primary text-primary border py-1 px-3">
            SHOWCASE
          </Badge>

          {/* Main heading with gradient text */}
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Here are some of my recent projects. Each project represents a
            unique challenge and solution.
          </motion.p>
        </motion.div>

        {/* Project category tabs - with improved desktop design and no scrollbar */}
        <Tabs
          defaultValue="Web"
          className="mb-8"
          onValueChange={(value) => setActiveTab(value)}
        >
          <div className="flex flex-col items-center">
            <TabsList
              className="inline-flex h-auto w-full justify-center max-w-2xl
              bg-gradient-to-br from-muted/70 to-muted/50 backdrop-blur-sm border border-muted/30 shadow-inner
              relative mb-2 mx-auto rounded-full p-1 h-12 flex-nowrap overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full opacity-50"></div>

              {/* Animated background glow that follows the active tab */}
              <motion.div
                className="absolute h-10 top-1 rounded-full backdrop-blur-sm"
                layoutId="activeTabBackground"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                style={{
                  width: "calc(25% - 4px)",
                  left: "calc(0% + 2px)",
                  boxShadow: "0 0 20px 0 rgba(var(--primary-rgb), 0.2)",
                  background: "rgba(var(--primary-rgb), 0.2)",
                }}
                animate={{
                  left: [
                    "calc(0% + 2px)", // Web
                    "calc(25% + 2px)", // Mobile
                    "calc(50% + 2px)", // UI/UX
                    "calc(75% + 2px)", // AI
                  ][getTabIndex(activeTab)],
                }}
              />

              <TabsTrigger
                value="Web"
                className="relative h-10 flex-1 px-3 sm:px-6 rounded-full data-[state=active]:text-primary transition-all duration-300 group overflow-hidden"
              >
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 group-data-[state=active]:opacity-0 transition-opacity"
                  style={{ backgroundColor: "rgba(var(--primary-rgb), 0.2)" }}
                ></div>

                <div className="flex items-center justify-center gap-2 z-10 relative">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.div>
                  <motion.span
                    className="font-medium tracking-wide text-sm sm:text-base hidden sm:inline-block"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Web
                  </motion.span>
                  <span className="font-medium tracking-wide text-sm sm:hidden">
                    Web
                  </span>
                </div>

                {/* Active indicator dot */}
                <motion.div
                  className="absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "hsl(var(--primary))",
                    boxShadow: "0 0 10px 0 rgba(var(--primary-rgb), 0.6)",
                  }}
                  animate={{
                    opacity: activeTab === "Web" ? 1 : 0,
                  }}
                />
              </TabsTrigger>

              <TabsTrigger
                value="Mobile"
                className="relative h-10 flex-1 px-3 sm:px-6 rounded-full data-[state=active]:text-primary transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 group-data-[state=active]:opacity-0 bg-gradient-to-r from-primary/20 to-blue-500/20 transition-opacity"></div>

                <div className="flex items-center justify-center gap-2 z-10 relative">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.div>
                  <motion.span
                    className="font-medium tracking-wide text-sm sm:text-base hidden sm:inline-block"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Mobile
                  </motion.span>
                  <span className="font-medium tracking-wide text-sm sm:hidden">
                    Mobile
                  </span>
                </div>

                {/* Active indicator dot */}
                <motion.div
                  className="absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-blue-500"
                  style={{
                    boxShadow: "0 0 10px 0 rgba(var(--primary-rgb), 0.6)",
                  }}
                  animate={{
                    opacity: activeTab === "Mobile" ? 1 : 0,
                  }}
                />
              </TabsTrigger>

              <TabsTrigger
                value="UI/UX"
                className="relative h-10 flex-1 px-3 sm:px-6 rounded-full data-[state=active]:text-primary transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 group-data-[state=active]:opacity-0 bg-gradient-to-r from-primary/20 to-blue-500/20 transition-opacity"></div>

                <div className="flex items-center justify-center gap-2 z-10 relative">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <PaintBucket className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.div>
                  <motion.span
                    className="font-medium tracking-wide text-sm sm:text-base hidden sm:inline-block"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    UI/UX
                  </motion.span>
                  <span className="font-medium tracking-wide text-sm sm:hidden">
                    UI/UX
                  </span>
                </div>

                {/* Active indicator dot */}
                <motion.div
                  className="absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-blue-500"
                  style={{
                    boxShadow: "0 0 10px 0 rgba(var(--primary-rgb), 0.6)",
                  }}
                  animate={{
                    opacity: activeTab === "UI/UX" ? 1 : 0,
                  }}
                />
              </TabsTrigger>

              <TabsTrigger
                value="AI"
                className="relative h-10 flex-1 px-3 sm:px-6 rounded-full data-[state=active]:text-primary transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 group-data-[state=active]:opacity-0 bg-gradient-to-r from-primary/20 to-blue-500/20 transition-opacity"></div>

                <div className="flex items-center justify-center gap-2 z-10 relative">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Brain className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.div>
                  <motion.span
                    className="font-medium tracking-wide text-sm sm:text-base hidden sm:inline-block"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    AI
                  </motion.span>
                  <span className="font-medium tracking-wide text-sm sm:hidden">
                    AI
                  </span>
                </div>

                {/* Active indicator dot */}
                <motion.div
                  className="absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-blue-500"
                  style={{
                    boxShadow: "0 0 10px 0 rgba(var(--primary-rgb), 0.6)",
                  }}
                  animate={{
                    opacity: activeTab === "AI" ? 1 : 0,
                  }}
                />
              </TabsTrigger>
            </TabsList>

            <motion.div
              className="h-1 w-28 bg-gradient-to-r from-primary/40 to-blue-500/30 rounded-full mb-6 mt-2 opacity-60"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 112, opacity: 0.6 }}
              transition={{ duration: 0.5 }}
              style={{
                boxShadow: "0 0 10px 0 rgba(var(--primary-rgb), 0.3)",
              }}
            />
          </div>

          <TabsContent value="Web">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {projectsData
                .filter((project) => project.category === "Web")
                .map((project, index) => (
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
          </TabsContent>

          <TabsContent value="Mobile">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {projectsData
                .filter((project) => project.category === "Mobile")
                .map((project, index) => (
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
          </TabsContent>

          <TabsContent value="UI/UX">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {projectsData
                .filter((project) => project.category === "UI/UX")
                .map((project, index) => (
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
          </TabsContent>

          <TabsContent value="AI">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {projectsData
                .filter((project) => project.category === "AI")
                .map((project, index) => (
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
          </TabsContent>
        </Tabs>
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

        /* Add CSS variables for primary and green color RGB values */
        :root {
          --primary-rgb: 101, 31, 255;
          --green-rgb: 34, 197, 94;
        }
        .dark {
          --primary-rgb: 138, 92, 246;
          --green-rgb: 74, 222, 128;
        }

        /* Button animation */
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Green pulse animation */
        @keyframes green-pulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
          50% {
            box-shadow: 0 0 30px 5px rgba(34, 197, 94, 0.7);
          }
        }

        .animate-green-pulse {
          animation: green-pulse 3s infinite;
        }
      `}</style>
    </section>
  );
}
