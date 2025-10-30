const Sobre = () => {
  return (
    <section
      id="sobre"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(26, 12, 2, 0.95), rgba(61, 28, 5, 0.95)),
          url('/whisky-bg-texture.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      {/* Efeito de brilho âmbar sutil no topo */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-amber-600/30 to-transparent pointer-events-none"></div>

      {/* Container do texto */}
      <div className="relative max-w-4xl mx-auto px-6 py-12 bg-black/40 border border-amber-800/40 rounded-2xl shadow-lg backdrop-blur-sm animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-amber-500 mb-6 drop-shadow-[0_0_10px_rgba(255,191,73,0.3)]">
          Sobre Nós
        </h1>

        <p className="text-lg md:text-xl leading-relaxed font-light text-amber-100">
          Bem-vindo ao{" "}
          <span className="text-amber-400 font-semibold">The Barrel Room</span>,
          onde cada gole conta uma história. Nossa paixão pelo whisky vai além
          da bebida — é uma celebração da tradição, do tempo e da arte de
          destilar sabores únicos.
          <br />
          <br />
          Selecionamos cuidadosamente rótulos nacionais e internacionais,
          clássicos e exclusivos, garantindo experiências memoráveis para
          iniciantes e apreciadores experientes.
          <br />
          <br />
          No{" "}
          <span className="text-amber-400 font-semibold">The Barrel Room</span>,
          cada garrafa tem uma história, cada aroma desperta memórias e cada
          encontro é uma oportunidade de brindar à vida.
          <br />
          <br />
          Nosso compromisso é oferecer não apenas produtos de qualidade, mas
          também um espaço de{" "}
          <span className="text-yellow-400 font-bold">descoberta</span>,{" "}
          <span className="text-yellow-400 font-bold">conhecimento</span> e{" "}
          <span className="text-yellow-400 font-bold">prazer</span>.
          <br />
          <br />
          Venha explorar o mundo do whisky conosco e transforme cada visita em
          uma experiência inesquecível.
        </p>
      </div>

      {/* Reflexo dourado na parte inferior */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-amber-700/40 to-transparent blur-2xl"></div>
    </section>
  );
};

export default Sobre;
