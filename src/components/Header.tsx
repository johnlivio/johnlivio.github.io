import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Importe useNavigate

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navigate = useNavigate(); // Hook para navegação programática

  const navigation = [
    { name: 'Home', href: '/' }, // Rota para a home
    { name: 'Projetos', href: '/projects' }, // Rota para a página de projetos
    { name: 'Experiência', href: '#experience' }, // Âncora para a seção de experiência
    { name: 'Sobre', href: '#about' }, // Âncora para a seção sobre
  ];

  // Função para rolar até uma seção específica
  const scrollToSection = (hash: string) => {
    if (window.location.pathname !== '/') {
      navigate('/'); // Navega para a home se não estiver nela
    }

    // Aguarda a navegação para a home e depois faz o scroll
    setTimeout(() => {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const offset = 64; // Ajuste conforme a altura do header
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      }
    }, 100); // Tempo para garantir que a home foi carregada
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold">John Medeiros</h1>
            <p className="text-sm text-gray-600">Designer & Product Manager</p>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault(); // Evita o comportamento padrão do Link
                      scrollToSection(item.href); // Rola até a seção
                    }
                  }}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
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
                      e.preventDefault(); // Evita o comportamento padrão do Link
                      scrollToSection(item.href); // Rola até a seção
                    }
                    setMobileMenuOpen(false); // Fecha o menu mobile
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;