import { useState } from 'react';
import { Github as GitHub, Linkedin, Mail, MessageCircle, Menu, X, Globe, Palette, Layout, Briefcase } from 'lucide-react';
import { i18n } from './translation/i18n.ts';
import i18next from 'i18next';
import OptimizedImage from './components/OptimizedImage';
import ProjectModal from './components/ProjectModal';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const changeLanguage = async (lang: 'en' | 'pt') => {
    await i18next.changeLanguage(lang);
    setLangMenuOpen(false);
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
    { name: i18n.t('titles.projects'), href: 'projects' },
    { name: i18n.t('titles.experience'), href: 'experience' },
    { name: i18n.t('titles.about'), href: 'about' },
  ];

  const projects = [
    {
      id: 'project1',
      title: i18n.t('titles.broadcast'),
      category: 'UX/UI Design',
      image: 'https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-listas.jpg?raw=true',
      description: i18n.t('text.ux_ui_design'),
    },
    {
      id: 'project2',
      title: i18n.t('titles.profile_screen_redesign'),
      category: 'UX/UI Design e Product Manager',
      image: 'https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-perfil.png?raw=true',
      description: i18n.t('text.product_management_description'),
    },
  ];

  const experiences = [
    {
      area: 'Product Management',
      icon: Briefcase,
      items: [
        {
          title: 'Product Manager',
          company: 'ZAX',
          period: '06/2022 - 08/2025',
          description: i18n.t('text.experience_zax'),
        },
      ],
    },
    {
      area: 'UX/UI Design',
      icon: Layout,
      items: [
        {
          title: 'UX/UI Designer',
          company: 'ZAX',
          period: '06/2021 - 08/2025',
          description: i18n.t('text.ux_ui_design_extended'),
        },
      ],
    },
    {
      area: i18n.t('titles.ux_graphic_design'),
      icon: Palette,
      items: [
        {
          title: i18n.t('titles.ux_graphic_design'),
          company: 'Sterna Café',
          period: '04/2019 - 06/2021',
          description: i18n.t('text.ux_graphic_design_extended'),
        },
      ],
    },
    {
      area: i18n.t('titles.designer_manager'),
      icon: Palette,
      items: [
        {
          title: i18n.t('titles.designer_manager'),
          company: 'Oppa Design',
          period: '09/2015 - 04/2018',
          description: i18n.t('text.designer_manager_extended'),
        },
      ],
    }
  ];

  const skills = [
    { category: 'Product', items: [i18n.t('text.product_skills1'), i18n.t('text.product_skills2'), i18n.t('text.product_skills3'), i18n.t('text.product_skills4'), i18n.t('text.product_skills5')] },
    { category: 'Design', items: [i18n.t('text.design_skills1'), i18n.t('text.design_skills2'), i18n.t('text.design_skills3'), i18n.t('text.design_skills4'), i18n.t('text.design_skills5'), i18n.t('text.design_skills6')] },
    { category: 'Technical', items: [i18n.t('text.technical_skills1'), i18n.t('text.technical_skills2'), i18n.t('text.technical_skills3'), i18n.t('text.technical_skills4'), i18n.t('text.technical_skills5')] },
  ];

  return (
    <div className="min-h-screen bg-white retro-bg-pattern scanlines">
      {/* Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b-2" style={{borderColor: '#1c1c1c'}}>
        <nav className="container mx-auto px-4" role="navigation" aria-label="Menu principal">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-lg retro-text" id="site-title">JOHN MEDEIROS</h1>
              <p className="text-xs retro-text-secondary" aria-describedby="site-title">DESIGNER & PRODUCT MANAGER</p>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6" role="menubar">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="retro-text hover:retro-text-accent px-3 py-2 text-xs font-medium transition-colors glitch"
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
                  className="flex items-center space-x-2 retro-text hover:retro-text-accent p-2 rounded-md focus:outline-none"
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
                      className="block w-full px-4 py-2 text-left text-xs retro-text hover:text-white"
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
                      className="block w-full px-4 py-2 text-left text-xs retro-text hover:text-white"
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
                className="inline-flex items-center justify-center p-2 rounded-md retro-text hover:retro-text-accent focus:outline-none"
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
                    className="block px-3 py-2 text-base font-medium retro-text hover:retro-text-accent"
                    role="menuitem"
                    aria-label={`Ir para seção ${item.name}`}
                  >
                    {item.name}
                  </button>
                ))}

                {/* Mobile Language Selector */}
                <div className="mt-4 px-3">
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block w-full text-left text-sm retro-text py-2 hover:text-white"
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1c1c1c'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    🇺🇸 ENGLISH
                  </button>
                  <button
                    onClick={() => changeLanguage('pt')}
                    className="block w-full text-left text-sm retro-text py-2 hover:text-white"
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 retro-text-accent glitch">
              {i18n.t('titles.hi')}
            </h1>
            <p className="text-lg md:text-xl retro-text-secondary max-w-2xl mx-auto font-bold">
              {i18n.t('text.about')}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="availability-pill">
                {i18n.t('text.available')}
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

        {/* Projects Section */}
        <section id="projects" className="py-12 bg-white scroll-mt-16" aria-label="Seção de projetos">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-12 text-center retro-text-accent">{i18n.t('titles.projects')}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="group relative">
                  <h3 className="text-lg font-semibold retro-text-accent mt-4 pb-4">{project.title}</h3>
                  <div className="relative overflow-hidden retro-border">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 transition-transform duration-300 group-hover:scale-105 pixelated"
                      style={{ filter: 'brightness(0.4)' }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm" style={{backdropFilter: 'blur(55%)'}}>
                      <div className="absolute top-0 left-0 right-0 p-6">
                        <p className="text-sm font-bold retro-text-secondary mb-2 pt-2">{project.category}</p>
                        <p className="text-xs font-bold retro-text">{project.description}</p>
                        <button
                          onClick={() => setActiveProject(project.id)}
                          className="retro-button mt-4"
                          aria-label={`Ver detalhes do projeto ${project.title}`}
                        >
                          {i18n.t('titles.view_details')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details Modal */}
        <ProjectModal 
          activeProject={activeProject} 
          onClose={() => setActiveProject(null)} 
        />

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-white" aria-label="Seção de experiência profissional">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-12 text-center retro-text-accent">{i18n.t('titles.experience')}</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {experiences.map((exp) => (
                <div key={exp.area} className="retro-card">
                  <div className="flex items-center mb-6">
                    <exp.icon className="w-6 h-6 retro-text-accent mr-3" />
                    <h3 className="text-lg font-semibold retro-text whitespace-pre-line">{exp.area}</h3>
    </div>
                  
                  <div className="space-y-6">
                    {exp.items.map((item) => (
                      <div key={item.title}>
                        <h4 className="font-medium retro-text-secondary">{item.title}</h4>
                        <p className="text-xs retro-text">{item.company}</p>
                        {item.period && <p className="text-xs retro-text-secondary mb-2">{item.period}</p>}
                        <p className="text-xs retro-text">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white flex items-center justify-center" aria-label="Seção sobre mim">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center bg-gradient-to-b from-white to-white pt-4">
              <div className="m-20">
                <div className="relative flex justify-center pb-4">
                  <div className="retro-card w-[120px] h-[120px] p-0 overflow-hidden">
                    <OptimizedImage
                      src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/yo.jpg?raw=true"
                      alt="John Medeiros - Professional photo"
                      className="w-full h-full object-cover filter grayscale pixelated"
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="grid gap-0 text-left">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 mt-12 retro-text-accent">{i18n.t('titles.about_me')}</h2>
                    <p className="retro-text mb-2 font-semibold text-sm">
                      {i18n.t('text.about_me_extended')}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-6">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category} className="text-left">
                      <h3 className="font-semibold mb-2 retro-text-accent">{skillGroup.category}</h3>
                      <ul className="space-y-1">
                        {skillGroup.items.map((skill) => (
                          <li key={skill} className="retro-text text-xs">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-6 mt-12 retro-text-accent">{i18n.t('titles.education')}</h2>
                <p className="retro-text mb-2 font-semibold text-sm">
                  {i18n.t('text.education_extended')}
                </p>
                <ul className="retro-text mb-6 font-semibold text-sm">
                  <li> {i18n.t('text.education_extended1')} </li>
                  <li> {i18n.t('text.education_extended2')} </li>
                  <li> {i18n.t('text.education_extended3')} </li>
                  <li> {i18n.t('text.education_extended4')} </li>
                </ul>
                <p className="retro-text mb-6 pb-2 text-xs">
                  {i18n.t('text.contact_extended')} 
                </p>
                <p className="retro-text-accent mb-6 pb-2 text-xs font-bold">
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
              <h2 className="text-2xl font-bold mb-4 retro-text-accent">{i18n.t('titles.contact')}</h2>
      </div>
      <div className="flex justify-center space-x-6 mb-4">
              <a href="https://www.linkedin.com/in/johnliviomedeiros/" className="retro-text hover:retro-text-accent" target="_blank"
              rel="noopener noreferrer" aria-label="LinkedIn (abre em nova aba)">
              <Linkedin className="w-6 h-6" aria-hidden="true" />
            </a>
              <a href="https://wa.me/5511993614389" className="retro-text hover:retro-text-accent" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp (abre em nova aba)">
              <MessageCircle className="w-6 h-6" aria-hidden="true" />
            </a>
              <a href="https://github.com/johnlivio" className="retro-text hover:retro-text-accent" target="_blank"
              rel="noopener noreferrer" aria-label="GitHub (abre em nova aba)">
              <GitHub className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href="mailto:johnlheviu@gmail.com"
                className="retro-text hover:retro-text-accent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar email (abre em nova aba)"
            >
              <Mail className="w-6 h-6" aria-hidden="true" />
            </a>
            </div>
            <p className="retro-text text-xs">© 2025 JOHN MEDEIROS. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
