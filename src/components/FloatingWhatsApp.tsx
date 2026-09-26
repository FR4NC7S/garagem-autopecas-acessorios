"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Atendimento rápido pelo WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40"
    >
      <a
        href={COMPANY_DATA.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Garagem Autopeças pelo WhatsApp"
        className="group relative flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-green-950/40 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 p-3.5 sm:px-5 sm:py-3.5"
      >
        {/* Efeito sutil de ping/pulso */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-300" />
        </span>

        {/* Ícone */}
        <MessageCircle className="w-6 h-6 shrink-0 fill-current" />

        {/* Texto exibido apenas em telas maiores (desktop), compacto no mobile */}
        <span className="hidden sm:inline-block ml-2 text-sm font-bold tracking-wide">
          Consultar peça
        </span>
      </a>
    </aside>
  );
}
