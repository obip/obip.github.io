import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { events } from "@/data/events";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const event = events.find((e) => e.slug === slug);
    return { title: event ? `${event.title} | OMI` : "Event | OMI" };
  });
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2332] text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#events"
            className="text-gray-400 hover:text-white text-sm transition-colors mb-6 inline-flex items-center gap-1"
          >
            &larr; All Events
          </Link>
          <div className="flex items-center gap-3 mt-4 mb-4">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                event.type === "On-site"
                  ? "bg-green-500/20 text-green-300"
                  : "bg-blue-500/20 text-blue-300"
              }`}
            >
              {event.type}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            {event.title}
          </h1>
          <p className="text-gray-400 mt-3 text-lg">
            {event.date} &middot; {event.location}
          </p>
        </div>
      </section>

      {/* Photo */}
      {event.image && (
        <section className="bg-[#f8fafc]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={event.image}
                alt={`Photo from ${event.title}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Agenda */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#283142] mb-8">Agenda</h2>

          {event.days.map((day, dayIdx) => (
            <div key={dayIdx} className="mb-10 last:mb-0">
              {day.label && (
                <h3 className="text-lg font-bold text-[#c0392b] mb-4">
                  {day.label}
                </h3>
              )}
              <div className="space-y-1">
                {day.items.map((item, i) => {
                  const isBreak =
                    item.topic.toLowerCase().includes("break") ||
                    item.topic.toLowerCase().includes("coffee") ||
                    item.topic.toLowerCase().includes("lunch") ||
                    item.topic.toLowerCase().includes("arrival") ||
                    item.topic.toLowerCase().includes("photo");

                  return (
                    <div
                      key={i}
                      className={`flex gap-4 rounded-lg p-3 ${
                        isBreak
                          ? "bg-gray-50 text-gray-400"
                          : "bg-white hover:bg-[#f8fafc]"
                      }`}
                    >
                      <span className="text-sm font-mono text-gray-400 w-28 shrink-0 pt-0.5">
                        {item.time || "\u00A0"}
                      </span>
                      <div className="flex-1">
                        <p
                          className={`font-medium ${
                            isBreak ? "text-gray-400" : "text-[#283142]"
                          }`}
                        >
                          {item.topic}
                        </p>
                        {item.speaker && (
                          <p className="text-sm text-gray-500 mt-0.5">
                            {item.speaker}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
