import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

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
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Testimonials</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here's what people are saying about my work and collaboration.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden">
              <div className="absolute top-4 left-4 text-primary/20">
                <Quote className="h-12 w-12" />
              </div>
              <CardContent className="pt-12 pb-4 px-6 relative z-10">
                <p className="italic">{testimonial.content}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 px-6 pb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
