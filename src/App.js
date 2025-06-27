import React, { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, Users, Globe, Star, MessageCircle, Phone, Mail, CheckCircle, Award, Clock, MapPin, Video, User } from 'lucide-react';

export default function BrunaEnglishLanding() {
  const [isVisible, setIsVisible] = useState({});
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe da Ana (8 anos)",
      text: "A Ana melhorou muito em inglês com as aulas da Bruna. Ela adora as atividades criativas!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Pai do Pedro (12 anos)",
      text: "Excelente professora! O Pedro passou de odiou inglês para ser sua matéria favorita.",
      rating: 5
    },
    {
      name: "Carla Oliveira",
      role: "Estudante universitária",
      text: "As aulas particulares me ajudaram muito a melhorar minha fluência. Super recomendo!",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Bruna Bittencourt</h1>
                <p className="text-sm text-gray-600">Professora de Inglês</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Agendar Aula
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible.hero ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Professora Especializada
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Aprenda Inglês com 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Confiança</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Aulas particulares personalizadas com metodologia comprovada. 
                Do reforço escolar à fluência conversacional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Começar Agora
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                  Saber Mais
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Aulas Online e Presenciais
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Material Personalizado
                </div>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible.hero ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Bruna Bittencourt</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 mr-2 text-blue-500" />
                        Pedagogia e Direito
                      </p>
                      <p className="flex items-center justify-center">
                        <Award className="w-4 h-4 mr-2 text-purple-500" />
                        Pós-graduação em Psicopedagogia
                      </p>
                      <p className="flex items-center justify-center">
                        <BookOpen className="w-4 h-4 mr-2 text-green-500" />
                        Especialista em Inglês
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
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Serviços <span className="text-blue-600">Especializados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia personalizada para cada idade e nível de conhecimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Reforço Escolar",
                subtitle: "1º ao 9º ano",
                description: "Apoio pedagógico especializado para melhorar o desempenho escolar em inglês",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Video className="w-8 h-8" />,
                title: "Aulas Online",
                subtitle: "Flexibilidade total",
                description: "Aprenda no conforto de casa com tecnologia interativa e material digital",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Aulas Presenciais",
                subtitle: "Belo Horizonte",
                description: "Atendimento personalizado com foco na conversação e prática oral",
                color: "from-green-500 to-green-600"
              }
            ].map((service, index) => (
              <div key={index} className={`group transform transition-all duration-500 hover:scale-105 ${isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: `${index * 100}ms`}}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Formação <span className="text-purple-600">Acadêmica</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-12 h-12" />,
                title: "Pedagogia",
                description: "Especialização em processos de ensino-aprendizagem",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Direito",
                description: "Formação complementar para visão ampla da educação",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: "Psicopedagogia",
                description: "Pós-graduação focada em dificuldades de aprendizagem",
                color: "from-green-500 to-green-600"
              }
            ].map((qual, index) => (
              <div key={index} className={`text-center transform transition-all duration-700 ${isVisible.qualifications ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{transitionDelay: `${index * 200}ms`}}>
                <div className={`w-24 h-24 bg-gradient-to-r ${qual.color} rounded-full flex items-center justify-center text-white mx-auto mb-6 hover:scale-110 transition-transform duration-300`}>
                  {qual.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{qual.title}</h3>
                <p className="text-gray-600 leading-relaxed">{qual.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              O que dizem nossos <span className="text-blue-600">Alunos</span>
            </h2>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
                <div>
                  <p className="font-bold text-gray-800 text-lg">{testimonials[activeTestimonial].name}</p>
                  <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
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

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para Começar sua Jornada?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Agende sua aula experimental gratuita e descubra como podemos ajudar você a dominar o inglês
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Aula Gratuita
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Entre em <span className="text-purple-600">Contato</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Telefone",
                info: "(31) 99999-9999",
                color: "text-blue-600"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "E-mail",
                info: "bruna@email.com",
                color: "text-purple-600"
              },
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "WhatsApp",
                info: "Clique para conversar",
                color: "text-green-600"
              }
            ].map((contact, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 ${contact.color}`}>
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bruna Bittencourt</h3>
                <p className="text-gray-400">Professora de Inglês</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Transformando vidas através do ensino de inglês com metodologia personalizada e humanizada.
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Bruna Bittencourt. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}