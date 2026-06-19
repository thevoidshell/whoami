import Navigation from "@/components/Navigation";

import HomeSection from "@/sections/HomeSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ResumeSection from "@/sections/ResumeSection";

export default function Page() {
  return (
    <div className="flex">
      <Navigation />

      <main className="flex-1 pl-56">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
      </main>
    </div>
  );
}