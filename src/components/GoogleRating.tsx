import { HiStar } from "react-icons/hi2";
import { COMPANY_DATA } from "@/data/company";

export default function GoogleRating() {
  return (
    <section id="avaliacoes" className="py-16 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#111318] border border-white/[0.06] p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8">
          {/* Google badge */}
          <div className="flex items-center gap-5 shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
              <span className="text-xl font-black text-blue-600">G</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-amber-400" />
                ))}
                <span className="text-xl font-bold text-white ml-1">5,0</span>
              </div>
              <p className="text-sm text-gray-400">
                <strong className="text-white">{COMPANY_DATA.googleRating.reviewCount} avaliações</strong> no Google
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="hidden sm:block w-px h-14 bg-white/[0.08]" />

          {/* Quote */}
          <p className="text-gray-400 text-sm leading-relaxed">
            Nota máxima baseada em avaliações públicas de clientes reais no perfil do Google Meu Negócio.
          </p>
        </div>
      </div>
    </section>
  );
}
