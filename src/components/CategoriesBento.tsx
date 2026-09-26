import { FaWhatsapp } from "react-icons/fa";
import { FaGears, FaCarBattery, FaOilCan, FaSprayCanSparkles } from "react-icons/fa6";
import { COMPANY_DATA } from "@/data/company";

export default function CategoriesBento() {
  const categories = [
    {
      id: "autopecas",
      title: "Autopeças",
      badge: "Mecânica & Elétrica",
      description: "Freios, suspensão, filtros, correias, ignição e componentes de motor.",
      icon: FaGears,
      items: ["Suspensão", "Freios", "Filtros", "Motor", "Injeção"],
      whatsappMsg: "Olá! Gostaria de solicitar um orçamento de autopeças na Garagem.",
    },
    {
      id: "baterias",
      title: "Baterias",
      badge: "Diversas Amperagens",
      description: "Baterias confiáveis para carros de passeio, pick-ups e utilitários.",
      icon: FaCarBattery,
      items: ["Passeio", "Pick-ups", "Utilitários", "Consulte modelo"],
      whatsappMsg: "Olá! Gostaria de solicitar um orçamento de baterias na Garagem.",
    },
    {
      id: "lubrificantes",
      title: "Lubrificantes",
      badge: "Óleos & Fluidos",
      description: "Óleos sintéticos, semissintéticos e minerais. Fluidos de freio e aditivos.",
      icon: FaOilCan,
      items: ["Óleo sintético", "Fluidos de freio", "Aditivos", "Direção"],
      whatsappMsg: "Olá! Gostaria de solicitar um orçamento de lubrificantes na Garagem.",
    },
    {
      id: "acessorios",
      title: "Acessórios",
      badge: "Cuidado & Estética",
      description: "Palhetas, lâmpadas, aromatizantes e produtos de estética automotiva.",
      icon: FaSprayCanSparkles,
      items: ["Palhetas", "Lâmpadas", "Estética", "Aromatizantes"],
      whatsappMsg: "Olá! Gostaria de solicitar um orçamento de acessórios na Garagem.",
    },
  ];

  return (
    <section id="produtos" className="relative py-20 lg:py-24 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <p className="text-[#C43A35] text-sm font-semibold uppercase tracking-wider mb-3">
            Linha de Produtos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Tudo para o seu carro em um só lugar
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Peças selecionadas para pronta entrega ou retirada no balcão.
          </p>
        </div>

        {/* Grid de Ícones Automotivos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <article
                key={cat.id}
                className="group relative rounded-2xl bg-[#111318] border border-white/[0.08] hover:border-[#C43A35]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C43A35]/5"
              >
                <div>
                  {/* Ícone de Destaque */}
                  <div className="w-14 h-14 rounded-2xl bg-[#C43A35]/10 text-[#C43A35] group-hover:bg-[#C43A35] group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Badge sutil */}
                  <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase block mb-1">
                    {cat.badge}
                  </span>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#C43A35] transition-colors mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cat.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] text-gray-300 border border-white/[0.05]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botão de Solicitar Orçamento */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <a
                    href={COMPANY_DATA.getWhatsAppUrl(cat.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/[0.05] group-hover:bg-[#C43A35] text-white text-xs sm:text-sm font-semibold transition-all duration-200"
                  >
                    <FaWhatsapp className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                    <span>Solicitar orçamento</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
