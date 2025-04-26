import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown, Download } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary mx-auto">
            <img
              src="/placeholder.svg?height=160&width=160"
              alt="Noureddine Bouderbala"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Hi, I&apos;m Noureddine Bouderbala
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          I&apos;m a Full Stack Developer specializing in the MERN stack and
          Next.js. Welcome to my portfolio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="#" download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
      </div>
      <div className="mt-16 animate-bounce">
        <Link href="#about">
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Link>
      </div>
    </section>
  );
}
