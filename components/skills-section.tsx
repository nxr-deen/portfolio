import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

// You can edit this data later
const skills = {
  technical: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML/CSS", "Tailwind CSS", "Git"],
  soft: ["Problem Solving", "Communication", "Teamwork", "Time Management", "Adaptability", "Creativity"],
  tools: ["VS Code", "GitHub", "Figma", "Adobe XD", "Jira", "Slack", "Notion", "Postman"],
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <ul className="space-y-2">
                {skills.technical.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
              <ul className="space-y-2">
                {skills.soft.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Tools & Software</h3>
              <ul className="space-y-2">
                {skills.tools.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
