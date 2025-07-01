import React from 'react';

export default function CTA({ data }) {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          {data.headline}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {data.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Botão "Aula Gratuita" - permanece como está, direcionando para o formulário */}
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            {data.buttonPrimary}
          </button>
          {/* Botão "Falar no WhatsApp" - AGORA COM LINK PARA WHATSAPP */}
          <a
            href="https://wa.me/5531988497222" // Link direto para o WhatsApp da Bruna
            target="_blank" // Abre em uma nova aba
            rel="noopener noreferrer" // Para segurança
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-center"
          >
            {data.buttonSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}