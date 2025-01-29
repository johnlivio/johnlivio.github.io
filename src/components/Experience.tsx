import { Palette, Layout, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      area: 'Product Management',
      icon: Briefcase,
      items: [
        {
          title: 'Product Manager',
          company: 'ZAX',
          period: '2022 - Presente',
          description: 'Como Product Manager, gerenciei a criação e manutenção de uma ferramenta SaaS que contribui com até 30% da receita da empresa. Co-liderei o lançamento de um novo site, resultando em 60% mais tráfego no marketplace e 5% de aumento no GMV em dois meses. Também participei da implementação de uma ferramenta de campanhas com banners, que elevou a receita recorrente em 30%. Liderei projetos estratégicos de e-commerce e SaaS, focados em inovação, crescimento de receita e otimização de processos.',
        },
      ],
    }
    ,
    {
      area: 'UX/UI Design',
      icon: Layout,
      items: [
        {
          title: 'UX/UI Designer',
          company: 'ZAX',
          period: '2021 - 2022',
          description: 'Responsável pela criação e implementação de uma cultura de pesquisa com usuários e análise de dados para fundamentar decisões de design, desenvolvimento de novas interfaces e ferramentas baseadas em dados, além da realização de testes A/B. Liderou o redesign da interface de fornecedores, alinhando as mudanças às pesquisas com usuários e incentivando ações desejadas. Coordenou a equipe de design, promovendo inovação contínua, busca por referências e a criação de designs sólidos e orientados a objetivos.',

        },
      ],
    },
    {
      area: 'UX/UI/Gráfico Design',
      icon: Palette,
      items: [
        {
          title: 'UX/UI/Graphgic Designer',
          company: 'Sterna Café',
          period: '2019 - 2021',
          description: 'Pesquisa com franqueados para entender necessidades e colaborar no desenvolvimento de landingpages, folders e guias, arte criativo de materiais promocionais alinhados à identidade da marca e às demandas levantadas.'
        },
      ],
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experiência</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div key={exp.area} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-6">
                <exp.icon className="w-6 h-6 text-[#3E2723] mr-3" />
                <h3 className="text-xl font-semibold">{exp.area}</h3>
              </div>
              
              <div className="space-y-6">
                {exp.items.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;