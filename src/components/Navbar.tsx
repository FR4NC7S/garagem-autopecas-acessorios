"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { COMPANY_DATA } from "@/data/company";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Produtos", href: "#produtos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0F]/95 backdrop-blur-lg border-b border-white/[0.06] py-3"
            : "bg-gradient-to-b from-black/70 to-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="#inicio" aria-label="Garagem Autopeças - Início">
            <div className="relative w-52 sm:w-60 h-12 sm:h-14">
              <Image
                src={COMPANY_DATA.images.logo}
                alt="Garagem Autopeças"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 208px, 240px"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={COMPANY_DATA.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D32F2F] text-white text-sm font-semibold hover:bg-[#B71C1C] transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={COMPANY_DATA.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#D32F2F] text-white"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2.5 rounded-lg bg-white/[0.06] text-white"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <HiX className="w-5 h-5" /> : <HiOutlineMenuAlt3 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/80" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 w-[80%] max-w-xs h-full bg-[#0D0F14] border-l border-white/[0.06] p-6 flex flex-col transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
            <div className="relative w-40 h-10">
              <Image src={COMPANY_DATA.images.logo} alt="Garagem" fill className="object-contain object-left" />
            </div>
            <button onClick={() => setMenuOpen(false)} className="p-2 text-gray-400 hover:text-white" aria-label="Fechar">
              <HiX className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 mt-6 flex-1">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-[15px] font-medium text-gray-300 hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/[0.06]">
            <a
              href={COMPANY_DATA.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#D32F2F] text-white font-semibold text-center flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <p className="text-center text-xs text-gray-500 mt-3">{COMPANY_DATA.phoneDisplay}</p>
          </div>
        </div>
      </div>
    </>
  );
}
