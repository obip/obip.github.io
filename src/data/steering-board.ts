export interface BoardMember {
  name: string;
  slug: string;
  role: string;
  institution: string;
  image: string;
  url: string;
  bio: string;
}

export const boardMembers: BoardMember[] = [
  {
    name: "Prof. Dr. med. Felix Nensa",
    slug: "felix-nensa",
    role: "Project Management",
    institution: "University Medical Center Essen",
    image: "/images/board/felix-nensa.jpg",
    url: "https://ikim.uk-essen.de",
    bio: "Felix Nensa is a Professor at the Institute for Artificial Intelligence in Medicine (IKIM) at the University Medical Center Essen. He leads research dedicated to creating machine learning-driven solutions for challenges in medical imaging and serves as a senior consultant radiologist at the Institute for Diagnostic and Interventional Radiology and Neuroradiology.",
  },
  {
    name: "Prof. Dr. biol. hom. Hans-Ulrich Prokosch",
    slug: "hans-ulrich-prokosch",
    role: "MIRACUM Consortium",
    institution: "University Hospital Erlangen",
    image: "/images/board/ulli-prokosch.jpeg",
    url: "https://www.imi.med.fau.de/person/prof-dr-hans-ulrich-prokosch/",
    bio: "Ulli Prokosch is the Director of the Erlangen-N\u00fcrnberg Chair of Medical Informatics and the Chief Information Officer of Erlangen University Hospital. Within the Medical Informatics Initiative he coordinates the MIRACUM consortium, as well as the MIDIA-Hub and the FDPG+ Project. His scientific focus in the last decade was on large-scale data sharing initiatives and complex IT infrastructures for medical research.",
  },
  {
    name: "Prof. Dr. med. Martin Boeker",
    slug: "martin-boeker",
    role: "DIFUTURE Consortium",
    institution: "TUM School of Medicine and Health",
    image: "/images/board/martin-boeker.jpeg",
    url: "https://www.professoren.tum.de/boeker-martin",
    bio: "Prof. Dr. M.C.Sc. Martin Boeker, an experienced scientist, specialized in medical biometry and statistics at the Institute of Medical Biometry and Statistics (IMBI) at the University Medical Center Freiburg after his time as a research assistant at the Hannover Medical School. Since 2010, he has headed the Department of Medical Informatics and Medical Data Science at IMBI.",
  },
  {
    name: "Prof. Dr. rer. nat. Fabian Prasser",
    slug: "fabian-prasser",
    role: "HiGHmed Consortium",
    institution: "Charite University Hospital Berlin",
    image: "/images/board/fabian-prasser.jpg",
    url: "https://www.bihealth.org/de/forschung/arbeitsgruppe/ag-prasser-medizininformatik",
    bio: "Fabian Prasser holds the position of a Professor of Medical Informatics at Charit\u00e9 and chairs the Medical Informatics Group at the Berlin Institute of Health. Fabian is interested in innovative approaches to health data integration, data sharing and privacy-enhancing technologies with applications in medical research. He is involved in a wide variety of projects under the umbrella of the German Medical Informatics Initiative.",
  },
  {
    name: "Prof. Dr. med. Sven Zenker",
    slug: "sven-zenker",
    role: "SMITH Consortium",
    institution: "University Hospital Bonn",
    image: "/images/board/sven-zenker.jpg",
    url: "https://www.ukbonn.de/ueber-uns/stabsstellen/mwtek/",
    bio: "Sven Zenker is the medical director of the Medical-Scientific Technology Development and Coordination Unit of the University Hospital Bonn. He is the current President of the Society for Complex Acute Illness (SCAI) and serves as Chairman of the Expert Panel Medical Devices \u201cRespiratory system, anaesthesiology, intensive care\u201d of the European Commission.",
  },
  {
    name: "Prof. Dr. med. Thomas Ganslandt",
    slug: "thomas-ganslandt",
    role: "WG Interoperability",
    institution: "University Hospital Erlangen",
    image: "/images/board/thomas-ganslandt.png",
    url: "https://www.imi.med.fau.de/person/prof-dr-thomas-ganslandt/",
    bio: "Thomas Ganslandt is a professor for Medical Data Science at the Friedrich-Alexander University Erlangen-N\u00fcrnberg and Chief Medical Information Officer at Universit\u00e4tsklinikum Erlangen since 2021. He previously held the professorship for Medical Informatics at the Mannheim Medical Faculty of Heidelberg University from 2018 to 2021.",
  },
  {
    name: "Dr. med. Andreas Bucher",
    slug: "andreas-bucher",
    role: "Radiology",
    institution: "University Hospital Frankfurt",
    image: "/images/board/andi-bucher.jpeg",
    url: "https://radiologie-uni-frankfurt.de/institute/our_team/index_eng.html",
    bio: "Dr. Andreas Bucher is a senior physician at the Institute of Diagnostic and Interventional Radiology and Head of the Artificial Intelligence Research Unit at the Center of Radiology at Frankfurt University Hospital. The radiology specialist is project coordinator of the RACOON infrastructure project, the radiology cooperation at the NUM.",
  },
];
