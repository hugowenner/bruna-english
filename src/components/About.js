import React from 'react';
import { Lightbulb, Plane, GraduationCap, Heart, BookOpenText, Award } from 'lucide-react'; // Ícones

export default function About({ data, isVisible }) {
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "Lightbulb": return <Lightbulb className="w-8 h-8 text-blue-600" />;
      case "Plane": return <Plane className="w-8 h-8 text-green-600" />;
      case "GraduationCap": return <GraduationCap className="w-8 h-8 text-indigo-600" />;
      case "Heart": return <Heart className="w-8 h-8 text-red-600" />;
      default: return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50"> {/* Fundo mais claro */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {data.title.split(' ')[0]}{' '}
            <span className="text-green-600">{data.title.split(' ')[1]}</span>{' '}
            {data.title.split(' ').slice(2).join(' ')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.intro} {/* Usa a nova intro do data.js */}
          </p>
        </div>

        {/* Seção principal da história como uma lista de marcos */}
        <div className="max-w-4xl mx-auto">
          {data.milestones.map((milestone, index) => (
            <div
              key={index}
              className={`mb-12 last:mb-0 flex items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mr-6">
                {getIconComponent(milestone.icon)} {/* Renderiza o ícone do marco */}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    {milestone.headline}
                  </span>
                </h3>
                <p className="text-gray-700 leading-relaxed">{milestone.content}</p>
              </div>
            </div>
          ))}

          {/* Seção de Certificações, destacada separadamente */}
          <div
            className={`mt-16 bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-2xl shadow-lg text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              Certificações e Formação Complementar
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {data.certifications}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}