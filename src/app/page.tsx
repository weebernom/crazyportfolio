import { Navbar } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/shared/Navbar";
import { Footer } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/shared/Footer";
import { HeroSection } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/HeroSection";
import { AboutSection } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/AboutSection";
import { SkillsSection } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/SkillsSection";
import { ExperienceSection } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/ExperienceSection";
import { ProjectsSection } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/ProjectsSection";
import { EducationSection } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/EducationSection";
import { ContactSection } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
