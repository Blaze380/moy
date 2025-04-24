import { useEffect, useState } from 'react';
import { getCalApi } from '@calcom/embed-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ScreenType, ScreenContext } from "./hooks/use-screen";
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import FAQ from './FAQ';


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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </ScreenContext.Provider>
  );
}

export default App;
