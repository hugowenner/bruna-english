import React from 'react';
import { BookOpen, MessageCircle, Instagram } from 'lucide-react'; // Importe os ícones necessários para as redes sociais

export default function Footer({ data }) {
  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "MessageCircle": return <MessageCircle className="w-6 h-6" />;
      case "Instagram": return <Instagram className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-8 md:space-y-0">
          {/* Coluna 1: Branding e Descrição */}
          <div className="md:w-1/3">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{data.name}</h3>
                <p className="text-gray-400">{data.tagline}</p> {/* Usando 'tagline' agora */}
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              {data.description}
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="md:w-1/3">
            <h4 className="text-lg font-semibold text-white mb-4">Navegação Rápida</h4>
            <ul className="space-y-2">
              {data.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais e Contato Rápido */}
          <div className="md:w-1/3">
            <h4 className="text-lg font-semibold text-white mb-4">Conecte-se</h4>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              {data.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
            {/* Se você adicionar endereço no data.js, pode renderizar aqui */}
            {/* {data.address && <p className="text-gray-400 text-sm mt-4">{data.address}</p>} */}
          </div>
        </div>

        {/* Linha de Copyright (sempre no final) */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            {data.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}