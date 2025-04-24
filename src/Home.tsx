import React, { ReactElement } from "react";
import GetInTouch from './components/GetInTouch';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import PortfolioSection from './components/Portfolio/PortfolioSection';
import WorkProcess from './components/WorkProcess';
import Stats from './components/Stats';
import WhoWeAre from './components/WhoWeAre';
import { Separator } from './components/ui/separator';

export default function Home (): ReactElement {
    return (
        <>
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
        </>
    )
}