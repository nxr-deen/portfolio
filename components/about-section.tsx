import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="flex justify-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Noureddine Bouderbala"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                Hello! I&apos;m Noureddine Bouderbala, a Full Stack Developer
                based in Algeria. I have 2+ years of experience in web
                development.
              </p>
              <p className="text-lg mb-4">
                My journey in development began when I started building small
                web projects using HTML, CSS, and JavaScript. Since then,
                I&apos;ve worked on various front-end and full-stack projects
                using technologies like React, Node.js, and Next.js.
              </p>
              <p className="text-lg">
                When I&apos;m not coding, you can find me exploring new tech
                trends, playing video games, or learning about AI. I&apos;m
                passionate about creating modern, efficient web applications and
                always looking for new challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
