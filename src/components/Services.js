import React from 'react';
import { BookOpen, Users, Globe, Calculator } from 'lucide-react'; // Removidos Video, MapPin, School

export default function Services({ data, isVisible }) {
  const getIcon = (title) => {
    switch (title) {
      case "Inglês para Crianças": return <Users className="w-8 h-8" />;
      case "Inglês para Adolescentes e Adultos": return <Globe className="w-8 h-8" />;
      case "Reforço Escolar de Português (Leitura e Escrita)": return <BookOpen className="w-8 h-8" />;
      case "Reforço Escolar de Matemática": return <Calculator className="w-8 h-8" />;
      default: return null;
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {data.title.split(' ')[0]} <span className="text-green-600">{data.title.split(' ')[1]}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.description}
          </p>
          {data.imageUrl && (
            <div className="mt-12 flex justify-center">
              <img
                src={data.imageUrl}
                alt="Serviços de Inglês e Matemática"
                className="w-full max-w-lg rounded-lg shadow-lg object-cover"
              />
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service, index) => (
            <div key={index} className={`group transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: `${index * 100}ms`}}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(service.title)}
                </div>
                <h3 className="2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{service.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}