import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";
import ContactRail from "@/components/ContactRail";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <MobileNavigation />
      <ContactRail />
      <ThemeToggle />

      {children}

      <Footer />
    </>
  );
}