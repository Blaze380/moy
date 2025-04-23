import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { Separator } from './ui/separator';
import { contacts } from "../lib/contacts";
import { ScreenType, useScreen } from "../hooks/use-screen";
import { ReactElement } from "react";

export default function Footer (): ReactElement {
  const screen: ScreenType = useScreen();

  return (
    <footer className="bg-[#0A0A0A]a bg-fuchsia-500a bg-[#490E46]  text-gray-200  w-screen">
      <div className={`flex justify-around flex-row-reverse my-10 ${screen==="mobile"? "flex-acol justifay-center":""}`}>
        <div className={`flex items-start flex-wrap justify-around ${ screen === "mobile" ? "flex-col justify-center space-y-8" : "w-[60%]" }`}>
          <div>
            <h2 className="font-bold">Sobre Nós:</h2>
            <Separator className='bg-primary-light h-[2px] w-10 mb-1' />
            <div className='flex flex-col text-xs justify-start text-gray-200'>
              <a href="#" className='hover:text-primary'>Quem Somos</a>
              <a href="/faq.html" className='hover:text-primary'>FAQ</a>
            </div>
          </div>
          <div>
            <h2 className="font-bold">Contactos:</h2>
            <Separator className='bg-primary-light h-[2px] w-10 mb-1' />
            <div className='flex flex-col text-xs justify-start text-gray-200'>
              <p>Número: <a href={`tel:${ contacts.phone }`} className='hover:text-primary'>{contacts.phone}</a></p>
              <p>Email: <a href={`mailto:${ contacts.email }`} className='hover:text-primary'>{contacts.email}</a></p>
              <p>Endereço: <address className='hover:text-primary'>{contacts.address}</address></p>
            </div>
          </div>
        </div>
        <div className={`flex flex-col ${screen==="mobile"?"flex-raow":""}`}>
          <div className={`flex justify-start flex-col space-y-5 text-sm text-white font-bold items-center ${screen==="mobile"?"flexa-row":""}`}>
            <img src="/logoo/loff.png" className="w-[90px] " alt="Moy Logo" />
            <p> © Moy Agency - 2025</p>
            <div className="flex items-center justify-between space-x-2">
              {contacts.social.instagram && (
                <a href={contacts.social.instagram.link} target="_blank">
                  <Instagram size={20} className="hover:text-primary" />
                </a>
              )}

              {contacts.social.facebook && (
                <a href={contacts.social.facebook.link} target="_blank">
                  <Facebook size={20} className="hover:text-primary" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}