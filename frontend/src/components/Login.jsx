import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password, name });
  };

  return (
    <section
      id="login"
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#f3e7d3] to-[#e3d2b6] p-4">
      <div className="w-full max-w-5xl bg-[#f7f0dc] border border-[#b87436] rounded-xl shadow-[0_10px_30px_rgba(156,96,56,0.25)] p-10 flex flex-col items-center text-[#7b3f1b]">
        <div className="max-w-2xl text-center mb-10">
          <h1 className="text-4xl font-bold uppercase tracking-wide mb-4">
            Login
          </h1>
          <p className="text-lg leading-relaxed text-[#7b3f1b]/90">
            Ao se cadastrar em{" "}
            <span className="text-[#b87436] font-semibold">The Barrel Room</span>, 
            você garante <span className="text-[#b87436] font-medium">descontos exclusivos</span>,{" "}
            <span className="text-[#b87436] font-medium">entrega gratuita</span> e{" "}
            <span className="text-[#b87436] font-medium">envio prioritário</span>.
            <br />
            <span className="italic text-[#7b3f1b]/80">
              Experimente o sabor do privilégio.
            </span>
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg text-left space-y-6"
        >
          <div>
            <label className="block text-[#7b3f1b] font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-[#5a2e1f] border border-[#7b3f1b]/50 rounded-md text-[#f7e7cc] focus:outline-none focus:border-[#d88a43] placeholder-[#e1b97f]/60 shadow-inner"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-[#7b3f1b] font-medium mb-2">Senha</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-[#5a2e1f] border border-[#7b3f1b]/50 rounded-md text-[#f7e7cc] focus:outline-none focus:border-[#d88a43] placeholder-[#e1b97f]/60 shadow-inner"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-[#7b3f1b] font-medium mb-2">Nome</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-[#5a2e1f] border border-[#7b3f1b]/50 rounded-md text-[#f7e7cc] focus:outline-none focus:border-[#d88a43] placeholder-[#e1b97f]/60 shadow-inner"
              placeholder="Digite seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="pt-6 flex justify-end">
            <button
              type="submit"
              className="px-10 py-2 bg-[#b87436] hover:bg-[#d88a43] text-[#2a1306] font-bold rounded-md transition-all duration-200 shadow-[0_4px_10px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_15px_rgba(216,138,67,0.6)]"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
