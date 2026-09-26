import Image from "next/image";
import { Wrench, BatteryCharging, Droplet, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function CategoriesBento() {
  const categories = [
    {
      id: "autopecas",
      title: "Autopeças",
      badge: "Destaque Principal",
      description:
        "Peças de reposição mecânica e elétrica para revisão e manutenção do seu veículo: freios, suspensão, filtros, correias, ignição e componentes de motor.",
      icon: Wrench,
      image: COMPANY_DATA.images.interior,
      imageAlt: "Estoque e balcão de autopeças na Garagem em Rio Branco",
      isLarge: true,
      whatsappMsg: "Olá, gostaria de consultar autopeças para o meu veículo na Garagem.",
      items: ["Suspensão & Freios", "Filtros & Correias", "Injeção & Motor", "Elétrica automotiva"],
    },
    {
      id: "baterias",
      title: "Baterias",
      badge: "Alta Confiabilidade",
      description:
        "Linha completa de baterias automotivas para carros de passeio, picapes e utilitários. Consulte a amperagem e modelo correto para o seu carro.",
      icon: BatteryCharging,
      image: COMPANY_DATA.images.balcao,
      imageAlt: "Balcão e prateleiras de baterias e autopeças",
      isLarge: false,
      whatsappMsg: "Olá, gostaria de consultar modelos e valores de bateria na Garagem.",
      items: ["Carros de passeio", "Pick-ups e utilitários", "Consulte amperagem"],
    },
    {
      id: "lubrificantes",
      title: "Lubrificantes e Fluidos",
      badge: "Proteção do Motor",
      description:
        "Óleos de motor minerais, semissintéticos e 100% sintéticos das principais especificações, além de fluidos de freio, direção e aditivos de arrefecimento.",
      icon: Droplet,
      image: COMPANY_DATA.images.balcao,
      imageAlt: "Prateleiras com variedade de lubrificantes automotivos",
      isLarge: false,
      whatsappMsg: "Olá, gostaria de consultar óleo e lubrificantes para o meu veículo na Garagem.",
      items: ["Óleos sintéticos e minerais", "Fluidos de freio e direção", "Aditivos de arrefecimento"],
    },
    {
      id: "acessorios",
      title: "Acessórios Automotivos",
      badge: "Cuidado & Conforto",
      description:
        "Palhetas de limpador, lâmpadas, aromatizantes, produtos para limpeza e estética automotiva e utilidades para o dia a dia do seu carro.",
      icon: Sparkles,
      image: COMPANY_DATA.images.interior,
      imageAlt: "Acessórios e estética automotiva na Garagem",
      isLarge: false,
      whatsappMsg: "Olá, gostaria de consultar acessórios automotivos na Garagem.",
      items: ["Palhetas & Lâmpadas", "Estética e limpeza", "Aromatizantes & Utilidades"],
    },
  ];

  return (
    <section id="produtos" className="relative py-20 lg:py-28 bg-[#0B0D12] text-white">
      {/* Detalhes de iluminação de fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/30 text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
              <span>Linha de Produtos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Tudo para o seu carro <br className="hidden sm:block" />
              <span className="text-red-500">em um só lugar</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-400">
              Produtos selecionados de procedência com atendimento direto no balcão e opção de entrega em Rio Branco e região.
            </p>
          </div>

          <div>
            <a
              href={COMPANY_DATA.getWhatsAppUrl("Olá! Gostaria de consultar a disponibilidade de um produto na Garagem.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-red-400 transition-colors group"
            >
              <span>Consultar catálogo no balcão virtual</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-red-500" />
            </a>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <article
                key={cat.id}
                className={`group relative rounded-2xl overflow-hidden bg-[#13161F] border border-white/10 hover:border-red-600/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/10 flex flex-col justify-between ${
                  cat.isLarge ? "lg:col-span-2 lg:row-span-1" : "col-span-1"
                }`}
              >
                {/* Imagem de Fundo com Overlay */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.imageAlt}
                    fill
                    sizes={cat.isLarge ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13161F] via-[#13161F]/60 to-black/30" />

                  {/* Badge de Categoria */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20 text-xs font-bold text-white uppercase tracking-wider">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Ícone no topo direito */}
                  <div className="absolute top-4 right-4 z-10 w-11 h-11 rounded-xl bg-red-600/90 text-white flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors flex items-center gap-2">
                      <span>{cat.title}</span>
                    </h3>
                    <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Tags / Subitens */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cat.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ação WhatsApp no Rodapé do Card */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Consulte modelos & marcas</span>
                    <a
                      href={COMPANY_DATA.getWhatsAppUrl(cat.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 group-hover:bg-red-600 text-white text-xs font-semibold transition-all duration-200"
                      aria-label={`Consultar ${cat.title} pelo WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Consultar no WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
