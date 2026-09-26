import Image from "next/image";
import { MapPin, CheckCircle2, Store } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function StoreShowcase() {
  return (
    <section id="loja" className="relative py-20 lg:py-28 bg-[#090A0D] text-white overflow-hidden">
      {/* Luz ambiente de destaque */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            <Store className="w-4 h-4 text-red-500" />
            <span>Estrutura Própria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Conheça a <span className="text-red-500">Garagem</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Ambiente organizado, estoque dinâmico e atendimento pronto para tirar suas dúvidas e encontrar a peça que seu veículo precisa.
          </p>
        </div>

        {/* Composição Editorial Assimétrica com as 3 Fotografias Reais */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Foto Principal Grande (Interior Amplo da Loja) - 7 colunas */}
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-white/15 shadow-2xl min-h-[380px] sm:min-h-[460px] lg:min-h-[540px]">
            <Image
              src={COMPANY_DATA.images.interior}
              alt="Interior amplo da loja Garagem Autopeças e Acessórios com balcão e prateleiras organizadas"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            {/* Gradiente para legenda */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Linha decorativa diagonal vermelha */}
            <div className="absolute top-0 right-0 w-24 h-2 bg-red-600 transform -skew-x-12" />

            {/* Legenda Editorial Sobreposta */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Loja física em Rio Branco/AC</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Balcão espaçoso e peças organizadas por categoria
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-lg">
                Atendimento presencial ágil com equipe pronta para conferir código de aplicação e compatibilidade do seu carro.
              </p>
            </div>
          </div>

          {/* Coluna Lateral com 2 Fotos Menores Sobrepostas/Empilhadas - 5 colunas */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Foto 2: Fachada da Loja */}
            <div className="relative group rounded-2xl overflow-hidden border border-white/15 shadow-xl h-[240px] sm:h-[260px]">
              <Image
                src={COMPANY_DATA.images.fachada}
                alt="Fachada oficial da loja Garagem Autopeças na Av. Sobral em Rio Branco"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider block mb-1">
                  Localização de Fácil Acesso
                </span>
                <p className="text-sm font-bold text-white leading-snug">
                  Fachada na Av. Sobral, 521 com estacionamento frontal
                </p>
              </div>
            </div>

            {/* Foto 3: Balcão e Produtos de Lubrificantes e Acessórios */}
            <div className="relative group rounded-2xl overflow-hidden border border-white/15 shadow-xl h-[240px] sm:h-[260px]">
              <Image
                src={COMPANY_DATA.images.balcao}
                alt="Balcão de produtos com lubrificantes de várias viscosidades e marcas na Garagem"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider block mb-1">
                  Mix Completo
                </span>
                <p className="text-sm font-bold text-white leading-snug">
                  Lubrificantes, fluidos, aditivos e estética automotiva
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Faixa inferior de autenticidade */}
        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Fotos 100% reais do nosso espaço</p>
              <p className="text-xs text-gray-400">Você sabe exatamente onde está comprando e quem está atendendo seu pedido.</p>
            </div>
          </div>
          <a
            href={COMPANY_DATA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-red-400 hover:text-red-300 underline underline-offset-4 shrink-0 transition-colors"
          >
            Abrir rota no Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
