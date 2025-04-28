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
import { motion, useAnimationControls, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Animation variants
const cardVariants: Variants = {
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
};

const tagVariants: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

const shimmerEffect = {
  hidden: { backgroundPosition: "200% 0" },
  visible: {
    backgroundPosition: "-200% 0",
    transition: { repeat: Infinity, duration: 3, ease: "linear" },
  },
};

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
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const controls = useAnimationControls();

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

      {/* Green animated elements outside project cards */}
      <motion.div
        className="absolute hidden md:block left-[40%] top-[45%] w-32 h-32 bg-green-500/20 rounded-full 
          mix-blend-screen filter blur-xl z-0 pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 text-sm py-1 px-3">
              PORTFOLIO
            </Badge>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent inline-block"
              initial="hidden"
              whileInView="visible"
              variants={shimmerEffect}
              style={{
                backgroundSize: "200% 100%",
                backgroundImage:
                  "linear-gradient(90deg, var(--primary) 0%, #4a9fff 50%, var(--primary) 100%)",
              }}
            >
              My Latest Projects
            </motion.span>
          </motion.h2>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                },
              }}
              onHoverStart={() => setIsHovering(project.id)}
              onHoverEnd={() => setIsHovering(null)}
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
              >
                <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
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
                          variants={tagVariants}
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
                      <h4 className="text-sm font-medium mb-2">
                        Key Features:
                      </h4>
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
