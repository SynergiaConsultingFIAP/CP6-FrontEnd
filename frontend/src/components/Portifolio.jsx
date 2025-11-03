import { useState } from "react";
import Aurora from "../assets/Aurora.png";
import Celeste from "../assets/Celeste.png";
import Nocture from "../assets/Nocture.png";
import Regalis from "../assets/Regalis.png";
import Solstice from "../assets/Solstice.png";
import Veridan from "../assets/Veridan.png";

const whiskies = [
  {
    nome: "Aurora",
    imagem: Aurora,
    descricao: "Notas suaves de baunilha e caramelo, final elegante e persistente.",
    preco: "R$ 1500,00",
  },
  {
    nome: "Celeste",
    imagem: Celeste,
    descricao: "Blend refinado com aroma floral e toque amadeirado marcante.",
    preco: "R$ 100,00",
  },
  {
    nome: "Nocture",
    imagem: Nocture,
    descricao: "Whisky encorpado com notas de cacau e especiarias, ideal para noites frias.",
    preco: "R$ 150,00",
  },
  {
    nome: "Regalis",
    imagem: Regalis,
    descricao: "Sabor nobre e equilibrado, com final levemente defumado.",
    preco: "R$ 200,00",
  },
  {
    nome: "Solstice",
    imagem: Solstice,
    descricao: "Combina frescor cítrico com fundo adocicado de mel e frutas secas.",
    preco: "R$ 300,00",
  },
  {
    nome: "Veridan",
    imagem: Veridan,
    descricao: "Whisky de coloração âmbar e sabor herbal único, perfeito para degustadores exigentes.",
    preco: "R$ 400,00",
  },
];

const Portifolio = () => {
  const [busca, setBusca] = useState("");
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");
  const [ordem, setOrdem] = useState("nenhum");

  const filtrarWhiskies = () => {
    return whiskies
      .filter((w) =>
        w.nome.toLowerCase().includes(busca.toLowerCase())
      )
      .filter((w) => {
        const precoNum = parseFloat(w.preco.replace("R$ ", "").replace(".", "").replace(",", "."));
        const min = precoMin ? parseFloat(precoMin) : 0;
        const max = precoMax ? parseFloat(precoMax) : Infinity;
        return precoNum >= min && precoNum <= max;
      })
      .sort((a, b) => {
        if (ordem === "az") return a.nome.localeCompare(b.nome);
        if (ordem === "za") return b.nome.localeCompare(a.nome);
        return 0;
      });
  };

  const whiskiesFiltrados = filtrarWhiskies();

  const handleCompra = (nomeWhisky) => {
    alert(`Compra de ${nomeWhisky} concluída com sucesso! 🥃`);
  };

  return (
    <section
      id="portifolio"
      className="min-h-screen bg-gradient-to-b from-amber-900 via-amber-800 to-amber-700 py-16 text-center text-neutral-100"
    >
      <h1 className="text-4xl md:text-5xl font-serif mb-12 tracking-wide">
        Nossos Whiskies
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-10 px-6 md:px-20">
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="px-4 py-2 rounded-full text-yellow-400 focus:outline-none w-full md:w-1/4"
        />
        <input
          type="number"
          placeholder="Preço mín."
          value={precoMin}
          onChange={(e) => setPrecoMin(e.target.value)}
          className="px-4 py-2 rounded-full text-orange-300 focus:outline-none w-full md:w-1/6"
        />
        <input
          type="number"
          placeholder="Preço máx."
          value={precoMax}
          onChange={(e) => setPrecoMax(e.target.value)}
          className="px-4 py-2 rounded-full text-orange-300 focus:outline-none w-full md:w-1/6"
        />
        <select
          value={ordem}
          onChange={(e) => setOrdem(e.target.value)}
          className="px-4 py-2 rounded-full text-orange-300 focus:outline-none w-full md:w-1/6"
        >
          <option value="nenhum">Ordem padrão</option>
          <option value="az">A → Z</option>
          <option value="za">Z → A</option>
        </select>
      </div>
      <div className="grid gap-8 px-6 md:px-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {whiskiesFiltrados.length > 0 ? (
          whiskiesFiltrados.map((whisky, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-amber-950 to-amber-900 bg-opacity-40 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-amber-800"
            >
              <img
                src={whisky.imagem}
                alt={whisky.nome}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{whisky.nome}</h2>
              <p className="text-sm text-amber-200 mb-4">{whisky.descricao}</p>
              <p className="text-sm text-amber-200 mb-4">{whisky.preco}</p>
              <button
                onClick={() => handleCompra(whisky.nome)}
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300"
              >
                Comprar
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-amber-200 text-lg">
            Nenhum whisky encontrado.
          </p>
        )}
      </div>
    </section>
  );
};

export default Portifolio;
