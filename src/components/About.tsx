const About = () => {
  const skills = [
    { category: 'Product', items: ['Gestão de roadmap', 'Product discovery', 'Estratégia data-drive', 'Alinhamento com stakeholders', 'Lançamento de funcionalidades'] },
    { category: 'Design', items: ['UX/UI Design', 'Design centrado no usuário', 'Prototipação interativa', 'Arquitetura da informação', 'UX Research', 'Testes de usabilidade'] },
    { category: 'Technical', items: ['Business Intelligence (BI)', 'SQL', 'Figma e ferramentas de design', 'B2B/B2C Markets', 'Pesquisa e análise de dados'] },
  ];

  return (
    <section id="about" className="py-20 bg-white items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-12">
          <div>
          <div className="relative flex justify-center pb-6">
            <img
              src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/yo.jpg?raw=true?auto=format&fit=crop&q=80"
              alt="Professional workspace"
              className="rounded-lg shadow-md filter grayscale w-[120px] h-[120px] object-cover"
            />
          </div>
            <div className="grid gap-0 items-center">
              <div><h2 className="text-3xl font-bold mb-6 text-center">Sobre Mim</h2>
                <p className="text-gray-800 mb-2 font-semibold text-center">
                Product Manager com experiência em e-commerce B2B/B2C e fintech. Atua liderando soluções SaaS e CRM na maior empresa de atacado do Brasil.
                </p>
                <p className="text-gray-800 mb-2 font-semibold text-center">
                  Formação em design, UX/UI e Business Intelligence, com foco em produtos digitais que maximizam resultados e entregam experiências excepcionais.
                </p><p className="text-gray-800 mb-2 font-semibold text-center">
                  Impacto direto em 1 milhão+ de contatos via CRM, redução de retrabalho operacional e resolução de desafios complexos em mercados B2B e B2C.
                </p>
                <p className="text-gray-800 mb-6 pb-2 font-semibold text-center">
                  Apaixonado por tecnologia e inovação, alinhando necessidades do negócio à experiência do usuário.
                </p> </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
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
          </div>
        </div>
        
      </div>
      <div className="container mx-auto px-4" style={{ paddingTop: "80px" }}>
        <div className="grid md:grid-cols-1 gap-12 items-left w-full">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-12 text-center">Formação</h2>
            <p className="text-gray-800 mb-6 font-semibold text-center">
              Bacharel em Arquitetura e Urbanismo pelo Centro Universitário SENAC, com uma sólida base em design estratégico. Complemento minha formação com especializações voltadas para UX/UI, desenvolvimento front-end e análise de dados.
            </p>
            <ul className="text-gray-800 mb-6 P-2 font-semibold text-center">
              <li>Certificado Google UX Design (Coursera.org) – 174 horas</li>
              <li>Certificação GA4 - Google Analytics – 30 horas</li>
              <li>Certificação em Ads Digital (Consultoria 7) – Facebook e Google Ads – 30 horas</li>
              <li>Front-end Developer (DIO) – HTML, CSS e JavaScript – 102 horas</li>
            </ul>
            <p className="text-gray-600 mb-8 text-center">
              Essa formação multidisciplinar permite que eu una criatividade, tecnologia e análise de dados para criar soluções digitais eficientes e centradas no usuário.
            </p>
          </div>
        </div>
      </div>

    </section>

  );
};

export default About;