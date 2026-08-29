import { execSync } from "node:child_process";
import { Navbar } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/shared/Navbar";
import { Footer } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/shared/Footer";
import { FloatingContactButton } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/shared/FloatingContactButton";
import { HeroSection } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/HeroSection";
import { AboutSection } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/AboutSection";
import { SkillsSection } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/SkillsSection";
import { ExperienceSection } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/ExperienceSection";
import { ProjectsSection } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/ProjectsSection";
import { EducationSection } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/EducationSection";
import { FAQSection } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/FAQSection";
import { ContactSection } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/ContactSection";
import { person, contact } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/root-8a5edab2/data";
import { siteUrl } from "./site-config";

function getLastUpdated(): string {
  try {
    return execSync("git log -1 --format=%cd --date=short", { cwd: process.cwd() })
      .toString()
      .trim();
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  alternateName: person.handle,
  description: person.subtitle,
  url: siteUrl,
  email: contact.email,
  sameAs: [contact.githubUrl, contact.linkedinUrl, contact.instagramUrl],
};

export default function Home() {
  const lastUpdated = getLastUpdated();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer lastUpdated={lastUpdated} />
      <FloatingContactButton />
    </>
  );
}
