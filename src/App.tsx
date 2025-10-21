import { useState } from 'react';
import { Github as GitHub, Linkedin, Mail, MessageCircle, Menu, X, Globe, Palette, Layout, Briefcase } from 'lucide-react';
import { i18n } from './translation/i18n.ts';
import i18next from 'i18next';
import OptimizedImage from './components/OptimizedImage';
import SelectedWork from './components/SelectedWork';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const changeLanguage = async (lang: 'en' | 'pt') => {
    await i18next.changeLanguage(lang);
    setLangMenuOpen(false);
    // Força re-renderização e vai para o topo
    window.scrollTo(0, 0);
    window.location.reload();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  const navigation = [
    { name: i18n.t('titles.home'), href: 'home' },
    { name: i18n.t('titles.selected_work'), href: 'selected-work' },
    { name: i18n.t('titles.experience'), href: 'experience' },
    { name: i18n.t('titles.about'), href: 'about' },
  ];



  const skills = [
    { category: 'Product', items: [i18n.t('text.product_skills1'), i18n.t('text.product_skills2'), i18n.t('text.product_skills3'), i18n.t('text.product_skills4'), i18n.t('text.product_skills5')] },
    { category: 'Design', items: [i18n.t('text.design_skills1'), i18n.t('text.design_skills2'), i18n.t('text.design_skills3'), i18n.t('text.design_skills4'), i18n.t('text.design_skills5'), i18n.t('text.design_skills6')] },
    { category: 'Technical', items: [i18n.t('text.technical_skills1'), i18n.t('text.technical_skills2'), i18n.t('text.technical_skills3'), i18n.t('text.technical_skills4'), i18n.t('text.technical_skills5')] },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full glass-nav z-50">
        <nav className="container mx-auto px-4" role="navigation" aria-label="Menu principal">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-lg glass-text" id="site-title">JOHN MEDEIROS</h1>
              <p className="text-xs glass-text-secondary" aria-describedby="site-title">PRODUCT DESIGNER</p>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6" role="menubar">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="glass-text hover:glass-text-accent px-3 py-2 text-xs font-medium transition-colors"
                  role="menuitem"
                  aria-label={`Ir para seção ${item.name}`}
                >
                  {item.name}
                </button>
              ))}

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center space-x-2 glass-text hover:glass-text-accent p-2 rounded-md focus:outline-none"
                  aria-label="Selecionar idioma"
                  aria-expanded={langMenuOpen}
                  aria-haspopup="true"
                >
                  <Globe className="h-4 w-4" aria-hidden="true" />
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-white border-2 shadow-lg z-50" style={{borderColor: '#1c1c1c'}} role="menu" aria-label="Seleção de idioma">
                    <button
                      onClick={() => changeLanguage('en')}
                      className="block w-full px-4 py-2 text-left text-xs glass-text hover:text-white"
                      style={{'--hover-bg': '#1c1c1c'} as React.CSSProperties}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1c1c1c'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      role="menuitem"
                      aria-label="Alterar para inglês"
                    >
                      EN-US
                    </button>
                    <button
                      onClick={() => changeLanguage('pt')}
                      className="block w-full px-4 py-2 text-left text-xs glass-text hover:text-white"
                      style={{'--hover-bg': '#1c1c1c'} as React.CSSProperties}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1c1c1c'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      role="menuitem"
                      aria-label="Alterar para português"
                    >
                      PT-BR
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md glass-text hover:glass-text-accent focus:outline-none"
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t-2" style={{borderColor: '#1c1c1c'}} role="menu" aria-label="Menu mobile">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block px-3 py-2 text-base font-medium glass-text hover:glass-text-accent"
                    role="menuitem"
                    aria-label={`Ir para seção ${item.name}`}
                  >
                    {item.name}
                  </button>
                ))}

                {/* Mobile Language Selector */}
                <div className="mt-4 px-3">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      changeLanguage('en');
                    }}
                    className="block w-full text-left text-sm glass-text py-2 hover:text-white touch-manipulation"
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1c1c1c'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    🇺🇸 ENGLISH
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      changeLanguage('pt');
                    }}
                    className="block w-full text-left text-sm glass-text py-2 hover:text-white touch-manipulation"
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1c1c1c'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    🇧🇷 PORTUGUÊS
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex items-center justify-center bg-cover bg-center h-[600px]"
          style={{ backgroundImage: "url('https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/banner.png?raw=true')" }}
          aria-label="Seção inicial - Apresentação"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-sm" style={{backdropFilter: 'blur(55%)'}}></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 glass-text-accent glitch">
              {i18n.t('titles.hi')}
            </h1>
            <p className="text-lg md:text-xl glass-text-secondary max-w-2xl mx-auto font-bold">
              {i18n.t('text.about')}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="availability-pill">
                {i18n.t('text.available')}
              </div>
              <div className="availability-pill" style={{backgroundColor: 'rgba(255, 193, 7, 0.2)', borderColor: 'rgba(107, 114, 128, 0.6)'}}>
                {i18n.t('text.under_maintenance')}
              </div>
              <a 
                href="https://calendly.com/johnlheviu/vamos-conversar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="schedule-button"
                aria-label="Agendar reunião no Calendly (abre em nova aba)"
              >
                {i18n.t('text.schedule_meeting')}
              </a>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <SelectedWork />

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-white" aria-label="Seção de experiência profissional">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-12 text-center glass-text-accent">{i18n.t('titles.experience')}</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="glass-card">
                <div className="flex items-center mb-6">
                  <Layout className="w-6 h-6 glass-text-accent mr-3" />
                  <h3 className="text-lg font-semibold glass-text">Product Designer</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-xs glass-text font-medium">ZAX App</p>
                  <p className="text-xs glass-text-secondary">{i18n.t('text.zax_designer_period')}</p>
                  <p className="text-xs glass-text">{i18n.t('text.experience_zax')}</p>
                </div>
              </div>

              <div className="glass-card">
                <div className="flex items-center mb-6">
                  <Briefcase className="w-6 h-6 glass-text-accent mr-3" />
                  <h3 className="text-lg font-semibold glass-text">Product Manager</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-xs glass-text font-medium">ZAX App</p>
                  <p className="text-xs glass-text-secondary">{i18n.t('text.zax_manager_period')}</p>
                  <p className="text-xs glass-text">{i18n.t('text.ux_ui_design_extended')}</p>
                </div>
              </div>

              <div className="glass-card">
                <div className="flex items-center mb-6">
                  <Palette className="w-6 h-6 glass-text-accent mr-3" />
                  <h3 className="text-lg font-semibold glass-text">UX/UI/Graphic Design</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-xs glass-text font-medium">Sterna Café</p>
                  <p className="text-xs glass-text-secondary">{i18n.t('text.sterna_period')}</p>
                  <p className="text-xs glass-text">{i18n.t('text.ux_graphic_design_extended')}</p>
                </div>
              </div>

              <div className="glass-card">
                <div className="flex items-center mb-6">
                  <Palette className="w-6 h-6 glass-text-accent mr-3" />
                  <h3 className="text-lg font-semibold glass-text">Designer and Manager</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-xs glass-text font-medium">Oppa Design</p>
                  <p className="text-xs glass-text-secondary">{i18n.t('text.oppa_period')}</p>
                  <p className="text-xs glass-text">{i18n.t('text.designer_manager_extended')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white flex items-center justify-center" aria-label="Seção sobre mim">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center bg-gradient-to-b from-white to-white pt-4">
              <div className="m-20">
                <div className="relative flex justify-center pb-4">
                  <div className="glass-card w-[120px] h-[120px] p-0 overflow-hidden">
                    <OptimizedImage
                      src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/yo.jpg?raw=true"
                      alt="John Medeiros - Professional photo"
                      className="w-full h-full object-cover filter grayscale"
                      style={{ imageRendering: 'auto' }}
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="grid gap-0 text-left">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 mt-12 glass-text-accent">{i18n.t('titles.about_me')}</h2>
                    <p className="glass-text mb-2 font-semibold text-sm">
                      {i18n.t('text.about_me_extended')}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-6">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category} className="text-left">
                      <h3 className="font-semibold mb-2 glass-text-accent">{skillGroup.category}</h3>
                      <ul className="space-y-1">
                        {skillGroup.items.map((skill) => (
                          <li key={skill} className="glass-text text-xs">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-6 mt-12 glass-text-accent">{i18n.t('titles.education')}</h2>
                <p className="glass-text mb-2 font-semibold text-sm">
                  {i18n.t('text.education_extended')}
                </p>
                <ul className="glass-text mb-6 font-semibold text-sm">
                  <li> {i18n.t('text.education_extended1')} </li>
                  <li> {i18n.t('text.education_extended2')} </li>
                  <li> {i18n.t('text.education_extended3')} </li>
                  <li> {i18n.t('text.education_extended4')} </li>
                </ul>
                <p className="glass-text mb-6 pb-2 text-xs">
                  {i18n.t('text.contact_extended')} 
                </p>
                <p className="glass-text-accent mb-6 pb-2 text-xs font-bold">
                  {i18n.t('text.this')} 
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-8 border-t-2" style={{borderColor: '#1c1c1c'}} role="contentinfo">
    <div className="container mx-auto px-4 text-center md:grid-rows-2 gap-4">
      <div className="flex justify-center space-x-6 mb-1">
              <h2 className="text-2xl font-bold mb-4 glass-text-accent">{i18n.t('titles.contact')}</h2>
      </div>
      <div className="flex justify-center space-x-6 mb-4">
              <a href="https://www.linkedin.com/in/johnliviomedeiros/" className="glass-text hover:glass-text-accent" target="_blank"
              rel="noopener noreferrer" aria-label="LinkedIn (abre em nova aba)">
              <Linkedin className="w-6 h-6" aria-hidden="true" />
            </a>
              <a href="https://wa.me/5511993614389" className="glass-text hover:glass-text-accent" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp (abre em nova aba)">
              <MessageCircle className="w-6 h-6" aria-hidden="true" />
            </a>
              <a href="https://github.com/johnlivio" className="glass-text hover:glass-text-accent" target="_blank"
              rel="noopener noreferrer" aria-label="GitHub (abre em nova aba)">
              <GitHub className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href="mailto:johnlheviu@gmail.com"
                className="glass-text hover:glass-text-accent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar email (abre em nova aba)"
            >
              <Mail className="w-6 h-6" aria-hidden="true" />
            </a>
            </div>
            <p className="glass-text text-xs">© 2025 JOHN MEDEIROS. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
