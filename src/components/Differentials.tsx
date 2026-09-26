import { Layers, Users, Store, Truck, ArrowRight } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function Differentials() {
  const differentials = [
    {
      title: "Variedade de produtos",
      description:
        "Ampla seleção de autopeças mecânicas e elétricas, baterias de várias amperagens, óleos lubrificantes e acessórios para diferentes marcas e modelos.",
      icon: Layers,
    },
    {
      title: "Atendimento especializado",
      description:
        "Atendimento focado em orientar você com rapidez na identificação da peça ou do produto correto para a manutenção do seu veículo.",
      icon: Users,
    },
    {
      title: "Loja física em Rio Branco",
      description:
        "Espaço estruturado e de portas abertas na Av. Sobral, 521. Venha conferir as peças pessoalmente ou retirar seu pedido no balcão.",
      icon: Store,
    },
    {
      title: "Entrega em Rio Branco e região",
      description:
        "Praticidade para motoristas e profissionais: consulte a disponibilidade e receba sua peça com agilidade onde estiver na capital e proximidades.",
      icon: Truck,
    },
  ];

  return (
    <section id="diferenciais" className="relative py-20 lg:py-28 bg-[#F8FAFC] text-gray-900 overflow-hidden">
      {/* Padrão decorativo sutil para fundo claro */}
      <div className="absolute inset-0 bg-light-pattern opacity-60 pointer-events-none" />

      {/* Detalhe diagonal vermelho sutil no topo do bloco claro */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <span>Diferenciais Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-950">
            Por que escolher a <span className="text-red-600">Garagem?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Transparência, agilidade e estrutura física para atender com seriedade quem cuida do carro em Rio Branco.
          </p>
        </div>

        {/* Grid de 4 Cards de Diferenciais Premium em Fundo Claro */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-red-600/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Ícone com destaque vermelho */}
                  <div className="w-14 h-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-red-600 transition-colors">
                  <span>Padrão Garagem</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Barra de ação rápida */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-gray-800">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Quer tirar uma dúvida sobre disponibilidade de peça?
            </h4>
            <p className="text-sm text-gray-400 mt-1">
              Fale diretamente com nossa equipe no WhatsApp pelo {COMPANY_DATA.phoneDisplay}
            </p>
          </div>
          <a
            href={COMPANY_DATA.getWhatsAppUrl("Olá! Gostaria de consultar uma peça na Garagem.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-md shadow-red-600/30 transition-all shrink-0 active:scale-95"
          >
            <span>Falar com especialista</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
