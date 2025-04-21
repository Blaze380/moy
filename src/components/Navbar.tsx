import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#f3f3f3]/80 backdrop-blur-lg z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logoo/loff.png" alt="Logo" className="h-12" />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-900 hover:text-gray-600 transition">Serviços</a>
            <a href="#portifolio" className="text-gray-900 hover:text-gray-600 transition">Portifólio</a>
            <a href="#processo" className="text-gray-900 hover:text-gray-600 transition">Processo</a>
            <a href="#faqs" className="text-gray-900 hover:text-gray-600 transition">FAQs</a>
          </div>

          {/* Desktop button */}
          <div className="hidden md:block">
            <a href="#contact">
              <button className="bg-[#490e46] text-white px-6 py-2 rounded-full font-medium hover:opacity-80 transition">
                Fale Conosco
              </button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 text-center">
            <a href="#services" className="block text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Serviços</a>
            <a href="#portifolio" className="block text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Portifólio</a>
            <a href="#processo" className="block text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Processo</a>
            <a href="#faqs" className="block text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>FAQs</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <button className="bg-[#490e46] text-white px-6 py-2 rounded-full font-medium mt-2 hover:opacity-90 transition">
                Fale Conosco
              </button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
