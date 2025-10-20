import { useEffect } from 'react';
import { i18n } from '../translation/i18n';
import { Target } from 'lucide-react';

const Project1 = () => {
 
  useEffect(() => {
    if (window.location.hash === '#project1') {
      const element = document.getElementById('project1');
      if (element) {
        const offset = 64; 
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  return (
    <section id="project1" className="py-20 bg-white items-center scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-12">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Target className="w-6 h-6" />
              {i18n.t('titles.shipping_calculator')}
            </h3>
            <div className="relative flex justify-center pb-6">
              <img
                src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/banner-frete-calc.jpg?raw=true"
                alt="Calculadora de Frete"
                className="w-full max-w-4xl object-cover object-center h-[400px] mx-auto"
              />
            </div>


            {/* Contexto */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">{i18n.t('titles.context')}</h2>
              <p className="text-gray-800 mt-8 mb-12 mr-12 ml-12 font-semibold text-center whitespace-pre-line">
                {i18n.t('text.context_shipping_calculator')}
              </p>
            </div>

            {/* Exploração */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">{i18n.t('titles.exploration')}</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center whitespace-pre-line">
                {i18n.t('text.exploration_shipping_calculator')}
              </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/wireframe-frete-calc.png?raw=true"
                  alt="Wireframes da Calculadora de Frete"
                  className="w-full max-w-4xl mb-12"
                />
              </div>
            </div>


            {/* Solução */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">{i18n.t('titles.solution')}</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center whitespace-pre-line">
                {i18n.t('text.solution_shipping_calculator')}
              </p>
              <div className="relative flex justify-center p-6">
                <div className="flex flex-col gap-8 mb-12">
                  <img
                    src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockcup-frete-calc-mob.jpg?raw=true"
                    alt="Mockup Mobile - Calculadora de Frete"
                    className="w-full max-w-2xl mx-auto"
                  />
                  <img
                    src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockcup-frete-calc-desk.jpg?raw=true"
                    alt="Mockup Desktop - Calculadora de Frete"
                    className="w-full max-w-4xl mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* Impacto */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">{i18n.t('titles.impact')}</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center whitespace-pre-line">
                {i18n.t('text.impact_shipping_calculator')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project1;