import React, { ReactElement, useEffect, useRef, useState } from 'react';
import IButton from './IButton';
import { vectors } from "../lib/vectors";
import { ScreenType, useScreen } from '../hooks/use-screen';
import { useAnimation, motion, useInView } from "framer-motion";
import { contacts } from '../lib/contacts';
export default function Hero (): ReactElement {
  const screen: ScreenType = useScreen();
  const ref = useRef(null);
  return (
    <motion.section ref={ref} className="h-[600px]   w-full text-wrap ">
      {/*<img src="/blob-scene-haikei.svg" className="absolute z-0 top-0 h-screen w-[111vw] border-2 border-green-500 transform scale-x-[-1] m-0 p-0 rotate-180" alt="" />*/}
      <div className={`flex justify-around     mt-44 z-10 items-center ${ screen === "mobile" ? "flex-col-reverse justify-center" : "" }`}>
        <div className={` ${ screen === "mobile" ? "w-96 text-center" : "w-[40%]" } z-10 space-y-5 flex flex-col justify-center items-center`}>
          <div>
            <motion.h3 whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .4 }} initial={{ x: screen !== "mobile" ? -200 : 0, opacity: 0 }} className="text-primary font-bold">Buscando excelência píxel por píxel</motion.h3>
            <motion.h1 whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .4, delay: .2 }} initial={{ x: screen !== "mobile" ? -350 : 0, opacity: 0 }} className={`font-bold text-3xl `}>Transformamos marcas em experiências digitais memoráveis</motion.h1>
            <motion.p whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .4, delay: .38 }} initial={{ x: screen !== "mobile" ? -420 : 0, opacity: 0 }} className='text-sm text-gray-700'>Desenhamos e executamos estratégias digitais completas — do branding à performance — para empresas que querem destacar-se no cenário moçambicano e internacional com criatividade, precisão e impacto real.</motion.p>
          </div>
          <motion.div whileInView={{ opacity: 1 }} transition={{ duration: .4, delay: .4 }} initial={{ opacity: screen !== "mobile" ? 0 : 1 }} className={`flex justify-around w-full  ${ screen === "mobile" ? "ml-0" : "" } items-center`}>
            <a href="#">
              <IButton variant="outline" >Saiba Mais</IButton>
            </a>
            <a href={`tel:${ contacts.phone }`}>
              <IButton>Entre em contacto</IButton>
            </a>
          </motion.div>
        </div>
        <motion.div whileInView={{ opacity: 1 }} transition={{ duration: .4, delay: .4 }} initial={{ opacity: screen !== "mobile" ? 0 : 1 }} className={`z-10  ${ screen === "mobile" ? "hidden" : "block" }`}>
          <img src={vectors.allTheData} className="w-[400px] h-[300px] " alt="Marketing Ilustrations" />
        </motion.div>
      </div>
    </motion.section>
  );
}