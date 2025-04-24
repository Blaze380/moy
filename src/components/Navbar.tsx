import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import IButton from './IButton';
type Props = {
  currentPage: PagesType
}
type PagesType = "home" | "faq" | "about";
export default function Navbar ({ currentPage }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  function handleScroll (): void {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50)
      setShow(false);
    else
      setShow(true);
    setLastScrollY(currentScrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollY]);


  return (
    <nav className={` w-full top-0 z-50 h-16 fixed   bg-white transition-transform ${ show ? `translate-y-0 ${ lastScrollY > 1 ? "shadow-md" : "" }` : "-translate-y-full" }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between -space-x-3">
          <a href='index.html' className="flex items-center space-x-2 select-none">
            <img src="/logoo/loff.png" alt="Logo" className="h-5 select-none" />
          </a>


          {/**Desktop container */}
          <div className="flex items-center justify-evenly space-x-12">
            {/* Desktop menu */}
            <div className="hidden md:flex text-sm items-center space-x-8">
              <a href="/" className={`text-gray-900 hover:text-gray-600 transition ${ currentPage === "home" ? "text-primary font-bold " : "" }`}>Início</a>
              <a href="#services" className="text-gray-900 hover:text-gray-600 transition">Serviços</a>
              <a href="#portifolio" className="text-gray-900 hover:text-gray-600 transition">Portifólio</a>
              <a href="#processo" className="text-gray-900 hover:text-gray-600 transition">Quem Somos</a>
            </div>

            {/* Desktop button */}
            <div className="hidden md:block">
              <a href="#contact">
                <IButton cta bolded>Fale Conosco</IButton>
              </a>
            </div>
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
          <div className="md:hidden mt-4 w-full p-10 bg-white space-y-4 text-center">
            <a href="index.html#services" className="block text-gray-600 hover:text-white" onClick={() => setIsOpen(false)}>Serviços</a>
            <a href="index.html#portifolio" className="block text-gray-600 hover:text-white" onClick={() => setIsOpen(false)}>Portifólio</a>
            <a href="index.html#processo" className="block text-gray-600 hover:text-white" onClick={() => setIsOpen(false)}>Processo</a>
            <a href="index.html#contact" onClick={() => setIsOpen(false)}>
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
