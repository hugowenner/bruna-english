import React from 'react';
import { Star, CheckCircle, GraduationCap, Award, BookOpen } from 'lucide-react'; // 'User' foi removido desta linha

export default function Hero({ data, isVisible }) {
  const sectionStyle = data.backgroundImageUrl ? {
    backgroundImage: `url(${data.backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {};

  return (
    <section id="hero" className="relative overflow-hidden py-20" style={sectionStyle}>
      {data.backgroundImageUrl && (
        <div className="absolute inset-0 bg-white opacity-80 z-0"></div>
      )}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              {data.badgeText}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              {data.headline.split(' ').slice(0, -1).join(' ')}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> {data.headline.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                {data.ctaPrimary}
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                {data.ctaSecondary}
              </button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                {data.features[0]}
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                {data.features[1]}
              </div>
            </div>
          </div>
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  {/* INÍCIO DA MUDANÇA: SUBSTITUIÇÃO DO ÍCONE PELA IMAGEM */}
                  <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src="/assets/bruna.jpeg" // Caminho da sua foto, já está em public/assets
                      alt="Professora Bruna Bittencourt"
                      className="w-full h-full object-cover" // Garante que a imagem preencha o círculo
                    />
                  </div>
                  {/* FIM DA MUDANÇA */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{data.profile.name}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 mr-2 text-blue-500" />
                      {data.profile.qualifications[0]}
                    </p>
                    <p className="flex items-center justify-center">
                      <Award className="w-4 h-4 mr-2 text-green-500" />
                      {data.profile.qualifications[1]}
                    </p>
                    <p className="flex items-center justify-center">
                      <BookOpen className="w-4 h-4 mr-2 text-green-500" />
                      {data.profile.qualifications[2]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>
    </section>
  );
}