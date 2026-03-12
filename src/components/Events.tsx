import Link from "next/link";
import { events } from "@/data/events";

export default function Events() {
  return (
    <section id="events" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-3">
            Timeline
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#283142]">
            Events
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-[#c0392b]/30 ml-4">
            {events.map((event) => (
              <Link
                key={event.slug}
                href={`/events/${event.slug}`}
                className="relative pl-8 pb-8 last:pb-0 block group"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#c0392b] group-hover:bg-[#c0392b] transition-colors" />
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-bold text-[#283142] group-hover:text-[#c0392b] transition-colors">
                    {event.title}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      event.type === "On-site"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {event.type}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  {event.date} &middot; {event.location}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
