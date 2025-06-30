import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Qualifications from './components/Qualifications';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {
  headerData,
  heroData,
  servicesData,
  qualificationsData,
  testimonialsData,
  ctaData,
  contactData,
  footerData
} from './data';

export default function BrunaEnglishLanding() {
  const [isVisible, setIsVisible] = useState({});
  // REMOVIDO: const [activeTestimonial, setActiveTestimonial] = useState(0); // Esta linha foi removida pois o estado agora está em Testimonials.js

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // REMOVIDO: useEffect(() => {
  // REMOVIDO:   if (testimonialsData && testimonialsData.testimonials && testimonialsData.testimonials.length > 0) {
  // REMOVIDO:     const interval = setInterval(() => {
  // REMOVIDO:       setActiveTestimonial((prev) => (prev + 1) % testimonialsData.testimonials.length);
  // REMOVIDO:     }, 5000);
  // REMOVIDO:     return () => clearInterval(interval);
  // REMOVIDO:   }
  // REMOVIDO: }, [testimonialsData]); // Esta lógica foi movida para Testimonials.js

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-green-50">
      <Header data={headerData} />
      <Hero data={heroData} isVisible={isVisible.hero} />
      <Services data={servicesData} isVisible={isVisible.services} />
      <Qualifications data={qualificationsData} isVisible={isVisible.qualifications} />
      <Testimonials data={testimonialsData} />
      <CTA data={ctaData} />
      <Contact data={contactData} />
      <Footer data={footerData} />
    </div>
  );
}