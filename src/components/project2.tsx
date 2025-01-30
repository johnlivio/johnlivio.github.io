const Project2 = () => {

  return (
    <section id="project2" className="py-20 bg-white items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-12">
          <div>
          <div><h3 className="text-3xl font-bold mb-8 text-center">Disparador de Listas Personalizada</h3>
            <div className="relative flex justify-center pb-6">
              <img
                src="https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/mockup-perfil.png?raw=true?auto=format&fit=crop&q=80"
                alt="Professional workspace"
                className="rounded-lg shadow-md w-[416px] h-[312px] object-cover"
              />
            </div>
            <div className="items-center">
                <h2 className="text-3xl font-bold m-2 text-center">Contexto</h2>
                <p className="text-gray-800 mt-8 mb-12 mr-12 ml-12 font-semibold text-center">
                Percebemos que precisavamos melhorar a tela de perfil do usuário no app, analisamos feedbacks frequentes sobre dificuldades em encontrar favoritos, alterar dados cadastrais, acessar o limite de crédito, conferir pedidos e visualizar lojas seguidas. Com base nesses dados, resolvemos investigar e mapear todos os pontos levantados pelos usuários e explorar seus problemas.
                </p>
                <div className="items-center">
                  <h2 className="text-3xl font-bold m-2 text-center">Exploração</h2>
                  <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
                  Realizamos um levantamento de dados sobre as reclamações dos usuários, selecionamos um grupo específico para aprofundar a análise e aplicamos uma pesquisa para entender suas principais dores e necessidades. Esse processo foi fundamental para direcionar o esforço corretamente e melhorar a experiência dos usuários.
                  </p>
                  <div className="relative flex justify-center p-6">
                    <img
                      src="imagens\diagrama-perfil.png?raw=true?auto=format&fit=crop&q=80"
                      alt="Professional workspace"
                      className="w-[664.5px] h-[100px] mb-12"
                    />
                  </div>
                </div>
                <div className="items-center">
                  <h2 className="text-3xl font-bold m-2 text-center">Levantamento de usos</h2>
                  <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
                  Analisamos as funcionalidades da tela de perfil para identificar menus e atalhos com uso irrevelante. A partir disso, priorizamos as funcionalidades essenciais e despriorizamos as de menor valor. Isso visou otimizar a navegação e melhorar a experiência do usuário.
                  </p>

                  <div className="relative flex justify-center p-6">
                    <img
                      src="imagens\perfil.png?raw=true?auto=format&fit=crop&q=80"
                      alt="Professional workspace"
                      className="mb-12"
                    />
                  </div>
                </div>
                
                <div className="items-center">
                  <h2 className="text-3xl font-bold m-2 text-center">Design e Testes A/B</h2>
                  <p className="text-gray-800 mt-8 mb-12 mr-12 ml-12 font-semibold text-center">
                  Desenvolvemos diferentes opções de design e realizamos testes A/B para avaliar qual delas oferecia o melhor desempenho. Através dessa abordagem, conseguimos identificar a solução mais eficaz, garantindo uma experiência do usuário aprimorada e um impacto positivo nas métricas de desempenho.
                  </p>
                
                  <div className="relative flex justify-center p-6">
                    <img
                      src="imagens\perfil2.png?raw=true?auto=format&fit=crop&q=80"
                      alt="Professional workspace"
                      className="mb-12"
                    />
                  </div>
                </div>
                <div className="items-center">
                  <h2 className="text-3xl font-bold m-2 text-center">Solução</h2>
                  <p className="text-gray-800 mt-8 mb-8 mr-12 ml-12 font-semibold text-center">
                  Após o teste A/B, foi identificado um design que se destacou em relação aos demais. No entanto, os usuários ainda relataram a falta de um subtítulo explicativo. Para melhorar a clareza, esse subtítulo foi adicionado à versão final, proporcionando uma experiência mais completa e satisfatória.
                  </p>
                  <div className="relative flex justify-center p-6">
                    <img
                      src="imagens\perfil3.png?raw=true?auto=format&fit=crop&q=80"
                      alt="Professional workspace"
                      className="mb-12"
                    />
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Project2;