const Projects = () => {
  const projects = [
    {
      title: 'Disparador de Listas Personalizada',
      category: 'UX/UI Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      description: 'Uma solução que combina segmentos existentes e novos para criar listas de disparos mais precisas, aumentando a relevância das campanhas e melhorando a experiência do usuário.',
    },
    {
      title: 'Redesign da Tela de Perfil',
      category: 'Product Management',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      description: 'Com base em feedbacks dos usuários, reformulamos a tela de perfil para simplificar o acesso a favoritos, dados cadastrais, limite de crédito, pedidos e lojas seguidas, proporcionando uma navegação mais fluida e intuitiva.',
    },
    {
      title: 'Conceito Inicial para o Programa Viva',
      category: 'UX/UI Design',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80',
      description: 'Conceito inicial para a homepage, telas de login e cadastro, blog e newsletter, alinhados ao design system e guia gráfico da marca, com o objetivo de oferecer uma experiência visual integrada e consistente.',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projetos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative">
              <h3 className="text-xl font-semibold text-[#3E2723] mt-4 pb-4">{project.title}</h3>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 transition-transform duration-300 group-hover:scale-105 rounded-md"
                  style={{ filter: 'brightness(0.3)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 right-0 p-6">
                    <p className="text-m font-semibold text-gray-100 mb-2 pt-2">{project.category}</p>
                    <p className="text-sm text-gray-200">{project.description}</p>
                    <button className="mt-4 px-4 py-2 bg-white text-[#3E2723] rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                      Ver Detalhes
                    </button>
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