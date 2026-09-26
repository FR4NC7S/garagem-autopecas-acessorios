import Image from "next/image";
import { Check, Shield, MapPin, Store } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-20 lg:py-28 bg-[#090A0D] text-white overflow-hidden">
      {/* Detalhe de fundo */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna de Texto */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
              <Store className="w-4 h-4 text-red-500" />
              <span>Sobre a Empresa</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Garagem Autopeças <br />
              <span className="text-red-500">& Acessórios</span>
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              <p>
                A <strong className="text-white font-semibold">Garagem Autopeças e Acessórios</strong> atende
                motoristas e proprietários de veículos em Rio Branco oferecendo um mix completo de autopeças,
                baterias, lubrificantes e acessórios automotivos.
              </p>
              <p>
                Com loja física estruturada na Av. Sobral, 521, nosso compromisso é fornecer peças com procedência,
                atendimento rápido no balcão e facilidade de entrega para quem precisa resolver a manutenção do carro
                com total segurança e praticidade.
              </p>
            </div>

            {/* Pontos Chave da Atuação */}
            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base text-gray-200">
                  Mix focado nas necessidades reais de revisão mecânica, elétrica e estética automotiva.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base text-gray-200">
                  Localização acessível em Rio Branco na Av. Sobral, 521.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base text-gray-200">
                  Opção de entrega em Rio Branco e região para facilitar seu dia a dia.
                </span>
              </div>
            </div>

            {/* Linha de Rodapé do Bloco */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-red-500" />
                <span>Atendimento Sério</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Rio Branco - Acre</span>
              </div>
            </div>
          </div>

          {/* Coluna da Imagem Real com Detalhe Diagonal */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
              <div className="relative h-[380px] sm:h-[460px] w-full">
                <Image
                  src={COMPANY_DATA.images.interior}
                  alt="Interior e balcão oficial da Garagem Autopeças e Acessórios em Rio Branco"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlay de gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Detalhe diagonal vermelho estilizado */}
              <div className="absolute top-0 right-0 w-28 h-3 bg-red-600 transform -skew-x-12 shadow-red-glow-sm" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              {/* Etiqueta na foto */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/15">
                <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                  Balcão de Atendimento
                </p>
                <p className="text-sm font-semibold text-white mt-0.5">
                  Converse diretamente com quem entende do que seu carro precisa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
