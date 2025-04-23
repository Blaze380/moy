import React, { useEffect, useState } from 'react';
import { getCalApi } from '@calcom/embed-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import PortfolioSection from './components/Portfolio/PortfolioSection';
import WorkProcess from './components/WorkProcess';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Stats from './components/Stats';
import Footer from './components/Footer';
import WhoWeAre from './components/WhoWeAre';
import { Separator } from './components/ui/separator';
import { ScreenType, ScreenContext } from "./hooks/use-screen";
function App () {
  function handleResize (): ScreenType {
    const width: number = window.innerWidth;
    if (width < 640)
      return "mobile";
    if (width >= 640 && width < 1024)
      return "tablet";
    if (width >= 1024)
      return "desktop";

    throw new Error("Not Expected!");

  }
  let res: ScreenType = handleResize();
  const [screen, setScreen] = useState<ScreenType>(res);


  useEffect(() => {
    const resize = (): void => setScreen(handleResize());
    window.addEventListener("resize", resize);

    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
    return (): void => window.removeEventListener("resize", resize);
  }, []);

  return (
    <ScreenContext.Provider value={screen}>
      <div className="min-h-screen bg-white text-black  flex flex-col items-center justify-center ">
        <Navbar  currentPage='home'/>
        <Hero />
        <Partners />
        <Separator className="w-[0.1%] mt-10 mb-10" />
        <WhoWeAre />
        <Stats />
        <Separator className="w-[80%] mt-20 mb-5" />
        <Features />
        <Separator className="w-[80%] mt-10 mb-10" />
        <PortfolioSection />
        <WorkProcess />
        {/* <Testimonials /> */}

        {/* CTA - Contato */}
        <section className=" px-6 py-20" id="contact">
          <div className="bg-gray-100 rounded-2xl p-12 text-center shadow-md">
            <h2 className="text-4xl font-bold mb-6">
              Entre em contacto
              <br />
              conosco
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
              Estamos prontos para ajudar a resolver suas necessidades, seja para um projeto novo ou uma dúvida.
              Entre em contato agora mesmo para que possamos começar a trabalhar juntos!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                data-cal-namespace="30min"
                data-cal-link="afiliado-organico-a4lyxl/30min"
                data-cal-config='{"layout":"month_view"}'
                className="w-full sm:w-auto bg-[#490E46] text-white px-8 py-3 rounded-full font-medium transition hover:bg-[#3a0b39] hover:opacity-80"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ScreenContext.Provider>
  );
}

export default App;
