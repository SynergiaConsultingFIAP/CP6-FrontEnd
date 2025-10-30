import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <section id="login">
      <div
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundColor: "#1a0c02",
          backgroundImage:
            "radial-gradient(circle at 30% 50%, rgba(255, 170, 70, 0.15), transparent 60%), radial-gradient(circle at 80% 20%, rgba(255, 100, 0, 0.1), transparent 70%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-amber-700/20 animate-pulse-slow mix-blend-overlay"></div>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-amber-500/20 rounded-full blur-sm animate-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${6 + Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
        <div className="relative w-full max-w-md bg-black border border-amber-700 rounded-xl shadow-2xl p-8 backdrop-blur-md">
          <h2 className="text-center text-3xl font-bold text-amber-800 mb-8 uppercase tracking-wide drop-shadow-[0_0_8px_rgba(255,191,73,0.3)]">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-amber-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-amber-800 border border-amber-600/50 rounded-md text-white focus:outline-none focus:border-amber-400 placeholder-amber-200/40"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-amber-700 font-medium mb-2">
                Senha
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-amber-800 border border-amber-600/50 rounded-md text-white focus:outline-none focus:border-amber-400 placeholder-amber-200/40"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-amber-700 font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-amber-800 border border-amber-600/50 rounded-md text-white focus:outline-none focus:border-amber-400 placeholder-amber-200/40"
                placeholder="Digite seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-amber-700 hover:bg-amber-500 text-black font-bold rounded-md transition-all duration-200 shadow-lg hover:shadow-amber-600/50"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        @keyframes bubble {
          0% {
            transform: translateY(100vh) scale(0.6);
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-10vh) scale(1);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation-name: bubble;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Login;
