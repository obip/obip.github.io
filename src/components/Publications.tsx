const publications = [
  {
    title:
      "Democratizing AI in Healthcare with Open Medical Inference (OMI): Protocols, Data Exchange, and AI Integration",
    authors:
      "O. Pelka, S. Sigle, P. Werner, S. T. Schweizer, A. Iancu, L. Scherer, N. A. Kamzol, J. H. Eil, T. Apfelbacher, D. Seletkov, T. Susetzky, M. S. May, A. M. Bucher, C. Fegeler, M. Boeker, R. Braren, H.-U. Prokosch, F. Nensa",
    year: "2026",
    doi: "10.1055/a-2651-6653",
    type: "Journal Article",
    journal: "RoFo",
  },
  {
    title:
      "OMI Meets RACOON: Integration von IT-Infrastrukturen aus Medizinischer Informatik und Radiologie",
    authors: "H.-U. Prokosch, F. Nensa, T. Penzkofer",
    year: "2024",
    doi: "10.3205/24gmds230",
    type: "Conference Paper",
  },
  {
    title:
      "A Governance Framework for the Implementation and Operation of AI Applications in a University Hospital",
    authors: "T. Apfelbacher, S. E. Kocman, H.-U. Prokosch, J. Christoph",
    year: "2024",
    doi: "10.3233/shti240527",
    type: "Conference Paper",
  },
  {
    title:
      "Bridging the Gap Between (AI-) Services and Their Application in Research and Clinical Settings Through Interoperability: the OMI-Protocol",
    authors:
      "S. Sigle, P. Werner, S. Schweizer, L. Caldeira, R. Hosch, M. Dyrba, C. Fegeler",
    year: "2024",
    doi: "10.1007/978-3-031-28241-6-64",
    type: "Conference Paper",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-3">
            Research
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#283142]">
            Publications
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {publications.map((pub) => (
            <div
              key={pub.doi}
              className="bg-[#f8fafc] rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#c0392b]"
            >
              <span className="inline-block bg-[#ffe6e6] text-[#c0392b] text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                {pub.type} &middot; {pub.year}
              </span>
              <h3 className="text-lg font-bold text-[#283142] mb-2">
                {pub.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3">{pub.authors}</p>
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c0392b] text-sm font-medium hover:underline"
              >
                DOI: {pub.doi} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
