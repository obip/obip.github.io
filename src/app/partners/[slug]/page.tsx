import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { partners } from "@/data/partners";

const consortiumColors: Record<string, string> = {
  Coordinator: "bg-[#c0392b] text-white",
  DIFUTURE: "bg-blue-100 text-blue-800",
  SMITH: "bg-green-100 text-green-800",
  HiGHmed: "bg-purple-100 text-purple-800",
  MIRACUM: "bg-amber-100 text-amber-800",
};

export function generateStaticParams() {
  return partners.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const partner = partners.find((p) => p.slug === slug);
    return {
      title: partner ? `${partner.abbr} - ${partner.name} | OMI` : "Partner | OMI",
    };
  });
}

export default async function PartnerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const partner = partners.find((p) => p.slug === slug);

  if (!partner) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2332] text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#partners"
            className="text-gray-400 hover:text-white text-sm transition-colors mb-6 inline-flex items-center gap-1"
          >
            &larr; All Partners
          </Link>
          <div className="flex items-center gap-5 mt-4 mb-4">
            <div className="bg-white rounded-xl p-3 shrink-0">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={80}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold">{partner.abbr}</span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${consortiumColors[partner.consortium]}`}
              >
                {partner.consortium}
              </span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            {partner.name}
          </h1>
          <p className="text-gray-400 mt-2">{partner.city}, Germany</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#283142] mb-4">
            Research Focus
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            {partner.focus}
          </p>

          <h2 className="text-2xl font-bold text-[#283142] mb-6">
            Principal Investigators
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {partner.investigators.map((pi) => {
              const card = (
                <div className="bg-[#f8fafc] rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#c0392b]/10 flex items-center justify-center mb-4">
                    <span className="text-[#c0392b] font-bold text-lg">
                      {pi.name
                        .split(" ")
                        .filter((p) => p.length > 2 && !p.includes("."))
                        .slice(-1)[0]?.[0] || "?"}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#283142] mb-1">{pi.name}</h3>
                  <p className="text-gray-500 text-sm">{pi.role}</p>
                  {pi.url && (
                    <span className="text-[#c0392b] text-sm mt-2 inline-block">
                      View profile &rarr;
                    </span>
                  )}
                </div>
              );
              return pi.url ? (
                <a key={pi.name} href={pi.url} target="_blank" rel="noopener noreferrer">
                  {card}
                </a>
              ) : (
                <div key={pi.name}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other partners */}
      <section className="py-12 bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-[#283142] mb-4">
            Other Partners
          </h3>
          <div className="flex flex-wrap gap-2">
            {partners
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/partners/${p.slug}`}
                  className="bg-white border border-gray-200 hover:border-[#c0392b] px-4 py-2 rounded-lg text-sm font-medium text-[#283142] hover:text-[#c0392b] transition-colors"
                >
                  {p.abbr}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
