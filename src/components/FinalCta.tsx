import { FaWhatsapp } from "react-icons/fa";
import { COMPANY_DATA } from "@/data/company";

export default function FinalCta() {
  return (
    <section className="py-20 lg:py-24 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-[#C43A35] via-[#A62B27] to-[#6E1C1A] p-10 sm:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Procurando uma peça?
          </h2>
          <p className="text-lg text-white/80 max-w-lg mx-auto mb-8">
            Fale com a Garagem pelo WhatsApp e consulte disponibilidade.
          </p>

          <a
            href={COMPANY_DATA.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-[#A62B27] font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <FaWhatsapp className="w-6 h-6" />
            Falar com a Garagem
          </a>

          <p className="mt-6 text-sm text-white/60">
            Seg a Sex: 08h às 17h • Sáb: 08h às 12h • Av. Sobral, 521
          </p>
        </div>
      </div>
    </section>
  );
}
