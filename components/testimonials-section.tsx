"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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
  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/3 top-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute left-1/4 bottom-1/3 w-64 h-64 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/2 top-2/3 w-64 h-64 lg:w-80 lg:h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
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
            TESTIMONIALS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              What People Say
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's what people are saying about my work and collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-md hover:shadow-primary/5 transition-all duration-300 group">
                <div className="absolute top-4 left-4 text-primary/20 group-hover:text-primary/30 transition-colors">
                  <Quote className="h-12 w-12" />
                </div>
                <CardContent className="pt-12 pb-4 px-6 relative z-10">
                  <p className="italic text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
                </CardContent>
                <CardFooter className="flex items-center gap-4 px-6 pb-6 border-t border-primary/5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-primary transition-colors">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
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
