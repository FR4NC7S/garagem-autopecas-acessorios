import { MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function FinalCta() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#090A0D] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-red-650 via-red-900 to-[#120406] border border-red-500/30 p-8 sm:p-14 lg:p-20 shadow-2xl shadow-red-900/40">
          {/* Efeitos diagonais e cortes angulares inspirados no logotipo */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/40 to-transparent transform -skew-x-12 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-500/30 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-6 right-6 w-32 h-1 bg-white/20 transform -skew-x-12"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Tag no Topo */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span>Atendimento Direto & Rápido</span>
            </div>

            {/* Título Oficial */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Procurando uma peça para o seu carro?
            </h2>

            {/* Texto Oficial */}
            <p className="mt-6 text-base sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed">
              Fale com a Garagem pelo WhatsApp e consulte disponibilidade.
            </p>

            {/* Botão Grande de Ação */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={COMPANY_DATA.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white text-red-700 hover:bg-gray-100 font-extrabold text-lg sm:text-xl shadow-2xl shadow-black/50 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0"
              >
                <MessageCircle className="w-6 h-6 text-red-600" />
                <span>Falar com a Garagem</span>
                <ArrowRight className="w-5 h-5 text-red-600" />
              </a>
            </div>

            {/* Indicadores de Suporte Rápido */}
            <div className="mt-10 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-gray-200">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-300" />
                <span>Seg a Sex: 08h às 17h • Sáb: 08h às 12h</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-300" />
                <span>Atendimento humanizado</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-300" />
                <span>Av. Sobral, 521 - Rio Branco/AC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
