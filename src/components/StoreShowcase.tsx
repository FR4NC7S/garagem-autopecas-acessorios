import Image from "next/image";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { COMPANY_DATA } from "@/data/company";

export default function StoreShowcase() {
  return (
    <section className="relative py-20 lg:py-24 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#D32F2F] text-sm font-semibold uppercase tracking-wider mb-3">
            Nossa Loja
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Conheça a Garagem
          </h2>
          <p className="mt-3 text-gray-400">
            Ambiente organizado e estoque completo para atender seu veículo.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Main photo */}
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-white/[0.06] h-[340px] sm:h-[420px]">
            <Image
              src={COMPANY_DATA.images.interior}
              alt="Interior da Garagem Autopeças"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-sm font-semibold text-white">Balcão e prateleiras organizadas</p>
              <p className="text-xs text-gray-400 mt-0.5">Av. Sobral, 521 — Rio Branco/AC</p>
            </div>
          </div>

          {/* Side photos */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="relative group rounded-2xl overflow-hidden border border-white/[0.06] h-[200px] sm:h-[200px]">
              <Image
                src={COMPANY_DATA.images.fachada}
                alt="Fachada da Garagem Autopeças"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-medium text-white">Fachada da loja</p>
            </div>

            <div className="relative group rounded-2xl overflow-hidden border border-white/[0.06] h-[200px] sm:h-[200px]">
              <Image
                src={COMPANY_DATA.images.balcao}
                alt="Produtos e lubrificantes"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-medium text-white">Lubrificantes e acessórios</p>
            </div>
          </div>
        </div>

        {/* Authenticity bar */}
        <div className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <HiOutlineCheckBadge className="w-5 h-5 text-[#D32F2F] shrink-0" />
          <p className="text-sm text-gray-400">
            Fotos 100% reais do nosso espaço.
          </p>
        </div>
      </div>
    </section>
  );
}
