"use client";

import { HeroSection } from '@/components/sections/HeroSection';
import { VisionMissionSection } from '@/components/sections/VisionMissionSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { Footer } from '@/components/sections/Footer';
import { Navigation } from '@/components/Navigation';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <VisionMissionSection />
      <EventsSection />
      <TeamSection />
      <Footer />
    </main>
  );
}