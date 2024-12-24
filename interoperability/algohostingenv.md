---
title: Algorithm Hosting Platforms Guidelines
---

APEx-compliant application algorithms are executed as services on a compatible algorithm hosting platform. Currently,
APEx supports platforms based on either openEO [5] or OGC Application Package [2] technologies. To be considered an
APEx-compliant algorithm hosting platform, the platform must meet the requirements outlined in this document section.

The aim of these requirements is:

* To ensure that services developed in EO projects continue to work after the project has ended.
* To align algorithm hosting platforms that aim to offer EO project services to make them more comparable. The alignment
  targets the API level and the (high-level) pricing model, giving platform providers full freedom to select
  technologies and architectures that suit their needs.
* To allow APEx to perform automated checks on the developed services, guaranteeing that they work and produce the
  expected result at the expected cost.

@tbl-algohostingenv provides an overview of the requirements for operators of algorithm hosting platforms to ensure
their compatibility with the APEx standards.

+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ID          | Requirement                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                          |
+=============+==================================================================================================================================================================================================================================+======================================================================================================================================================================================================================================================================================================================================================================+
| HOST-REQ-01 | The algorithm hosting platform shall support the generation of cloud-native datasets, such as Cloud Optimized GeoTIFF [@cog], CF-Compliant netCDF [@netcdf].                                                                     | Support of GeoZarr [@geozarr] will become a requirement as soon as a clear standard is available, check with APEx for guidance on current variants.                                                                                                                                                                                                                  |
+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| HOST-REQ-02 | The algorithm hosting platform shall support the generation of metadata in a STAC [@stac] format for both raster and vector data, including applicable STAC extensions.                                                          | This requirement ensures that the outputs are compatible with modern geospatial data standards, enhancing interoperability with other platforms and services.                                                                                                                                                                                                        |
+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| HOST-REQ-03 | The algorithm hosting platform shall support at least one of these API’s:                                                                                                                                                        | The support for the proposed technologies ensures that APEx-compliant algorithms can be hosted on the algorithm hosting platform and made available as on-demand services.                                                                                                                                                                                           |
|             |                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
|             | *OpenEO API version 1.2 [@openeo_api]                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                      |
|             |* At least API profile L1B-minimal-batch-jobs [@openeo_batch_profiles]                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                      |
|             | *At least processes profiles L1-minimal [@openeo_processes_profiles]                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                      |
|             |* OGC API Processes [@apiprocess], supporting the deployment of applications defined by the OGC Best Practice for Earth Observation Application Package [@ap].                                                                   |                                                                                                                                                                                                                                                                                                                                                                      |
+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| HOST-REQ-04 | The operator of the algorithm hosting platform shall expose application workflows as an on-demand services that can be called via an interoperable API by a 3rd party that wants to integrate the results into its own workflow. | By offering on-demand services via an interoperable API, the platform enables seamless automation and integration of the services across different applications and workflows.                                                                                                                                                                                       |
+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| HOST-REQ-05 | The algorithm hosting platform shall be registered in the [ESA Network of Resources](https://portfolio.nor-discover.org/).                                                                                                       | To curate services beyond the project lifetime, the APEx consortium is likely to require an active subscription on the platform. For paid subscriptions, this can only be requested via NoR sponsoring. This may not be necessary if the platform is willing to grant non-paid subscriptions.                                                                        |
+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| HOST-REQ-06 | The algorithm hosting platform shall provide an SLA that guarantees support beyond the project lifetime.                                                                                                                         | This ensures the long-term sustainability and reliability of the algorithm hosting platform, providing assurance to users that they can rely on continued support even after the project's completion.                                                                                                                                                               |
+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| HOST-REQ-07 | The operator of the algorithm hosting platform shall announce major changes to the SLA, including decommissioning of the platform, to APEx and the NoR, with a lead time of 1 year.                                              | Such communication is important to ensure that stakeholders, including APEx and the NoR, are given adequate notice of major changes that could impact the availability or functionality of the algorithm hosting platform. This approach allows for proper planning, adjustment, and mitigation of potential disruptions, ensuring continuity of services for users. |
+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
: Interoperability requirements for algorithm hosting environments {#tbl-algohostingenv}{tbl-colwidths="[20,80]"}

## openEO API specific requirements

The algorithm hosting platform implementing openEO API [@openeo] shall support applications defined as openEO User
Defined Processes (UDP) [@udp]. In the context of APEx, these will be executed as openEO batch jobs. The minimal
requirements for an openEO algorithm hosting platform to support this feature are described in the profile called
L1B-minimal-batch-jobs [@openeo_batch_profiles]. The openEO API, provided by the algorithm hosting platform, shall
support at least the L1-minimal processes profile [@openeo_processes_profiles].

### Open Source UDPs

For open-source UDPs, APEx will use the openEO remote UDP extension [@openeo_remote_udp], which is currently under
review by the openEO community. This extension enables APEx to centrally store and manage the UDP definitions, using the
algorithm hosting platform only for the actual processing. This is to ensure consistent management of UDP definitions,
safeguarding them from loss if the algorithm hosting platform is decommissioned.

We assume that this is the default case because EO projects have a strong preference for open-source software.

### Private UDPs

The specification of openEO allows platforms to expose custom processes that function like openEO UDPs but do not expose
the underlying process graph. This situation may arise for two main reasons:

* The process graph exists, but the project is not required to share it publicly. In this case, we assume that this is
  supported by ESA, and it is considered good practice to use openEO.
* The process graph does not exist, and the process triggers an arbitrary processing system. In this case, the OGC
  Application Package approach might be a better alternative.

## OGC Application Package Specific Requirements

EO Application Packages, defined according to the OGC Best Practice [@ap], use the Common Workflow Language (CWL) [@cwl]
for process descriptions and are often containerised (e.g., using Docker) to ensure portability and consistency. To host
and execute these packages effectively, platforms must meet a set of key requirements, particularly around data handling
and interoperability, such as:

* Support for Application Deployment: Platforms must be capable of interpreting CWL-based workflows and deploying the
  associated containerised environments.
* Data Staging Using STAC: Efficient stage-in (input data retrieval) and stage-out (output data publication) are
  essential for EO workflows. Platforms should integrate with STAC to:
  * Discover input datasets through STAC-compliant APIs or catalogues.
  * Facilitate the publication of results in a STAC-compliant format for downstream use.
  * Ensure metadata-rich, standardised access to EO data, streamlining workflows.
* Resource and Process Management: Platforms should provide scalable computational resources to execute applications
  efficiently. Resource management might include job scheduling, monitoring, and optimising containerised environments.
* Standardised API Support: Platforms should implement the OGC API - Processes [@apiprocess] to allow consistent
  interaction with workflows, enabling users to manage jobs and execute processes

Guidelines and recommendations to set up a cloud environment that is compliant with this approach can be obtained
directly from the [EOEPCA project](https://eoepca.org). The project includes documentation, software and deployment
configurations (e.g. helm charts) to cover the needed platform requirements.

## Service Level Commitments

The service level commits for algorithm providers and algorithm hosting operators will be further documented by the work
done in the APEx project.
