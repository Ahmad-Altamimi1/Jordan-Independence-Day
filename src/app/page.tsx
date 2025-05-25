"use client";
import HeroSection from "@/components/HeroSection";
import ArticlesSection from "@/components/ArticlesSection";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
import CoatOfArmsSection from "@/components/CoatOfArmsSection";
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <CoatOfArmsSection />
      <ArticlesSection />
      <AchievementsSection />
      <Footer />
    </div>
  );
}
