const Contato = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f6f1e7] to-[#e9dcc5] text-gray-800 py-16 px-6 flex flex-col items-center">
      <div className="max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-amber-800 mb-4 uppercase tracking-wide">
          Entre em Contato
        </h2>
        <p className="text-gray-700 mb-12">
          The Barrel Row fica feliz em ouvir você! Entre em contato conosco para dúvidas,
          sugestões ou parcerias.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-8 border border-amber-100">
        <div>
          <h3 className="text-lg font-semibold text-amber-700 flex items-center gap-2">
            <span></span> Telefone:
          </h3>
          <p className="text-gray-700 ml-6">(11) 98765-4321</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-amber-700 flex items-center gap-2">
            <span></span> E-mail:
          </h3>
          <p className="text-gray-700 ml-6">contato@thebarrelrow.com</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-amber-700 flex items-center gap-2">
            <span></span> Endereço:
          </h3>
          <p className="text-gray-700 ml-6">
            Av. dos Destilados, 1573 — São Paulo, SP
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-amber-700 flex items-center gap-2">
            <span></span> Horário de Atendimento:
          </h3>
          <p className="text-gray-700 ml-6">Segunda a Sexta: 9h às 18h</p>
          <p className="text-gray-700 ml-6">Sábado: 10h às 14h</p>
        </div>
      </div>
    </section>
  );
};

export default Contato;