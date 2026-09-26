import { Truck, MessageCircle, MapPin, Check, ArrowRight } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function DeliverySection() {
  return (
    <section id="entrega" className="relative py-20 lg:py-24 bg-[#0D0F14] text-white overflow-hidden">
      {/* Detalhe de textura e iluminação vermelha */}
      <div className="absolute inset-0 bg-carbon-pattern opacity-30 pointer-events-none" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Linha diagonal estilizada inspirada no logotipo */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-red-600/5 to-transparent transform -skew-x-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#151821] via-[#12141C] to-[#0A0B0F] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Badge chanfrado */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-red-600/20 border border-red-600/30 text-red-500 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <Truck className="w-4 h-4" />
            <span>Comodidade & Rapidez</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Texto e Conteúdo Principal */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Precisa da peça e{" "}
                <span className="text-red-500 underline decoration-white/20 underline-offset-8">
                  não consegue vir até a loja?
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
                A Garagem realiza entregas em Rio Branco e região. Consulte disponibilidade pelo WhatsApp.
              </p>

              {/* Itens discretos de conveniência */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Entregas em Rio Branco</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Atendimento à região</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Pedido direto no WhatsApp</span>
                </div>
              </div>

              {/* Botão de Ação */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={COMPANY_DATA.getWhatsAppUrl(
                    "Olá! Preciso de uma peça e gostaria de saber sobre a entrega na minha região."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-base shadow-xl shadow-red-600/30 transition-all duration-200 group active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>Consultar pelo WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="flex items-center gap-2 text-xs text-gray-400 pl-1">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Atendimento rápido via WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Elemento Visual Discreto de Entrega Automotiva */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="relative w-full max-w-xs p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-red-600 to-red-800 text-white flex items-center justify-center shadow-lg shadow-red-600/40 mb-4 transform -rotate-3 hover:rotate-0 transition-transform">
                  <Truck className="w-10 h-10" />
                </div>
                <h3 className="text-base font-bold text-white">Logística de Entrega</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Informamos o prazo e a rota diretamente na confirmação do pedido pelo WhatsApp.
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 text-xs font-semibold text-red-400">
                  Consulte disponibilidade para o seu bairro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
