import { useEffect } from 'react';
import { i18n } from '../translation/i18n';
import OptimizedImage from './OptimizedImage';

interface ProjectModalProps {
  activeProject: string | null;
  onClose: () => void;
}

export default function ProjectModal({ activeProject, onClose }: ProjectModalProps) {
  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (activeProject) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevenir scroll do body quando modal está aberto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeProject, onClose]);

  // Fechar modal clicando fora
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!activeProject) return null;

  return (
    <div 
      className="fixed inset-0 bg-white/90 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white border-2 max-w-4xl max-h-[90vh] overflow-y-auto p-6 relative" style={{borderColor: '#1c1c1c'}}>
        <button
          onClick={onClose}
          className="close-button"
          aria-label="Fechar modal"
        >
          ×
        </button>
        
        {activeProject === 'project1' && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center glass-text-accent">{i18n.t('titles.shipping_calculator')}</h3>
            <div className="relative flex justify-center pb-6">
              <OptimizedImage
                src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/banner-frete-calc.jpg?raw=true"
                alt="Calculadora de Frete"
                className="w-full max-w-4xl object-cover object-center h-[400px] mx-auto"
                style={{ imageRendering: 'auto' }}
                loading="lazy"
              />
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center glass-text-accent">{i18n.t('titles.context')}</h2>
              <p className="glass-text mt-8 mb-12 mr-12 ml-12 font-semibold text-center text-sm whitespace-pre-line">
                {i18n.t('text.context_shipping_calculator')}
              </p>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center glass-text-accent">{i18n.t('titles.exploration')}</h2>
              <p className="glass-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm whitespace-pre-line">
                {i18n.t('text.exploration_shipping_calculator')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/wireframe-frete-calc.png?raw=true"
                  alt="Wireframes da Calculadora de Frete"
                  className="w-full max-w-4xl mb-12"
                  style={{ imageRendering: 'auto' }}
                  loading="lazy"
                />
              </div>
            </div>


            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center glass-text-accent">{i18n.t('titles.solution')}</h2>
              <p className="glass-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm whitespace-pre-line">
                {i18n.t('text.solution_shipping_calculator')}
              </p>
              <div className="relative flex justify-center p-6">
                <div className="flex flex-col gap-6 mb-12">
                  <OptimizedImage
                    src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockcup-frete-calc-mob.jpg?raw=true"
                    alt="Mockup Mobile - Calculadora de Frete"
                    className="w-full max-w-lg mx-auto"
                    style={{ imageRendering: 'auto' }}
                    loading="lazy"
                  />
                  <OptimizedImage
                    src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockcup-frete-calc-desk.jpg?raw=true"
                    alt="Mockup Desktop - Calculadora de Frete"
                    className="w-full max-w-2xl mx-auto"
                    style={{ imageRendering: 'auto' }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center glass-text-accent">{i18n.t('titles.impact')}</h2>
              <p className="glass-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm whitespace-pre-line">
                {i18n.t('text.impact_shipping_calculator')}
              </p>
            </div>
          </div>
        )}

        {activeProject === 'project2' && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center glass-text-accent">{i18n.t('titles.broadcast')}</h3>
            <div className="relative flex justify-center pb-6">
              <OptimizedImage
                src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-listas.jpg?raw=true"
                alt="Disparo no WhatsApp"
                className="w-full max-w-4xl object-cover object-center h-[400px] mx-auto"
                style={{ imageRendering: 'auto' }}
                loading="lazy"
              />
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center glass-text-accent">{i18n.t('titles.context')}</h2>
              <p className="glass-text mt-8 mb-12 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.context_custom_broadcast')}
              </p>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center glass-text-accent">{i18n.t('titles.exploration')}</h2>
              <p className="glass-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.exploration_custom_broadcast')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-listas.png?raw=true"
                  alt="Diagrama de listas"
                  className="w-[664.5px] h-[100px] mb-12"
                  style={{ imageRendering: 'auto' }}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center glass-text-accent">{i18n.t('titles.flow')}</h2>
              <p className="glass-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.diagram_lists_custom_broadcast')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-listas2.png?raw=true"
                  alt="Fluxo de disparos"
                  className="mb-12"
                  style={{ imageRendering: 'auto' }}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center glass-text-accent">{i18n.t('titles.brainstorm')}</h2>
              <p className="glass-text mt-8 mb-12 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.brainstorm_custom_broadcast')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-listas3.png?raw=true"
                  alt="Brainstorm"
                  className="mb-12"
                  style={{ imageRendering: 'auto' }}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center glass-text-accent">{i18n.t('titles.solution')}</h2>
              <p className="glass-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.solution_custom_broadcast')}
              </p>
              <div className="relative flex justify-center p-6">
                <div className="flex flex-col gap-6 mb-12">
                  <OptimizedImage
                    src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/solucao.png?raw=true"
                    alt="Solução final"
                    className=""
                    loading="lazy"
                    style={{ imageRendering: 'auto' }}
                  />
                  <OptimizedImage
                    src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/solucao2.png?raw=true"
                    alt="Solução final - parte 2"
                    className=""
                    loading="lazy"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeProject === 'project3' && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center glass-text-accent">{i18n.t('titles.profile_screen')}</h3>
            <div className="relative flex justify-center pb-6">
              <OptimizedImage
                src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-perfil.png?raw=true"
                alt="UX Design and Product Designer"
                className="w-full max-w-4xl object-cover object-center h-[400px] mx-auto"
                style={{ imageRendering: 'auto' }}
                loading="lazy"
              />
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center glass-text-accent">{i18n.t('titles.context')}</h2>
              <p className="glass-text mt-8 mb-12 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.context_profile_screen')}
              </p>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center glass-text-accent">{i18n.t('titles.exploration')}</h2>
              <p className="glass-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.exploration_profile_screen')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-perfil.png?raw=true"
                  alt="Diagrama de perfil"
                  className="w-[664.5px] h-[100px] mb-12"
                  style={{ imageRendering: 'auto' }}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center glass-text-accent">{i18n.t('titles.uses')}</h2>
              <p className="glass-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.diagram_profile_screen')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/perfil.png?raw=true"
                  alt="Tela de perfil"
                  className="mb-12"
                  style={{ imageRendering: 'auto' }}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center glass-text-accent">{i18n.t('titles.ab_testing')}</h2>
              <p className="glass-text mt-8 mb-12 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.test_ab_profile_screen')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/perfil2.png?raw=true"
                  alt="Testes A/B"
                  className="mb-12"
                  style={{ imageRendering: 'auto' }}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center glass-text-accent">{i18n.t('titles.solution')}</h2>
              <p className="glass-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.solution_profile_screen')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-tela-perfil.jpg?raw=true"
                  alt="Solução final"
                  className="mb-12"
                  style={{ imageRendering: 'auto' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
