"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import { motion, useAnimationControls, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Animation variants
const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
    scale: 0.95,
  },
  onscreen: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.15,
    },
  }),
};

const quoteVariants: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    rotate: [0, -5, 5, -5, 0],
    scale: 1.1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const shimmerEffect = {
  hidden: { backgroundPosition: "200% 0" },
  visible: {
    backgroundPosition: "-200% 0",
    transition: { repeat: Infinity, duration: 3, ease: "linear" },
  },
};

// You can edit this data later
const testimonials = [
  {
    id: 1,
    content:
      "Noureddine is an exceptional professional. His work on our project exceeded our expectations and was delivered on time.",
    author: "Jane Smith",
    position: "CEO, Company Name",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    content:
      "Working with Noureddine was a pleasure. His attention to detail and problem-solving skills are impressive.",
    author: "John Doe",
    position: "Project Manager, Company Name",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    content:
      "I highly recommend Noureddine for his expertise and professionalism. He delivered high-quality work that met all our requirements.",
    author: "Sarah Johnson",
    position: "CTO, Company Name",
    avatar: "/placeholder.svg?height=80&width=80",
  },
];

export default function TestimonialsSection() {
  const controls = useAnimationControls();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="testimonials"
      className="py-16 md:py-20 pb-20 md:pb-32 relative overflow-hidden bg-gradient-to-b from-background via-background to-background/80"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute right-1/3 top-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.35, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute left-1/4 bottom-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute left-1/2 top-2/3 w-64 h-64 lg:w-80 lg:h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.25, 0.2] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      {/* Rest of the component remains the same */}
      {/* Animated floating shapes - optimized */}
      <motion.div
        className="absolute hidden md:block right-[10%] top-[20%] w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 opacity-60 blur-md"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
          transition: {
            y: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          },
        }}
      />
      <motion.div
        className="absolute hidden md:block left-[8%] bottom-[25%] w-10 h-10 rounded-md bg-gradient-to-tr from-blue-400 to-primary opacity-60 blur-sm"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1],
          transition: {
            duration: 7,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
        style={{ transformOrigin: "center center" }}
      />
      <motion.div
        className="absolute hidden md:block left-[18%] top-[30%] w-8 h-8 rounded-sm bg-gradient-to-r from-yellow-400 to-orange-500 opacity-50 blur-sm"
        animate={{
          y: [0, 15, 0],
          x: [0, 8, 0],
          rotate: [0, -8, 0],
          scale: [1, 1.05, 0.95, 1],
          transition: {
            duration: 9,
            repeat: Infinity,
            repeatType: "mirror",
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Rest of the content remains the same */}
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
            <Badge className="mb-3 bg-background border-primary text-primary border py-1 px-3">
              TESTIMONIALS
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
              What People Say
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Here's what people are saying about my work and collaboration.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                },
              }}
              onHoverStart={() => setHoveredCard(testimonial.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative"
            >
              {/* Animated border effect outside card on hover */}
              <motion.div
                className="absolute -inset-1 md:-inset-2 rounded-2xl bg-gradient-to-r from-primary/40 to-blue-500/40 opacity-0 
                  -z-10 blur-md transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === testimonial.id ? 0.4 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <Card
                className="relative overflow-hidden border-border/50 bg-background/80 backdrop-blur-sm 
                hover:shadow-[0_10px_40px_-15px_rgba(var(--primary-rgb),0.3)] 
                dark:hover:shadow-[0_10px_40px_-15px_rgba(var(--primary-rgb),0.5)] 
                transition-all duration-300 group h-full hover:border-primary/30"
              >
                <motion.div
                  className="absolute top-4 left-4 text-primary/20 group-hover:text-primary/30 transition-colors"
                  variants={quoteVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <Quote className="h-12 w-12" />
                </motion.div>

                <CardContent className="pt-12 pb-4 px-6 relative z-10">
                  <motion.p
                    className="italic text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    "{testimonial.content}"
                  </motion.p>
                </CardContent>

                <CardFooter className="flex items-center gap-4 px-6 pb-6 border-t border-primary/5">
                  <motion.div
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10 group-hover:border-primary/30 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <motion.h4
                      className="font-medium group-hover:text-primary transition-colors"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {testimonial.author}
                    </motion.h4>
                    <motion.p
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {testimonial.position}
                    </motion.p>
                  </div>
                </CardFooter>

                {/* Subtle highlight overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-blue-500/5 opacity-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === testimonial.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual connector between testimonials and skills section */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-1 h-16 md:h-24">
        <motion.div
          className="w-full h-full bg-gradient-to-b from-primary/30 to-transparent"
          animate={{
            height: [0, "100%"],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            repeatType: "loop",
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        />
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

        /* Add CSS variables for primary color RGB values */
        :root {
          --primary-rgb: 101, 31, 255;
        }
        .dark {
          --primary-rgb: 138, 92, 246;
        }
      `}</style>
    </section>
  );
}
