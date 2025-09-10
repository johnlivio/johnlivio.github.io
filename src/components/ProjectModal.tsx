import { useState } from 'react';
import { i18n } from '../translation/i18n';
import OptimizedImage from './OptimizedImage';

interface ProjectModalProps {
  activeProject: string | null;
  onClose: () => void;
}

export default function ProjectModal({ activeProject, onClose }: ProjectModalProps) {
  if (!activeProject) return null;

  return (
    <div className="fixed inset-0 bg-white/90 z-50 flex items-center justify-center p-4">
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
            <h3 className="text-2xl font-bold mb-8 text-center retro-text-accent">{i18n.t('titles.broadcast')}</h3>
            <div className="relative flex justify-center pb-6">
              <OptimizedImage
                src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-listas.jpg?raw=true"
                alt="Professional workspace"
                className="w-full max-w-4xl object-cover object-center h-[400px] mx-auto pixelated"
                loading="lazy"
              />
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center retro-text-accent">{i18n.t('titles.context')}</h2>
              <p className="retro-text mt-8 mb-12 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.context_custom_broadcast')}
              </p>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center retro-text-accent">{i18n.t('titles.exploration')}</h2>
              <p className="retro-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.exploration_custom_broadcast')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-listas.png?raw=true"
                  alt="Diagrama de listas"
                  className="w-[664.5px] h-[100px] mb-12 pixelated"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center retro-text-accent">{i18n.t('titles.flow')}</h2>
              <p className="retro-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.diagram_lists_custom_broadcast')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-listas2.png?raw=true"
                  alt="Fluxo de disparos"
                  className="w-[1046.4px] h-[576.6px] mb-12 pixelated"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center retro-text-accent">{i18n.t('titles.brainstorm')}</h2>
              <p className="retro-text mt-8 mb-12 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.brainstorm_custom_broadcast')}
              </p>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center retro-text-accent">{i18n.t('titles.new_flow')}</h2>
              <p className="retro-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.new_flow_custom_broadcast')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-listas3.png?raw=true"
                  alt="Novo fluxo"
                  className="w-[1046.4px] h-[576.6px] mb-12 pixelated"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center retro-text-accent">{i18n.t('titles.solution')}</h2>
              <p className="retro-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.solution_custom_broadcast')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/solucao.png?raw=true"
                  alt="Solução"
                  className="w-[1046.4px] h-[576.6px] mb-12 pixelated"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}

        {activeProject === 'project2' && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center retro-text-accent">{i18n.t('titles.profile_screen')}</h3>
            <div className="relative flex justify-center pb-6">
              <OptimizedImage
                src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-perfil.jpg?raw=true"
                alt="Professional workspace"
                className="w-full max-w-4xl object-cover object-center h-[400px] mx-auto pixelated"
                loading="lazy"
              />
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center retro-text-accent">{i18n.t('titles.context')}</h2>
              <p className="retro-text mt-8 mb-12 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.context_profile_screen')}
              </p>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center retro-text-accent">{i18n.t('titles.exploration')}</h2>
              <p className="retro-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.exploration_profile_screen')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-perfil.png?raw=true"
                  alt="Diagrama de perfil"
                  className="w-[664.5px] h-[100px] mb-12 pixelated"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center retro-text-accent">{i18n.t('titles.uses')}</h2>
              <p className="retro-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.diagram_profile_screen')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/perfil.png?raw=true"
                  alt="Tela de perfil"
                  className="mb-12 pixelated"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center retro-text-accent">{i18n.t('titles.ab_testing')}</h2>
              <p className="retro-text mt-8 mb-12 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.test_ab_profile_screen')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/perfil2.png?raw=true"
                  alt="Testes A/B"
                  className="mb-12 pixelated"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="items-center">
              <h2 className="text-xl font-bold m-2 text-center retro-text-accent">{i18n.t('titles.solution')}</h2>
              <p className="retro-text mt-8 mb-8 mr-12 ml-12 font-semibold text-center text-sm">
                {i18n.t('text.solution_profile_screen')}
              </p>
              <div className="relative flex justify-center p-6">
                <OptimizedImage
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-tela-perfil.jpg?raw=true"
                  alt="Solução final"
                  className="mb-12 pixelated"
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
