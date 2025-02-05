import { useEffect } from 'react';

const Project2 = () => {
  // Efeito para scroll automático quando a página carrega com o hash #project2
  useEffect(() => {
    if (window.location.hash === '#project2') {
      const element = document.getElementById('project2');
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
    <section id="project2" className="py-20 bg-white items-center scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-12">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Nova tela de perfil</h3>
            <div className="relative flex justify-center pb-6">
              <img
                src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-perfil.jpg?raw=true?raw=true?auto=format&fit=crop&q=80"
                alt="Professional workspace"
                className="w-full max-w-4xl object-cover object-center h-[400px] mx-auto"
              />
            </div>
            
            {/* Contexto */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">Contexto</h2>
              <p className="text-gray-800 mt-8 mb-12 mr-12 ml-12 font-semibold text-center">
                Percebemos que precisávamos melhorar a tela de perfil do usuário no app, analisamos feedbacks frequentes sobre dificuldades em encontrar favoritos, alterar dados cadastrais, acessar o limite de crédito, conferir pedidos e visualizar lojas seguidas. Com base nesses dados, resolvemos investigar e mapear todos os pontos levantados pelos usuários e explorar seus problemas.
              </p>
            </div>

            {/* Exploração */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">Exploração</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
                Realizamos um levantamento de dados sobre as reclamações dos usuários, selecionamos um grupo específico para aprofundar a análise e aplicamos uma pesquisa para entender suas principais dores e necessidades. Esse processo foi fundamental para direcionar o esforço corretamente e melhorar a experiência dos usuários.
              </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/diagrama-perfil.png?raw=true?auto=format&fit=crop&q=80"
                  alt="Diagrama de perfil"
                  className="w-[664.5px] h-[100px] mb-12"
                />
              </div>
            </div>

            {/* Levantamento de usos */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">Levantamento de usos</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
                Analisamos as funcionalidades da tela de perfil para identificar menus e atalhos com uso irrelevante. A partir disso, priorizamos as funcionalidades essenciais e despriorizamos as de menor valor. Isso visou otimizar a navegação e melhorar a experiência do usuário.
              </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/perfil.png?raw=true?auto=format&fit=crop&q=80"
                  alt="Tela de perfil"
                  className="mb-12"
                />
              </div>
            </div>

            {/* Design e Testes A/B */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">Design e Testes A/B</h2>
              <p className="text-gray-800 mt-8 mb-12 mr-12 ml-12 font-semibold text-center">
                Desenvolvemos diferentes opções de design e realizamos testes A/B para avaliar qual delas oferecia o melhor desempenho. Através dessa abordagem, conseguimos identificar a solução mais eficaz, garantindo uma experiência do usuário aprimorada e um impacto positivo nas métricas de desempenho.
              </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/perfil2.png?raw=true?auto=format&fit=crop&q=80"
                  alt="Testes A/B"
                  className="mb-12"
                />
              </div>
            </div>

            {/* Solução */}
            <div className="items-center">
              <h2 className="text-3xl font-bold m-2 text-center">Solução</h2>
              <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
                Após teste A/B, foi identificado um design que se destacou em relação aos demais. No entanto, os usuários ainda relataram a falta de um subtítulo explicativo. Para melhorar a clareza, esse subtítulo foi adicionado à versão final, proporcionando uma experiência mais completa e satisfatória. Essas melhorias, junto com o novo componente de limite e solicitação de crédito, resultaram em um aumento superior a 50% nas solicitações de crédito.
              </p>
              <div className="relative flex justify-center p-6">
                <img
                  src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-tela-perfil.jpg?raw=true?auto=format&fit=crop&q=80"
                  alt="Solução final"
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

export default Project2;