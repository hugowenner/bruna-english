// src/components/Testimonials.js

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

export default function Testimonials({ data }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    if (data && data.testimonials && data.testimonials.length > 0) {
      // Aumentado o tempo de 5000ms (5 segundos) para 8000ms (8 segundos)
      // Você pode ajustar esse valor para o que achar melhor (ex: 10000ms para 10 segundos)
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % data.testimonials.length);
      }, 8000); // <-- ALERTA: VALOR ALTERADO AQUI PARA MAIS LENTO
      return () => clearInterval(interval);
    }
  }, [data]);

  if (!data || !data.testimonials || data.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {data.title.split(' ').slice(0, -1).join(' ')} <span className="text-green-600">{data.title.split(' ').slice(-1)}</span>
          </h2>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(data.testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                "{data.testimonials[activeTestimonial].text}"
              </blockquote>
              <div>
                <p className="font-bold text-gray-800 text-lg">{data.testimonials[activeTestimonial].name}</p>
                <p className="text-gray-600">{data.testimonials[activeTestimonial].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {data.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}