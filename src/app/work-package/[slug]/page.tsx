import { notFound } from "next/navigation";
import Link from "next/link";
import { workPackages } from "@/data/work-packages";

export function generateStaticParams() {
  return workPackages.map((wp) => ({ slug: wp.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const wp = workPackages.find((w) => w.slug === slug);
    return { title: wp ? `${wp.id} - ${wp.title} | OMI` : "Work Package | OMI" };
  });
}

export default async function WorkPackagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const wp = workPackages.find((w) => w.slug === slug);

  if (!wp) notFound();

  const wpIndex = workPackages.findIndex((w) => w.slug === slug);
  const prev = wpIndex > 0 ? workPackages[wpIndex - 1] : null;
  const next = wpIndex < workPackages.length - 1 ? workPackages[wpIndex + 1] : null;

  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2332] text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#work-packages"
            className="text-gray-400 hover:text-white text-sm transition-colors mb-6 inline-flex items-center gap-1"
          >
            &larr; All Work Packages
          </Link>
          <div className="flex items-center gap-3 mt-4 mb-4">
            <span className="text-[#c0392b] font-mono font-bold text-lg">
              {wp.id}
            </span>
            <span className="bg-white/10 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
              {wp.tag}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            {wp.title}
          </h1>
          <p className="text-gray-400 mt-4">
            <span className="text-gray-500">Lead:</span> {wp.lead}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#283142] mb-4">Description</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-12">
            {wp.description}
          </p>

          <h2 className="text-2xl font-bold text-[#283142] mb-6">Objectives</h2>
          <div className="space-y-4">
            {wp.objectives.map((obj, i) => (
              <div
                key={i}
                className="flex gap-4 bg-[#f8fafc] rounded-xl p-5 border-l-4 border-[#c0392b]"
              >
                <span className="text-[#c0392b] font-bold text-lg shrink-0">
                  {i + 1}.
                </span>
                <p className="text-gray-600">{obj}</p>
              </div>
            ))}
          </div>

          {wp.downloads && wp.downloads.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-[#283142] mb-6 mt-12">
                Downloads
              </h2>
              <div className="space-y-3">
                {wp.downloads.map((dl) => (
                  <a
                    key={dl.url}
                    href={dl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#f8fafc] rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-shadow group"
                  >
                    <svg
                      className="w-8 h-8 text-[#c0392b] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    <span className="text-[#283142] font-medium group-hover:text-[#c0392b] transition-colors">
                      {dl.label}
                    </span>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          {prev ? (
            <Link
              href={`/work-package/${prev.slug}`}
              className="text-[#283142] hover:text-[#c0392b] transition-colors"
            >
              <span className="text-sm text-gray-400">&larr; Previous</span>
              <br />
              <span className="font-bold">
                {prev.id}: {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/work-package/${next.slug}`}
              className="text-right text-[#283142] hover:text-[#c0392b] transition-colors"
            >
              <span className="text-sm text-gray-400">Next &rarr;</span>
              <br />
              <span className="font-bold">
                {next.id}: {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </>
  );
}
