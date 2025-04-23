import { ReactElement } from "react";
import { ScreenType, useScreen } from "../hooks/use-screen";
import { motion } from "framer-motion";
export default function FeaturesCard ({ title, description, img, }: { title: string, description: string, img: string }): ReactElement {
    const screen: ScreenType = useScreen();
    return (
        <div className='flex flex-col-reverse text-wrap justify-center items-center'>
            <motion.div className={` space-y-5 ${ screen === "mobile" ? "w-[80%] " : "w-[40%]" }`}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .4 }}
            >
                <h1 className="font-bold text-2xl">{title}</h1>
                <p className="text-gray-600 ">{description}</p>
            </motion.div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .4 }}
            >
                <img src={img} className="w-[300px]  h-[300px]" alt="Gestão de redes" />
            </motion.div>
        </div>
    )
}