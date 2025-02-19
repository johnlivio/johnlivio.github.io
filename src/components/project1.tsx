import { useEffect } from 'react';
import { i18n } from '../translation/i18n';

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
            <h3 className="text-3xl font-bold mb-8 text-center">{i18n.t('titles.broadcast')}</h3>
            <div className="relative flex justify-center pb-6">
              <img
                src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-listas.jpg?raw=true?auto=format&fit=crop&q=80"
                alt="Professional workspace"
                className="w-full max-w-4xl object-cover object-center h-[400px] mx-auto"
              />
            </div>


            {/* Contexto */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">{i18n.t('titles.context')}</h2>
              <p className="text-gray-800 mt-8 mb-12 mr-12 ml-12 font-semibold text-center">
                {i18n.t('text.context_custom_broadcast')}
              </p>
            </div>

            {/* Exploração */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">{i18n.t('titles.exploration')}</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
                {i18n.t('text.exploration_custom_broadcast')}              </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-listas.png?raw=true?auto=format&fit=crop&q=80"
                  alt="Diagrama de listas"
                  className="w-[664.5px] h-[100px] mb-12"
                />
              </div>
            </div>

            {/* Fluxo de disparos */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">{i18n.t('titles.flow')}</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
                {i18n.t('text.diagram_lists_custom_broadcast')}               </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-listas2.png?raw=true?auto=format&fit=crop&q=80"
                  alt="Fluxo de disparos"
                  className="w-[1046.4px] h-[576.6px] mb-12"
                />
              </div>
            </div>

            {/* Brainstorm */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">{i18n.t('titles.brainstorm')}</h2>
              <p className="text-gray-800 mt-8 mb-12 mr-12 ml-12 font-semibold text-center">
              {i18n.t('text.brainstorm_custom_broadcast')}               </p>
            </div>

            {/* Novo fluxo */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">{i18n.t('titles.new_flow')}</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
              {i18n.t('text.new_flow_custom_broadcast')}               </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-listas3.png?raw=true?auto=format&fit=crop&q=80"
                  alt="Novo fluxo"
                  className="w-[1046.4px] h-[576.6px] mb-12"
                />
              </div>
            </div>

            {/* Solução */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">{i18n.t('titles.solution')}</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
              {i18n.t('text.solution_custom_broadcast')}               </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/solucao.png?raw=true?auto=format&fit=crop&q=80"
                  alt="Solução"
                  className="w-[1046.4px] h-[576.6px] mb-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project1;