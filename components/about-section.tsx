"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, Users, LightbulbIcon, Rocket } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative bg-background/95">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/3 bottom-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
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
            ABOUT ME
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Passionate about creating impactful digital experiences
            </span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            I'm a full-stack developer with a passion for building innovative,
            user-centric applications. With expertise in both frontend and
            backend technologies, I create seamless digital experiences that
            solve real-world problems.
          </p>
        </motion.div>

        {/* Two-column layout for Journey (left) and Core Values (right) */}
        <div className="flex flex-col lg:flex-row gap-12 mt-16">
          {/* My Journey - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-8">My Journey</h3>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                My journey in software development began with a curiosity about
                how digital products work. This curiosity evolved into a passion
                for creating elegant solutions to complex problems.
              </p>

              <p className="text-muted-foreground">
                I've focused on building my expertise through hands-on freelance
                projects that challenge me to deliver professional solutions for
                clients worldwide. Each project provides valuable experience and
                expands my professional capabilities.
              </p>

              <p className="text-muted-foreground">
                I'm constantly learning and adapting to new technologies,
                ensuring that my skills remain relevant in the ever-evolving
                tech landscape. My goal is to create applications that not only
                function flawlessly but also provide exceptional user
                experiences.
              </p>
            </div>
          </motion.div>

          {/* Core Values Grid - Right Column */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-border/40 bg-background/80 backdrop-blur-sm">
                  <CardContent className="flex flex-col items-center text-center p-3 sm:p-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-primary text-2xl sm:text-3xl mb-2 sm:mb-3">
                      <Code className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Clean Code
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      I write maintainable, scalable, and efficient code
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-border/40 bg-background/80 backdrop-blur-sm">
                  <CardContent className="flex flex-col items-center text-center p-3 sm:p-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-primary text-2xl sm:text-3xl mb-2 sm:mb-3">
                      <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Collaborative
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      I thrive in team environments and value open communication
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-border/40 bg-background/80 backdrop-blur-sm">
                  <CardContent className="flex flex-col items-center text-center p-3 sm:p-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-primary text-2xl sm:text-3xl mb-2 sm:mb-3">
                      <LightbulbIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Problem Solver
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      I approach challenges with creative and effective
                      solutions
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-border/40 bg-background/80 backdrop-blur-sm">
                  <CardContent className="flex flex-col items-center text-center p-3 sm:p-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-primary text-2xl sm:text-3xl mb-2 sm:mb-3">
                      <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      Fast Learner
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      I quickly adapt to new technologies and methodologies
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
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
