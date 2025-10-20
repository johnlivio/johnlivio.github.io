import { useState } from 'react';
import { i18n } from '../translation/i18n';
import OptimizedImage from './OptimizedImage';
import { ChevronDown, ChevronUp, X, Target, Zap } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  tags: string[];
  summary: string;
  image: string;
  overview: {
    challenge: string;
    solution: string;
    impact: string;
  };
}

const SelectedWork = () => {
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 'zax-app',
      title: i18n.t('text.zax_case_title'),
      tags: ['UX/UI Design', 'E-commerce', 'Mobile App'],
      summary: i18n.t('text.zax_case_summary'),
      image: '/imagens/banner-frete-calc.jpg',
      overview: {
        challenge: 'ZAX App é um marketplace de moda que conecta mais de mil fornecedores (principalmente do Brás, Bom Retiro) a revendedores e lojistas em todo o país. O desafio era digitalizar e facilitar vendas no atacado e varejo de moda no Brasil.',
        solution: 'Desenvolvimento de duas soluções estratégicas: Calculadora de Frete para transparência no checkout e Redesign da Tela de Perfil para melhorar usabilidade e acesso a funcionalidades críticas.',
        impact: 'Calculadora de Frete: +2.5% conversão. Redesign Perfil: +50% solicitações de crédito. Ambas soluções melhoraram significativamente a experiência do usuário e métricas de negócio.'
      }
    },
    {
      id: 'zax360',
      title: i18n.t('text.zax360_case_title'),
      tags: ['UX/UI Design', 'SaaS', 'Dashboard'],
      summary: i18n.t('text.zax360_case_summary'),
      image: '/imagens/zax360-home-banner.png',
      overview: {
        challenge: 'O setor de moda e têxtil exige comunicação rápida, precisa e mensurável. Fornecedores e fabricantes enfrentavam dificuldade em segmentar clientes por valor de compra (RFV) e medir ROI das campanhas de WhatsApp de forma ineficaz.',
        solution: 'Criação do Dashboard ZAX 360, um painel de controle intuitivo que centraliza métricas financeiras, performance de vendas e saúde da base de contatos, facilitando segmentação precisa e ação imediata via WhatsApp.',
        impact: 'O Dashboard ZAX 360 contribui com 30% da receita da empresa em apenas um ano, estabelecendo-se como central de inteligência acionável para otimização de vendas B2B e B2C.'
      }
    },
    {
      id: 'study-cases',
      title: i18n.t('text.study_cases_title'),
      tags: ['UX/UI Design', 'Estudo', 'Design System'],
      summary: i18n.t('text.study_cases_summary'),
      image: '/imagens/estudos-casos.jpg',
      overview: {
        challenge: i18n.t('text.study_cases_description'),
        solution: i18n.t('text.study_cases_summary'),
        impact: 'Demonstração de evolução contínua em Product Design através de estudos de caso e explorações criativas.'
      }
    }
  ];

  const toggleCase = (caseId: string) => {
    const isCurrentlyExpanded = expandedCase === caseId;
    setExpandedCase(isCurrentlyExpanded ? null : caseId);
    
    // Se está fechando o case, fazer scroll para o case
    if (isCurrentlyExpanded) {
      setTimeout(() => {
        const caseElement = document.getElementById(`case-${caseId}`);
        if (caseElement) {
          caseElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 100); // Pequeno delay para permitir que a animação de fechamento comece
    }
  };

  const openImageModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeImageModal = () => {
    setModalImage(null);
  };

  return (
    <section id="selected-work" className="py-16 bg-white" aria-label="Selected Work">
      <div className="container mx-auto px-4 wide-layout">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold glass-text-accent mb-4 fade-in">{i18n.t('titles.selected_work')}</h2>
          <p className="text-lg glass-text-secondary max-w-2xl mx-auto fade-in fade-in-delay-1">
            {i18n.t('text.selected_work_description')}
          </p>
        </div>

        <div className="space-y-20">
          {caseStudies.map((caseStudy, index) => (
            <div key={caseStudy.id} id={`case-${caseStudy.id}`} className="fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Main Case Card */}
              <div className="glass-card glass-project-card">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Image Section - Dominante */}
                  <div className="relative">
                    <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal(caseStudy.image, caseStudy.title)}>
                      <OptimizedImage
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-[500px] object-cover wide-image-hover"
                        loading="lazy"
                        style={{ imageRendering: 'auto' }}
                      />
                    </div>
                  </div>

                  {/* Content Section - Compacta */}
                  <div className="space-y-4">
                    <div>
                      {caseStudy.id === 'zax360' ? (
                        <div className="mb-3">
                          <div className="mb-2">
                            <img 
                              src="/imagens/zax360-logo.png" 
                              alt="ZAX 360 Logo" 
                              className="h-12 w-auto object-contain"
                              style={{ imageRendering: 'auto' }}
                            />
                          </div>
                          <h3 className="text-2xl font-bold glass-text-accent">{i18n.t('text.commercial_intelligence')}</h3>
                        </div>
                      ) : caseStudy.id === 'zax-app' ? (
                        <div className="mb-3">
                          <div className="mb-2">
                            <img 
                              src="/imagens/zax-logo.png" 
                              alt="ZAX Logo" 
                              className="h-12 w-auto object-contain"
                              style={{ imageRendering: 'auto' }}
                            />
                          </div>
                          <h3 className="text-2xl font-bold glass-text-accent">Fashion Marketplace</h3>
                        </div>
                      ) : (
                        <h3 className="text-2xl font-bold glass-text-accent mb-3">{caseStudy.title}</h3>
                      )}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {caseStudy.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium glass-text bg-white/30 backdrop-blur-sm border border-white/40 rounded-full"
                            style={{ borderColor: '#1c1c1c' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="glass-text-secondary text-sm leading-relaxed mb-4">
                      {caseStudy.summary}
                    </p>

                    <button
                      onClick={() => toggleCase(caseStudy.id)}
                      className="glass-button flex items-center gap-2 text-sm px-4 py-2"
                      aria-label={`${expandedCase === caseStudy.id ? 'Fechar' : 'Ver'} detalhes do projeto ${caseStudy.title}`}
                    >
                      {expandedCase === caseStudy.id ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          {i18n.t('text.close_details')}
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          {i18n.t('text.view_details')}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCase === caseStudy.id && (
                <div className="mt-8 glass-card expanded-content">
                  <div className="space-y-12">
                    {/* Visão Geral */}
                    <div className="mb-16">
                      <h4 className="text-2xl font-bold glass-text-accent mb-6 flex items-center gap-3">
                        <Target className="w-6 h-6" />
                        {caseStudy.id === 'zax-app' ? i18n.t('text.zax_app_overview') : caseStudy.id === 'zax360' ? i18n.t('text.zax360_overview') : null}
                      </h4>
                      <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg mb-6 border border-white/30">
                        {caseStudy.id === 'zax-app' ? (
                          <>
                            <p className="text-base glass-text-secondary leading-relaxed mb-4">
                              {i18n.t('text.zax_overview')}
                            </p>
                            <p className="text-base glass-text-secondary leading-relaxed">
                              {i18n.t('text.zax_focus')}
                            </p>
                          </>
                        ) : caseStudy.id === 'zax360' ? (
                          <>
                            <p className="text-base glass-text-secondary leading-relaxed mb-4">
                              {i18n.t('text.zax360_case_summary')}
                            </p>
                            <p className="text-base glass-text-secondary leading-relaxed mb-4">
                              {i18n.t('text.zax360_platform_description')}
                            </p>
                            <p className="text-base glass-text-secondary leading-relaxed">
                              {i18n.t('text.learn_more_text')} <a href="https://venda.zaxapp.com.br/360" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline transition-colors">https://venda.zaxapp.com.br/360</a>
                            </p>
                          </>
                        ) : null}
                      </div>
                      
                      
                      {/* App Store Links - Apenas para ZAX App */}
                      {caseStudy.id === 'zax-app' && (
                        <div className="flex justify-center gap-4 mb-8">
                          <a 
                            href="https://apps.apple.com/br/app/zax-direto-da-f%C3%A1brica/id1464778068" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                            aria-label="Baixar ZAX App na App Store (abre em nova aba)"
                          >
                            <img 
                              src="/imagens/apple.png" 
                              alt={i18n.t('text.app_store')} 
                              className="h-12 w-auto object-contain"
                              style={{ imageRendering: 'auto' }}
                            />
                          </a>
                          <a 
                            href="https://play.google.com/store/apps/details?id=br.com.zaxapp.app&hl=pt_BR" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                            aria-label="Baixar ZAX App na Google Play Store (abre em nova aba)"
                          >
                            <img 
                              src="/imagens/android.png" 
                              alt={i18n.t('text.play_store')} 
                              className="h-12 w-auto object-contain"
                              style={{ imageRendering: 'auto' }}
                            />
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Separador Visual */}
                    <div className="flex justify-center my-16">
                      <div className="glass-separator"></div>
                    </div>

                    {/* Conteúdo específico para cada case */}
                    {caseStudy.id === 'zax-app' ? (
                      <div>
                        {/* Calculadora de Frete */}
                        <div className="mb-8">
                          <div className="mb-6">
                            <div className="availability-pill mb-6">
                              {i18n.t('text.case_real')}
                            </div>
                            <h4 className="text-2xl font-bold glass-text-accent flex items-center gap-3">
                              <Target className="w-6 h-6" />
                              {i18n.t('text.shipping_calculator_title')}
                            </h4>
                          </div>
                          
                          <div className="space-y-8">
                            <div>
                              <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.shipping_opportunity_title')}</h5>
                              <p className="text-base glass-text-secondary leading-relaxed">
                                {i18n.t('text.shipping_opportunity_text')}
                              </p>
                            </div>

                            <div className="flex justify-center my-8">
                              <div className="glass-separator"></div>
                            </div>

                            <div>
                              <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.problem_opportunity_title')}</h5>
                              <p className="text-base glass-text-secondary leading-relaxed">
                                {i18n.t('text.problem_opportunity_text')}
                              </p>
                            </div>

                            <div className="flex justify-center my-8">
                              <div className="glass-separator"></div>
                            </div>

                            <div>
                              <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.benchmarking_title')}</h5>
                              <p className="text-base glass-text-secondary leading-relaxed">
                                {i18n.t('text.benchmarking_text')}
                              </p>
                            </div>

                            {/* Benchmark Image */}
                            <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/benchmark-ship-calc.png", i18n.t('text.benchmark_reference'))}>
                              <OptimizedImage
                                src="/imagens/benchmark-ship-calc.png"
                                alt={i18n.t('text.benchmark_reference')}
                                className="w-full h-auto wide-image-hover"
                                loading="lazy"
                                style={{ imageRendering: 'auto' }}
                              />
                            </div>
                            <p className="text-sm glass-text-secondary text-left mt-3 italic">
                              {i18n.t('text.benchmark_caption')}
                            </p>

                            {/* Wireframe Image */}
                            <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/wireframe-frete-calc.png", i18n.t('text.wireframe_shipping'))}>
                              <OptimizedImage
                                src="/imagens/wireframe-frete-calc.png"
                                alt={i18n.t('text.wireframe_shipping')}
                                className="w-full h-auto wide-image-hover"
                                loading="lazy"
                                style={{ imageRendering: 'auto' }}
                              />
                            </div>
                            <p className="text-sm glass-text-secondary text-left mt-3 italic">
                              {i18n.t('text.wireframe_caption')}
                            </p>

                            {/* Separador */}
                            <div className="flex justify-center my-8">
                              <div className="glass-separator"></div>
                            </div>

                            <div>
                              <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.design_implementation_title')}</h5>
                              <p className="text-base glass-text-secondary leading-relaxed">
                                {i18n.t('text.design_implementation_text')}
                              </p>
                            </div>

                            {/* Imagens Recomendadas - Before/After */}
                            <div className="space-y-6">
                              {/* Homepage - Full Width */}
                              <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/before-after-homepage.png", i18n.t('text.before_after_homepage'))}>
                                <OptimizedImage
                                  src="/imagens/before-after-homepage.png"
                                  alt={i18n.t('text.before_after_homepage')}
                                  className="w-full h-auto wide-image-hover"
                                  loading="lazy"
                                  style={{ imageRendering: 'auto' }}
                                />
                              </div>
                              <p className="text-sm glass-text-secondary text-left mt-3 italic">
                                {i18n.t('text.homepage_caption')}
                              </p>

                              {/* Separador */}
                              <div className="flex items-center justify-center py-8">
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                              </div>

                              {/* Modal e PDP - Side by Side */}
                              <div className="grid md:grid-cols-2 gap-6">
                                <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/before-after-modal.png", i18n.t('text.before_after_modal'))}>
                                  <OptimizedImage
                                    src="/imagens/before-after-modal.png"
                                    alt={i18n.t('text.before_after_modal')}
                                    className="w-full h-auto wide-image-hover"
                                    loading="lazy"
                                    style={{ imageRendering: 'auto' }}
                                  />
                                </div>
                                <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/before-after-pdp.png", "Before/After - PDP")}>
                                  <OptimizedImage
                                    src="/imagens/before-after-pdp.png"
                                    alt="Before/After - PDP"
                                    className="w-full h-auto wide-image-hover"
                                    loading="lazy"
                                    style={{ imageRendering: 'auto' }}
                                  />
                                </div>
                              </div>
                              <p className="text-sm glass-text-secondary text-left mt-3 italic">
                                {i18n.t('text.modal_pdp_caption')}
                              </p>

                            </div>

                            {/* Separador */}
                            <div className="flex justify-center my-8">
                              <div className="glass-separator"></div>
                            </div>

                            <div>
                              <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.impact_title')}</h5>
                              <p className="text-base glass-text-secondary leading-relaxed">
                                {i18n.t('text.impact_text')}
                              </p>
                            </div>

                            {/* Final Images, Resultados e Key Takeaways - Lado a Lado */}
                            <div className="grid lg:grid-cols-2 gap-8">
                              {/* Mockup Mobile */}
                              <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/mockcup-frete-calc-mob.jpg", i18n.t('text.mockup_mobile_shipping'))}>
                                <OptimizedImage
                                  src="/imagens/mockcup-frete-calc-mob.jpg"
                                  alt={i18n.t('text.mockup_mobile_shipping')}
                                  className="w-full h-auto wide-image-hover"
                                  loading="lazy"
                                  style={{ imageRendering: 'auto' }}
                                />
                              </div>
                              {/* Resultados e Key Takeaways */}
                              <div className="space-y-6">
                                {/* Resultados */}
                                <div>
                                  <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.results')}</h5>
                                  <div className="grid md:grid-cols-3 gap-4">
                                    {/* Métrica 1 */}
                                    <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm p-6 rounded-xl border border-emerald-400/30 text-center hover:scale-105 transition-transform duration-300">
                                      <div className="text-4xl font-bold text-emerald-400 mb-3">📈 +2.5%</div>
                                      <h6 className="font-semibold glass-text mb-2 text-lg">{i18n.t('text.conversion_rate')}</h6>
                                    </div>
                                    
                                    {/* Métrica 2 */}
                                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30 text-center hover:scale-105 transition-transform duration-300">
                                      <div className="text-4xl font-bold text-blue-400 mb-3">✅ 100%</div>
                                      <h6 className="font-semibold glass-text mb-2 text-lg">{i18n.t('text.shipping_transparency')}</h6>
                                    </div>
                                    
                                    {/* Métrica 3 */}
                                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-xl border border-purple-400/30 text-center hover:scale-105 transition-transform duration-300">
                                      <div className="text-4xl font-bold text-purple-400 mb-3">🚀 ↑</div>
                                      <h6 className="font-semibold glass-text mb-2 text-lg">{i18n.t('text.user_confidence')}</h6>
                                    </div>
                                  </div>
                                </div>
                                {/* Key Takeaways - Case 1 */}
                                <div>
                                  <h5 className="text-xl font-semibold glass-text mb-4 flex items-center gap-3">
                                    <Zap className="w-5 h-5" />
                                    {i18n.t('text.key_takeaways')}
                                  </h5>
                                  <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm p-6 rounded-xl border border-amber-400/20">
                                    <p className="text-base glass-text-secondary leading-relaxed">
                                      {i18n.t('text.key_takeaways_shipping')}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Imagem Final Desktop - Separador Natural */}
                            <div className="overflow-hidden mt-12 cursor-pointer" onClick={() => openImageModal("/imagens/mockcup-frete-calc-desk.jpg", i18n.t('text.mockup_desktop_shipping'))}>
                              <OptimizedImage
                                src="/imagens/mockcup-frete-calc-desk.jpg"
                                alt={i18n.t('text.mockup_desktop_shipping')}
                                className="w-full h-auto wide-image-hover"
                                loading="lazy"
                                style={{ imageRendering: 'auto' }}
                              />
                            </div>
                            <p className="text-sm glass-text-secondary text-left mt-3 italic">
                              {i18n.t('text.desktop_product_page_caption')}
                            </p>
                          </div>
                        </div>

                        {/* Separador Visual entre Cases */}
                        <div className="flex justify-center my-12">
                          <div className="glass-separator"></div>
                        </div>

                        {/* Redesign da Tela de Perfil */}
                        <div>
                          <div className="mb-6">
                            <div className="availability-pill mb-6">
                              {i18n.t('text.case_real')}
                            </div>
                            <h4 className="text-2xl font-bold glass-text-accent flex items-center gap-3">
                              <Target className="w-6 h-6" />
                              {i18n.t('text.profile_redesign_title_section')}
                            </h4>
                          </div>
                          
                          <div className="space-y-8">
                            <div>
                              <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.profile_redesign_title')}</h5>
                              <p className="text-base glass-text-secondary leading-relaxed">
                                {i18n.t('text.profile_redesign_text')}
                              </p>
                            </div>

                            <div className="flex justify-center my-8">
                              <div className="glass-separator"></div>
                            </div>

                            <div>
                              <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.context_title')}</h5>
                              <p className="text-base glass-text-secondary leading-relaxed">
                                {i18n.t('text.context_text')}
                              </p>
                            </div>

                            {/* Imagem do Perfil Original */}
                            <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/perfil.png", i18n.t('text.original_profile'))}>
                              <OptimizedImage
                                src="/imagens/perfil.png"
                                alt={i18n.t('text.original_profile')}
                                className="w-full h-auto wide-image-hover"
                                loading="lazy"
                                style={{ imageRendering: 'auto' }}
                              />
                            </div>
                            <p className="text-sm glass-text-secondary text-left mt-3 italic">
                              {i18n.t('text.profile_old_caption')}
                            </p>

                            {/* Separador */}
                            <div className="flex justify-center my-8">
                              <div className="glass-separator"></div>
                            </div>

                            <div>
                              <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.research_evaluation_title')}</h5>
                              <p className="text-base glass-text-secondary leading-relaxed">
                                {i18n.t('text.research_evaluation_text')}
                              </p>
                            </div>

                            {/* Diagrama do Perfil */}
                            <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/diagrama-perfil.png", i18n.t('text.profile_analysis_diagram'))}>
                              <OptimizedImage
                                src="/imagens/diagrama-perfil.png"
                                alt={i18n.t('text.profile_analysis_diagram')}
                                className="w-full h-auto wide-image-hover"
                                loading="lazy"
                                style={{ imageRendering: 'auto' }}
                              />
                            </div>

                            {/* Separador */}
                            <div className="flex justify-center my-8">
                              <div className="glass-separator"></div>
                            </div>

                            <div>
                              <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.solution_title')}</h5>
                              <p className="text-base glass-text-secondary leading-relaxed">
                                {i18n.t('text.solution_text')}
                              </p>
                            </div>

                            {/* Imagem da Solução */}
                            <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/perfil2.png", i18n.t('text.solution_new_profile'))}>
                              <OptimizedImage
                                src="/imagens/perfil2.png"
                                alt={i18n.t('text.solution_new_profile')}
                                className="w-full h-auto wide-image-hover"
                                loading="lazy"
                                style={{ imageRendering: 'auto' }}
                              />
                            </div>
                            <p className="text-sm glass-text-secondary text-left mt-3 italic">
                              {i18n.t('text.profile_redesign_caption')}
                            </p>

                            {/* Separador */}
                            <div className="flex justify-center my-8">
                              <div className="glass-separator"></div>
                            </div>

                            {/* Melhorias Chave, Resultados e Key Takeaways - Lado a Lado */}
                            <div className="grid lg:grid-cols-2 gap-8">
                              {/* Imagem Final */}
                              <div className="flex flex-col">
                                <div className="mb-4">
                                  <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.key_improvements_title')}</h5>
                                  <p className="text-base glass-text-secondary leading-relaxed">
                                    {i18n.t('text.key_improvements_text')}
                                  </p>
                                </div>
                                <div className="flex-1 overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/mockup-tela-perfil.jpg", i18n.t('text.final_solution_profile'))}>
                                  <OptimizedImage
                                    src="/imagens/mockup-tela-perfil.jpg"
                                    alt={i18n.t('text.final_solution_profile')}
                                    className="w-full h-full object-cover wide-image-hover"
                                    loading="lazy"
                                    style={{ imageRendering: 'auto' }}
                                  />
                                </div>
                              </div>
                              {/* Resultados e Key Takeaways */}
                              <div className="space-y-6">
                                {/* Resultados */}
                                <div>
                                  <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.results')}</h5>
                                  <div className="grid md:grid-cols-3 gap-4">
                                    {/* Métrica 1 */}
                                    <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm p-6 rounded-xl border border-green-400/30 text-center hover:scale-105 transition-transform duration-300">
                                      <div className="text-4xl font-bold text-green-400 mb-3">💳 +50%</div>
                                      <h6 className="font-semibold glass-text mb-2 text-lg">{i18n.t('text.credit_requests')}</h6>
                                    </div>
                                    
                                    {/* Métrica 2 */}
                                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30 text-center hover:scale-105 transition-transform duration-300">
                                      <div className="text-4xl font-bold text-blue-400 mb-3">📚 ↑</div>
                                      <h6 className="font-semibold glass-text mb-2 text-lg">{i18n.t('text.resource_engagement')}</h6>
                                    </div>
                                    
                                    {/* Métrica 3 */}
                                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-xl border border-purple-400/30 text-center hover:scale-105 transition-transform duration-300">
                                      <div className="text-4xl font-bold text-purple-400 mb-3">😊 ↓</div>
                                      <h6 className="font-semibold glass-text mb-2 text-lg">{i18n.t('text.negative_feedback')}</h6>
                                    </div>
                                  </div>
                                </div>
                                {/* Key Takeaways - Case 2 */}
                                <div>
                                  <h5 className="text-xl font-semibold glass-text mb-4 flex items-center gap-3">
                                    <Zap className="w-5 h-5" />
                                    {i18n.t('text.key_takeaways')}
                                  </h5>
                                  <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm p-6 rounded-xl border border-amber-400/20">
                                    <p className="text-base glass-text-secondary leading-relaxed">
                                      {i18n.t('text.key_takeaways_profile')}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : caseStudy.id === 'zax360' ? (
                      <div>
                        {/* Introdução */}
                        <div className="mb-8">
                          <div className="mb-6">
                            <div className="availability-pill mb-6">
                              {i18n.t('text.case_real')}
                            </div>
                            <h4 className="text-2xl font-bold glass-text-accent flex items-center gap-3">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                              </svg>
                              {i18n.t('text.transforming_data_title')}
                            </h4>
                          </div>
                          <p className="text-base glass-text-secondary leading-relaxed mb-4">
                            {i18n.t('text.zax360_intro_text')}
                          </p>
                          <p className="text-base glass-text-secondary leading-relaxed mb-4">
                            <strong>{i18n.t('text.the_challenge')}</strong> {i18n.t('text.zax360_problem_text')}
                          </p>
                          <p className="text-base glass-text-secondary leading-relaxed">
                            <strong>{i18n.t('text.project_goal')}</strong> {i18n.t('text.zax360_objective_text')}
                          </p>
                        </div>

                        {/* Imagem do Dashboard */}
                        <div className="mb-8">
                          <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/zax360-homepage.png", "Dashboard ZAX 360")}>
                            <OptimizedImage
                              src="/imagens/zax360-homepage.png"
                              alt="Dashboard ZAX 360"
                              className="w-full h-auto wide-image-hover"
                              loading="lazy"
                              style={{ imageRendering: 'auto' }}
                            />
                          </div>
                          <p className="text-sm glass-text-secondary text-left mt-3 italic">
                            {i18n.t('text.zax360_homepage_caption')}
                          </p>
                        </div>

                        {/* Separador */}
                        <div className="flex justify-center my-8">
                          <div className="glass-separator"></div>
                        </div>

                        {/* Contexto e Desafios */}
                        <div className="mb-8">
                          <h4 className="text-2xl font-bold glass-text-accent mb-6">{i18n.t('text.context_challenges')}</h4>
                          <p className="text-base glass-text-secondary leading-relaxed mb-4">
                            {i18n.t('text.zax360_context_text')}
                          </p>
                          
                          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg border border-white/30 mb-6">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-semibold glass-text mb-2">{i18n.t('text.communication_challenge')}</h5>
                                <p className="text-sm glass-text-secondary">{i18n.t('text.communication_challenge_text')}</p>
                              </div>
                              <div>
                                <h5 className="font-semibold glass-text mb-2">{i18n.t('text.performance_challenge')}</h5>
                                <p className="text-sm glass-text-secondary">{i18n.t('text.performance_challenge_text')}</p>
                              </div>
                              <div>
                                <h5 className="font-semibold glass-text mb-2">{i18n.t('text.workflow_challenge')}</h5>
                                <p className="text-sm glass-text-secondary">{i18n.t('text.workflow_challenge_text')}</p>
                              </div>
                              <div>
                                <h5 className="font-semibold glass-text mb-2">{i18n.t('text.intelligence_challenge')}</h5>
                                <p className="text-sm glass-text-secondary">{i18n.t('text.intelligence_challenge_text')}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Separador */}
                        <div className="flex justify-center my-8">
                          <div className="glass-separator"></div>
                        </div>

                        {/* Personas */}
                        <div className="mb-8">
                          <h4 className="text-2xl font-bold glass-text-accent mb-6">{i18n.t('text.personas_key')}</h4>
                          <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30">
                              <div className="cursor-pointer" onClick={() => openImageModal("/imagens/persona1.jpg", i18n.t('text.persona_1_ricardo'))}>
                                <OptimizedImage
                                  src="/imagens/persona1.jpg"
                                  alt={i18n.t('text.persona_1_ricardo')}
                                  className="w-full h-auto object-contain rounded mb-3"
                                  loading="lazy"
                                  style={{ imageRendering: 'auto' }}
                                />
                              </div>
                              <h5 className="font-semibold glass-text mb-2">{i18n.t('text.persona_ricardo_name')}</h5>
                              <div className="text-xs glass-text-secondary space-y-2">
                                <p><strong>Age:</strong> {i18n.t('text.persona_ricardo_age')}</p>
                                <p><strong>Role:</strong> {i18n.t('text.persona_ricardo_role')}</p>
                                <p><strong>Demographics:</strong> {i18n.t('text.persona_ricardo_demographics')}</p>
                                <p><strong>Problems:</strong> {i18n.t('text.persona_ricardo_problems')}</p>
                                <p className="italic"><strong>What he would say:</strong> "{i18n.t('text.persona_ricardo_quote')}"</p>
                              </div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30">
                              <div className="cursor-pointer" onClick={() => openImageModal("/imagens/persona2.jpg", i18n.t('text.persona_2_camila'))}>
                                <OptimizedImage
                                  src="/imagens/persona2.jpg"
                                  alt={i18n.t('text.persona_2_camila')}
                                  className="w-full h-auto object-contain rounded mb-3"
                                  loading="lazy"
                                  style={{ imageRendering: 'auto' }}
                                />
                              </div>
                              <h5 className="font-semibold glass-text mb-2">{i18n.t('text.persona_camila_name')}</h5>
                              <div className="text-xs glass-text-secondary space-y-2">
                                <p><strong>Age:</strong> {i18n.t('text.persona_camila_age')}</p>
                                <p><strong>Role:</strong> {i18n.t('text.persona_camila_role')}</p>
                                <p><strong>Demographics:</strong> {i18n.t('text.persona_camila_demographics')}</p>
                                <p><strong>Problems:</strong> {i18n.t('text.persona_camila_problems')}</p>
                                <p className="italic"><strong>What she would say:</strong> "{i18n.t('text.persona_camila_quote')}"</p>
                              </div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30">
                              <div className="cursor-pointer" onClick={() => openImageModal("/imagens/persona3.jpg", i18n.t('text.persona_3_joao'))}>
                                <OptimizedImage
                                  src="/imagens/persona3.jpg"
                                  alt={i18n.t('text.persona_3_joao')}
                                  className="w-full h-auto object-contain rounded mb-3"
                                  loading="lazy"
                                  style={{ imageRendering: 'auto' }}
                                />
                              </div>
                              <h5 className="font-semibold glass-text mb-2">{i18n.t('text.persona_joao_name')}</h5>
                              <div className="text-xs glass-text-secondary space-y-2">
                                <p><strong>Age:</strong> {i18n.t('text.persona_joao_age')}</p>
                                <p><strong>Role:</strong> {i18n.t('text.persona_joao_role')}</p>
                                <p><strong>Demographics:</strong> {i18n.t('text.persona_joao_demographics')}</p>
                                <p><strong>Problems:</strong> {i18n.t('text.persona_joao_problems')}</p>
                                <p className="italic"><strong>What he would say:</strong> "{i18n.t('text.persona_joao_quote')}"</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Separador */}
                        <div className="flex justify-center my-8">
                          <div className="glass-separator"></div>
                        </div>

                        {/* Solução */}
                        <div className="mb-8">
                          <h4 className="text-2xl font-bold glass-text-accent mb-6">{i18n.t('text.design_centered_value')}</h4>
                          <p className="text-base glass-text-secondary leading-relaxed mb-6">
                            {i18n.t('text.design_solution_text')}
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/campanhas-ecommerce.png", i18n.t('text.campaigns_ecommerce'))}>
                              <OptimizedImage
                                src="/imagens/campanhas-ecommerce.png"
                                alt={i18n.t('text.campaigns_ecommerce')}
                                className="w-full h-auto wide-image-hover"
                                loading="lazy"
                                style={{ imageRendering: 'auto' }}
                              />
                            </div>
                            <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/ecommerce-campanhas-erp.png", "E-commerce, Campanhas e ERP")}>
                              <OptimizedImage
                                src="/imagens/ecommerce-campanhas-erp.png"
                                alt="E-commerce, Campanhas e ERP"
                                className="w-full h-auto wide-image-hover"
                                loading="lazy"
                                style={{ imageRendering: 'auto' }}
                              />
                            </div>
                          </div>
                          <p className="text-sm glass-text-secondary text-left mt-3 italic">
                            {i18n.t('text.zax360_variations_caption')}
                          </p>
                        </div>

                        {/* Separador */}
                        <div className="flex justify-center my-8">
                          <div className="glass-separator"></div>
                        </div>

                        {/* Impacto de Negócio */}
                        <div className="mb-8">
                          <h4 className="text-2xl font-bold glass-text-accent mb-6">{i18n.t('text.business_impact_title')}</h4>
                          <p className="text-lg glass-text-secondary leading-relaxed mb-8">
                            {i18n.t('text.business_impact_description')}
                          </p>
                          
                          {/* Métrica Destacada */}
                          <div className="grid md:grid-cols-1 gap-6 mb-8">
                            {/* Métrica Principal */}
                            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm p-8 rounded-xl border border-emerald-400/30 text-center hover:scale-105 transition-transform duration-300">
                              <div className="text-6xl font-bold text-emerald-400 mb-4">💰 30%</div>
                              <h6 className="font-semibold glass-text mb-3 text-2xl">{i18n.t('text.revenue_increase_metric')}</h6>
                              <p className="text-base glass-text-secondary max-w-2xl mx-auto">
                                {i18n.t('text.revenue_impact_description')}
                              </p>
                            </div>
                          </div>

                          {/* Resumo dos Resultados */}
                          <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm p-8 rounded-xl border border-emerald-400/20">
                            <h6 className="text-xl font-bold glass-text-accent mb-4">{i18n.t('text.strategic_result_title')}</h6>
                            <p className="text-base glass-text-secondary leading-relaxed">
                              {i18n.t('text.strategic_result_description')}
                            </p>
                          </div>
                        </div>

                        {/* Separador */}
                        <div className="flex justify-center my-16">
                          <div className="glass-separator"></div>
                        </div>

                        {/* Segmentação de Campanhas */}
                        <div className="mb-8">
                          <div className="mb-6">
                            <div className="availability-pill mb-6">
                              {i18n.t('text.case_real')}
                            </div>
                            <h4 className="text-2xl font-bold glass-text-accent flex items-center gap-3">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                              </svg>
                              {i18n.t('text.segmentation_campaigns_title')}
                            </h4>
                          </div>
                          <div className="overflow-hidden cursor-pointer mb-6" onClick={() => openImageModal("https://raw.githubusercontent.com/johnlivio/johnlivio.github.io/refs/heads/main/imagens/mockup-listas.jpg", i18n.t('text.mockup_lists_segmentation'))}>
                            <OptimizedImage
                              src="https://raw.githubusercontent.com/johnlivio/johnlivio.github.io/refs/heads/main/imagens/mockup-listas.jpg"
                              alt={i18n.t('text.mockup_lists_segmentation')}
                              className="w-full h-auto wide-image-hover"
                              loading="lazy"
                              style={{ imageRendering: 'auto' }}
                            />
                          </div>
                          <p className="text-sm glass-text-secondary text-left mt-3 italic mb-6">
                            {i18n.t('text.custom_lists_mockup_caption')}
                          </p>
                          
                          {/* Separador */}
                          <div className="flex justify-center my-8">
                            <div className="glass-separator"></div>
                          </div>
                          
                          <div className="space-y-8">
                            {/* Título Introdutório */}
                            <div>
                              <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.volume_paradox_title')}</h5>
                              <p className="text-base glass-text-secondary leading-relaxed mb-4">
                                {i18n.t('text.project_description')}
                              </p>
                              <p className="text-base glass-text-secondary leading-relaxed">
                                {i18n.t('text.project_focus')}
                              </p>
                            </div>

                            {/* Separador */}
                            <div className="flex justify-center my-8">
                              <div className="glass-separator"></div>
                            </div>

                            {/* A Dor dos Compradores */}
                            <div>
                              <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.buyers_pain_title')}</h5>
                              <p className="text-base glass-text-secondary leading-relaxed mb-4">
                                {i18n.t('text.platform_description')}
                              </p>
                              <p className="text-base glass-text-secondary leading-relaxed mb-4">
                                {i18n.t('text.central_problem')}
                              </p>
                              <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30">
                                  <h6 className="font-semibold glass-text mb-2">{i18n.t('text.buyers_pain_point')}</h6>
                                  <p className="text-sm glass-text-secondary">{i18n.t('text.buyers_pain_description')}</p>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30">
                                  <h6 className="font-semibold glass-text mb-2">{i18n.t('text.clients_pain_point')}</h6>
                                  <p className="text-sm glass-text-secondary">{i18n.t('text.clients_pain_description')}</p>
                                </div>
                              </div>
                              <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/problems-pains.jpg", i18n.t('text.problems_pains'))}>
                                <OptimizedImage
                                  src="/imagens/problems-pains.jpg"
                                  alt={i18n.t('text.problems_pains')}
                                  className="w-full h-auto wide-image-hover"
                                  loading="lazy"
                                  style={{ imageRendering: 'auto' }}
                                />
                              </div>
                              <p className="text-sm glass-text-secondary text-left mt-3 italic">
                                {i18n.t('text.user_pains_caption')}
                              </p>
                            </div>

                            {/* Separador */}
                            <div className="flex justify-center my-8">
                              <div className="glass-separator"></div>
                            </div>

                            {/* Descobertas */}
                            <div>
                              <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.discoveries_title')}</h5>
                              <p className="text-base glass-text-secondary leading-relaxed mb-4">
                                {i18n.t('text.research_process')}
                              </p>
                              
                              <div className="mb-6">
                                <h6 className="font-semibold glass-text mb-3">{i18n.t('text.research_users_title')}</h6>
                                <p className="text-base glass-text-secondary leading-relaxed mb-3">
                                  <strong>{i18n.t('text.research_focus')}</strong> {i18n.t('text.research_focus_description')}
                                </p>
                                
                                <div className="overflow-hidden cursor-pointer mb-4" onClick={() => openImageModal("https://raw.githubusercontent.com/johnlivio/johnlivio.github.io/refs/heads/main/imagens/diagrama-listas.png", "Diagrama Listas 1")}>
                                  <OptimizedImage
                                    src="https://raw.githubusercontent.com/johnlivio/johnlivio.github.io/refs/heads/main/imagens/diagrama-listas.png"
                                    alt="Diagrama Listas 1"
                                    className="w-full h-auto wide-image-hover"
                                    loading="lazy"
                                    style={{ imageRendering: 'auto' }}
                                  />
                                </div>
                                
                                <p className="text-base glass-text-secondary leading-relaxed mb-3">
                                  <strong>{i18n.t('text.key_findings')}</strong>
                                </p>
                                <ul className="list-disc list-inside text-base glass-text-secondary leading-relaxed space-y-2 mb-4">
                                  <li>{i18n.t('text.finding_1')}</li>
                                  <li>{i18n.t('text.finding_2')}</li>
                                  <li>{i18n.t('text.finding_3')}</li>
                                </ul>
                              </div>

                              <div className="mb-6">
                                <h6 className="font-semibold glass-text mb-3">{i18n.t('text.flow_mapping_title')}</h6>
                                <p className="text-base glass-text-secondary leading-relaxed mb-3">
                                  {i18n.t('text.flow_mapping_description')}
                                </p>
                                <p className="text-base glass-text-secondary leading-relaxed mb-4">
                                  {i18n.t('text.brainstorm_description')}
                                </p>
                                
                                <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("https://raw.githubusercontent.com/johnlivio/johnlivio.github.io/refs/heads/main/imagens/diagrama-listas2.png", "Diagrama Listas 2")}>
                                  <OptimizedImage
                                    src="https://raw.githubusercontent.com/johnlivio/johnlivio.github.io/refs/heads/main/imagens/diagrama-listas2.png"
                                    alt="Diagrama Listas 2"
                                    className="w-full h-auto wide-image-hover"
                                    loading="lazy"
                                    style={{ imageRendering: 'auto' }}
                                  />
                                </div>
                                <p className="text-sm glass-text-secondary text-left mt-3 italic">
                                  {i18n.t('text.campaign_flow_caption')}
                                </p>
                              </div>
                            </div>

                            {/* Separador */}
                            <div className="flex justify-center my-8">
                              <div className="glass-separator"></div>
                            </div>

                            {/* Design do Novo Fluxo */}
                            <div>
                              <h5 className="text-xl font-semibold glass-text mb-4">{i18n.t('text.design_implementation_title')}</h5>
                              <p className="text-base glass-text-secondary leading-relaxed mb-4">
                                {i18n.t('text.solution_description')}
                              </p>
                              
                              <div className="overflow-hidden cursor-pointer mb-6" onClick={() => openImageModal("https://raw.githubusercontent.com/johnlivio/johnlivio.github.io/refs/heads/main/imagens/diagrama-listas3.png", "Diagrama Listas 3")}>
                                <OptimizedImage
                                  src="https://raw.githubusercontent.com/johnlivio/johnlivio.github.io/refs/heads/main/imagens/diagrama-listas3.png"
                                  alt="Diagrama Listas 3"
                                  className="w-full h-auto wide-image-hover"
                                  loading="lazy"
                                  style={{ imageRendering: 'auto' }}
                                />
                              </div>
                              <p className="text-sm glass-text-secondary text-left mt-3 italic mb-6">
                                {i18n.t('text.new_campaign_flow_caption')}
                              </p>
                              
                              <div className="mb-6">
                                <h6 className="font-semibold glass-text mb-3">{i18n.t('text.key_implementation')}</h6>
                                <ul className="list-disc list-inside text-base glass-text-secondary leading-relaxed space-y-2">
                                  <li><strong>{i18n.t('text.advanced_filtering')}:</strong> {i18n.t('text.advanced_filtering_description')}</li>
                                  <li><strong>{i18n.t('text.educational_experience')}:</strong> {i18n.t('text.educational_experience_description')}</li>
                                  <li><strong>{i18n.t('text.relevance_focus')}:</strong> {i18n.t('text.relevance_focus_description')}</li>
                                </ul>
                              </div>

                              <div className="space-y-4 mb-6">
                                <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/contatos.png", i18n.t('text.contacts'))}>
                                  <OptimizedImage
                                    src="/imagens/contatos.png"
                                    alt={i18n.t('text.contacts')}
                                    className="w-full h-auto wide-image-hover"
                                    loading="lazy"
                                    style={{ imageRendering: 'auto' }}
                                  />
                                </div>
                                <p className="text-sm glass-text-secondary text-left mt-3 italic">
                                  {i18n.t('text.contacts_screen_caption')}
                                </p>
                                <div className="overflow-hidden cursor-pointer" onClick={() => openImageModal("/imagens/contatos-filtros.png", i18n.t('text.contacts_filters'))}>
                                  <OptimizedImage
                                    src="/imagens/contatos-filtros.png"
                                    alt={i18n.t('text.contacts_filters')}
                                    className="w-full h-auto wide-image-hover"
                                    loading="lazy"
                                    style={{ imageRendering: 'auto' }}
                                  />
                                </div>
                                <p className="text-sm glass-text-secondary text-left mt-3 italic">
                                  {i18n.t('text.contacts_filters_screen_caption')}
                                </p>
                              </div>
                            </div>

                            {/* Separador */}
                            <div className="flex justify-center my-8">
                              <div className="glass-separator"></div>
                            </div>

                            {/* Impacto Real */}
                            <div>
                              <h5 className="text-2xl font-bold glass-text-accent mb-6">{i18n.t('text.real_impact_title')}</h5>
                              <p className="text-lg glass-text-secondary leading-relaxed mb-8">
                                {i18n.t('text.implementation_impact')}
                              </p>
                              
                              {/* Métricas Destacadas */}
                              <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {/* Métrica 1 */}
                                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30 text-center hover:scale-105 transition-transform duration-300">
                                  <div className="text-4xl font-bold text-blue-400 mb-3">📉 40%</div>
                                  <h6 className="font-semibold glass-text mb-2 text-lg">{i18n.t('text.list_reduction')}</h6>
                                  <p className="text-sm glass-text-secondary">{i18n.t('text.list_reduction_description')}</p>
                                </div>

                                {/* Métrica 2 */}
                                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm p-6 rounded-xl border border-green-400/30 text-center hover:scale-105 transition-transform duration-300">
                                  <div className="text-4xl font-bold text-green-400 mb-3">📈 30%</div>
                                  <h6 className="font-semibold glass-text mb-2 text-lg">{i18n.t('text.high_fashion')}</h6>
                                  <p className="text-sm glass-text-secondary">{i18n.t('text.high_fashion_description')}</p>
                                </div>

                                {/* Métrica 3 */}
                                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-xl border border-purple-400/30 text-center hover:scale-105 transition-transform duration-300">
                                  <div className="text-4xl font-bold text-purple-400 mb-3">🚀 90%</div>
                                  <h6 className="font-semibold glass-text mb-2 text-lg">{i18n.t('text.popular_fashion')}</h6>
                                  <p className="text-sm glass-text-secondary">{i18n.t('text.popular_fashion_description')}</p>
                                </div>
                              </div>

                              {/* Resumo dos Resultados */}
                              <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm p-8 rounded-xl border border-emerald-400/20 mb-6">
                                <h6 className="text-xl font-bold glass-text-accent mb-4">{i18n.t('text.transformative_results')}</h6>
                                <p className="text-base glass-text-secondary leading-relaxed">
                                    {i18n.t('text.results_summary')}
                                </p>
                              </div>
                            </div>

                            {/* Separador */}
                            <div className="flex justify-center my-8">
                              <div className="glass-separator"></div>
                            </div>

                            {/* Conclusão */}
                            <div>
                              <h5 className="text-2xl font-bold glass-text-accent mb-6">Como UX e Dados Transformaram Ineficiência em Ferramenta de Vendas</h5>
                              
                              <h6 className="text-xl font-bold glass-text-accent mb-4">🎯 Transformação Estratégica</h6>
                              <p className="text-base glass-text-secondary leading-relaxed mb-6">
                                Este projeto demonstrou como a pesquisa aprofundada e um design focado na experiência do usuário (UX) podem transformar uma funcionalidade de comunicação ineficiente em uma poderosa ferramenta de vendas.
                              </p>

                              <div className="mb-8">
                                <h6 className="text-xl font-bold glass-text-accent mb-6">🚀 Resultados Alcançados pela ZAX360</h6>
                                
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                  {/* Benefício 1 */}
                                  <div className="bg-gradient-to-br from-emerald-500/20 to-green-600/20 backdrop-blur-sm p-6 rounded-xl border border-emerald-400/30 hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-start space-x-4">
                                      <div className="text-3xl">😊</div>
                                      <div>
                                        <h6 className="font-bold glass-text mb-2 text-lg">Satisfação dos Compradores</h6>
                                        <p className="text-sm glass-text-secondary">Melhorar a satisfação dos compradores (recebendo menos mensagens irrelevantes)</p>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Benefício 2 */}
                                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30 hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-start space-x-4">
                                      <div className="text-3xl">📈</div>
                                      <div>
                                        <h6 className="font-bold glass-text mb-2 text-lg">Performance das Campanhas</h6>
                                        <p className="text-sm glass-text-secondary">Aumentar drasticamente a performance das campanhas para seus clientes</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Conclusão Final */}
                              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm p-8 rounded-xl border border-purple-400/20">
                                <h6 className="text-xl font-bold glass-text-accent mb-4">💡 O Segredo do Sucesso</h6>
                                <p className="text-base glass-text-secondary leading-relaxed">
                                  O sucesso da solução está em permitir que os usuários atinjam seu público de forma mais eficiente, garantindo que o <span className="font-bold text-purple-400">envio certo vá para a região certa</span>, maximizando o <span className="font-bold text-pink-400">Retorno sobre o Investimento (ROI)</span> da plataforma.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {/* Caso de Estudo - Study Cases */}
                    {caseStudy.id === 'study-cases' && (
                      <div className="flex items-center justify-center min-h-[400px]">
                        <h4 className="text-3xl font-bold glass-text-accent text-center">
                          {i18n.t('text.under_development')}
                        </h4>
                      </div>
                    )}

                    {/* Close Button */}
                    <div className="flex justify-center pt-6">
                      <button
                        onClick={() => toggleCase(caseStudy.id)}
                        className="glass-button flex items-center gap-3 text-base px-8 py-4"
                        aria-label={i18n.t('text.close_details')}
                      >
                        <X className="w-5 h-5" />
                        {i18n.t('text.close_details')}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closeImageModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200"
              aria-label={i18n.t('text.close_image')}
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Image Container with White Background */}
            <div className="bg-white p-4 rounded-lg shadow-2xl">
              <img
                src={modalImage.src}
                alt={modalImage.alt}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SelectedWork;