import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Clock, Phone, ChevronRight } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { COMPANY_DATA } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Produtos", href: "#produtos" },
    { name: "Sobre a Garagem", href: "#sobre" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Localização", href: "#localizacao" },
    { name: "Avaliações", href: "#avaliacoes" },
  ];

  return (
    <footer className="relative bg-[#07080B] text-gray-400 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Linha decorativa superior vermelha */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Coluna 1: Logo e Identidade (4 colunas) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative w-48 h-12">
              <Image
                src={COMPANY_DATA.images.logo}
                alt="Garagem Autopeças e Acessórios"
                fill
                className="object-contain object-left"
                sizes="192px"
              />
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              <strong className="text-white font-medium">{COMPANY_DATA.name}</strong> — Loja especializada em autopeças, baterias, lubrificantes e acessórios automotivos em Rio Branco/AC, com atendimento rápido e entrega na região.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_DATA.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp da Garagem Autopeças"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-pink-600 text-white flex items-center justify-center transition-colors"
                aria-label="Instagram da Garagem Autopeças"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                aria-label="Localização no Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-3">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-red-600 transition-transform group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Horários de Atendimento (2 colunas) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-500" />
              <span>Horários</span>
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <span className="block text-gray-400 font-medium">Seg a Sex</span>
                <span className="font-bold text-gray-200">08:00 às 17:00</span>
              </div>
              <div>
                <span className="block text-gray-400 font-medium">Sábado</span>
                <span className="font-bold text-gray-200">08:00 às 12:00</span>
              </div>
              <div>
                <span className="block text-gray-400 font-medium">Domingo</span>
                <span className="font-bold text-red-500">Fechado</span>
              </div>
            </div>
          </div>

          {/* Coluna 4: Contato & Endereço (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-3">
              Contato & Loja
            </h3>
            <div className="flex items-start gap-2.5 text-sm">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-1" />
              <span>{COMPANY_DATA.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <a
                href={COMPANY_DATA.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {COMPANY_DATA.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-sm">
              <InstagramIcon className="w-4 h-4 text-red-500 shrink-0" />
              <a
                href={COMPANY_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {COMPANY_DATA.instagram}
              </a>
            </div>
          </div>
        </div>

        {/* Linha de Copyright Automático */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center sm:text-left">
          <p>
            © {currentYear} {COMPANY_DATA.name}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido para máxima performance e responsividade.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
