import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoriesBento from "@/components/CategoriesBento";
import StoreShowcase from "@/components/StoreShowcase";
import Differentials from "@/components/Differentials";
import GoogleRating from "@/components/GoogleRating";
import LocationSection from "@/components/LocationSection";
import FinalCta from "@/components/FinalCta";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col w-full overflow-x-hidden">
        <Hero />
        <CategoriesBento />
        <Differentials />
        <StoreShowcase />
        <GoogleRating />
        <LocationSection />
        <FinalCta />
      </main>

      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
