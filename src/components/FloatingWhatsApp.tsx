"use client";

import { FaWhatsapp } from "react-icons/fa";
import { COMPANY_DATA } from "@/data/company";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40"
    >
      <a
        href={COMPANY_DATA.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="group flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl transition-all p-3.5 sm:px-5 sm:py-3.5"
      >
        <FaWhatsapp className="w-6 h-6" />
        <span className="hidden sm:inline text-sm font-semibold">
          Consultar peça
        </span>
      </a>
    </aside>
  );
}
