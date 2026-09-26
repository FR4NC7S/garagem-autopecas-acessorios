import { HiOutlineMapPin, HiOutlineClock, HiOutlinePhone } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY_DATA } from "@/data/company";

export default function LocationSection() {
  return (
    <section id="localizacao" className="relative py-20 lg:py-24 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#C43A35] text-sm font-semibold uppercase tracking-wider mb-3">
            Localização
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Estamos em Rio Branco
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Info card */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-[#111318] border border-white/[0.06] flex flex-col justify-between">
            {/* Address */}
            <div>
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#C43A35]/10 text-[#C43A35] flex items-center justify-center shrink-0">
                  <HiOutlineMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Endereço</p>
                  <p className="text-lg font-bold text-white mt-0.5">{COMPANY_DATA.addressShort}</p>
                  <p className="text-sm text-gray-400">{COMPANY_DATA.city}</p>
                </div>
              </div>

              {/* Maps button */}
              <a
                href={COMPANY_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C43A35] hover:bg-[#A62B27] text-white font-semibold text-sm transition-colors mb-6"
              >
                <HiOutlineMapPin className="w-4 h-4" />
                Abrir no Google Maps
              </a>

              {/* Divider */}
              <div className="border-t border-white/[0.06] my-6" />

              {/* Hours */}
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineClock className="w-4 h-4 text-[#C43A35]" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Horários</h3>
              </div>

              <div className="space-y-2">
                {COMPANY_DATA.hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between p-3 rounded-lg bg-white/[0.03] text-sm">
                    <span className="text-gray-400">{item.days}</span>
                    <span className={`font-semibold ${item.time === "Fechado" ? "text-gray-600" : "text-white"}`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/[0.04] text-[#C43A35] flex items-center justify-center">
                <HiOutlinePhone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-gray-500">WhatsApp</p>
                <a
                  href={COMPANY_DATA.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white hover:text-[#C43A35] transition-colors"
                >
                  {COMPANY_DATA.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/[0.06] min-h-[380px] bg-[#111318]">
            <iframe
              src={COMPANY_DATA.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Garagem Autopeças"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
