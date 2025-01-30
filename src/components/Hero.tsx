
const Hero = () => {
  return (
    <section id="home" className=" flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-40">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Olá, eu sou <span className="text-[#3E2723]">o John!</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          UX/UI Designer, Product Manager e Designer Gráfico apaixonado por criar experiências digitais excepcionais.
        </p>
      </div>
    </section>
  );
};

export default Hero;