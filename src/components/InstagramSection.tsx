import Image from "next/image";
import { ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { COMPANY_DATA } from "@/data/company";

export default function InstagramSection() {
  const posts = [
    {
      id: 1,
      image: COMPANY_DATA.images.fachada,
      caption: "Loja aberta na Av. Sobral, 521! Venha conferir nosso estoque de autopeças e baterias.",
      likes: "128",
    },
    {
      id: 2,
      image: COMPANY_DATA.images.balcao,
      caption: "Variedade em lubrificantes e fluidos para a manutenção preventiva do seu veículo.",
      likes: "94",
    },
    {
      id: 3,
      image: COMPANY_DATA.images.interior,
      caption: "Atendimento no balcão e entregas em Rio Branco e região. Chame no WhatsApp!",
      likes: "162",
    },
  ];

  return (
    <section id="instagram" className="relative py-16 lg:py-20 bg-[#090A0D] text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-wider mb-2">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Rede Social</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Acompanhe a <span className="text-red-500">Garagem</span>
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Fique por dentro das novidades e produtos no nosso perfil oficial:{" "}
              <strong className="text-white font-semibold">{COMPANY_DATA.instagram}</strong>
            </p>
          </div>

          <a
            href={COMPANY_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-500 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-pink-600/20 transition-all duration-200 active:scale-95 shrink-0"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Ver Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid de Cards Simulando Publicações do Instagram com as Fotos Reais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={COMPANY_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden bg-[#13161F] border border-white/10 hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-1 block shadow-lg"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt="Post da Garagem no Instagram"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Tag de Instagram no topo */}
                <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-xs font-semibold text-white">
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                  <span>garagemautoac</span>
                </div>

                {/* Efeito Hover com Likes simulados */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5 fill-white text-white" />
                    <span>Ver</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                <span className="text-[11px] font-bold text-red-400 mt-2 block group-hover:underline">
                  Ver publicação oficial →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
