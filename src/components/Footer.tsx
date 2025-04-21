import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-8 md:mb-0">
            <div className="s">
              <div className="w-full h-full relative">
              <img 
  src="/logoo/loff.png" 
  alt="Logo" 
  className='filter brightness-0 invert hover:opacity-100 hover:brightness-100 hover:invert-0 h-[40px]'
/>

              </div>
            </div>
          </div>
          <div className="flex space-x-8 text-sm text-gray-400">
            <a href="https//wa.me/258844189947" className="hover:text-white">Whatsapp: +258 84 418 9947 </a>
            <a href="mail:moy.agency@moy.agency" className="hover:text-white">Email: moy.agency@moy.agency</a>
          </div>
          <div className="text-sm text-gray-400 mt-8 md:mt-0">
            © 2024 MOY Agency
          </div>
        </div>
      </div>
    </footer>
  );
}