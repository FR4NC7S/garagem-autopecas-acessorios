import { Star, ShieldCheck, CheckCircle } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function GoogleRating() {
  return (
    <section id="avaliacoes" className="relative py-16 bg-[#0E1017] border-y border-white/10 text-white overflow-hidden">
      {/* Detalhe de glow sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#141722] rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Lado Esquerdo: Nota e Estrelas */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            {/* Emblema Google */}
            <div className="w-20 h-20 rounded-2xl bg-white text-gray-900 flex flex-col items-center justify-center shadow-lg font-black shrink-0">
              <span className="text-2xl leading-none text-blue-600">G</span>
              <span className="text-[10px] font-bold text-gray-600 tracking-wider uppercase mt-1">Google</span>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current text-amber-400" />
                  ))}
                </div>
                <span className="text-2xl font-black text-white ml-1">5,0</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Quem compra, recomenda
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Avaliação máxima baseada em <strong className="text-white font-semibold">{COMPANY_DATA.googleRating.reviewCount} avaliações públicas</strong> de clientes no perfil do Google.
              </p>
            </div>
          </div>

          {/* Lado Direito: Selos de Confiança e Preparação para Reviews */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs sm:text-sm text-gray-300 w-full sm:w-auto justify-center">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Perfil verificado e ativo</span>
            </div>

            <div className="px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs sm:text-sm text-gray-300 w-full sm:w-auto justify-center">
              <CheckCircle className="w-5 h-5 text-red-500 shrink-0" />
              <span>Atendimento em Rio Branco/AC</span>
            </div>
          </div>
        </div>

        {/* Espaço Estruturado e Preparado para Avaliações Futuras (Sem Inventar Falsos Comentários) */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            ⭐ Os depoimentos são coletados diretamente através da plataforma pública Google Meu Negócio da Garagem Autopeças e Acessórios.
          </p>
        </div>
      </div>
    </section>
  );
}
