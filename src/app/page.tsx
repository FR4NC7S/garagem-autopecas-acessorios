import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoriesBento from "@/components/CategoriesBento";
import StoreShowcase from "@/components/StoreShowcase";
import Differentials from "@/components/Differentials";
import GoogleRating from "@/components/GoogleRating";
import DeliverySection from "@/components/DeliverySection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import InstagramSection from "@/components/InstagramSection";
import FinalCta from "@/components/FinalCta";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Header Sticky com Glassmorphism Dinâmico */}
      <Navbar />

      {/* Conteúdo Principal Estruturado */}
      <main className="flex-1 flex flex-col w-full overflow-x-hidden">
        {/* 1. Hero de Grande Impacto */}
        <Hero />

        {/* 2. Bento Grid de Categorias */}
        <CategoriesBento />

        {/* 3. Conheça a Garagem (Composição Editorial com as Fotos Reais) */}
        <StoreShowcase />

        {/* 4. Seção de Diferenciais (Fundo Claro Premium) */}
        <Differentials />

        {/* 5. Destaque Google (5,0 Estrelas - 52 Avaliações Públicas) */}
        <GoogleRating />

        {/* 6. Seção de Entrega em Rio Branco e Região */}
        <DeliverySection />

        {/* 7. Seção Sobre a Empresa */}
        <AboutSection />

        {/* 8. Localização e Horários de Atendimento */}
        <LocationSection />

        {/* 9. Seção Instagram */}
        <InstagramSection />

        {/* 10. CTA Final Forte */}
        <FinalCta />
      </main>

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />

      {/* Rodapé Oficial */}
      <Footer />
    </>
  );
}
