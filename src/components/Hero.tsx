import React from 'react';
import WaveBackground from './WaveBackground';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <WaveBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
          <center>
              <div className='flex relative justify-center center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" fill="none">
                  <rect width="126" height="126" fill="url(#a)" fillOpacity=".1" rx="63" />
                  <rect width="125" height="125" x=".5" y=".5" stroke="url(#b)" strokeOpacity=".05" rx="62.5" />
                  <rect width="110" height="110" x="8" y="8" fill="url(#c)" fillOpacity=".15" rx="55" />
                  <rect width="109" height="109" x="8.5" y="8.5" stroke="url(#d)" strokeOpacity=".15" rx="54.5" />
                  <rect width="94" height="94" x="16" y="16" fill="url(#e)" fillOpacity=".2" rx="47" />
                  <rect width="93" height="93" x="16.5" y="16.5" stroke="url(#f)" strokeOpacity=".2" rx="46.5" />
                  <g filter="url(#g)">
                    <rect width="74" height="74" x="26" y="26" fill="url(#h)" fillOpacity=".2" rx="37" />
                    <rect width="73" height="73" x="26.5" y="26.5" stroke="url(#i)" strokeOpacity=".2" rx="36.5" />
                  </g>
                  <defs>
                    <linearGradient id="a" x1="63" x2="63" y1="-33.791" y2="158.645" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#490e46" />
                      <stop offset=".793" stopColor="#490e46" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="b" x1="63" x2="63" y1="0" y2="126" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F6FECD" />
                      <stop offset="1" stopColor="#F6FECD" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="c" x1="63" x2="63" y1="-21.5" y2="146.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#490e46" />
                      <stop offset=".793" stopColor="#490e46" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="d" x1="63" x2="63" y1="8" y2="118" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F6FECD" />
                      <stop offset="1" stopColor="#F6FECD" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="e" x1="63" x2="63" y1="-9.209" y2="134.355" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#490e46" />
                      <stop offset=".793" stopColor="#490e46" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="f" x1="63" x2="63" y1="16" y2="110" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F6FECD" />
                      <stop offset="1" stopColor="#F6FECD" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="h" x1="63" x2="63" y1="-14.469" y2="119.173" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#490e46" />
                      <stop offset=".87" stopColor="#490e46" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="i" x1="63" x2="63" y1="26" y2="100" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F6FECD" />
                      <stop offset="1" stopColor="#F6FECD" stopOpacity="0" />
                    </linearGradient>
                    <filter id="g" width="114" height="114" x="6" y="6" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2351_110" />
                      <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_2351_110" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 0.286 0 0 0 0 0.055 0 0 0 0 0.274 0 0 0 0.2 0" />
                      <feBlend in2="shape" result="effect2_innerShadow_2351_110" />
                    </filter>
                  </defs>
                </svg>
                  {/* <img src="/logoo/loff.png" className="h-[30px] absolute m-auto mt-10"/> */}

              </div>
            </center>

            <div className="hidden sm:block">
              <div className='flex justify-between absolute'>
              <span className="bg-[#f3f3f3]" style={{ borderRadius: '10px', padding: '5px', marginRight: '5px'}}> Inovação</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><g clipPath="url(#a)"><path fill="#490E46" stroke="#490E46" d="m3.677 6.85 11.031-2.57c1.263-.295 2.28 1.043 1.656 2.18l-5.47 9.994c-.664 1.212-2.474.958-2.78-.39l-.85-3.758a.5.5 0 0 0-.221-.313L3.217 9.58c-1.126-.71-.837-2.427.46-2.73z"/></g><defs><clipPath id="a"><path fill="#fff" d="M20 0H0v20h20z"/></clipPath></defs></svg>
              </div>
              <div className='flex justify-between absolute' style={{top: '10px', left: '150px'}}>
              <span className="bg-[#f3f3f3]" style={{ borderRadius: '10px', padding: '5px', marginRight: '5px'}}>Criatividade</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><g clipPath="url(#a)"><path fill="#490E46" stroke="#490E46" d="m3.677 6.85 11.031-2.57c1.263-.295 2.28 1.043 1.656 2.18l-5.47 9.994c-.664 1.212-2.474.958-2.78-.39l-.85-3.758a.5.5 0 0 0-.221-.313L3.217 9.58c-1.126-.71-.837-2.427.46-2.73z"/></g><defs><clipPath id="a"><path fill="#fff" d="M20 0H0v20h20z"/></clipPath></defs></svg>
              </div>
              <div className='flex justify-between absolute' style={{top: '10px', right: '150px'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><g clipPath="url(#a)"><path fill="#490E46" stroke="#490E46" d="M16.323 6.85 5.292 4.28c-1.263-.295-2.28 1.043-1.657 2.18l5.472 9.994c.663 1.212 2.473.958 2.778-.39l.851-3.758a.5.5 0 0 1 .221-.313l3.826-2.413c1.126-.71.837-2.427-.46-2.73z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>
              <span className="bg-[#f3f3f3]" style={{ borderRadius: '10px', padding: '5px', marginLeft: '5px'}}>Perspectiva</span>
              </div>
              <div className='flex justify-between absolute' style={{right: '10px'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><g clipPath="url(#a)"><path fill="#490E46" stroke="#490E46" d="M16.323 6.85 5.292 4.28c-1.263-.295-2.28 1.043-1.657 2.18l5.472 9.994c.663 1.212 2.473.958 2.778-.39l.851-3.758a.5.5 0 0 1 .221-.313l3.826-2.413c1.126-.71.837-2.427-.46-2.73z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>
              <span className="bg-[#f3f3f3]" style={{ borderRadius: '10px', padding: '5px', marginLeft: '5px'}}>Estratégia</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-5xl font-bold mb-6 relative">
              Elevamos marcas africanas
              <br />
              com inovação e criatividade
            </h1>
          </div>
          <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
            A MOY Agency é uma agência criativa moçambicana, jovem e ousada, especializada em ajudar marcas a crescerem através de estratégias digitais inteligentes, gestão de redes sociais, produção de conteúdo de alto impacto e desenvolvimento de websites modernos.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#contact">
            <button className="w-full sm:w-auto bg-[#490E46] text-white px-8 py-3 rounded-full font-medium hover:bg-[#490e46]/80 transition-colors">
              Entrar em Contacto
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}