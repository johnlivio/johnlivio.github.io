

import { i18n } from '../translation/i18n';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center bg-cover bg-center h-[600px]"
      style={{ backgroundImage: "url('https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/banner.png?raw=true')" }} 
    >
      {/* Overlay escuro para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-white-20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        {i18n.t('titles.hi')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200  max-w-2xl mx-auto">
        {i18n.t('text.about')}
        </p>
      </div>
    </section>
  );
};

export default Hero;