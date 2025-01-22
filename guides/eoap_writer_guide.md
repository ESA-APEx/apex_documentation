---
title: Guide for writing EOAP processes
---

## Creating an EOAP process {#sec-eoap-writing}

The Earth Observation Application Package (EOAP) is one out of two standardised options that APEx offers to expose algorithms "as-a-Service". 

EOAP gives some concrete steps and guidelines to ensure that your EO data processing software is embedded in a way that can benefit from [APEx-compliant algorithm hosting platforms](../propagation/ondemandservices.html#what-are-the-platforms-to-choose-from).
A number of these Platforms are implementing EOAP guidelines, which include the provision of: an interpreter for the Common Workflow Language (CWL), the "OGC API - Processes" interface, as well as the EO data discovery & staging protocols for the online access to EO data repositories. These capabilities are mutualised on the hosting platform(s), and will altogether make your EOAP-based service work well for your users. 

Note that all the guidance material provided hereafter has APEx in mind, but can also serve as a generic guide for Earth Observation applications. As a general rule, all the APEx recommendations and choices are made to increase uniformity & easy of use across the entries published in the [APEx Algorithm Services Catalogue](../propagation/onboarding.md#apex-algorithm-services-catalogue).

For best practice illustrations and examples, on how to package Earth Observation applications, the **EOAP Guide** is published here:\
[Earth Observation Application Package (EOAP) resources and guides](https://eoap.github.io/)

For background information, the OGC Best Practice document is published on the OGC website:\
[OGC Best Practice for Earth Observation Application Package (EOAP)](https://docs.ogc.org/bp/20-089r1.html) 

Moreover, consider that APEx offers [Algorithm Porting](../propagation/porting.md) and [Algorithm Onboarding](../propagation/onboarding.md) support, to help you with these steps if needed.

### Interface Standard for the EOAP process

The "OGC APIs" is a broad set of standards designed for providing and using geospatial data on the web, and for integrating this data with other type of information.
EOAP is making use of the "OGC API - Processes" to expose a packaged algorithm as-a-Service.

For background information, the "OGC API - Processes - Part 1: Core Standard" is published on the OGC API website:\
[OGC API - Processes](https://ogcapi.ogc.org/processes/).

### Special case

As a side note, a simple tutorial on creating an OGC API process based on the EOAP Best Practice is also provided as part of the **EOAP Guide**. This tutorial is designed for developers, scientists, and Earth observation enthusiasts who want to get acquainted with the ZOO-Project implementation of the OGC API - Processes, so they can deploy and run by themselves their Application Package as a web service:\
[OGC API - Processes with ZOO Project | Documentation](https://eoap.github.io/ogc-api-processes-with-zoo/).
[OGC API - Processes with ZOO Project | Repository](https://github.com/eoap/ogc-api-processes-with-zoo/).

