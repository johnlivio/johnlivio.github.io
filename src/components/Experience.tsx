import { Palette, Layout, Briefcase } from 'lucide-react';
import i18n from 'i18next';

const Experience = () => {
  const experiences = [
    {
      area: 'Product Management',
      icon: Briefcase,
      items: [
        {
          title: 'Product Designer',
          company: 'ZAX',
          period: '2022 - Present',
          description: i18n.t('text.experience_zax'),
         
        },
      ],
    }
    ,
    {
      area: i18n.t('titles.ux_ui_design'),
      icon: Layout,
      items: [
        {
          title: 'UX/UI Designer',
          company: 'ZAX',
          period: '2021 - 2022',
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
          period: '2019 - 2021',
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
          period: '2015 - 2018',
          description: i18n.t('text.designer_manager_extended'),
        },
      ],
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{i18n.t('titles.experience')}</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
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
                    {item.period && <p className="text-sm text-gray-500 mb-2">{item.period}</p>}
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