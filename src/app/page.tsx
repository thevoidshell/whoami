import HomeSection from "@/sections/HomeSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";

export default function Page() {
  return (
    <div className="flex">
      <main className="flex-1 ml-0 md:ml-80">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}