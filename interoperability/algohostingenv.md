## Algorithm Hosting Environments

ESA APEx applications are executed on a compliant platform. The application project is free to select any platform that complies 
with the requirements set out in this document.

The aim of these requirements is:

- To ensure that services developed in application projects continue to work after the project has ended. 
- To align platforms that aim to offer ESA application services, to make them more comparable.
The alignment targets the API level, and the (high-level) pricing model, giving platform providers full freedom to select 
technologies and architectures that suit their needs. 
- To allow APEx to perform automated checks on the developed services, guaranteeing that they work and produce the expected result at the expected cost.



@tbl-algohostingenv provides an overview of the requirement for operators of algorithm hosting environments to ensure their compatibility with the APEx standards. 

+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Requirement     | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
+=================+===============================================================================================================================================================================================================================================================================================================================================================================================================================+
| **HOST-REQ-01** | The execution environment should support the generation of cloud-native datasets, such as GeoTiff and CF-Compliant netCDF. Support of GeoZarr will become a requirement as soon as a clear standard is available, check with APEx for guidance on current variants.                                                                                                                                                           |
+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **HOST-REQ-02** | The execution environment should support the generation of metadata in a STAC format, including applicable STAC extensions.                                                                                                                                                                                                                                                                                                   |
+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **HOST-REQ-03** | The operator of the algorithm hosting environment shall demonstrate the correct use of interoperability best practices by deploying the application on a Network of Resources hosting environment qualified for the chosen best practise, and exposing the application workflow as an on-demand service that can be called via an interoperable API by a 3rd party that wants to integrate the results into its own workflow. |
+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **HOST-REQ-04** | The operator of the algorithm hosting environment shall expose application workflows as an on-demand services that can be called via an interoperable API by a 3rd party that wants to integrate the results into its own workflow.                                                                                                                                                                                           |
+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **HOST-REQ-05** | The execution environment will allow a fixed price per area unit, for example 'platform credits per km²'                                                                                                                                                                                                                                                                                                                      |
+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **HOST-REQ-06** | The execution platform should be registered in the ESA network of resources.                                                                                                                                                                                                                                                                                                                                                  |
+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **HOST-REQ-07** | The operator of the algorithm hosting environment should support registering the algorithm in the ESA network of resources, with a cost per km².                                                                                                                                                                                                                                                                              |
+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **HOST-REQ-08** | The execution environment should provide an SLA that guarantees support beyond the application project lifetime.                                                                                                                                                                                                                                                                              |
+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **HOST-REQ-09** | The operator of the algorithm hosting environment shall announce major changes to the SLA, including decommissioning of the platform, to APEx and the NoR, with a lead time of 1 year.                                                                                                                                                                                                                                        |
+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

: Interoperability requirements for algorithm hosting environments {#tbl-algohostingenv}{tbl-colwidths="[20,80]"}


### openEO API specific requirements

The algorithm environment can support applications defined as [openEO 'user defined processes'](https://api.openeo.org/#tag/User-Defined-Processes). 
In the context of APEx, these will be executed as openEO batch jobs. The minimal requirements for an openEO backend
to comply with in order to support this are described in the profile called [L1B-minimal-batch-jobs]( https://openeo.org/documentation/1.0/developers/profiles/api.html#l1b-minimal-batch-jobs ).

#### Open Source UDP's

For open source UDP's, APEx will use the 'openEO remote UDP extension', which is currently under review by the openEO community. This extension
enables APEx to centrally store & manage the UDP definitions, using the execution platform only for the actual processing.
This to ensure consistent management of UDP definitions, safeguarding them from loss if the execution platform is decommissioned.

We assume that this is the default case, because ESA application projects have a strong preference for open source software.

#### Private UDP's

The specification of openEO allows platforms to expose custom processes, that behave exactly like openEO UDP's, but do not
expose the underlying process graph. This situation may have 2 main causes:

- The process graph exists, but the application project is not required to share it publicly. In this case, we assume that 
  this is supported by ESA, and it is considered good practice to use openEO.
- The process graph does not exist, and in fact the process triggers an arbitrary processing system. In this case, the
  OGC Processes approach might be a better alternative.


### OGC API Processes specific requirements

The algorithm environment can support applications defined as [OGC API Processes Part 3](https://docs.ogc.org/DRAFTS/21-009.html).
This specification is still in draft, but aims to support applications that can be expressed using [Common Workflow Language](https://www.commonwl.org/).