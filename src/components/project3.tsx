import { useEffect } from 'react';

const Project3 = () => {
  // Efeito para scroll automático quando a página carrega com o hash #project3
  useEffect(() => {
    if (window.location.hash === '#project3') {
      const element = document.getElementById('project3');
      if (element) {
        const offset = 64; // Ajuste conforme a altura do seu header
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  return (
    <section id="project3" className="py-20 bg-white items-center scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-12">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Conceito | Programa Viva</h3>
            <div className="relative flex justify-center pb-6">
              <img
                src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-viva.jpg?raw=true?auto=format&fit=crop&q=80"
                alt="Professional workspace"
                className="w-full max-w-4xl object-cover object-center h-[400px] mx-auto"
              />
            </div>

            {/* Contexto */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">Contexto</h2>
              <p className="text-gray-800 mt-8 mb-12 mr-12 ml-12 font-semibold text-center">
                O stakeholder solicitou a criação de um conceito inicial para a Homepage, tela de login e cadastro, blog e newsletter, seguindo as diretrizes do design system e o guia gráfico da marca. O objetivo era garantir que as telas e elementos estivessem alinhados à identidade visual e aos padrões estabelecidos pela marca.
              </p>
            </div>

            {/* Exploração */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">Exploração</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
                Realizei um benchmark nos principais players do mercado de saúde para entender as melhores práticas e identificar pontos-chave para o desenvolvimento do design do programa Viva. Essa análise nos forneceu insights valiosos sobre funcionalidades, interfaces e padrões visuais, que foram essenciais para criar uma solução alinhada às necessidades do setor.
              </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/conceito.png?raw=true?auto=format&fit=crop&q=80"
                  alt="Exploração"
                  className="w-[664.5px] h-[100px] mb-12"
                />
              </div>
            </div>

            {/* Wireframing */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">Wireframing</h2>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/conceito-wireframe.png?raw=true"
                  alt="Wireframing"
                  className="mb-12"
                />
              </div>
            </div>

            {/* Designs */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">Designs</h2>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/conceito-design.png?raw=true"
                  alt="Designs"
                  className="mb-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project3;