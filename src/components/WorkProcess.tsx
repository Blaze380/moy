import React from 'react';
import { MessageCircle, Calendar, Layers, Smile } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { vectors } from '../lib/vectors';
import { motion } from "framer-motion";


export default function WorkProcess () {

  const processes = [
    {
      icon: MessageCircle,
      title: "Estudo de Mercado",
      description: "Analisamos o mercado, público-alvo e tendências para entender o cenário e as oportunidades.",
      imgSrc: vectors.investimentData,
    },
    {
      icon: Calendar,
      title: "Idealização Estratégica",
      description: "Desenhamos uma estratégia digital personalizada, criativa e orientada para resultados concretos.",
      imgSrc: vectors.businessDecisions,
    },
    {
      icon: Layers,
      title: "Execução de Alta Qualidade",
      description: "Colocamos a estratégia em prática com excelência em design, conteúdo e tecnologia.",
      imgSrc: vectors.qaEngineers,
    },
    {
      icon: Smile,
      title: "Monitoramento Contínuo",
      description: "Acompanhamos os resultados, otimizamos campanhas e garantimos melhorias constantes.",
      imgSrc: vectors.monitoring,
    }
  ];

  return (
    <section className="container mx-auto px-6 py-20" id='processo'>
      <div className="text-center mb-16">
        <span className="text-[#490E46] text-sm uppercase tracking-wider bg-white border border-[#E0E0E0] px-4 py-2 rounded-full font-medium">
          NOSSO PROCESSO
        </span>
        <h2 className="text-3xl mt-4 font-bold">
          Um processo simples para resultados excepcionais.
        </h2>
      </div>
      <div className="">

        <Accordion type="single" defaultValue='0' collapsible className="w-full">
          {processes.map((process, index) => (
            <motion.div
            initial={{y:80,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:.4,delay:(index+4)/10}}
            viewport={{once:false,amount:.2}}
            >
              <AccordionItem value={index + ""} >
                <AccordionTrigger>{(index + 1) + ". " + process.title}</AccordionTrigger>
                <AccordionContent>
                  <div className={`flex items-center justify-around ${ index % 2 !== 0 ? "flex-row-reverse" : "" }`}>
                    <div>
                      <img src={process.imgSrc} className='w-[150px] h-[150px]' alt="" />
                    </div>
                    <div>
                      <p>{process.description}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
