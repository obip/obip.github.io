import Image from "next/image";

interface NewsItem {
  title: string;
  date: string;
  summary: string;
  link?: string;
  linkLabel?: string;
  image?: string;
}

const news: NewsItem[] = [
  {
    title: "OMI WP7 presented at Medical Informatics Europe (MIE) 2026",
    date: "May 28, 2026",
    summary:
      "Timo Apfelbacher (FAU Erlangen) presented OMI Work Package 7 at MIE 2026, on developing and evaluating an AI Governance and Ethics Framework for university hospitals. The accompanying paper appears in Studies in Health Technology and Informatics, Vol. 336.",
    link: "https://doi.org/10.3233/SHTI260265",
    linkLabel: "Read the paper",
    image: "/images/news/mie-2026-wp7.jpg",
  },
  {
    title: "Project Secures Second Funding Phase!",
    date: "May 10, 2024",
    summary:
      "The OMI project has successfully advanced to a second funding phase, ensuring continued development of open medical inference protocols.",
  },
  {
    title: "DICOM WebAdapter",
    date: "Feb 29, 2024",
    summary:
      "New DICOM WebAdapter component released, providing RESTful access to legacy PACS systems.",
  },
  {
    title: "White Paper Published",
    date: "Feb 1, 2024",
    summary:
      "The OMI consortium has published a white paper outlining the project vision and technical architecture.",
  },
  {
    title: "Kick-Off Meeting",
    date: "Jul 27, 2023",
    summary:
      "The OMI project officially kicked off with an on-site meeting in Essen, bringing together all 16 partner institutions.",
  },
];

export default function News() {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-3">
            Latest Updates
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#283142]">
            News
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {news.map((item) => (
            <div
              key={item.title}
              className="bg-[#f8fafc] rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              {item.image && (
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <p className="text-[#c0392b] text-sm font-medium mb-2">
                {item.date}
              </p>
              <h3 className="text-lg font-bold text-[#283142] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.summary}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[#c0392b] text-sm font-medium hover:underline"
                >
                  {item.linkLabel ?? "Read more"} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
