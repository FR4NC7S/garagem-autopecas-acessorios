"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Previne scroll do body quando menu mobile estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Produtos", href: "#produtos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Localização", href: "#localizacao" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#090A0D]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="#inicio"
              className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-600 rounded-lg p-1"
              aria-label="Garagem Autopeças e Acessórios - Início"
            >
              <div className="relative w-44 sm:w-52 h-10 sm:h-12">
                <Image
                  src={COMPANY_DATA.images.logo}
                  alt="Garagem Autopeças e Acessórios"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 176px, 208px"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação Principal">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={COMPANY_DATA.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 text-white font-semibold text-sm shadow-md shadow-red-600/30 hover:bg-red-500 hover:shadow-red-600/50 transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Falar no WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Actions: WhatsApp Icon + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={COMPANY_DATA.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-red-600 text-white shadow-sm hover:bg-red-500 transition-colors"
                aria-label="Falar no WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-[#0D0F14] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="relative w-36 h-8">
                <Image
                  src={COMPANY_DATA.images.logo}
                  alt="Garagem Autopeças"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-3 mt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 active:bg-red-600/20 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href={COMPANY_DATA.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </a>

            <div className="text-center text-xs text-gray-400 pt-2">
              <p>Av. Sobral, 521 - Rio Branco/AC</p>
              <p className="mt-1 text-gray-500">{COMPANY_DATA.phoneDisplay}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
