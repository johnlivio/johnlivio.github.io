import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import i18n from 'i18next';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navigate = useNavigate();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const changeLanguage = async (lang: 'en' | 'pt') => {
    await i18n.changeLanguage(lang);
    setLangMenuOpen(false); // Fecha o menu de idiomas
    // Vai para o topo e recarrega a página
    window.scrollTo(0, 0);
    window.location.reload();
  };

  const navigation = [
    { name: i18n.t('titles.home'), href: '/' },
    { name: i18n.t('titles.projects'), href: '/projects' },
    { name: i18n.t('titles.experience'), href: '#experience' },
    { name: i18n.t('titles.about'), href: '#about' },
  ];

  const scrollToSection = (hash: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }

    setTimeout(() => {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const offset = 64;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold">John Medeiros</h1>
            <p className="text-sm text-gray-600">Designer & Product Designer</p>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }
                }}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 p-2 rounded-md focus:outline-none"
              >
                <Globe className="h-5 w-5" />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-lg z-50">
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    EN-US
                  </button>
                  <button
                    onClick={() => changeLanguage('pt')}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Language Selector */}
              <div className="mt-4 px-3">
                <button
                  onClick={() => changeLanguage('en')}
                  className="block w-full text-left text-sm text-gray-700 py-2 hover:bg-gray-100"
                >
                  🇺🇸 English
                </button>
                <button
                  onClick={() => changeLanguage('pt')}
                  className="block w-full text-left text-sm text-gray-700 py-2 hover:bg-gray-100"
                >
                  🇧🇷 Português
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
