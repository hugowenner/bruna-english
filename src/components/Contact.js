import React from 'react';
import { Phone, Mail, MessageCircle, Instagram } from 'lucide-react';

export default function Contact({ data }) {
  const getIcon = (title) => {
    switch (title) {
      case "Telefone": return <Phone className="w-6 h-6" />;
      case "E-mail": return <Mail className="w-6 h-6" />;
      case "WhatsApp": return <MessageCircle className="w-6 h-6" />;
      case "Instagram": return <Instagram className="w-6 h-6" />;
      default: return null;
    }
  };

  const formatTitle = (title) => {
    const words = title.split(' ');
    if (words.length > 1) {
      const lastWord = words[words.length - 1];
      const otherWords = words.slice(0, -1).join(' ');
      return (
        <>
          {otherWords}{' '}
          <span className="text-green-600">{lastWord}</span>
        </>
      );
    }
    return title;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {formatTitle(data.title)}
          </h2>
        </div>

        {/* NOVO: Formulário de Contato (MOVIDO PARA CIMA) */}
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-16"> {/* Adicionado mb-16 para espaçamento */}
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Envie sua Mensagem
          </h3>
          <form name="contact-form" method="POST" data-netlify="true" className="space-y-6">
            {/* Campo oculto para o Netlify */}
            <input type="hidden" name="form-name" value="contact-form" />

            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Seu Nome:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Seu E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Sua Mensagem:
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Seção de Contatos Existente (MOVIDO PARA BAIXO) */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8"> {/* Removido mb-16 daqui, pois já foi adicionado no formulário */}
          {data.contacts.map((contact, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 ${contact.color}`}>
                {getIcon(contact.title)}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{contact.title}</h3>
              {contact.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {contact.info}
                </a>
              ) : (
                <p className="text-gray-600">{contact.info}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}