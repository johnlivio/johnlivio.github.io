import React from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 'project1',
      title: 'Disparador de Listas Personalizada',
      category: 'UX/UI Design',
      image: 'https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-listas.jpg?raw=true',
      description: 'Uma solução que combina segmentos existentes e novos para criar listas de disparos mais precisas, aumentando a relevância das campanhas e melhorando a experiência do usuário.',
    },
    {
      id: 'project2',
      title: 'Redesign da Tela de Perfil',
      category: 'Product Management',
      image: 'https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-perfil.png?raw=true',
      description: 'Com base em feedbacks dos usuários, reformulamos a tela de perfil para simplificar o acesso a favoritos, dados cadastrais, limite de crédito, pedidos e lojas seguidas, proporcionando uma navegação mais fluida e intuitiva.',
    },
    {
      id: 'project3',
      title: 'Conceito Inicial para o Programa Viva',
      category: 'UX/UI Design',
      image: 'https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-viva.jpg?raw=true',
      description: 'Conceito inicial para a homepage, telas de login e cadastro, blog e newsletter, alinhados ao design system e guia gráfico da marca, com o objetivo de oferecer uma experiência visual integrada e consistente.',
    },
  ];

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      const offset = 64; // Mesmo offset do header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 bg-white scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projetos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative">
              <h3 className="text-xl font-semibold text-[#3E2723] mt-4 pb-4">{project.title}</h3>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 transition-transform duration-300 group-hover:scale-105 rounded-md"
                  style={{ filter: 'brightness(0.4)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 right-0 p-6">
                    <p className="text-m font-semibold text-gray-100 mb-2 pt-2">{project.category}</p>
                    <p className="text-sm text-gray-200">{project.description}</p>
                    <a
                      href={`#${project.id}`}
                      onClick={(e) => scrollToSection(e, project.id)}
                      className="inline-block mt-4 px-4 py-2 bg-white text-[#3E2723] rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      Ver Detalhes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;