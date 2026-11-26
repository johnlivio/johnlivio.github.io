import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';

interface CaseSantanderProps {
  openImageModal: (src: string, alt: string) => void;
}

const CaseSantander = ({ openImageModal }: CaseSantanderProps) => {
  const { t } = useTranslation();

  const sectionTitle = 'text-xl font-semibold text-gray-800 mb-4';
  const paragraph = 'text-base text-gray-600 leading-relaxed';
  const separator = (
    <div className="flex justify-center my-8">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
  );

  const figure = (src: string, captionKey: string) => (
    <>
      <div className="overflow-hidden cursor-pointer rounded-lg border border-gray-200" onClick={() => openImageModal(src, t(captionKey))}>
        <OptimizedImage
          src={src}
          alt={t(captionKey)}
          className="w-full h-auto wide-image-hover"
          loading="lazy"
          style={{ imageRendering: 'auto' }}
        />
      </div>
      <p className="text-sm text-gray-500 text-left mt-3 italic">{t(captionKey)}</p>
    </>
  );

  return (
    <div className="space-y-8">
      {/* Contexto */}
      <div>
        <h5 className={sectionTitle}>{t('text.sant_context_title')}</h5>
        <p className={`${paragraph} mb-4`}>{t('text.sant_context_p1')}</p>
        <p className={paragraph}>{t('text.sant_context_p2')}</p>
      </div>

      {separator}

      {/* Meu papel */}
      <div>
        <h5 className={sectionTitle}>{t('text.sant_role_title')}</h5>
        <p className={paragraph}>{t('text.sant_role_p1')}</p>
      </div>

      {separator}

      {/* Automação: antes/depois */}
      <div>
        <h5 className={sectionTitle}>{t('text.sant_auto_title')}</h5>
        <p className={`${paragraph} mb-6`}>{t('text.sant_auto_p1')}</p>
        {figure('/imagens/ranking-antes-depois.webp', 'text.sant_beforeafter_caption')}
      </div>

      {separator}

      {/* Engenharia de dados */}
      <div>
        <h5 className={sectionTitle}>{t('text.sant_eng_title')}</h5>
        <p className={`${paragraph} mb-4`}>{t('text.sant_eng_p1')}</p>
        <p className={`${paragraph} mb-6`}>{t('text.sant_eng_p2')}</p>
        {figure('/imagens/ranking-arquitetura.webp', 'text.sant_arch_caption')}
        <div className="mt-6">
          {figure('/imagens/ranking-star-schema.webp', 'text.sant_schema_caption')}
        </div>
        <p className={`${paragraph} mt-6`}>{t('text.sant_eng_p3')}</p>
      </div>

      {separator}

      {/* Design de informação */}
      <div>
        <h5 className={sectionTitle}>{t('text.sant_design_title')}</h5>
        <p className={`${paragraph} mb-6`}>{t('text.sant_design_p1')}</p>
        {figure('/imagens/ranking-dashboard-mockup.webp', 'text.sant_mockup_caption')}
      </div>

      {separator}

      {/* Workflow com IA */}
      <div>
        <h5 className={sectionTitle}>{t('text.sant_ai_title')}</h5>
        <p className={`${paragraph} mb-4`}>{t('text.sant_ai_p1')}</p>
        <p className={paragraph}>{t('text.sant_ai_p2')}</p>
      </div>

      {separator}

      {/* Impacto e limites */}
      <div>
        <h5 className={sectionTitle}>{t('text.sant_impact_title')}</h5>
        <p className={`${paragraph} mb-4`}>{t('text.sant_impact_p1')}</p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
          <p className="text-sm text-gray-500 leading-relaxed italic">{t('text.sant_impact_p2')}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseSantander;
