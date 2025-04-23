import React, { ReactElement } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import IButton from '../IButton';
import { motion } from "framer-motion";

type ProjectDetails = {
  title: string;
  description: string;
  imgSrc: string;
  url: string;
}

const projects: ProjectDetails[] = [
  {
    title: "BFG: Born For Greatness",
    description: "Criamos o sistema de vendas do livro do influenciador Yúdel Mavie, abrangendo desde a página de vendas até o processamento de pagamentos (PayPal, M-Pesa e E-Mola), além do envio do conteúdo e a proteção do vídeo.",
    imgSrc: "/portifolio/yudel.png",
    url: "https://bornforgreatness.online/",
  },
  {
    title: "Si Cosmetics",
    description: "Loja online da influenciadora Sheila Ibraimo, especializada em produtos de beleza feminina. Um e-commerce que oferece uma experiência de compra elegante e acessível para mulheres que buscam cuidar da sua aparência com produtos de alta qualidade.",
    imgSrc: "/portifolio/sheila.png",
    url: "https://sicosmetics.store"
  },
  {
    title: "StyledOasis",
    description: "Multi e-commerce que permite a criação de lojas online personalizadas. Uma solução completa para empreendedores que desejam vender seus produtos de forma simples, eficiente e profissional.",
    imgSrc: "/portifolio/style.png",
    url: "https://styledoasis.com/"
  },
]
export default function PortfolioSection () {


  return (
    <section className="py-20 bg-whit" id="portifolio">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#490E46] text-sm uppercase tracking-wider bg-white border border-[#E0E0E0] px-4 py-2 rounded-full font-medium">
            NOSSO PORTFÓLIO
          </span>
          <motion.h2 initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:.5}} className="text-3xl mt-4 font-bold">Veja o que podemos criar para você.</motion.h2>
          <motion.p initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:.5}} className="text-gray-600 mt-4">Explore nossos projetos de design inovadores e soluções criativas que transformam ideias em resultados reais.</motion.p>
        </div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.6}}>
          <Carousel>
            <CarouselContent>
              {projects.map((project: ProjectDetails, i: number): ReactElement => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardHeader>
                    </CardHeader>
                    <CardContent className='flex flex-col space-y-5'>
                      <div>
                        <img src={project.imgSrc} alt="" />
                      </div>
                      <div>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription className='line-clamp-4'>Card {project.description}</CardDescription>
                      </div>
                    </CardContent>
                    <CardFooter className='flex justify-center'>
                      <a href={project.url}>
                        <IButton variant='outline'>Visitar</IButton>
                      </a>
                    </CardFooter>
                  </Card>

                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>





      </div>
    </section>
  );
}
