---
title: Service registry
summary:  "Lead: [Technical University Munich](/MII-UseCase-OMI/authors/tum/)"
weight: 6
tags:
- Implementation
date: 2023-07-01
profile: false
#external_link: https://www.healthcapital.de/veranstaltungen/termin/ki-in-der-radiologie/
# _build:
#   render: never
#   list: always
---
We have developed a new statistical approach for the determination of HLA haplotypes while quantifying the involved uncertainty This work package will design and implement the OMI service registry, which will provide accounting of all running AI services in the OMI network, including specification of their input/output data, availability, and usage metrics.

Objectives

**[1]** Compliant implementation of the ‘Service Registry’ parts of the OMI protocol specified in WP1.

**[2]** Provide RESTful APIs for OMI gateways and clients

**[3]** Integration with existing MII infrastructure for FHIR data transfer, service discovery, mutual
authentication and authorization and other aspects.

**[4]** Performant operation which can handle higher-than-expected loads both for service registration, as well as querying without deterioration in service quality.

**[5]** Support for high availability and failover to spare instances in case of failures.

**[6]** Integration tests to validate conformance to OMI API from WP1.
