# Algorithm Hosting Platforms

APEx-compliant application algorithms are executed as services on a compatible algorithm hosting platform. Currently, APEx
supports platforms based on either openEO or OGC Application Package technologies. To be considered an APEx-compliant
algorithm hosting platform, the platform must meet the requirements outlined in this document section.

The aim of these requirements is:

- To ensure that services developed in EO projects continue to work after the project has ended.
- To align algorithm hosting platforms that aim to offer EO project services to make them more comparable. The alignment targets the API level, and the (high-level) pricing model, giving platform providers full freedom to select technologies and architectures that suit their needs.
- To allow APEx to perform automated checks on the developed services, guaranteeing that they work and produce the expected result at the expected cost.

@tbl-algohostingenv provides an overview of the requirements for operators of algorithm hosting platforms to ensure their compatibility with the APEx standards.

+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ID          | Requirement                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                                                   |
+=============+==================================================================================================================================================================================================================================+===============================================================================================================================================================================================================================================================================================+
| HOST-REQ-01 | The algorithm hosting platform shall support the generation of cloud-native   datasets, such as Cloud Optimized GeoTIFF, CF-Compliant netCDF.                                                                                    | Support of GeoZarr will become a requirement as soon as a clear standard is available, check with APEx for guidance on current variants.                                                                                                                                                      |
+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| HOST-REQ-02 | The algorithm hosting platform shall support the generation of metadata in a STAC   format for both raster and vector data, including applicable STAC extensions.                                                                |                                                                                                                                                                                                                                                                                               |
+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| HOST-REQ-03 | The algorithm hosting platform shall support at least one of these API’s:                                                                                                                                                        |                                                                                                                                                                                                                                                                                               |
|             |                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                               |
|             | - OpenEO API version 1.2                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                               |
|             | - At least API profile L1B-minimal-batch-jobs                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                               |
|             | - At least processes profiles L1-minimal                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                               |
|             | - OGC API Processes                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                               |
+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| HOST-REQ-04 | The operator of the algorithm hosting platform shall expose application workflows as an on-demand services that can be called via an interoperable API by a 3rd party that wants to integrate the results into its own workflow. |                                                                                                                                                                                                                                                                                               |
+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| HOST-REQ-05 | The algorithm hosting platform shall be registered in the ESA Network of Resources.                                                                                                                                              | To curate services beyond the project lifetime, the APEx consortium is likely to require an active subscription on the platform. For paid subscriptions, this can only be requested via NoR sponsoring. This may not be necessary if the platform is willing to grant non-paid subscriptions. |
+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| HOST-REQ-06 | The algorithm hosting platform shall provide an SLA that guarantees support beyond the project lifetime.                                                                                                                         |                                                                                                                                                                                                                                                                                               |
+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| HOST-REQ-07 | The operator of the algorithm hosting platform shall announce major changes to the SLA, including decommissioning of the platform, to APEx and the NoR, with a lead time of 1 year.                                              |                                                                                                                                                                                                                                                                                               |
+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
: Interoperability requirements for algorithm hosting environments {#tbl-algohostingenv}{tbl-colwidths="[20,80]"}


## openEO API specific requirements

The algorithm hosting platform implementing openEO API shall support applications defined as
[openEO User Defined Processes (UDP)](https://api.openeo.org/#tag/User-Defined-Processes). In the context of APEx, these
will be executed as openEO batch jobs. The minimal requirements for an openEO algorithm hosting platform to support this
feature are described in the profile called
[L1B-minimal-batch-jobs](https://openeo.org/documentation/1.0/developers/profiles/api.html#l1b-minimal-batch-jobs). The
openEO API, provided by the algorithm hosting platform, shall support at least the L1-minimal processes profile.

### Open Source UDPs

For open-source UDPs, APEx will use the
[openEO remote UDP extension](https://github.com/Open-EO/openeo-api/tree/draft/extensions/remote-process-definition),
which is currently under review by the openEO community. This extension enables APEx to centrally store & manage the UDP
definitions, using the algorithm hosting platform only for the actual processing. This is to ensure consistent management
of UDP definitions, safeguarding them from loss if the algorithm hosting platform is decommissioned.

We assume that this is the default case because EO projects have a strong preference for open-source software.

### Private UDPs

The specification of openEO allows platforms to expose custom processes, that function like openEO UDPs but do not expose
the underlying process graph. This situation may arise for two main reasons:

- The process graph exists, but the project is not required to share it publicly. In this case, we assume that this is
  supported by ESA, and it is considered good practice to use openEO.
- The process graph does not exist, and the process triggers an arbitrary processing system. In this case, the OGC
  Application Package approach might be a better alternative.



## OGC API Processes specific requirements

The algorithm hosting platform can support applications defined by the
[OGC Best Practice for Earth Observation Application Package](https://docs.ogc.org/bp/20-089r1.html) supporting
applications that can be expressed using [Common Workflow Language](https://www.commonwl.org/) and allowing their
deployment in several execution scenarios such as local computers, cloud resources, high-performance computing (HPC)
environments, Kubernetes clusters, and as a service deployed through an OGC API Processes interface.

Guidelines and recommendations to set up a cloud environment that is compliant with this approach can be obtained directly
from the [EOEPCA](https://eoepca.org) project. The project includes documentation, software and deployment configurations
(e.g. helm charts) to cover the needed platform requirements.

## Service Level Commitments
The service level commits for algorithm providers and algorithm hosting operators will be further documented by the work
done in the APEx project.
