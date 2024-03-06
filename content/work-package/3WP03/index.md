---
title: DICOMwebTM adapter
summary: "Lead: [University Medical Center Essen](/authors/ume/)"
weight: 3
tags:
 - Implementation
date: 2023-07-01
profile: false
#external_link: https://www.healthcapital.de/veranstaltungen/termin/ki-in-der-radiologie/
# _build:
#   render: never
#   list: always
---
This WP will implement the generic adapter component that enables RESTful access to legacy PACS and other DICOM nodes via a subset of the DICOMwebTM API specification.

Objectives

**[1]** Implementation of a DICOMwebTM-compliant gateway server supporting WADO-RS, QIDO-RS and STOW-RS independently of the PACS vendor.

**[2]** Robust and performant transfer of large amounts of imaging data with high parallelism from multiple PACS to multiple clients.

**[3]** Automatic de-identification of personal data and on-demand transcoding of transferred images in commonly used file formats like NifTi, NRRD and others.
