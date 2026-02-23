---
title: Supported Platforms
---

This section provides an overview of APEx-compliant algorithm hosting environments based on the
[APEx Interoperability and Compliance Guidelines](../interoperability/algohostingenv.md). The list includes platforms
available for each APEx-compliant technology, along with recommendations for environments that support the development
process of APEx-compliant services.

Throughout the project, APEx aims to expand this list of compliant platforms, offering users the flexibility to choose
their preferred platform.

## openEO API

Algorithms can be offered as services through the openEO API. This API standard enables the execution of processing
workflows on various back-end platforms. The following platforms are currently identified as APEx-compliant for hosting
openEO-based algorithms:

* [openEO platform](https://openeo.cloud)
* [CDSE openEO federation](https://documentation.dataspace.copernicus.eu/APIs/openEO/federation/openeo_federation.html)

### openEO User Defined Processes

An openEO UDP can be developed in any openEO-based environment using existing [openEO tools](https://openeo.org/documentation/1.0/).
APEx can support development activities by providing projects with access to its [Code Server and JupyterLab IDE solutions](../instantiation/index.md).
For testing the UDP, we recommend utilising an APEx-compliant hosting platform, as provided in the list above.
This ensures platform compatibility and facilitates the deployment of your UDP as an on-demand service.

## OGC API - Processes

To offer your algorithm as an on-demand processing service, exposed via an OGC API - Processes standard interface,
the following platforms are compliant with the APEx guidelines:

* [Geohazards TEP](https://geohazards-tep.eu/) using [EO Application Package](#ogc-earth-observation-application-package-eoap-processes)

### OGC Earth Observation Application Package (EOAP) processes

To develop and test an OGC Earth Observation Application Package, you can use one of the following environments,
which include the necessary tools and basic infrastructure to support the development process:

* [ELLIP Studio](https://ellip.terradue.com/)
* [APEx Code Server IDE](../instantiation/app_code_server.md)
* [APEx JupyterLab IDE](../instantiation/app_jupyterlab.md)

:::{.callout-tip}

## Is Your Platform APEx-Compliant?

If your platform meets the APEx [Interoperability and Compliance Guidelines](../interoperability/algohostingenv.md), and
you have onboarded your platform to the ESA Network of Resources (or plan to do that), we encourage you to reach out to
the APEx team to get it added to the list.
:::
