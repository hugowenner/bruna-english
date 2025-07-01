import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Footer({ data }) {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{data.name}</h3>
              <p className="text-gray-400">{data.title}</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            {data.description}
          </p>
          <p className="text-gray-500 text-sm">
            {data.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}