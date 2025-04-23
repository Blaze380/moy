import React, { ReactElement } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function AboutPage (): ReactElement {
    return (
        <div className="h-screen">
            <Navbar currentPage="about" />
            <Footer />
        </div>
    );
}