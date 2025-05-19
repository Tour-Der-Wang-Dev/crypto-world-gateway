
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import WorldMapSection from "@/components/WorldMapSection";
import ServicesSection from "@/components/ServicesSection";
import NewsletterSection from "@/components/NewsletterSection";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-space min-h-screen">
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <WorldMapSection />
        <ServicesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
