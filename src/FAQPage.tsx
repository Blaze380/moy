import React, { ReactElement } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

export default function FAQPage (): ReactElement {
    return (
        <div className="h-screen">
            <Navbar currentPage="faq"/>
            <FAQ/>
            <Footer/>
        </div>
    );
}