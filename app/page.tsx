import { Hero } from "@/components/sections/Hero";
import { Concept } from "@/components/sections/Concept";
import { Story } from "@/components/sections/Story";
import { Specs } from "@/components/sections/Specs";
import { Routes } from "@/components/sections/Routes";
import { Benefit } from "@/components/sections/Benefit";
import { Timeline } from "@/components/sections/Timeline";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-natural font-sans text-text-main selection:bg-primary selection:text-white">
      <Hero />
      <Concept />
      <Story />
      <Specs />
      <Routes />
      <Benefit />
      <Timeline />
      <Footer />
    </main>
  );
}
