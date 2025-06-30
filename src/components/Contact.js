import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact({ data }) {
  const getIcon = (index) => {
    switch (index) {
      case 0: return <Phone className="w-6 h-6" />;
      case 1: return <Mail className="w-6 h-6" />;
      case 2: return <MessageCircle className="w-6 h-6" />;
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
          <span className="text-green-600">{lastWord}</span> {/* Alterado de text-purple-600 para text-green-600 */}
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

        <div className="grid lg:grid-cols-3 gap-8">
          {data.contacts.map((contact, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 ${contact.color}`}>
                {getIcon(index)}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{contact.title}</h3>
              <p className="text-gray-600">{contact.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}