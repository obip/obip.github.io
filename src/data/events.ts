export interface AgendaItem {
  time: string;
  topic: string;
  speaker?: string;
}

export interface EventDay {
  label?: string;
  items: AgendaItem[];
}

export interface Event {
  title: string;
  slug: string;
  date: string;
  location: string;
  type: "On-site" | "Online";
  image?: string;
  days: EventDay[];
}

export const events: Event[] = [
  {
    title: "11th Plenary Meeting",
    slug: "11-plenary-meeting",
    date: "Apr 23\u201324, 2026",
    location: "Erlangen",
    type: "On-site",
    days: [
      {
        label: "Thursday, Apr 23",
        items: [
          { time: "14:30", topic: "Arrival" },
          { time: "14:30\u201318:00", topic: "Plenary sessions (Day 1)" },
        ],
      },
      {
        label: "Friday, Apr 24",
        items: [
          { time: "09:00", topic: "Arrival" },
          { time: "09:00\u201312:15", topic: "Plenary sessions (Day 2)" },
          { time: "12:15", topic: "Event conclusion" },
        ],
      },
    ],
  },
  {
    title: "10th Plenary Meeting",
    slug: "10-plenary-meeting",
    date: "Jan 28, 2026",
    location: "Online",
    type: "Online",
    days: [
      {
        items: [
          { time: "10:00", topic: "Welcome & WP9 (Project Management)", speaker: "Obioma Pelka" },
          { time: "", topic: "WP1 (OMI Protocol Specification)", speaker: "Stefan Sigle" },
          { time: "", topic: "WP2 (ImagingStudy MII-extension)", speaker: "Lucas Mundo, Alexa Iancu" },
          { time: "", topic: "WP7 (AI Governance & Ethics)", speaker: "Timo Apfelbacher" },
          { time: "", topic: "WP4 (Reference Gateway Server)", speaker: "Jan Eil" },
          { time: "", topic: "WP5.1/5.2 (Reference Client)", speaker: "Stefan Sigle, Shura-Roman Stump" },
          { time: "", topic: "WP5.3 (Reference Client)", speaker: "Paul Kaftan, Gerda Girdziunaite" },
          { time: "", topic: "WP5.4 (Reference Client)", speaker: "Martin Boeker, Sven Zenker, Markus Budeus, Pier Caruso" },
          { time: "", topic: "WP5.7 (Reference Client)", speaker: "Sadat Chowdhury" },
          { time: "", topic: "WP6 (Service Registry)", speaker: "Dmitrii Seletkov, Tobias Susetzky" },
          { time: "", topic: "Evaluation Topic Group", speaker: "Multiple facilitators" },
          { time: "13:00", topic: "Open Discussion" },
        ],
      },
    ],
  },
  {
    title: "9th Plenary Meeting",
    slug: "9-plenary-meeting",
    date: "Oct 2, 2025",
    location: "Munich",
    type: "On-site",
    days: [
      {
        items: [
          { time: "08:00\u201308:45", topic: "Arrival & refreshments" },
          { time: "09:00", topic: "AP6: Service registry", speaker: "Tobias Susetzky, Dmitrii Seletkov" },
          { time: "09:45", topic: "AP5.1/5.2: OMI protocol implementation", speaker: "Stefan Sigle, Shura-Roman Stump, Simon Schweizer" },
          { time: "10:15", topic: "AP5.3: Image De-Identification", speaker: "Jan Eil" },
          { time: "10:30\u201311:15", topic: "Break" },
          { time: "11:15", topic: "AP5.4: Transfer Services Integration", speaker: "Martin Boeker, Markus Budeus, Sven Zenker, Pier Caruso" },
          { time: "11:45", topic: "General AP5 / Open discussion" },
          { time: "12:15\u201313:30", topic: "Break and group photo" },
          { time: "13:30", topic: "AP7: AI Governance and Ethics Framework", speaker: "Maria Christoforaki" },
          { time: "14:00", topic: "AP2: ImagingStudy specification", speaker: "Lucas Scherer" },
          { time: "14:30", topic: "AP1: Open Medical Inference Protocol specification", speaker: "Stefan Sigle" },
          { time: "15:00\u201315:40", topic: "Coffee Break" },
          { time: "15:40", topic: "AP4: Reference gateway server implementation", speaker: "Jan Eil" },
          { time: "16:15", topic: "AP5.7: QA User Interface", speaker: "Sadat Chowdhury" },
          { time: "17:00", topic: "End of event" },
        ],
      },
    ],
  },
  {
    title: "8th Plenary Meeting",
    slug: "8-plenary-meeting",
    date: "Jul 10, 2025",
    location: "Online",
    type: "Online",
    days: [
      {
        items: [
          { time: "13:00", topic: "Welcome & WP9 (Project Management)", speaker: "Obioma Pelka" },
          { time: "", topic: "WP1 (OMI Protocol Specification)", speaker: "Stefan Sigle" },
          { time: "", topic: "WP2 (ImagingStudy MII-extension)", speaker: "Lucas Mundo, Alexa Iancu" },
          { time: "", topic: "WP7 (AI Governance & Ethics)", speaker: "Timo Apfelbacher" },
          { time: "", topic: "WP3 (DICOMweb Adapter)", speaker: "Nicolas Kamzol" },
          { time: "", topic: "WP4 (Reference Gateway Server)", speaker: "Jan Eil" },
          { time: "", topic: "WP5.1/5.2 (Reference Client)", speaker: "Stefan Sigle, Shura-Roman Stump" },
          { time: "", topic: "WP5.3 (Reference Client)", speaker: "Paul Kaftan, Gerda Girdziunaite" },
          { time: "", topic: "WP5.4 (Reference Client)", speaker: "Martin Boeker, Sven Zenker, Markus Budeus, Pier Caruso" },
          { time: "", topic: "WP5.7 (Reference Client)", speaker: "Sadat Chowdhury" },
          { time: "", topic: "WP6 (Service Registry)", speaker: "Dmitrii Seletkov, Tobias Susetzky" },
          { time: "16:00", topic: "Open Discussion" },
        ],
      },
    ],
  },
  {
    title: "7th Plenary Meeting",
    slug: "7-plenary-meeting",
    date: "May 8\u20139, 2025",
    location: "Essen",
    type: "On-site",
    image: "/images/events/plenary-7-essen-2025.jpg",
    days: [
      {
        label: "Thursday, May 8",
        items: [
          { time: "14:00\u201315:00", topic: "Arrival & refreshments" },
          { time: "15:00", topic: "Welcome", speaker: "Felix Nensa" },
          { time: "15:05", topic: "Organisational matters", speaker: "Obioma Pelka" },
          { time: "15:10", topic: "AP4: Reference gateway server implementation", speaker: "Jan Eil" },
          { time: "15:50", topic: "AP6: Service registry", speaker: "Tobias Susetzky, Dmitrii Seletkov" },
          { time: "15:50\u201316:40", topic: "Break and group photo" },
          { time: "16:40", topic: 'Keynote: "AI Meets Regulation: Bridging the Divide for Drug Discovery"', speaker: "Jochen Lennerz" },
          { time: "17:30", topic: "End of Day 1" },
          { time: "18:30", topic: "Evening Event \u2013 Excursion Museum Folkwang" },
        ],
      },
      {
        label: "Friday, May 9",
        items: [
          { time: "08:30\u201309:00", topic: "Arrival & refreshments" },
          { time: "09:00", topic: "AP5.7: QA User Interface", speaker: "Sadat Chowdhury" },
          { time: "09:15", topic: "AP5.3: Image De-Identification", speaker: "Peter Neher" },
          { time: "09:30", topic: "AP5.1/5.2: OMI protocol implementation", speaker: "Stefan Sigle, Shura-Roman Stump, Simon Schweizer" },
          { time: "09:45", topic: "AP5.4: Transfer Services Integration", speaker: "Martin Boeker, Markus Budeus, Sven Zenker, Pier Caruso" },
          { time: "10:15\u201310:40", topic: "Break" },
          { time: "10:40", topic: "AP3: DICOMweb-Adapter", speaker: "Nicolas Kamzol" },
          { time: "11:00", topic: "AP7: AI Governance and Ethics Framework", speaker: "Timo Apfelbacher" },
          { time: "11:20", topic: "AP2: ImagingStudy specification", speaker: "Lucas Scherer" },
          { time: "11:40", topic: "AP1: OMI Protocol specification", speaker: "Stefan Sigle" },
          { time: "11:55", topic: "Outlook: Next milestones", speaker: "Felix Nensa" },
          { time: "12:00", topic: "End of event" },
        ],
      },
    ],
  },
  {
    title: "6th Plenary Meeting",
    slug: "6-plenary-meeting",
    date: "Feb 3, 2025",
    location: "Online",
    type: "Online",
    days: [
      {
        items: [
          { time: "14:00", topic: "Welcome & WP9 (Project Management)", speaker: "Obioma Pelka" },
          { time: "", topic: "WP1 (Specification of the OMI Protocol)", speaker: "Stefan Sigle, Patrick Werner" },
          { time: "", topic: "WP2 (ImagingStudy MII-extension module)", speaker: "Lucas Mundo, Alexa Iancu" },
          { time: "", topic: "WP7 (AI Governance and Ethics Framework)", speaker: "Timo Apfelbacher" },
          { time: "", topic: "WP3 (DICOMweb Adapter)", speaker: "Nicolas Kamzol" },
          { time: "", topic: "WP4 (Reference gateway server)", speaker: "Jan Eil" },
          { time: "", topic: "WP5 (Reference client)", speaker: "Martin Boeker, Sven Zenker, Stefan Sigle, Gerda Girdziunaite" },
          { time: "", topic: "WP6 (Service registry)", speaker: "Dmitrii Seletkov, Tobias Susetzky" },
          { time: "", topic: "Live Demo: OMI Dev-Prototype", speaker: "Stefan Sigle, Simon Tobias Schweizer" },
          { time: "17:00", topic: "Open Discussion" },
        ],
      },
    ],
  },
  {
    title: "5th Plenary Meeting",
    slug: "5-plenary-meeting",
    date: "Nov 5, 2024",
    location: "Online",
    type: "Online",
    days: [
      {
        items: [
          { time: "09:00", topic: "Welcome & WP9 (Project Management)", speaker: "Obioma Pelka" },
          { time: "", topic: "WP1 (OMI Protocol Specification)", speaker: "Stefan Sigle, Patrick Werner" },
          { time: "", topic: "WP2 (ImagingStudy MII-extension)", speaker: "Lucas Mundo, Alexa Iancu" },
          { time: "", topic: "WP7 (AI Governance & Ethics)", speaker: "Timo Apfelbacher" },
          { time: "", topic: "WP3 (DICOMweb Adapter)", speaker: "Nicolas Kamzol" },
          { time: "", topic: "WP5 (Reference Client)", speaker: "Martin Boeker, Sven Zenker, Stefan Sigle, Gerda Girdziunaite" },
          { time: "", topic: "WP4 (Reference Gateway Server)", speaker: "Jan Eil" },
          { time: "", topic: "WP6 (Service Registry)", speaker: "Dmitrii Seletkov, Tobias Susetzky" },
          { time: "13:00", topic: "Open Discussion" },
        ],
      },
    ],
  },
  {
    title: "4th Plenary Meeting",
    slug: "4-plenary-meeting",
    date: "Jul 1\u20132, 2024",
    location: "Erlangen",
    type: "On-site",
    image: "/images/events/plenary-4-erlangen-2024.jpg",
    days: [
      {
        label: "Monday, Jul 1",
        items: [
          { time: "13:30\u201314:30", topic: "Coffee & Snacks" },
          { time: "14:30", topic: "Welcoming remarks", speaker: "Prof. May, Prof. Prokosch (UKEr)" },
          { time: "14:40", topic: "OMI Project management update", speaker: "Felix Nensa" },
          { time: "14:45", topic: "Review of one year of OMI", speaker: "Felix Nensa, Obioma Pelka" },
          { time: "15:05", topic: 'Keynote: "AI in Healthcare \u2013 Practical Use and Legal Challenges"', speaker: "Philipp Mueller-Peltzer" },
          { time: "15:35", topic: "AP7 deliverable review & AI policy discussion", speaker: "Timo Apfelbacher, Prof. Prokosch" },
          { time: "15:55", topic: "AP1: FHIR specification publication", speaker: "Stefan Sigle, Patrick Werner" },
          { time: "16:15", topic: "Photo session" },
          { time: "16:25", topic: "Coffee break" },
          { time: "17:00", topic: "AP4: Gateway Server MVP presentation", speaker: "Jan Eil" },
          { time: "18:00", topic: "Day 1 concludes" },
          { time: "19:00", topic: "Evening event" },
        ],
      },
      {
        label: "Tuesday, Jul 2",
        items: [
          { time: "09:00", topic: "DICOM-to-FHIR metadata transformation discussion", speaker: "Prof. May" },
          { time: "09:30", topic: "AP2: Preliminary specification completion", speaker: "Lucas Scherer" },
          { time: "09:50", topic: "AP5: FHIR-based metadata annotation tool MVP", speaker: "PD Dr. Sven Zenker" },
          { time: "10:10", topic: "AP6: OMI Service Registry architecture", speaker: "Dmitrii Seletkov, Tobias Susetzky, Peter Pallaoro" },
          { time: "10:30", topic: "Interoperability for clinical AI applications", speaker: "Sven Kohle, Alexis Laugerette (Siemens Healthineers)" },
          { time: "11:15", topic: "Closing remarks", speaker: "Prof. Prokosch, Prof. May, Felix Nensa" },
          { time: "11:25", topic: "Coffee break" },
          { time: "11:50", topic: "Thematic group discussions" },
          { time: "12:15", topic: "Event conclusion" },
        ],
      },
    ],
  },
  {
    title: "3rd Plenary Meeting",
    slug: "3-plenary-meeting",
    date: "Apr 16, 2024",
    location: "Online",
    type: "Online",
    days: [
      {
        items: [
          { time: "14:00", topic: "Welcome", speaker: "Felix Nensa, Prof. Prokosch, Prof. Boeker, Prof. Braren" },
          { time: "", topic: "AP1: OMI Protocol Specification", speaker: "Stefan Sigle (MOLIT EU)" },
          { time: "", topic: "AP2: MII KDS Extension for Medical Imaging", speaker: "Lucas Scherer (UK Erlangen)" },
          { time: "", topic: "AP3: DICOMweb-Adapter", speaker: "Nicolas Kamzol (UK Essen)" },
          { time: "", topic: "AP4: Reference Gateway Server Implementation", speaker: "Jan Eil (UK Essen)" },
          { time: "", topic: "AP5: Reference Client Implementation", speaker: "Prof. Boeker (TUM), PD Dr. Zenker (UK Bonn)" },
          { time: "", topic: "AP6: Service Directory", speaker: "Dmitrii Seletkov, Tobias Susetzky (TU Munich)" },
          { time: "", topic: "AP7: AI Governance & Ethics Framework", speaker: "Timo Apfelbacher" },
          { time: "18:00", topic: "End" },
        ],
      },
    ],
  },
  {
    title: "2nd Plenary Meeting",
    slug: "2-plenary-meeting",
    date: "Jan 22\u201323, 2024",
    location: "Munich",
    type: "On-site",
    days: [
      {
        label: "Monday, Jan 22",
        items: [
          { time: "14:30\u201315:30", topic: "Coffee & Snacks / WP7 Stakeholder Meeting" },
          { time: "15:35", topic: "OMI Protocol: Literature review and compliance resources", speaker: "Dr. Stefan Sigle (MOLIT EU)" },
          { time: "16:05", topic: "DICOMweb Adapter", speaker: "Nicolas Kamzol (UME)" },
          { time: "16:20", topic: "OMI Service Registry", speaker: "Dmitrii Seletkov, Tobias Susetzky (TUM)" },
          { time: "16:40", topic: "Dissemination", speaker: "Dr. Obioma Pelka (UME)" },
          { time: "17:15\u201318:00", topic: "Break-out Sessions: Implementation and governance" },
          { time: "18:00\u201318:30", topic: "Break-out Results & Discussion" },
        ],
      },
      {
        label: "Tuesday, Jan 23",
        items: [
          { time: "08:30\u201309:00", topic: "Coffee & Snacks" },
          { time: "09:00", topic: "MII KDS Medical Imaging", speaker: "Prof. Prokosch, Lukas Scherer (UKEr)" },
          { time: "09:20\u201310:05", topic: "Break-out Sessions: OMI protocol and KDS modeling" },
          { time: "10:05\u201310:35", topic: "Break-out Results & Discussion" },
          { time: "11:10", topic: "Inference Server & AI Services", speaker: "Malte Groth (DeepShore)" },
          { time: "11:40", topic: "Governance: Stakeholder Meeting Results", speaker: "Prof. Prokosch, Timo Apfelbacher" },
        ],
      },
    ],
  },
  {
    title: "1st Plenary Meeting",
    slug: "1-plenary-meeting",
    date: "Nov 2, 2023",
    location: "Online",
    type: "Online",
    days: [
      {
        items: [
          { time: "16:00\u201319:00", topic: "1st online plenary meeting" },
        ],
      },
    ],
  },
  {
    title: "Kick-Off Meeting",
    slug: "kick-off-meeting",
    date: "Jul 27\u201328, 2023",
    location: "Essen",
    type: "On-site",
    image: "/images/events/kickoff-2023.jpg",
    days: [
      {
        label: "Thursday, Jul 27",
        items: [
          { time: "13:30\u201314:30", topic: "Coffee & Snacks" },
          { time: "14:30", topic: "Welcome & Introduction", speaker: "Nensa, Prokosch, Boeker, Braren" },
          { time: "14:45", topic: "OMI Overview", speaker: "Felix Nensa" },
          { time: "15:00", topic: "Application Scenario", speaker: "Hans-Ulrich Prokosch" },
          { time: "15:20", topic: "Reference-Client Implementation", speaker: "Sven Zenker" },
          { time: "15:30", topic: "OMI Protocol Specs", speaker: "Fegeler, Sigle" },
          { time: "15:50", topic: "DICOM/DICOMWeb/FHIR", speaker: "Nensa, Baldini" },
          { time: "16:00", topic: "Project Management", speaker: "Obioma Pelka" },
          { time: "16:00\u201316:30", topic: "Coffee Break" },
          { time: "16:30", topic: "Interoperability Work Group", speaker: "Thomas Ganslandt" },
          { time: "16:50", topic: "MII Core Data Set", speaker: "Mate Maros" },
          { time: "17:10\u201318:00", topic: "Open Discussion" },
        ],
      },
      {
        label: "Friday, Jul 28",
        items: [
          { time: "08:30\u201309:00", topic: "Coffee & Snacks" },
          { time: "09:00", topic: "AI Inference Tools", speaker: "Rene Hosch" },
          { time: "09:10", topic: "Data Sharing Framework", speaker: "Simon Schweizer" },
          { time: "09:20", topic: "AI Governance & Ethics", speaker: "Hans-Ulrich Prokosch" },
          { time: "09:45", topic: "RACOON Overview", speaker: "Bucher, Penzkofer" },
          { time: "10:05", topic: "Features Algorithms", speaker: "Rickmer Braren" },
          { time: "10:25\u201310:55", topic: "Coffee Break" },
          { time: "10:55", topic: "Commercial AI Perspective", speaker: "Welf Wustlich" },
          { time: "11:15\u201312:00", topic: "Open Discussion" },
          { time: "12:00\u201313:30", topic: "Lunch" },
        ],
      },
    ],
  },
  {
    title: "Pre Kick-Off Meeting",
    slug: "pre-kick-off-meeting",
    date: "Jun 19, 2023",
    location: "Online",
    type: "Online",
    days: [
      {
        items: [
          { time: "16:00", topic: "Welcome and Introduction", speaker: "Felix Nensa" },
          { time: "16:10", topic: "Introduction of the partners", speaker: "All" },
          { time: "16:58", topic: "Group picture" },
          { time: "17:00", topic: "OMI Project introduction", speaker: "Felix Nensa" },
          { time: "17:20\u201317:30", topic: "Break" },
          { time: "17:30", topic: "Presentation of the work packages", speaker: "PIs" },
          { time: "18:05", topic: "Organizational aspects", speaker: "Obi Pelka" },
          { time: "18:10", topic: "Preparation Kick-off", speaker: "Nensa, Braren, Boeker, Prokosch" },
          { time: "18:40\u201319:00", topic: "Discussions & Questions" },
        ],
      },
    ],
  },
];
