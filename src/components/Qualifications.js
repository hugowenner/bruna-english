import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Qualifications({ data, isVisible }) {
  const getIcon = (index) => {
    switch (index) {
      case 0: return <GraduationCap className="w-12 h-12" />;
      case 1: return <Award className="w-12 h-12" />;
      case 2: return <BookOpen className="w-12 h-12" />;
      default: return null;
    }
  };

  return (
    <section id="qualifications" className="py-20 bg-gradient-to-r from-blue-50 to-green-50"> {/* Alterado de to-purple-50 para to-green-50 */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {data.title.split(' ')[0]} <span className="text-green-600">{data.title.split(' ')[1]}</span> {/* Alterado de text-purple-600 para text-green-600 */}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.qualifications.map((qual, index) => (
            <div key={index} className={`text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: `${index * 200}ms`}}>
              <div className={`w-24 h-24 bg-gradient-to-r ${qual.color} rounded-full flex items-center justify-center text-white mx-auto mb-6 hover:scale-110 transition-transform duration-300`}>
                {getIcon(index)}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{qual.title}</h3>
              <p className="text-gray-600 leading-relaxed">{qual.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}