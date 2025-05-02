"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Lightbulb, Rocket } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-14 md:py-20 relative bg-black text-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 text-sm py-1 px-3">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 max-w-3xl mx-auto">
            Passionate about creating impactful digital experiences
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm a full-stack developer with a passion for building innovative,
            user-centric applications. With expertise in both frontend and
            backend technologies, I create seamless digital experiences that
            solve real-world problems.
          </p>
        </div>

        {/* Two-column layout with text on left and cards on right */}
        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          {/* Left column - Text content */}
          <div>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>

            <div className="space-y-6 text-gray-300">
              <p>
                My journey in software development began with a curiosity about
                how digital products work. This curiosity evolved into a passion
                for creating elegant solutions to complex problems.
              </p>

              <p>
                I've focused on building my expertise through hands-on freelance
                projects that challenge me to deliver professional solutions for
                clients worldwide. Each project provides valuable experience and
                expands my professional capabilities.
              </p>

              <p>
                I'm constantly learning and adapting to new technologies,
                ensuring that my skills remain relevant in the ever-evolving
                tech landscape. My goal is to create applications that not only
                function flawlessly but also provide exceptional user
                experiences.
              </p>
            </div>
          </div>

          {/* Right column - Skill cards in a 2x2 grid */}
          <div className="grid grid-cols-2 gap-6 content-center">
            <Card className="bg-black/50 border-gray-800 hover:border-primary/50 transition-all">
              <CardContent className="p-5 flex flex-col items-center text-center">
                <div className="text-primary text-3xl mb-3">
                  <Code className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Clean Code</h4>
                <p className="text-gray-400 text-sm">
                  I write maintainable, scalable, and efficient code
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-gray-800 hover:border-primary/50 transition-all">
              <CardContent className="p-5 flex flex-col items-center text-center">
                <div className="text-primary text-3xl mb-3">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Collaborative</h4>
                <p className="text-gray-400 text-sm">
                  I thrive in team environments and value open communication
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-gray-800 hover:border-primary/50 transition-all">
              <CardContent className="p-5 flex flex-col items-center text-center">
                <div className="text-primary text-3xl mb-3">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Problem Solver</h4>
                <p className="text-gray-400 text-sm">
                  I approach challenges with creative and effective solutions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-gray-800 hover:border-primary/50 transition-all">
              <CardContent className="p-5 flex flex-col items-center text-center">
                <div className="text-primary text-3xl mb-3">
                  <Rocket className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Fast Learner</h4>
                <p className="text-gray-400 text-sm">
                  I quickly adapt to new technologies and methodologies
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
