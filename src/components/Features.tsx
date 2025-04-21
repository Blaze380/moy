import React from 'react';
import { PenTool, Megaphone, Rss, Webhook, PanelsTopLeft } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-[#f3f3f3] rounded-full flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-[#490e46]" />
    </div>
    <h3 className="text-xl font-semibold text-black mb-4">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default function Features() {
  const features = [
    {
      icon: PenTool,
      title: "Design Gráfico Personalizado",
      description: "Transformamos sua identidade visual para destacar sua marca de maneira única e impactante."
    },
    {
      icon: Rss,
      title: "Gestão de Redes Sociais",
      description: "Conectamos sua marca ao público certo, com estratégias inteligentes e conteúdo envolvente nas redes sociais."
    },
    {
      icon: Megaphone,
      title: "Gestão de Publicidade Digital",
      description: "Maximize o alcance e o impacto do seu negócio com campanhas de publicidade digital eficazes e de alto desempenho."
    },
    {
      icon: PanelsTopLeft,
      title: "Web Design Responsivo",
      description: "Criamos sites modernos e intuitivos que se adaptam a todos os dispositivos, proporcionando a melhor experiência para seus usuários."
    },
    {
      icon: Webhook,
      title: "Criação de SaaS",
      description: "Desenvolvemos soluções SaaS sob medida para otimizar processos e transformar a forma como você gerencia seu negócio."
    }
  ];

  return (
    <section className="py-20 bg-white" id='services'>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#490e46] text-sm uppercase tracking-wider bg-white border border-gray-300 inline-block px-4 py-2 rounded-full font-medium">
            O QUE VOCÊ VAI RECEBER
          </span>
          <h2 className="text-3xl mt-4 text-black">
            Nós resolvemos os desafios criativos
            <br />
            para transformar sua visão em realidade.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {features.slice(3).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
