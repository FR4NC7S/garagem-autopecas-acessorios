import Image from "next/image";
import { MessageCircle, MapPin, ShieldCheck, Star, Truck, ArrowRight } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function Hero() {
  const highlights = [
    { title: "Autopeças", desc: "Mecânica & Elétrica" },
    { title: "Baterias", desc: "Marcas confiáveis" },
    { title: "Lubrificantes", desc: "Óleos & Fluidos" },
    { title: "Acessórios", desc: "Estética & Utilidades" },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#090A0D]"
    >
      {/* Imagem de Fundo Real (Fachada da Garagem com Next.js Image otimizado para LCP) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={COMPANY_DATA.images.fachada}
          alt="Fachada real da Garagem Autopeças e Acessórios em Rio Branco - AC"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 filter brightness-90 contrast-105"
        />
        {/* Camadas de Overlay Escuro e Gradientes para Máxima Legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0D]/95 via-[#090A0D]/90 to-[#090A0D]/65 sm:to-[#090A0D]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-transparent to-[#090A0D]/80" />
        {/* Padrão sutil automotivo */}
        <div className="absolute inset-0 bg-carbon-pattern opacity-40 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Linha diagonal vermelha dinâmica inspirada no logotipo */}
      <div
        className="absolute -top-32 -right-24 w-96 h-[120%] bg-gradient-to-b from-red-600/20 via-red-600/10 to-transparent transform -rotate-12 pointer-events-none blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-20 w-80 h-80 bg-red-600/15 rounded-full pointer-events-none blur-3xl"
        aria-hidden="true"
      />

      {/* Faixa decorativa inclinada vermelha no canto inferior */}
      <div
        className="hidden md:block absolute -bottom-8 right-10 w-72 h-3 bg-red-600 transform -skew-x-12 opacity-80 shadow-red-glow-sm pointer-events-none z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge de Credibilidade */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200 uppercase">
              Loja física em Rio Branco/AC
            </span>
            <span className="text-gray-400">•</span>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-xs sm:text-sm font-bold text-white">5.0</span>
            </div>
          </div>

          {/* Título Principal de Alto Impacto */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Autopeças e acessórios para quem{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white underline decoration-red-600 decoration-4 underline-offset-8">
                cuida do carro
              </span>
            </span>{" "}
            de verdade.
          </h1>

          {/* Subtítulo Descritivo Oficial */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-normal leading-relaxed mb-8 max-w-2xl">
            Peças, baterias, lubrificantes e acessórios automotivos em Rio Branco,
            com atendimento rápido e entrega em toda a região.
          </p>

          {/* Botões de Ação Principal e Secundário */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href={COMPANY_DATA.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-red-600 text-white font-bold text-base sm:text-lg shadow-xl shadow-red-600/30 hover:bg-red-500 hover:shadow-red-600/50 hover:translate-y-[-2px] transition-all duration-200 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Chamar no WhatsApp</span>
              <ArrowRight className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#localizacao"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 backdrop-blur-sm transition-all duration-200 hover:border-white/40"
            >
              <MapPin className="w-5 h-5 text-red-500" />
              <span>Como chegar</span>
            </a>
          </div>

          {/* Destaques Rápidos de Categorias (Pills Automotivos) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-600/50 transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-600 group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                    {item.title}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1 pl-4 truncate">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Diferenciais Rápidos */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>Produtos Selecionados</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-red-500" />
              <span>Entrega em Rio Branco e região</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Av. Sobral, 521</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
