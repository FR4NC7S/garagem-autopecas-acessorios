import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090A0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Garagem Autopeças e Acessórios | Rio Branco AC",
  description:
    "Autopeças, baterias, lubrificantes e acessórios automotivos em Rio Branco/AC. Consulte produtos e atendimento pelo WhatsApp.",
  keywords: [
    "autopeças rio branco",
    "peças para carros rio branco ac",
    "baterias rio branco",
    "lubrificantes rio branco",
    "acessórios automotivos acre",
    "garagem autopeças",
    "entrega autopeças acre",
  ],
  authors: [{ name: "Garagem Autopeças e Acessórios" }],
  creator: "Garagem Autopeças e Acessórios",
  publisher: "Garagem Autopeças e Acessórios",
  metadataBase: new URL("https://garagemautopecas.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Garagem Autopeças e Acessórios | Rio Branco AC",
    description:
      "Autopeças, baterias, lubrificantes e acessórios automotivos em Rio Branco/AC. Consulte produtos e atendimento pelo WhatsApp.",
    url: "https://garagemautopecas.com.br",
    siteName: "Garagem Autopeças e Acessórios",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/fachada.jpg",
        width: 1024,
        height: 768,
        alt: "Fachada da Loja Garagem Autopeças e Acessórios em Rio Branco - AC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garagem Autopeças e Acessórios | Rio Branco AC",
    description:
      "Autopeças, baterias, lubrificantes e acessórios automotivos em Rio Branco/AC. Consulte produtos e atendimento pelo WhatsApp.",
    images: ["/images/fachada.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: "Garagem Autopeças e Acessórios",
  image: "https://garagemautopecas.com.br/images/fachada.jpg",
  logo: "https://garagemautopecas.com.br/images/logo.png",
  description:
    "Venda de autopeças, baterias, lubrificantes e acessórios automotivos com loja física e entregas em Rio Branco e região.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Sobral, 521",
    addressLocality: "Rio Branco",
    addressRegion: "AC",
    addressCountry: "BR",
  },
  telephone: "+5568992078888",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "52",
    bestRating: "5.0",
    worstRating: "1.0",
  },
  sameAs: [
    "https://www.instagram.com/garagemautoac",
    "https://wa.me/5568992078888",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#090A0D] text-gray-100 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
