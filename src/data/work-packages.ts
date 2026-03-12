export interface Download {
  label: string;
  url: string;
}

export interface WorkPackage {
  id: string;
  slug: string;
  title: string;
  lead: string;
  tag: string;
  description: string;
  objectives: string[];
  downloads?: Download[];
}

export const workPackages: WorkPackage[] = [
  {
    id: "WP01",
    slug: "wp01",
    title: "Specification of the Open Medical Inference Protocol",
    lead: "MOLIT",
    tag: "Specification",
    description:
      "Develops specifications for an open, neutral, distributed, and secure data exchange system built on MII infrastructure. Focuses on defining protocols and data formats enabling semantically interoperable peer-to-peer sharing of multimodal healthcare data for remote AI inference applications.",
    objectives: [
      "Open access publication of a whitepaper on an open, fair, distributed, and secure data exchange for remote medical AI services.",
      "Publication of an iteratively created OMI FHIR Implementation Guide on a suitable platform (e.g. Simplifier.net).",
    ],
  },
  {
    id: "WP02",
    slug: "wp02",
    title: "Specification of the Medical Imaging Extension of the MII CDS",
    lead: "University Hospital Erlangen",
    tag: "Specification",
    description:
      "Extends the MII Core Data Set to encompass medical imaging, utilizing FHIR standards for describing medical image datasets and AI-derived metadata such as structured reports. A key deliverable involves creating a synthetic corpus pairing clinical findings with lay translations and summaries.",
    objectives: [
      "Contribute to establishing a medical imaging component within the MII core dataset framework.",
      "Define input requirements for the OMI protocol specific to medical imaging applications.",
      "Establish standards for documenting artificially-generated findings in medical imaging contexts.",
    ],
  },
  {
    id: "WP03",
    slug: "wp03",
    title: "DICOMweb Adapter",
    lead: "University Medical Center Essen",
    tag: "Implementation",
    description:
      "Develops a generic adapter enabling REST-based access to legacy PACS systems and DICOM nodes through the DICOMweb API specification.",
    objectives: [
      "Create a gateway server compliant with DICOMweb standards, supporting WADO-RS, QIDO-RS, and STOW-RS protocols across different PACS vendors.",
      "Enable efficient, high-parallelism transfer of extensive imaging datasets from multiple PACS installations to various clients.",
      "Implement automatic de-identification functionality and optional image transcoding into formats including NIfTI and NRRD.",
    ],
  },
  {
    id: "WP04",
    slug: "wp04",
    title: "Reference Gateway Server Implementation",
    lead: "University Medical Center Essen",
    tag: "Implementation",
    description:
      "Creates a reference implementation of a gateway server that connects the OMI protocol to inference servers controllable via the predict protocol.",
    objectives: [
      "Compliance to the OMI protocol specified in WP1.",
      "Establishing connections between medical applications and AI computational systems.",
      "Verification of schema conformance for the input and output data.",
      "Framework implementation for multi-modal data lookup and transcoding.",
      "Synchronization and routing module for connecting RACOON to OMI.",
      "Reference gateway server examples for common use-cases.",
    ],
  },
  {
    id: "WP05",
    slug: "wp05",
    title: "Reference Client Implementation",
    lead: "University Hospital Bonn / TU Munich",
    tag: "Implementation",
    description:
      "Develops a client reference implementation for integrating the OMI platform into local MII-compliant infrastructure at partner sites.",
    objectives: [
      "Extending DIC persistence and transfer services to support DICOM data and OMI client integration.",
      "Enabling manual quality assurance, adaptation, and supplementation of FHIR-based input and image metadata.",
      "Controlling and executing DICOM and FHIR data transfer from local DIC to inference services.",
      "Displaying inference execution status and storing output data in local DIC persistence services.",
    ],
  },
  {
    id: "WP06",
    slug: "wp06",
    title: "Service Registry",
    lead: "Technical University Munich",
    tag: "Implementation",
    description:
      "Design and implementation of the OMI service registry, providing accounting of all running AI services in the OMI network, including specification of their input/output data, availability, and usage metrics.",
    objectives: [
      "Compliant implementation of Service Registry components specified in WP1 protocol.",
      "Development of RESTful APIs for OMI gateways and clients.",
      "Integration with existing MII infrastructure for FHIR data transfer, service discovery, authentication, and authorization.",
      "Performant operation managing high loads for registration and queries without quality degradation.",
      "Support for high availability and failover mechanisms for failed instances.",
      "Integration testing to validate conformance to OMI API specifications.",
    ],
  },
  {
    id: "WP07",
    slug: "wp07",
    title: "AI Governance and Ethics Framework",
    lead: "University Hospital Erlangen",
    tag: "Governance",
    description:
      "Identifies existing international frameworks and ethical principles, conducts stakeholder workshops, and develops an adaptable governance template. Results inform WP6 service registry definitions and AI metadata characterization.",
    objectives: [
      "Develop and evaluate a framework of governance and ethics principles as a template for implementations in healthcare institutions.",
    ],
    downloads: [
      {
        label: "AI Governance and Ethics Framework (PDF)",
        url: "https://omi.ikim.nrw/uploads/2026_02_05_AI_Governance_and_Ethics_Framework-eng.pdf",
      },
      {
        label: "AI Governance and Ethics Framework \u2013 Checklist (PDF)",
        url: "https://omi.ikim.nrw/uploads/2026_02_05_AI_Governance_and_Ethics_Framework-Checklist-eng.pdf",
      },
      {
        label: "AI Governance Framework \u2013 German Version (UKEr)",
        url: "https://www.mik.uk-erlangen.de/aktuelles/nachrichten/detail/regelung-zur-nutzung-von-ki-anwendungen-am-uker/",
      },
    ],
  },
  {
    id: "WP08",
    slug: "wp08",
    title: "Roll-out and Evaluation",
    lead: "Technical University Munich",
    tag: "Evaluation",
    description:
      "Deploys OMI components across partner institutions, with participants serving as service providers, users, or both. Connects existing AI services while assessing the platform's technical performance.",
    objectives: [
      "Successful introduction of OMI components at partner sites and interconnection of these.",
      "Proof of the security of the developed components through an external cybersecurity audit.",
      "Evaluate functionality, stability, security, performance and usability of the OMI platform.",
    ],
  },
  {
    id: "WP09",
    slug: "wp09",
    title: "Project Management",
    lead: "University Medical Center Essen",
    tag: "Management",
    description:
      "UME handles administrative and organizational oversight throughout the project duration. A medical informatics project manager monitors technical, functional, and scientific progress while managing interdependencies between work packages.",
    objectives: [
      "Manage administrative and organizational functions, including funding agency reporting.",
      "Coordinate work packages, oversee interdependencies, and handle risk management.",
      "Organize symposiums, workshops, assemblies, and stakeholder meetings.",
      "Coordinate networking activities and integrate associated partners.",
      "Plan dissemination activities (flyers, brochures, workshops).",
      "Establish collaboration platform and project website.",
    ],
  },
];
