import Link from "next/link";
import Image from "next/image";
import { partners } from "@/data/partners";

const consortia = ["DIFUTURE", "SMITH", "HiGHmed", "MIRACUM"];

const consortiumColors: Record<string, string> = {
  Coordinator: "bg-[#c0392b] text-white",
  DIFUTURE: "bg-blue-100 text-blue-800",
  SMITH: "bg-green-100 text-green-800",
  HiGHmed: "bg-purple-100 text-purple-800",
  MIRACUM: "bg-amber-100 text-amber-800",
};

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Network
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#283142]">
            16 Partners across 4 Consortia
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Coordinated by the University Medical Center Essen, OMI brings
            together leading institutions from the Medical Informatics
            Initiative.
          </p>
        </div>

        {/* Consortia legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Coordinator", ...consortia].map((c) => (
            <span
              key={c}
              className={`px-4 py-1.5 rounded-full text-sm font-medium ${consortiumColors[c]}`}
            >
              {c}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map((partner) => (
            <Link
              key={partner.abbr}
              href={`/partners/${partner.slug}`}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100 block"
            >
              <div className="flex items-center justify-center h-16 mb-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
              <div className="flex items-start justify-between mb-2">
                <span className="text-lg font-bold text-[#283142]">
                  {partner.abbr}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${consortiumColors[partner.consortium]}`}
                >
                  {partner.consortium}
                </span>
              </div>
              <p className="text-sm text-gray-600 font-medium">{partner.name}</p>
              <p className="text-xs text-gray-400 mt-1">{partner.city}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
