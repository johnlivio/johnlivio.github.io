import { i18n } from '../translation/i18n';

const About = () => {
  const skills = [
    { category: 'Product', items: [i18n.t('text.product_skills1'), i18n.t('text.product_skills2'), i18n.t('text.product_skills3'), i18n.t('text.product_skills4'), i18n.t('text.product_skills5')] },
    { category: 'Design', items: [i18n.t('text.design_skills1'), i18n.t('text.design_skills2'), i18n.t('text.design_skills3'), i18n.t('text.design_skills4'), i18n.t('text.design_skills5'), i18n.t('text.design_skills6')] },
    { category: 'Technical', items: [i18n.t('text.technical_skills1'), i18n.t('text.technical_skills2'), i18n.t('text.technical_skills3'), i18n.t('text.technical_skills4'), i18n.t('text.technical_skills5')] },
  ];

  return (
    <section id="about" className="py-16 bg-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center bg-gradient-to-b from-gray-50 to-white pt-4">
          <div className="m-20">
            <div className="relative flex justify-center pb-4">
              <img
                src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/yo.jpg?raw=true?auto=format&fit=crop&q=80"
                alt="Professional workspace"
                className="rounded-full shadow-md filter grayscale w-[120px] h-[120px] object-cover"
              />
            </div>
            <div className="grid gap-0 text-left">
              <div>
                <h2 className="text-3xl font-bold mb-6 mt-12">{i18n.t('titles.about_me')}</h2>
                <p className="text-gray-800 mb-2 font-semibold">
                  {i18n.t('text.about_me_extended')}
                </p>

              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="text-left">
                  <h3 className="font-semibold mb-2 text-[#3E2723]">{skillGroup.category}</h3>
                  <ul className="space-y-1">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-gray-600 text-sm">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <h2 className="text-3xl font-bold mb-6 mt-12">{ i18n.t('titles.education')}</h2>
            <p className="text-gray-800 mb-2 font-semibold">
              {i18n.t('text.education_extended')}            </p>
            <ul className="text-gray-800 mb-6 font-semibold">
              <li> {i18n.t('text.education_extended1')} </li>
              <li> {i18n.t('text.education_extended2')} </li>
              <li> {i18n.t('text.education_extended3')} </li>
              <li> {i18n.t('text.education_extended4')} </li>
            </ul>
            <p className="text-gray-800 mb-6 pb-2 text-sm">
            {i18n.t('text.contact_extended')} 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
