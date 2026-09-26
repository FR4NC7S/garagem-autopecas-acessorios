import { HiStar } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { COMPANY_DATA } from "@/data/company";

export default function GoogleRating() {
  return (
    <section id="avaliacoes" className="py-16 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#111318] border border-white/[0.08] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Google badge com ícone oficial */}
          <div className="flex items-center gap-5 shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-md">
              <FcGoogle className="w-8 h-8" />
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

          {/* Quote & Link */}
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Nota máxima com 100% de satisfação dos clientes em Rio Branco no Google Meu Negócio.
            </p>

            <a
              href={COMPANY_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white transition-colors shrink-0"
            >
              <span>Ver avaliações</span>
              <HiArrowTopRightOnSquare className="w-4 h-4 text-[#C43A35]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
