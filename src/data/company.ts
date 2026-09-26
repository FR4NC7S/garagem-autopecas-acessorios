export const COMPANY_DATA = {
  name: "Garagem Autopeças e Acessórios",
  shortName: "Garagem Autopeças",
  phoneDisplay: "(68) 99207-8888",
  phoneRaw: "5568992078888",
  instagram: "@garagemautoac",
  instagramUrl: "https://www.instagram.com/garagemautoac/",
  address: "Av. Sobral, 521, Rio Branco - AC",
  addressShort: "Av. Sobral, 521",
  city: "Rio Branco - AC",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Sobral,+521+-+Rio+Branco+-+AC",
  // Google Maps embed URL para exibição segura sem necessidade de API key paga
  mapsEmbedUrl: "https://maps.google.com/maps?q=Av.+Sobral,+521+-+Rio+Branco+-+AC&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleRating: {
    score: "5,0",
    reviewCount: 52,
    badge: "Quem compra, recomenda",
  },
  hours: [
    { days: "Segunda a sexta", time: "08:00 às 17:00" },
    { days: "Sábado", time: "08:00 às 12:00" },
    { days: "Domingo", time: "Fechado" },
  ],
  whatsappDefaultMsg: "Olá, encontrei o site da Garagem Autopeças e gostaria de consultar uma peça.",
  getWhatsAppUrl: (customMsg?: string) => {
    const text = encodeURIComponent(
      customMsg || "Olá, encontrei o site da Garagem Autopeças e gostaria de consultar uma peça."
    );
    return `https://wa.me/5568992078888?text=${text}`;
  },
  images: {
    logo: "/images/logo.png",
    fachada: "/images/fachada.jpg",
    balcao: "/images/balcao-produtos.jpg",
    interior: "/images/interior-amplo.jpg",
  },
};
