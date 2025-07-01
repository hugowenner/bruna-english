import React, { useState, useEffect } from 'react';
import './index.css'; // Importa o CSS do Tailwind

// Importar seus componentes
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'; // NOVO: Importa o componente About
import Services from './components/Services';
import Qualifications from './components/Qualifications';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Importar todos os dados do seu data.js
import {
  headerData,
  heroData,
  aboutData, // NOVO: Importa os dados da seção About
  servicesData,
  qualificationsData,
  testimonialsData,
  ctaData,
  contactData,
  footerData
} from './data';

export default function BrunaEnglishLanding() {
  const [isVisible, setIsVisible] = useState({});

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

    // Adiciona 'about' aos elementos observados
    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-green-50">
      <Header data={headerData} />
      <Hero data={heroData} isVisible={isVisible.hero} />
      <About data={aboutData} isVisible={isVisible.about} /> {/* NOVO: Renderiza o componente About */}
      <Services data={servicesData} isVisible={isVisible.services} />
      <Qualifications data={qualificationsData} isVisible={isVisible.qualifications} />
      <Testimonials data={testimonialsData} />
      <CTA data={ctaData} />
      <Contact data={contactData} />
      <Footer data={footerData} />
    </div>
  );
}