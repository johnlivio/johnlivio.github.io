import { useEffect } from 'react';

const Project1 = () => {
  // Efeito para scroll automático quando a página carrega com o hash #project1
  useEffect(() => {
    if (window.location.hash === '#project1') {
      const element = document.getElementById('project1');
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
    <section id="project1" className="py-20 bg-white items-center scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-12">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Disparador de Listas Personalizada</h3>
            <div className="relative flex justify-center pb-6">
              <img
                src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-listas.jpg?raw=true?auto=format&fit=crop&q=80"
                alt="Professional workspace"
                className="w-full max-w-4xl object-cover object-center h-[400px] mx-auto"
              />
            </div>


            {/* Contexto */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">Contexto</h2>
              <p className="text-gray-800 mt-8 mb-12 mr-12 ml-12 font-semibold text-center">
                Na plataforma ZAX360, enfrentamos problemas com a segmentação inadequada de contatos, resultando em comunicações ineficazes e pouco direcionadas. Isso afetava a precisão das campanhas de marketing e o engajamento dos usuários, exigindo melhorias na segmentação para garantir comunicações mais personalizadas e relevantes.
              </p>
            </div>

            {/* Exploração */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">Exploração</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
                Realizamos pesquisas com os usuários e stakeholders para avaliar a efetividade dos disparos de mensagens, identificar brechas no sistema e entender os principais problemas causados pelos disparos gerais (para todos os contatos). Essas pesquisas nos forneceram “insights” sobre como aprimorar nossas comunicações, retornos e melhorar a experiência do usuário.
              </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-listas.png?raw=true?auto=format&fit=crop&q=80"
                  alt="Diagrama de listas"
                  className="w-[664.5px] h-[100px] mb-12"
                />
              </div>
            </div>

            {/* Fluxo de disparos */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">Fluxo de disparos</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
                Mapeamos o fluxo de disparos na ZAX360 para identificar pontos críticos onde inserir a criação de listas segmentadas. Esse mapeamento foi crucial para otimizar o processo, garantindo que as comunicações fossem mais direcionadas e eficazes. Além disso, aprimoramos a experiência do usuário, tornando o processo de segmentação mais didático e intuitivo.
              </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-listas2.png?raw=true?auto=format&fit=crop&q=80"
                  alt="Fluxo de disparos"
                  className="w-[1046.4px] h-[576.6px] mb-12"
                />
              </div>
            </div>

            {/* Brainstorm */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">“Brainstorm”</h2>
              <p className="text-gray-800 mt-8 mb-12 mr-12 ml-12 font-semibold text-center">
                Nos reunimos e debatemos as principais necessidades dos usuários e mapeamos os objetivos dos disparos de campanhas. Esse processo nos permitiu identificar áreas de melhoria e iniciar o desenvolvimento de propostas para otimizar e segmentar o disparo de campanhas e atender melhor às expectativas dos usuários.
              </p>
            </div>

            {/* Novo fluxo */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">Novo fluxo</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
                Fizemos um novo fluxo partindo de uma lista personalizada, oferecendo uma melhor segmentação de contatos para disparo.
              </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-listas3.png?raw=true?auto=format&fit=crop&q=80"
                  alt="Novo fluxo"
                  className="w-[1046.4px] h-[576.6px] mb-12"
                />
              </div>
            </div>

            {/* Solução */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">Solução</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
                Essa solução resultou em uma redução de 40% no tamanho das listas, tornando os disparos mais certeiros e eficazes, proporcionando aos usuários atingirem o seu público de maneira mais segmentada, com disparos certos para cada região do país.
              </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/solucao.png?raw=true?auto=format&fit=crop&q=80"
                  alt="Solução"
                  className="w-[1046.4px] h-[576.6px] mb-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project1;