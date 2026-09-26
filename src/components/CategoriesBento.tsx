import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineWrenchScrewdriver, HiOutlineBolt, HiOutlineBeaker, HiOutlineSparkles } from "react-icons/hi2";
import { COMPANY_DATA } from "@/data/company";

export default function CategoriesBento() {
  const categories = [
    {
      id: "autopecas",
      title: "Autopeças",
      description: "Freios, suspensão, filtros, correias, ignição e componentes de motor.",
      icon: HiOutlineWrenchScrewdriver,
      image: COMPANY_DATA.images.interior,
      imageAlt: "Estoque de autopeças na Garagem",
      isLarge: true,
      whatsappMsg: "Olá, gostaria de consultar autopeças para o meu veículo.",
    },
    {
      id: "baterias",
      title: "Baterias",
      description: "Baterias para carros de passeio, picapes e utilitários.",
      icon: HiOutlineBolt,
      image: COMPANY_DATA.images.balcao,
      imageAlt: "Baterias automotivas",
      isLarge: false,
      whatsappMsg: "Olá, gostaria de consultar baterias na Garagem.",
    },
    {
      id: "lubrificantes",
      title: "Lubrificantes",
      description: "Óleos minerais, semissintéticos e sintéticos. Fluidos de freio e direção.",
      icon: HiOutlineBeaker,
      image: COMPANY_DATA.images.balcao,
      imageAlt: "Lubrificantes automotivos",
      isLarge: false,
      whatsappMsg: "Olá, gostaria de consultar lubrificantes na Garagem.",
    },
    {
      id: "acessorios",
      title: "Acessórios",
      description: "Palhetas, lâmpadas, aromatizantes e produtos de limpeza automotiva.",
      icon: HiOutlineSparkles,
      image: COMPANY_DATA.images.interior,
      imageAlt: "Acessórios automotivos",
      isLarge: false,
      whatsappMsg: "Olá, gostaria de consultar acessórios na Garagem.",
    },
  ];

  return (
    <section id="produtos" className="relative py-20 lg:py-24 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <p className="text-[#D32F2F] text-sm font-semibold uppercase tracking-wider mb-3">
            Produtos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Tudo para o seu carro
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <article
                key={cat.id}
                className={`group relative rounded-2xl overflow-hidden bg-[#111318] border border-white/[0.06] hover:border-[#D32F2F]/40 transition-all duration-300 ${
                  cat.isLarge ? "lg:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.imageAlt}
                    fill
                    sizes={cat.isLarge ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/50 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-[#D32F2F] text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1.5">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  <a
                    href={COMPANY_DATA.getWhatsAppUrl(cat.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#D32F2F] hover:text-red-300 transition-colors"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    Consultar disponibilidade
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
