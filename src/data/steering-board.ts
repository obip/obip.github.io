export interface BoardMember {
  name: string;
  slug: string;
  role: string;
  institution: string;
  bio: string;
}

export const boardMembers: BoardMember[] = [
  {
    name: "Prof. Dr. med. Felix Nensa",
    slug: "felix-nensa",
    role: "Project Management",
    institution: "University Medical Center Essen",
    bio: "Felix Nensa leads the OMI project as principal investigator at the Institute for Artificial Intelligence in Medicine, University Hospital Essen. He oversees the overall project direction, strategic planning, and coordination across all work packages and partner institutions.",
  },
  {
    name: "Prof. Dr. biol. hom. Hans-Ulrich Prokosch",
    slug: "hans-ulrich-prokosch",
    role: "MIRACUM Consortium",
    institution: "University Hospital Erlangen",
    bio: "Hans-Ulrich Prokosch represents the MIRACUM consortium on the steering board. He heads the Institute of Medical Informatics, Biometry and Epidemiology at the University Hospital Erlangen and contributes expertise in medical informatics and interoperability standards.",
  },
  {
    name: "Prof. Dr. med. Martin Boeker",
    slug: "martin-boeker",
    role: "DIFUTURE Consortium",
    institution: "TUM School of Medicine and Health",
    bio: "Martin Boeker represents the DIFUTURE consortium. Based at the TUM School of Medicine and Health in Munich, he brings expertise in medical informatics and contributes to the reference client implementation (WP05).",
  },
  {
    name: "Prof. Dr. rer. nat. Fabian Prasser",
    slug: "fabian-prasser",
    role: "HiGHmed Consortium",
    institution: "Charite University Hospital Berlin",
    bio: "Fabian Prasser represents the HiGHmed consortium. He leads the Center of Health Data Sciences at the Charite in Berlin, bringing expertise in health data management, privacy-preserving data processing, and medical data integration.",
  },
  {
    name: "PD Dr. med. Sven Zenker",
    slug: "sven-zenker",
    role: "SMITH Consortium",
    institution: "University Hospital Bonn",
    bio: "Sven Zenker represents the SMITH consortium. Based at the Medical-Scientific Technology Development and Coordination Unit at the University Hospital Bonn, he contributes to the reference client implementation (WP05).",
  },
  {
    name: "Prof. Dr. med. Thomas Ganslandt",
    slug: "thomas-ganslandt",
    role: "WG Interoperability",
    institution: "University Hospital Erlangen",
    bio: "Thomas Ganslandt represents the MII Working Group on Interoperability. At the Institute of Medical Informatics in Erlangen, he ensures that OMI aligns with broader MII interoperability standards and data sharing frameworks.",
  },
  {
    name: "Dr. med. Andreas Bucher",
    slug: "andreas-bucher",
    role: "Radiology",
    institution: "University Hospital Frankfurt",
    bio: "Andreas Bucher represents the radiology perspective on the steering board. Based at the Institute of Diagnostic and Interventional Radiology at the University Hospital Frankfurt, he ensures clinical radiology requirements are addressed in the OMI platform.",
  },
];
