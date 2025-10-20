import { Link } from 'react-router-dom';
import { i18n } from '../translation/i18n';

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
      title: i18n.t('titles.shipping_calculator'),
      category: 'UX/UI Design',
      image: 'https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/banner-frete-calc.jpg?raw=true',
      description: i18n.t('text.context_shipping_calculator'),
    },
    {
      id: 'project2',
      title: i18n.t('titles.broadcast'),
      category: 'UX/UI Design',
      image: 'https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-listas.jpg?raw=true',
      description: i18n.t('text.ux_ui_design'),
    },
    {
      id: 'project3',
      title: i18n.t('titles.profile_screen'),
      category: 'UX Design and Product Designer',
      image: 'https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-perfil.png?raw=true',
      description: i18n.t('text.product_management_description'),
    },
  ];


  return (
    <section id="projects" className="py-12 bg-white scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{i18n.t('titles.projects')}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                    {/* Modifique o link para usar o React Router */}
                    <Link
                      to={`/projects#${project.id}`}
                      className="inline-block mt-4 px-4 py-2 bg-white text-[#3E2723] rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      {i18n.t('titles.view_details')}
                    </Link>
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