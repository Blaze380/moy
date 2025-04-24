import React, { ReactElement } from "react";
import IButton from "./IButton";

export default function GetInTouch (): ReactElement {
    return (
        <section className="w-full border-t shadow-lg bg-white" id="contact">
            <div className="container mx-auto py-4 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <h2 className="font-bold text-xl text-primary text-center md:text-left">Entre em contacto agora!</h2>
                        <p className="text-gray-600 text-sm text-center md:text-left max-w-xl">
                            Entre em contacto conosco e vamos discutir como podemos transformar suas ideias em realidade.
                        </p>
                    </div>
                    <IButton variant="outline" >
                        Contactar
                    </IButton>
                </div>
            </div>
        </section>
    );
}