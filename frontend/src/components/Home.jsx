import React from "react";
import Botao from "./Botao";

const Home = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-end relative"
      style={{ backgroundImage: "url('/Banner.png')" }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 w-full pb-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="flex justify-center items-center p-4">
            <Botao texto="Nossos Produtos" href="#portifolio" />
          </div>
          <div className="flex justify-center items-center p-4">
            <Botao texto="Sobre Nós" href="#sobre" />
          </div>
          <div className="flex justify-center items-center p-4">
            <Botao texto="Cadastre-se" href="#login" />
          </div>
          <div className="flex justify-center items-center p-4">
            <Botao texto="Contate-nos" href="#contato" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;


