import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Background from "@/components/background/Background";
import BriefingSection from "@/components/briefing/BriefingSection";
import ArsenalSection from "@/components/arsenal/ArsenalSection";
import CommandCenter from "@/components/command-center/CommandCenter";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070B] text-white">
      <Background />
      <Navbar />
      <Hero />
      <BriefingSection />
      <ArsenalSection />
      <CommandCenter />
      <Footer />
    </main>
  );
}