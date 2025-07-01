import React from 'react';
import { Phone, Mail, MessageCircle, Instagram } from 'lucide-react'; // Importe o ícone do Instagram

export default function Contact({ data }) {
  // Ajustado para usar o título do contato para determinar o ícone, mais robusto
  const getIcon = (title) => {
    switch (title) {
      case "Telefone": return <Phone className="w-6 h-6" />;
      case "E-mail": return <Mail className="w-6 h-6" />;
      case "WhatsApp": return <MessageCircle className="w-6 h-6" />;
      case "Instagram": return <Instagram className="w-6 h-6" />; // NOVO: case para Instagram
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

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8"> {/* Ajustado para 4 colunas em telas grandes */}
          {data.contacts.map((contact, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 ${contact.color}`}>
                {getIcon(contact.title)} {/* Passa o título do contato para getIcon */}
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