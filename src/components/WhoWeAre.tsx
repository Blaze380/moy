import { ReactElement } from "react";
import IButton from "./IButton";
import { ScreenType, useScreen } from "../hooks/use-screen";
import { contacts } from "../lib/contacts";
import { motion } from "framer-motion";


//${screen==="mobile"?"":""}
export default function WhoWeAre (): ReactElement {
    const screen: ScreenType = useScreen();
    return (
        <motion.section id="quem-somos" initial={{y:60,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:.3}} className="">
            <div className={`flex justify-evenly w-full  items-center  ${ screen === "mobile" ? "flex-col justify-center space-y-10" : "space-x-36" }`}>
                <div>
                    <img src="/7276.jpg" className="w-[400px] " alt="Quem Somos" />
                </div>
                <div className={`w-[40%] space-y-8 ${ screen === "mobile" ? "w-[80%] text-wrap  text-justify" : "" }`}>
                    <div>
                        <h1 className="font-bold text-2xl">Quem Somos?</h1>
                        <p className="text-gray-600">A MOY Agency é uma agência criativa moçambicana de marketing digital, fundada por uma equipa jovem, ousada e orientada por resultados. Com sede em Moçambique e espírito global, somos especializados na criação e execução de estratégias digitais integradas, feitas à medida para marcas que desejam destacar-se, tanto no cenário local quanto internacional.</p>
                    </div>
                    <div className="flex justify-evenly items-center">
                        <a href={`tel:${ contacts.phone }`}>
                            <IButton>Entre em contacto</IButton>
                        </a>
                        <a href="#quem-somos">
                            <IButton variant="outline">Saiba Mais</IButton>
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}