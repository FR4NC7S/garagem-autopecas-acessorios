import { HiOutlineCube, HiOutlineUserGroup, HiOutlineBuildingStorefront, HiOutlineTruck } from "react-icons/hi2";

export default function Differentials() {
  const items = [
    {
      title: "Variedade de produtos",
      description: "Autopeças mecânicas e elétricas, baterias, lubrificantes e acessórios para diferentes marcas e modelos.",
      icon: HiOutlineCube,
    },
    {
      title: "Atendimento especializado",
      description: "Orientação rápida para identificar a peça correta para a manutenção do seu veículo.",
      icon: HiOutlineUserGroup,
    },
    {
      title: "Loja física",
      description: "Espaço estruturado na Av. Sobral, 521. Confira as peças pessoalmente ou retire no balcão.",
      icon: HiOutlineBuildingStorefront,
    },
    {
      title: "Entrega na região",
      description: "Receba sua peça em Rio Branco e região com agilidade. Consulte disponibilidade.",
      icon: HiOutlineTruck,
    },
  ];

  return (
    <section id="diferenciais" className="relative py-20 lg:py-24 bg-[#F7F8FA] text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#D32F2F] text-sm font-semibold uppercase tracking-wider mb-3">
            Diferenciais
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Por que escolher a Garagem?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#D32F2F]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D32F2F] flex items-center justify-center mb-5 group-hover:bg-[#D32F2F] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
