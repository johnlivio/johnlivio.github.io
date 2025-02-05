const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center bg-cover bg-center h-[600px]" // Altura fixa de 600px
      style={{ backgroundImage: "url('/imagens/banner.png')" }} // Caminho da imagem corrigido
    >
      {/* Overlay escuro para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-white-20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Olá, eu sou <span className="text-[#FFFFFF]">o John!</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200  max-w-2xl mx-auto">
          UX/UI Designer, Product Manager e Designer Gráfico apaixonado por criar experiências digitais excepcionais.
        </p>
      </div>
    </section>
  );
};

export default Hero;