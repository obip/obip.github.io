"use client";

import { useState } from "react";

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
    abstract:
      "The integration of artificial intelligence (AI) into healthcare is transforming clinical decision-making, patient outcomes, and workflows. AI inference applies trained models to new data, with cloud infrastructures enabling scalable deployment. The OMI platform democratizes AI access through open protocols and standardized data formats. It integrates standards like FHIR and DICOMweb to ensure interoperability between healthcare institutions and AI services while promoting ethical AI use through governance frameworks addressing privacy, transparency, and fairness. OMI's implementation is structured into work packages addressing technical and ethical dimensions, including expanding the Medical Informatics Initiative Core Dataset for medical imaging, developing infrastructure for AI inference, and creating an open-source DICOMweb adapter for legacy systems.",
  },
  {
    title:
      "OMI Meets RACOON: Integration von IT-Infrastrukturen aus Medizinischer Informatik und Radiologie",
    authors: "H.-U. Prokosch, F. Nensa, T. Penzkofer",
    year: "2024",
    doi: "10.3205/24gmds230",
    type: "Conference Paper",
    abstract:
      "OMI (Open Medical Inference) and RACOON (Die Radiologie Kooperation in NUM) are projects from the Medical Informatics Initiative and the Network University Medicine. RACOON aims to establish a nationwide infrastructure for structured collection of radiological data, while OMI creates a methodology platform for artificial intelligence applications in medicine. The projects collaborate to integrate RACOON infrastructure nodes with Medical Informatics Initiative data integration centers, enabling radiological imaging data to combine with clinical data for developing new AI algorithms and supporting federated networks of AI users and providers.",
  },
  {
    title:
      "A Governance Framework for the Implementation and Operation of AI Applications in a University Hospital",
    authors: "T. Apfelbacher, S. E. Kocman, H.-U. Prokosch, J. Christoph",
    year: "2024",
    doi: "10.3233/shti240527",
    type: "Conference Paper",
    abstract:
      "Artificial intelligence (AI) is becoming increasingly important in everyday life and medical care, with a notable gap between AI development in medicine and its practical implementation in university hospitals. The researchers aimed to develop a governance framework to guide the procurement and implementation of AI applications in university hospitals. Seven role-play expert interviews were conducted with interviewees from two university hospitals, simulating realistic AI system implementation scenarios. A detailed governance framework was developed, divided into sections covering general considerations, system selection criteria, and implementation.",
  },
  {
    title:
      "Bridging the Gap Between (AI-) Services and Their Application in Research and Clinical Settings Through Interoperability: the OMI-Protocol",
    authors:
      "S. Sigle, P. Werner, S. Schweizer, L. Caldeira, R. Hosch, M. Dyrba, C. Fegeler",
    year: "2024",
    doi: "10.34657/13458",
    type: "Whitepaper",
    abstract:
      "The Open Medical Inference (OMI) Protocol addresses the challenge of deploying AI-based inference services across institutional boundaries in research and clinical settings. The protocol establishes an interoperable registry that enhances findability, accessibility, interoperability, and reusability of AI algorithms as remote services. Key features include a generic information model derived from business process modeling of typical inference workflows, with FHIR resources identified to represent AI-based services. Though demonstrated initially through radiology use cases, the protocol is designed for generalization to other medical domains.",
  },
];

export default function Publications() {
  const [expandedDoi, setExpandedDoi] = useState<string | null>(null);

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
              className="bg-[#f8fafc] rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#c0392b] cursor-pointer"
              onClick={() =>
                setExpandedDoi(expandedDoi === pub.doi ? null : pub.doi)
              }
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="inline-block bg-[#ffe6e6] text-[#c0392b] text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                    {pub.type} &middot; {pub.year}
                  </span>
                  <h3 className="text-lg font-bold text-[#283142] mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{pub.authors}</p>
                </div>
                <span className="text-gray-400 ml-4 mt-1 text-lg flex-shrink-0">
                  {expandedDoi === pub.doi ? "\u25B2" : "\u25BC"}
                </span>
              </div>

              {expandedDoi === pub.doi && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  {pub.abstract && (
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {pub.abstract}
                    </p>
                  )}
                  {"journal" in pub && pub.journal && (
                    <p className="text-gray-500 text-sm mb-2">
                      <span className="font-medium text-[#283142]">Journal:</span>{" "}
                      {pub.journal}
                    </p>
                  )}
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c0392b] text-sm font-medium hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    DOI: {pub.doi} &rarr;
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
