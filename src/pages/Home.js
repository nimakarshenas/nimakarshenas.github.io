import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import GradesSection from '../components/GradesSection';

export default function Home() {
  return (
    <div>
      <AboutSection />
      <ProjectsSection />
      <GradesSection />
      <ContactBanner />
    </div>
  );
}
