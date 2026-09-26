import { MapPin, Clock, Navigation, Phone, ExternalLink } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function LocationSection() {
  return (
    <section id="localizacao" className="relative py-20 lg:py-28 bg-[#0B0D13] text-white overflow-hidden">
      {/* Luz ambiente de destaque */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>Ponto de Atendimento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Estamos em <span className="text-red-500">Rio Branco</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Fácil acesso na Av. Sobral com estacionamento em frente à loja para sua comodidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card de Informações e Horários (5 colunas) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#13161F] border border-white/10 shadow-2xl">
            <div>
              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
                    Endereço Completo
                  </span>
                  <p className="text-xl font-bold text-white mt-1">
                    {COMPANY_DATA.addressShort}
                  </p>
                  <p className="text-sm text-gray-300">
                    {COMPANY_DATA.city}
                  </p>
                </div>
              </div>

              {/* Botão de Como Chegar */}
              <div className="mt-6">
                <a
                  href={COMPANY_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all duration-200 active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Como chegar no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>

              {/* Divisor */}
              <div className="my-8 border-t border-white/10" />

              {/* Quadro de Horários de Atendimento */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-red-500" />
                  <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs sm:text-sm">
                    Horários de Atendimento
                  </h3>
                </div>

                <div className="space-y-3">
                  {COMPANY_DATA.hours.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 text-sm"
                    >
                      <span className="font-medium text-gray-300">{item.days}</span>
                      <span
                        className={`font-bold ${
                          item.time === "Fechado" ? "text-gray-500" : "text-white"
                        }`}
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contato Rápido */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 text-red-500 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">WhatsApp e Ligações</span>
                  <a
                    href={COMPANY_DATA.getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-red-400 transition-colors"
                  >
                    {COMPANY_DATA.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Espaço Preparado para Mapa (7 colunas) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative min-h-[380px] sm:min-h-[460px] bg-[#13161F]">
            {/* Mapa Interativo Embed Responsivo */}
            <iframe
              src={COMPANY_DATA.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização Garagem Autopeças e Acessórios na Av. Sobral, 521, Rio Branco - AC"
              className="w-full h-full filter contrast-105"
            />

            {/* Banner Sobreposto de Ação no Mapa */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-2xl bg-[#090A0D]/90 backdrop-blur-md border border-white/15 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Loja Física</span>
              </div>
              <p className="text-sm font-bold text-white leading-tight">
                Av. Sobral, 521 - Rio Branco / AC
              </p>
              <a
                href={COMPANY_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-xs text-red-400 hover:text-red-300 font-semibold inline-flex items-center gap-1"
              >
                <span>Traçar rota no GPS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
