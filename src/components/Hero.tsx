import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { COMPANY_DATA } from "@/data/company";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={COMPANY_DATA.images.fachada}
          alt="Fachada da Garagem Autopeças em Rio Branco"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/95 via-[#0A0A0F]/85 to-[#0A0A0F]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-[#0A0A0F]/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.1] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
            <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
              Loja física em Rio Branco/AC
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-5">
            Peças e acessórios para quem{" "}
            <span className="text-[#D32F2F]">cuida do carro</span> de verdade.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
            Autopeças, baterias, lubrificantes e acessórios automotivos com
            atendimento rápido e entrega em Rio Branco.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href={COMPANY_DATA.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#D32F2F] text-white font-semibold text-base hover:bg-[#B71C1C] transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
            <a
              href="#localizacao"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white font-medium border border-white/[0.1] transition-colors"
            >
              <HiOutlineLocationMarker className="w-5 h-5 text-[#D32F2F]" />
              Como chegar
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex items-center gap-8 pt-6 border-t border-white/[0.08]">
            <div>
              <p className="text-2xl font-bold text-white">5.0</p>
              <p className="text-xs text-gray-500">Google</p>
            </div>
            <div className="w-px h-8 bg-white/[0.08]" />
            <div>
              <p className="text-2xl font-bold text-white">52+</p>
              <p className="text-xs text-gray-500">Avaliações</p>
            </div>
            <div className="w-px h-8 bg-white/[0.08]" />
            <div>
              <p className="text-2xl font-bold text-white">4</p>
              <p className="text-xs text-gray-500">Categorias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
