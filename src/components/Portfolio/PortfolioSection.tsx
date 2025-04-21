import React from 'react';
import ImageSlider from './ImageSlider';
import ImageModal from './ImageModal';
import { usePortfolio } from './usePortfolio';

export default function PortfolioSection() {


  return (
    <section className="py-20 bg-white" id="portifolio">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#490E46] text-sm uppercase tracking-wider bg-white border border-[#E0E0E0] px-4 py-2 rounded-full font-medium">
            NOSSO PORTFÓLIO
          </span>
          <h2 className="text-3xl mt-4 font-bold">
            Veja o que podemos criar para você.
          </h2>
          <p className="text-gray-600 mt-4">
            Explore nossos projetos de design inovadores e soluções criativas que transformam ideias em resultados reais.
          </p>
        </div>

      

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-[#F9F9F9] rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="bg-[#EEE] flex items-center justify-center mb-6">
              <img src="/portifolio/yudel.png" alt="BFG: Born For Greatness" className='rounded-lg'/>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">BFG: Born For Greatness</h3>
              <p className="text-gray-600">
                Criamos o sistema de vendas do livro do influenciador Yúdel Mavie, abrangendo desde a página de vendas até o processamento de pagamentos (PayPal, M-Pesa e E-Mola), além do envio do conteúdo e a proteção do vídeo.
              </p>
            </div>
            <a
              href="https://bornforgreatness.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center bg-[#490E46] text-white px-6 py-2 rounded-b-2xl font-medium hover:bg-[#3b0b39] transition-colors"
            >
              Ver Website
              <div
                className="bg-white text-[#490E46] ml-2 flex items-center justify-center"
                style={{ padding: '5px', borderRadius: '100%' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 7l-10 10" />
                  <path d="M8 7l9 0l0 9" />
                </svg>
              </div>
            </a>
          </div>

          <div className="bg-[#F9F9F9] rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="bg-[#EEE] flex items-center justify-center mb-6">
              <img src="/portifolio/sheila.png" alt="Si Cosmetics" className='rounded-lg'/>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">Si Cosmetics</h3>
              <p className="text-gray-600">
              Loja online da influenciadora Sheila Ibraimo, especializada em produtos de beleza feminina. Um e-commerce que oferece uma experiência de compra elegante e acessível para mulheres que buscam cuidar da sua aparência com produtos de alta qualidade.
              </p>
            </div>
            <br />

            <a
              href="https://sicosmetics.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center bg-[#490E46] text-white px-6 py-2 rounded-b-2xl font-medium hover:bg-[#3b0b39] transition-colors"
            >
              Ver Website
              <div
                className="bg-white text-[#490E46] ml-2 flex items-center justify-center"
                style={{ padding: '5px', borderRadius: '100%' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 7l-10 10" />
                  <path d="M8 7l9 0l0 9" />
                </svg>
              </div>
            </a>
          </div>

          <div className="bg-[#F9F9F9] rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="bg-[#EEE] flex items-center justify-center mb-6">
              <img src="/portifolio/style.png" alt="Si Cosmetics" className='rounded-lg'/>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4">StyledOasis</h3>
              <p className="text-gray-600">
              Multi e-commerce que permite a criação de lojas online personalizadas. Uma solução completa para empreendedores que desejam vender seus produtos de forma simples, eficiente e profissional.
              <br />
              <br />
              <br />
              </p>
            </div>
            <a
              href="https://styledoasis.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center bg-[#490E46] text-white px-6 py-2 rounded-b-2xl font-medium hover:bg-[#3b0b39] transition-colors bottom-0"
            >
              Ver Website
              <div
                className="bg-white text-[#490E46] ml-2 flex items-center justify-center"
                style={{ padding: '5px', borderRadius: '100%' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 7l-10 10" />
                  <path d="M8 7l9 0l0 9" />
                </svg>
              </div>
            </a>
          </div>


        </div>





      </div>
    </section>
  );
}
