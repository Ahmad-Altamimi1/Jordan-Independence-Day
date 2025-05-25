"use client";
import HeroSection from "@/components/HeroSection";
import ArticlesSection from "@/components/ArticlesSection";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <ArticlesSection />
      <AchievementsSection />
      <Footer />
    </div>
  );
}
