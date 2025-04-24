import React, { useEffect, useState } from 'react';
import { getCalApi } from '@calcom/embed-react';
import GetInTouch from './components/GetInTouch';
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
        <Navbar currentPage='home' />
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
        <GetInTouch />
        <Footer />
      </div>
    </ScreenContext.Provider>
  );
}

export default App;
