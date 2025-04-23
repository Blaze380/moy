import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import FeaturesCard from './FeaturesCard';
import { vectors } from '../lib/vectors';
import { ScreenType, useScreen } from '../hooks/use-screen';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ReactElement, useState } from 'react';
import { motion } from "framer-motion";
type FeaturesCardType = {
  tabTriggerValue: string;
  tabTitle: string;
  title: string;
  description: string;
  imgSrc: string;
}

const features: FeaturesCardType[] = [
  {
    tabTitle: "Gestão de redes sociais",
    tabTriggerValue: "social_media",
    title: "Gestão de redes sociais",
    description: "Cuidamos da presença digital da sua marca de forma estratégica e profissional. Planeamos conteúdos relevantes, criamos calendários editoriais personalizados, gerimos a interação com o público e promovemos o crescimento orgânico da sua audiência. Transformamos perfis em verdadeiras plataformas de valor e conexão com o seu público.",
    imgSrc: vectors.socialDashboard,
  },
  {
    tabTitle: "Produção de Conteúdo",
    tabTriggerValue: "content_production",
    title: "Produção de Conteúdo Criativo",
    description: "Conteúdo é o coração da comunicação digital. Criamos fotografias, vídeos, reels, entrevistas, campanhas visuais e narrativas que contam histórias autênticas e impactantes. Trabalhamos com storytelling visual e técnicas de produção que destacam a essência da sua marca em cada detalhe.",
    imgSrc: vectors.productPhotography,
  },
  {
    tabTitle: "Marketing digital ",
    tabTriggerValue: "digital_marketing",
    title: "Campanhas de Marketing e Publicidade Digital",
    description: "Desenvolvemos campanhas pagas eficazes no Facebook, Instagram, TikTok, LinkedIn e Google Ads. Cada campanha é pensada para gerar resultados mensuráveis — seja em cliques, vendas ou notoriedade. Usamos segmentação estratégica, criatividade e dados para maximizar o seu retorno sobre investimento.",
    imgSrc: vectors.onlineAd,
  },
  {
    tabTitle: "Design Criativo",
    tabTriggerValue: "creative_design",
    title: "Design Gráfico e Identidade Visual",
    description: "Criamos logotipos, identidades visuais, flyers, brochuras e apresentações com design moderno, consistente e alinhado ao posicionamento da sua marca. O nosso objetivo é garantir que a sua comunicação visual transmita profissionalismo, confiança e originalidade.",
    imgSrc: vectors.statusUpdate,
  },
  {
    tabTitle: "Desenvolvimento de Websites",
    tabTriggerValue: "website_dev",
    title: "Websites Modernos e Funcionais",
    description: "Desenvolvemos websites responsivos, rápidos, otimizados para SEO e integrados com ferramentas de contacto e análise. Seja uma landing page ou um portal completo, entregamos soluções elegantes, intuitivas e voltadas para conversão — transformando visitantes em clientes.",
    imgSrc: vectors.webSearch,
  },
  {
    tabTitle: "Análise de Dados & Estratégia",
    tabTriggerValue: "data_analysis",
    title: "Estratégia Baseada em Dados",
    description: "Monitoramos resultados, geramos relatórios mensais e oferecemos insights estratégicos para tomadas de decisão inteligentes. Com análise de dados, identificamos oportunidades de melhoria contínua e asseguramos que cada ação esteja alinhada com os objetivos do seu negócio.",
    imgSrc: vectors.predictiveAnalytics,
  },
]
export default function Features () {

  const screen: ScreenType = useScreen();
  const [feature, setFeature] = useState<number>(0);
  return (
    <section className="py-20 bg-white" id='services'>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#490e46] text-sm uppercase tracking-wider bg-white border border-gray-300 inline-block px-4 py-2 rounded-full font-medium">
            Nossos serviços
          </span>
          <motion.h2 className="text-3xl mt-4 text-black"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: .4 }}
          >
            Nós resolvemos os desafios criativos
            <br />
            para transformar sua visão em realidade.
          </motion.h2>
        </div>
        <div className="flex justify-center w-full  m-0">
          {screen !== "mobile" ? (

            <Tabs className="" defaultValue={features[0].tabTriggerValue}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .4 }}
              >
              <TabsList className="flex flex-wrap h-fit pt-2 pb-2 mb-10">
                {features.map((feature: FeaturesCardType, i: number): ReactElement => (
                  <TabsTrigger className="text-sm" key={i} value={feature.tabTriggerValue}>{feature.tabTitle}</TabsTrigger>
                ))}
              </TabsList>
              </motion.div>
              {features.map((feature: FeaturesCardType, i: number): ReactElement => (
                <TabsContent value={feature.tabTriggerValue} className='flex items-center justify-around'>
                  <FeaturesCard key={i}
                    title={feature.title}
                    description={feature.description}
                    img={feature.imgSrc}
                  />
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <div className={`flex flex-col justify-center  space-y-10 items-center`}>
              <Select defaultValue='0' onValueChange={(value: string): void => setFeature(parseInt(value))}>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Selecione o serviço" onClick={() => console.log("a")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {features.map((feat: FeaturesCardType, i: number): ReactElement => (
                      <SelectItem value={i + ""} >{feat.tabTitle}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className='flex flex-col-reverse justify-center items-center'>
                <FeaturesCard
                  title={features[feature].title}
                  description={features[feature].description}
                  img={features[feature].imgSrc}
                />
              </div>
            </div>

          )}
        </div>
      </div>
    </section>
  );
}
