import { useEffect } from 'react';
import { i18n } from '../translation/i18n';
import { Target } from 'lucide-react';

const Project3 = () => {
  
  useEffect(() => {
    if (window.location.hash === '#project3') {
      const element = document.getElementById('project3');
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
    <section id="project3" className="py-20 bg-white items-center scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-12">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Target className="w-6 h-6" />
              {i18n.t('titles.profile_screen')}
            </h3>
            <div className="relative flex justify-center pb-6">
              <img
                src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-perfil.jpg?raw=true?raw=true?auto=format&fit=crop&q=80"
                alt="Professional workspace"
                className="w-full max-w-4xl object-cover object-center h-[400px] mx-auto"
              />
            </div>

            {/* Contexto */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">{i18n.t('titles.context')}</h2>
              <p className="text-gray-800 mt-8 mb-12 mr-12 ml-12 font-semibold text-center">
                {i18n.t('text.context_profile_screen')}              </p>
            </div>

            {/* Exploração */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">{i18n.t('titles.exploration')}</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
{i18n.t('text.exploration_profile_screen')}              </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-perfil.png?raw=true?auto=format&fit=crop&q=80"
                  alt="Diagrama de perfil"
                  className="w-[664.5px] h-[100px] mb-12"
                />
              </div>
            </div>

            {/* Levantamento de usos */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">{i18n.t('titles.uses')}</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
{i18n.t('text.diagram_profile_screen')}              </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/perfil.png?raw=true?auto=format&fit=crop&q=80"
                  alt="Tela de perfil"
                  className="mb-12"
                />
              </div>
            </div>

            {/* Design e Testes A/B */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">{i18n.t('titles.ab_testing')}</h2>
              <p className="text-gray-800 mt-8 mb-12 mr-12 ml-12 font-semibold text-center">
{i18n.t('text.test_ab_profile_screen')}              </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/perfil2.png?raw=true?auto=format&fit=crop&q=80"
                  alt="Testes A/B"
                  className="mb-12"
                />
              </div>
            </div>

            {/* Solução */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">{i18n.t('titles.solution')}</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
{i18n.t('text.solution_profile_screen')}              </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-tela-perfil.jpg?raw=true?auto=format&fit=crop&q=80"
                  alt="Solução final"
                  className="mb-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project3;