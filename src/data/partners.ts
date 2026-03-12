export interface Partner {
  name: string;
  abbr: string;
  city: string;
  consortium: string;
  slug: string;
  investigators: { name: string; role: string }[];
  focus: string;
}

export const partners: Partner[] = [
  {
    name: "University Medical Center Essen",
    abbr: "UME",
    city: "Essen",
    consortium: "Coordinator",
    slug: "ume",
    investigators: [
      { name: "Prof. Dr. med. Felix Nensa", role: "Institute for Artificial Intelligence in Medicine" },
      { name: "Prof. Dr. med. Dr. rer. nat. Jens Kleesiek", role: "Institute for Artificial Intelligence in Medicine" },
      { name: "Tobias Brieden", role: "Data Integration Center" },
    ],
    focus: "Artificial intelligence in medicine and medical data integration",
  },
  {
    name: "TUM School of Medicine and Health",
    abbr: "TUM",
    city: "Munich",
    consortium: "DIFUTURE",
    slug: "tum",
    investigators: [
      { name: "Prof. Dr. med. Rickmer Braren", role: "Institute of Diagnostic and Interventional Radiology" },
      { name: "Prof. Dr. Martin Boeker", role: "TUM School of Medicine and Health" },
    ],
    focus: "Diagnostic and interventional radiology, AI in medicine, medical informatics",
  },
  {
    name: "University Hospital Erlangen",
    abbr: "UKEr",
    city: "Erlangen",
    consortium: "MIRACUM",
    slug: "uker",
    investigators: [
      { name: "Prof. Dr. Hans-Ulrich Prokosch", role: "Institute of Medical Informatics, Biometry and Epidemiology" },
      { name: "Prof. Dr. med. Thomas Ganslandt", role: "Institute of Medical Informatics, Biometry and Epidemiology" },
      { name: "Prof. Dr. med. Matthias May", role: "Institute of Diagnostic and Interventional Radiology" },
    ],
    focus: "Medical informatics, diagnostic and interventional radiology",
  },
  {
    name: "Charite University Hospital Berlin",
    abbr: "CHA",
    city: "Berlin",
    consortium: "HiGHmed",
    slug: "cha",
    investigators: [
      { name: "Prof. Dr. med. Tobias Penzkofer", role: "Center of Diagnostic and Interventional Radiology and Nuclear Medicine" },
      { name: "Prof. Dr. Fabian Prasser", role: "Center of Health Data Sciences" },
    ],
    focus: "Diagnostic and interventional radiology, nuclear medicine, health data sciences",
  },
  {
    name: "University Hospital Bonn",
    abbr: "UKB",
    city: "Bonn",
    consortium: "SMITH",
    slug: "ukb",
    investigators: [
      { name: "Prof. Dr. med. Ulrike Attenberger", role: "Director, Institute of Diagnostic and Interventional Radiology" },
      { name: "PD Dr. med. Sven Zenker", role: "Medical-Scientific Technology Development and Coordination Unit" },
    ],
    focus: "Medical imaging, diagnostic and interventional radiology, healthcare IT",
  },
  {
    name: "University Hospital Cologne",
    abbr: "UKK",
    city: "Cologne",
    consortium: "HiGHmed",
    slug: "ukk",
    investigators: [
      { name: "PD Dr. med. Daniel Pinto Dos Santos", role: "Institute of Diagnostic and Interventional Radiology" },
      { name: "Prof. Dr. Oya Beyan", role: "Medical Informatics Department" },
    ],
    focus: "Diagnostic and interventional radiology, medical informatics",
  },
  {
    name: "University Hospital Freiburg",
    abbr: "UKFr",
    city: "Freiburg",
    consortium: "MIRACUM",
    slug: "ukfr",
    investigators: [
      { name: "Prof. Dr. med. Elmar Kotter", role: "Institute of Diagnostic and Interventional Radiology" },
      { name: "Dr. Julius Wehrle", role: "Data Integration Center" },
    ],
    focus: "Medical informatics, data integration",
  },
  {
    name: "University Hospital Frankfurt",
    abbr: "UKF",
    city: "Frankfurt",
    consortium: "MIRACUM",
    slug: "ukf",
    investigators: [
      { name: "Prof. Dr. Holger Storf", role: "Institute for Medical Informatics" },
      { name: "Dr. med. Andreas Bucher", role: "Institute of Diagnostic and Interventional Radiology" },
    ],
    focus: "Medical informatics, diagnostic and interventional radiology",
  },
  {
    name: "Hannover Medical School",
    abbr: "MHH",
    city: "Hannover",
    consortium: "HiGHmed",
    slug: "mhh",
    investigators: [
      { name: "Dr. med. Hinrich Winther", role: "Institute of Diagnostic and Interventional Radiology" },
      { name: "Prof. Dr.-Ing. Steffen Oeltze-Jafra", role: "Peter L. Reichertz Institute for Medical Informatics" },
    ],
    focus: "Machine learning in radiology, medical informatics",
  },
  {
    name: "MOLIT Institute for Personalised Medicine",
    abbr: "MOLIT",
    city: "Heilbronn",
    consortium: "HiGHmed",
    slug: "molit",
    investigators: [
      { name: "Dr. rer. medic. Stefan Sigle", role: "MOLIT Institute" },
    ],
    focus: "Personalised medicine",
  },
  {
    name: "University Hospital Wuerzburg",
    abbr: "UKW",
    city: "Wuerzburg",
    consortium: "HiGHmed",
    slug: "ukw",
    investigators: [
      { name: "Prof. Dr. med. Bettina Baessler", role: "Institute of Diagnostic and Interventional Radiology" },
      { name: "Prof. Dr. Rudiger Pryss", role: "Institute for Clinical Epidemiology and Biometry" },
    ],
    focus: "Diagnostic radiology, clinical epidemiology and biometry",
  },
  {
    name: "University Medical Center Rostock",
    abbr: "UMR",
    city: "Rostock",
    consortium: "SMITH",
    slug: "umr",
    investigators: [
      { name: "Prof. Dr. med. Marc-Andre Weber", role: "Institute of Diagnostic and Interventional Radiology, Pediatric Radiology and Neuroradiology" },
      { name: "Dr. rer. hum. Martin Dyrba", role: "German Center for Neurodegenerative Diseases (DZNE)" },
    ],
    focus: "Radiology, neurodegenerative disease research",
  },
  {
    name: "University Hospital Heidelberg",
    abbr: "UKHD",
    city: "Heidelberg",
    consortium: "HiGHmed",
    slug: "ukhd",
    investigators: [
      { name: "Dr. rsc. hum. Marco Nolden", role: "DKFZ German Cancer Research Center" },
      { name: "Prof. Dr. Klaus Maier-Hein", role: "DKFZ German Cancer Research Center" },
    ],
    focus: "Medical informatics, AI in medicine, cancer research",
  },
  {
    name: "University Hospital Ulm",
    abbr: "UKU",
    city: "Ulm",
    consortium: "DIFUTURE",
    slug: "uku",
    investigators: [
      { name: "Prof. Dr. Hans Kestler", role: "Institute for Bioinformatics and Systems Biology" },
      { name: "Prof. Dr. med. Meinrad Beer", role: "Institute of Diagnostic and Interventional Radiology" },
    ],
    focus: "Bioinformatics, systems biology, diagnostic radiology",
  },
  {
    name: "University Hospital Duesseldorf",
    abbr: "UKD",
    city: "Duesseldorf",
    consortium: "SMITH",
    slug: "ukd",
    investigators: [
      { name: "PD Dr. med. Christian Rubbert", role: "Institute of Diagnostic and Interventional Radiology, Neuroradiology" },
    ],
    focus: "Diagnostic and interventional radiology, neuroradiology",
  },
  {
    name: "Heilbronn University of Applied Sciences",
    abbr: "HHN",
    city: "Heilbronn",
    consortium: "DIFUTURE",
    slug: "hhn",
    investigators: [
      { name: "Prof. Dr. Christian Fegeler", role: "Faculty of Informatics" },
    ],
    focus: "Medical informatics",
  },
];
