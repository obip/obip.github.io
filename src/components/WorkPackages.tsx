import Link from "next/link";
import { workPackages } from "@/data/work-packages";

export default function WorkPackages() {
  return (
    <section id="work-packages" className="py-24 bg-[#1a2332] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Work Packages</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            The project is organized into 9 work packages spanning protocol
            specification, infrastructure implementation, governance, and
            evaluation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {workPackages.map((wp) => (
            <Link
              key={wp.id}
              href={`/work-package/${wp.slug}`}
              className="relative bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors block"
            >
              <span className="text-[#c0392b] font-mono font-bold text-sm">
                {wp.id}
              </span>
              <h3 className="text-lg font-bold mt-2 mb-3">{wp.title}</h3>
              <p className="text-gray-400 text-sm">
                <span className="text-gray-500">Lead:</span> {wp.lead}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
