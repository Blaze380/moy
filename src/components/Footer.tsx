import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { Separator } from './ui/separator';
import { contacts } from "../lib/contacts";
import { ScreenType, useScreen } from "../hooks/use-screen";
import { ReactElement } from "react";

export default function Footer ():ReactElement {
  const screen: ScreenType = useScreen();

  return (
    <footer className="bg-[#0A0A0A] text-white  w-screen">
      <div className='flex flex-col mt-10 mb-10'>
        <div className={`flex items-start flex-wrap justify-around ${ screen === "mobile" ? "flex-col justify-center space-y-10 ml-7" : "" }`}>
          <div className='flex flex-col'>
            <h2>Serviços:</h2>
            <Separator className='bg-primary-light h-[2px] w-10 mb-1' />
            <div className="flex flex-col text-xs space-y-2 justify-start">
              <a href="index.html#services" className='hover:text-primary-light'>Gestão de Redes Sociais</a>
              <a href="index.html#services" className='hover:text-primary-light'>Produção de Conteúdo</a>
              <a href="index.html#services" className='hover:text-primary-light'>Marketing Digital</a>
              <a href="index.html#services" className='hover:text-primary-light'>Design Criativo</a>
              <a href="index.html#services" className='hover:text-primary-light'>Desenvolvimento de Websites</a>
              <a href="index.html#services" className='hover:text-primary-light'>Análise de dados & Estratégia</a>
            </div>
          </div>
          <div>
            <h2>Sobre Nós:</h2>
            <Separator className='bg-primary-light h-[2px] w-10 mb-1' />
            <div className='flex flex-col text-xs justify-start'>
              <a href="#" className='hover:text-primary-light'>Quem Somos</a>
              <a href="/faq.html" className='hover:text-primary-light'>FAQ</a>
            </div>
          </div>
          <div>
            <h2>Contactos:</h2>
            <Separator className='bg-primary-light h-[2px] w-10 mb-1' />
            <div className='flex flex-col text-xs justify-start'>
              <p>Número: <a href={`tel:${ contacts.phone }`} className='hover:text-primary-light'>{contacts.phone}</a></p>
              <p>Email: <a href={`mailto:${ contacts.email }`} className='hover:text-primary-light'>{contacts.email}</a></p>
              <p>Endereço: <address className='hover:text-primary-light'>{contacts.address}</address></p>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex w-full  space-x-5 items-center justify-center'>
            <Separator className="w-[40%]" />
            <div className="flex items-center justify-between space-x-2">
              {contacts.social.instagram && (
                <a href={contacts.social.instagram.link} target="_blank">
                  <Instagram size={20} className="hover:text-primary-light" />
                </a>
              )}

              {contacts.social.facebook && (
                <a href={contacts.social.facebook.link} target="_blank">
                  <Facebook size={20} className="hover:text-primary-light" />
                </a>
              )}
            </div>
            <Separator className="w-[40%]" />
          </div>
          <div className="flex justify-around text-sm text-gray-600 items-center">
            <img src="/logoo/loff.png" className="w-[30px] " alt="Moy Logo" />
            <p>Moy Agency - Todos os direitos reservados</p>
            <p>2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}