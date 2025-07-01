import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Header({ data }) {
  // Assumindo que 'data' aqui é o headerData,
  // precisaremos passar os links de navegação para o Header,
  // ou importar diretamente de data.js se for mais simples.
  // Para este exemplo, vou assumir que você pode passar os links via props
  // ou que eles serão importados de um contexto/data.js global.
  // Vou usar uma importação direta para simplificar aqui.
  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre Mim", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" }
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{data.name}</h1>
              <p className="text-sm text-gray-600">{data.title}</p>
            </div>
          </div>

          {/* Barra de Navegação (para telas maiores) */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botão "Agendar Aula" - permanece como está */}
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
          >
            {data.buttonText}
          </a>

          {/* TODO: Adicionar um botão de menu hamburguer para telas pequenas, se necessário */}
          {/* Por enquanto, a navegação será oculta em telas pequenas */}
        </div>
      </div>
    </header>
  );
}