import React from 'react';
import { MessageCircle, Calendar, Layers, Smile } from 'lucide-react';

const ProcessCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-[#F9F9F9] p-8 rounded-2xl shadow-sm hover:shadow-md transition">
    <div className="w-12 h-12 bg-[#EEE] rounded-full flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-[#490E46]" />
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function WorkProcess() {
  
  const processes = [
    {
      icon: MessageCircle,
      title: "Estudo de Mercado",
      description: "Analisamos o mercado, público-alvo e tendências para entender o cenário e as oportunidades."
    },
    {
      icon: Calendar,
      title: "Idealização Estratégica",
      description: "Desenhamos uma estratégia digital personalizada, criativa e orientada para resultados concretos."
    },
    {
      icon: Layers,
      title: "Execução de Alta Qualidade",
      description: "Colocamos a estratégia em prática com excelência em design, conteúdo e tecnologia."
    },
    {
      icon: Smile,
      title: "Monitoramento Contínuo",
      description: "Acompanhamos os resultados, otimizamos campanhas e garantimos melhorias constantes."
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {processes.map((process, index) => (
          <ProcessCard key={index} {...process} />
        ))}
      </div>
    </section>
  );
}
