import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Full-width hero section */}
      <HeroSection />

      {/* Content sections with container */}
      <div className="container mx-auto px-4">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
      </div>
    </main>
  );
}
