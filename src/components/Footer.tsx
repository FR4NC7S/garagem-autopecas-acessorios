import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { HiOutlineMapPin, HiOutlineClock, HiOutlinePhone } from "react-icons/hi2";
import { COMPANY_DATA } from "@/data/company";

export default function Footer() {
  const year = new Date().getFullYear();

  const nav = [
    { label: "Início", href: "#inicio" },
    { label: "Produtos", href: "#produtos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <footer className="bg-[#07080B] border-t border-white/[0.06] pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="space-y-4">
            <div className="relative w-48 h-12">
              <Image
                src={COMPANY_DATA.images.logo}
                alt="Garagem Autopeças"
                fill
                className="object-contain object-left"
                sizes="160px"
              />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Autopeças, baterias, lubrificantes e acessórios automotivos em Rio Branco/AC.
            </p>
            <div className="flex gap-2">
              <a
                href={COMPANY_DATA.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-[#25D366] text-gray-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-pink-600 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Navegação</h3>
            <ul className="space-y-2.5">
              {nav.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <HiOutlineClock className="w-3.5 h-3.5 text-[#D32F2F]" />
              Horários
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-500 block">Seg a Sex</span>
                <span className="text-gray-300 font-medium">08:00 às 17:00</span>
              </div>
              <div>
                <span className="text-gray-500 block">Sábado</span>
                <span className="text-gray-300 font-medium">08:00 às 12:00</span>
              </div>
              <div>
                <span className="text-gray-500 block">Domingo</span>
                <span className="text-[#D32F2F] font-medium">Fechado</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <HiOutlineMapPin className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                <span className="text-gray-400">{COMPANY_DATA.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlinePhone className="w-4 h-4 text-[#D32F2F] shrink-0" />
                <a href={COMPANY_DATA.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  {COMPANY_DATA.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaInstagram className="w-4 h-4 text-[#D32F2F] shrink-0" />
                <a href={COMPANY_DATA.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  {COMPANY_DATA.instagram}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center">
          <p className="text-xs text-gray-600">
            © {year} {COMPANY_DATA.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
