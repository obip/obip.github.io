import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { boardMembers } from "@/data/steering-board";

export function generateStaticParams() {
  return boardMembers.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const member = boardMembers.find((m) => m.slug === slug);
    return { title: member ? `${member.name} | OMI` : "Steering Board | OMI" };
  });
}

export default async function BoardMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = boardMembers.find((m) => m.slug === slug);

  if (!member) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2332] text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#steering-board"
            className="text-gray-400 hover:text-white text-sm transition-colors mb-6 inline-flex items-center gap-1"
          >
            &larr; Steering Board
          </Link>
          <div className="flex items-center gap-5 mt-6">
            <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-[#c0392b]/30">
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">{member.name}</h1>
              <p className="text-[#c0392b] font-medium mt-1">{member.role}</p>
              <p className="text-gray-400 text-sm mt-0.5">{member.institution}</p>
              <a
                href={member.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm mt-1 inline-block transition-colors"
              >
                View profile &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#283142] mb-4">About</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{member.bio}</p>
        </div>
      </section>

      {/* Other members */}
      <section className="py-12 bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-[#283142] mb-4">
            Other Board Members
          </h3>
          <div className="flex flex-wrap gap-2">
            {boardMembers
              .filter((m) => m.slug !== slug)
              .map((m) => (
                <Link
                  key={m.slug}
                  href={`/steering-board/${m.slug}`}
                  className="bg-white border border-gray-200 hover:border-[#c0392b] px-4 py-2 rounded-lg text-sm font-medium text-[#283142] hover:text-[#c0392b] transition-colors"
                >
                  {m.name.split(" ").filter((p) => p.length > 2 && !p.includes(".")).join(" ")}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
