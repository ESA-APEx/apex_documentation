---
title: Guide for writing EOAP processes
---

## Creating an EOAP process {#sec-eoap-writing}

The Earth Observation Application Package (EOAP) is one out of two standardised options that APEx offers to expose
algorithms as a service.

EOAP gives some concrete steps and guidelines to ensure that your EO data processing software is embedded in a way that
can benefit
from [APEx-compliant algorithm hosting platforms](../propagation/ondemandservices.qmd#what-are-the-platforms-to-choose-from).
A number of these Platforms are implementing EOAP guidelines, which include the provision of:

* An interpreter for the Common Workflow Language (CWL)
* The "OGC API - Processes" interface
* The EO data discovery & staging protocols for the online access to EO data repositories.

These capabilities are available on the hosting platform(s), and will altogether make your EOAP-based service work well
for your users.

Note that all the guidance material provided hereafter has APEx in mind, but can also serve as a generic guide for Earth
Observation applications. All APEx recommendations are made to support the FAIR principles, ensuring that your service
can be easily shared within a broader community. These guidelines also facilitate the integration
of your service into
the [APEx Algorithm Services Catalogue](../propagation/onboarding.md#apex-algorithm-services-catalogue).

For best practice illustrations and examples, on how to package Earth Observation applications, the **EOAP Guide** is
published here:\
[Earth Observation Application Package (EOAP) resources and guides](https://eoap.github.io/)

For background information, the OGC Best Practice document is published on the OGC website:\
[OGC Best Practice for Earth Observation Application Package (EOAP)](https://docs.ogc.org/bp/20-089r1.html)

Moreover, consider that APEx offers [Algorithm Porting](../propagation/porting.md)
and [Algorithm Onboarding](../propagation/onboarding.md) support, to help you with packaging your algorithm into an
EOAP and onboarding it onto an APEx-compliant hosting platform.

### Interface Standard for the EOAP process

The "OGC APIs" is a broad set of standards designed for providing and using geospatial data on the web, and for
integrating this data with other type of information. Within these standards, EOAP uses "OGC API - Processes" to expose
packaged algorithms as services on a cloud platform.

For more background information, the "OGC API - Processes - Part 1: Core Standard" is published on the OGC API website:\
[OGC API - Processes](https://ogcapi.ogc.org/processes/).

### Examples

The [EOAP Guide](https://eoap.github.io/) contains several examples to get you started with EOAP development and the
creation of OGC API Processes.

#### ZOO Implementation of OGC API Processes

One tutorial focuses on creating OGC API Processes using the ZOO-Project. This is particularly relevant in the APEx
context, where EOAPs are made accessible through OGC API Processes.

This example is designed for developers, scientists, and Earth observation enthusiasts who aim to:

* Familiarize themselves with the ZOO-Project implementation of OGC API - Processes.
* Independently deploy and run their Application Package as a web service.

Additionally, APEx can provide expert [support](../propagation/onboarding.md) to assist with these steps.

Resources:

* [OGC API - Processes with ZOO Project | Documentation](https://eoap.github.io/ogc-api-processes-with-zoo/).
* [OGC API - Processes with ZOO Project | Repository](https://github.com/eoap/ogc-api-processes-with-zoo/).
