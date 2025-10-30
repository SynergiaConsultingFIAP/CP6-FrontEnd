import React from "react";

export default function Botao({ texto, href }) {
  return (
    <a
      href={href}
      className="w-full max-w-xs py-5 px-6 text-lg font-bold text-white  rounded-xl shadow-lg hover:bg-amber-900 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center block"
    >
      {texto}
    </a>
  );
}
