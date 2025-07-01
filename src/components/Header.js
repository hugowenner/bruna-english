import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Header({ data }) {
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
          {/* Botão "Agendar Aula" - AGORA COM LINK PARA A SEÇÃO DE CONTATO */}
          <a
            href="#contact" // Link para a seção de contato
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
          >
            {data.buttonText}
          </a>
        </div>
      </div>
    </header>
  );
}