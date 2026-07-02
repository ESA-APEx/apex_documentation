---
title: Algorithm Upscaling
---

The APEx Algorithm Upscaling approach involves designing a solution for services with varying scaling factors, such as
spatial, temporal, or track-based. This concept elevates the execution of services hosted in the
[APEx Algorithm Catalogue](./onboarding.md#apex-algorithm-catalogue) by providing tools to upscale service calls that
process limited data to optimise processing for large data sets. These tools automatically create and manage multiple
service calls to enhance performance and reduce costs.

As a start, APEx will aim at facilitating the execution of an openEO UDP or OGC application package-based algorithm over
larger geographic areas. To support these operations, APEx requires that the algorithm is already optimised for cost-effective
scalability, deployed as a service, and registered in the [APEx Algorithm Catalogue](./onboarding.md#apex-algorithm-catalogue).
If needed, APEx can provide additional support to ensure these prerequisites are met.

To execute large-scale data processing activities, APEx provides a range of services (from guidance to liaison with Platform
operators, or even the provision of tools, in some cases self-service tools) that project teams or end-users can utilise
to run an algorithm at scale, using the processing capabilities of the platforms that are compatible with the [APEx guidelines](../interoperability/algohostingenv.md).
This set of APEx services is designed to simplify the complexities and challenges associated with geographical and temporal
upscaling, such as tiling, input/output management, and job orchestration, ensuring an efficient processing experience.

## Job Orchestration Client Tools

For developer users to address the complexities inherent in job orchestration, the APEx consortium will adopt a stepped
approach to ensure that user requirements are fully addressed while ensuring the technical compatibility of APEx-compliant
technologies and platforms. The goal is to abstract the underlying complexities, providing users with a simplified and
efficient way of executing upscaling tasks.

APEx will start by establishing a formal procedure, supported by the APEx portal, to gather in a structured way the
upscaling requirements from ESA projects. These requirements will serve as inputs for the consortium to prepare the environment
for the upscaling activities. This includes configuring a tailored environment and the pre-configuration of the job orchestration
tools that enable a simplified execution of upscaling tasks.

In the subsequent phase, the consortium will rely on the previously implemented procedure to explore potential enhancements
to the user experience by further automating the process.

For the openEO-powered platforms, users currently have access to the following client tools, which can be pre-configured
for them by the APEx Upscaling team, based on the provided ESA project requirements:

* An **openEO batch job manager** (Python library), which supports the creation of large-scale processing tasks for openEO
developers by dividing them into separate batch jobs that can be automatically monitored. The openEO batch job manager
is built on top of the openEO API and can therefore be used independently of the underlying platform. APEx provides a
pratical guide to get you started with the [openEO batch job manager](../guides/VisualisingMultipleOpeneoJobs.ipynb).

During the following phase of APEx, the range of openEO client tools and their usability will be further enhanced to better
support comprehensive upscaling activities.

For the Application Package compatible platforms, users of the APEx upscaling service currently have access to the following
client tools that will be pre-configured for them by the APEx Upscaling team, based on the provided ESA project requirements:

* An Application Package / OGC API Process **systematic processing manager** (Python library), which supports the creation
of large-scale processing tasks for Application Package users who have the technical skills to run such a tool. The systematic
processing job manager is built on top of the OGC API Process standard interface and can, therefore, be used to communicate
with the underlying compatible platform.

During the following phase of APEx, the range of Application Package tools and their usability will be further integrated
when providing comprehensive support to upscaling activities.

Overall, the envisioned goal is to support medium-sized upscaling activities through a tool or service requiring no coding.
We define 'medium-sized' as an activity that does not require specific coordination with the platform in terms of required
resources (more details are available in [here](#requirements-for-the-selection-of-platforms)) and can be finished in less
than 3 days of processing.

This distinction in size of activity is important in the sense that automatic tooling cannot (yet) reliably handle all
activities that are normally performed by human operators, and thus constitutes a risk. For medium-sized activities, with
relatively low processing costs, this risk is smaller.

## APEx Dispatch API

APEx promotes the adoption of modern cloud-native approaches for Earth Observation processing and visualisation. These
approaches rely on object storage technologies such as S3, cloud-optimised data formats including Cloud Optimized GeoTIFF
(COG), and catalogue-driven discovery through STAC-compliant metadata services. To fully exploit these capabilities, APEx
works with platforms that support these technologies and standards, enabling scalable and interoperable EO service
execution.

Within this ecosystem, a processing service must provide the abstraction layer required to execute algorithms at scale
without exposing users to platform-specific implementation details such as tiling strategies, coordinate reference systems,
intermediate data management, or execution orchestration. To address this need, APEx has developed an initial architecture
for the execution and upscaling of both openEO User Defined Processes (UDPs) and OGC Application Package-based algorithms.
The first implementation focuses on geospatial scaling by automatically partitioning large Areas of Interest (AOIs) into
smaller processing units, while allowing the underlying system to discover and select the most appropriate EO datasets
based on spatial and temporal relevance.

This work resulted in the first version of the **APEx Dispatch API**, a platform-agnostic orchestration layer that enables
users and applications to submit processing requests through a single interface, while the API transparently translates
and routes these requests to the appropriate execution platform using standards such as openEO and OGC API Processes.
In addition to managing execution, the Dispatch API maintains job metadata and execution references, providing a
consistent mechanism for job monitoring, result retrieval, and future upscaling workflows.

### Why Use the APEx Dispatch API?

The APEx Dispatch API simplifies the execution and upscaling of existing EO services by providing:

* A single API interface for executing services across multiple processing platforms.
* Standards-based interoperability through technologies such as openEO API and OGC API – Processes.
* Abstraction from platform-specific complexities, reducing development and integration effort.
* Support for future upscaling scenarios, enabling large-scale processing campaigns across extensive geographic regions.
* A consistent user experience, independent of the underlying execution environment.

### Accessing the APEx Dispatch API

The APEx Dispatch API is available as part of the APEx ecosystem and can be accessed through its dedicated
[API endpoint](https://dispatch-api.apex.esa.int/docs).

This documentation serves as the primary reference for developers, platform integrators, and advanced users wishing to
integrate APEx-enabled services into their own applications and workflows.

### Authentication and Authorisation

The APEx Dispatch API acts on behalf of the user when submitting processing jobs to external execution platforms.
Consequently, both authentication and authorisation are required before a service can be executed.

#### APEx Authentication

The usage of the APEx Dispatch API is supported through the APEx user management system. This means that users will need
to the APEx ecosystem using their APEx account.

::: {.callout-note title="Creating your APEx account"}
Please refer to our dedicated [guide](../guides/account.md) to learn how you can create your APEx account.
:::

#### Platform Account Linking

Because services are executed on external platforms, users must also link their platform accounts through the
[APEx User Account Dashboard](https://auth.apex.esa.int/realms/apex/account/account-security/linked-accounts). The
account-linking process establishes the necessary trust relationship between APEx and the execution platform, enabling
the APEx Dispatch API to submit jobs on behalf of the authenticated user.

To link your platform account, simply click the *Link account* button next to the supported platform provider.

::: {.callout-note title="Requesting Platform Access"}
Users who do not yet have access to a required execution platform can request access through the
[ESA Network of Resources (NoR)](https://portfolio.nor-discover.org/).
Once access has been granted and the corresponding platform account has been linked to the user's APEx account, services
hosted on that platform can be executed directly through the APEx Dispatch API.
:::

### Supported Platforms and Services

The APEx Dispatch API currently supports the execution of services on the following platforms:

* Copernicus Data Space Ecosystem (CDSE) openEO

The team is currently working on the integration of the following platforms:

* GEP

### Example Usage

To facilitate onboarding and adoption, APEx provides notebook-based examples demonstrating how the Dispatch API can be
used within real-world workflows:

* [Executing APEx services through the APEx Dispatch API](../guides/dispatch_execution_example.ipynb)
* [Geographical upscaling of APEx services through the APEx Dispatch API](../guides/dispatch_upscaling_example.ipynb)

### Integration with the APEx Geospatial Explorer

The APEx team is currently integrating the Dispatch API with the
[APEx Geospatial Explorer](../instantiation/geospatial_explorer.md), providing a graphical interface for discovering and
executing APEx-enabled services. Through this integration, users can select an algorithm, configure its parameters,
submit processing jobs, and monitor their execution directly from the Geospatial Explorer. The user interface is generated
dynamically based on the service definitions exposed by the Dispatch API.

The current integration focuses on single service execution. Support for upscaling scenarios is planned as part of the
future roadmap of the Geospatial Explorer, enabling users to launch and manage large-scale processing campaigns through
the same graphical interface.

### Future Evolution and Collaboration with EOEPCA

The APEx Dispatch API represents an important building block in the evolution towards interoperable EO service ecosystems.
Future developments are being carried out in close collaboration with the EOEPCA+ initiative to ensure alignment with
emerging standards, architecture patterns, and user experience best practices.

## Support Overview

As geographical and temporal upscaling can be challenging, APEx offers the possibility to request time-limited support
for ESA projects. Based on the project needs, APEx can provide:

* Basic training in the use of the upscaling tools.
* Support in defining an appropriate upscaling strategy tailored to the project’s needs.
* Selection of the most appropriate platform for the project’s upscaling task.

To make use of the upscaling tools, the following aspects should be considered by the project requesting support:

* The upscaling activities and tools are designed with APEx [guidelines](../interoperability/index.md) in mind,
  primarily supporting algorithms that have been onboarded to the
  APEx [Algorithm Catalogue](onboarding.md#apex-algorithm-catalogue). While users are able to utilise
  these tools for other algorithms, their proper functionality cannot be guaranteed if the algorithms do not adhere to
  APEx [guidelines](../interoperability/algohosting.md). If the algorithm has not yet been registered, APEx
  offers [support](onboarding.md) to assist projects in integrating their algorithms into the catalogue.
* The performance of the service can drastically affect the feasibility of upscaling. Projects can get additional
  support through APEx’s [algorithm enhancement](enhancement.md) activities to improve the performance of their
  algorithm.
* Basic metrics (e.g. cost per km², total runtime per unit, e.g. per 100x100km) from the algorithm onboarding process
  are used to evaluate the overall feasibility of the upscaling request.
* Before the actual production can start, preparation work may take a significant amount of time, depending on the
  project’s own experience and the complexity of the task. APEx does not provide operators to monitor the production
  process, even when a client application is provided by APEx to interact with a processing service API on the selected
  platform to run an upscaling scenario. This responsibility of such monitoring lies with the project team or, if
  available, with the platform provider’s support team.

It’s also advisable that projects contact their platform provider, as they may offer support packages specific to their
environment.

:::{.callout-tip}

## Contact us

If you think your project could benefit from this service, please contact us.
:::

## Requirements for the selection of Platforms

Upscaling puts additional requirements on the platform providers that are not necessarily part of the
APEx [compliance guidelines for platforms](../interoperability/algohostingenv.md) because such requirements might make
the guidelines too restrictive.

* The selected platform needs to support the input dataset access for the spatiotemporal extent targeted by the
  upscaling (if not available natively when the provider is selected, this might be an option incurring additional
  costs).
  * A platform compatible with openEO or with OGC Processes API should allow to submit and manage the number of
      asynchronous jobs targeted by the upscaling. The platform shall advertise the number of concurrent jobs that it
      can support.
  * When the platform onboards an APEx algorithm as a service described in the NoR, it should consider upscaling in
      both the pricing model and the terms and conditions. The platform is allowed and encouraged to put clear
      constraints on the usage of the algorithm for upscaling purposes. APEx can not support users in upscaling if the
      platform does not advertise its capacity for scalable data processing workloads.
  * The selected platform may provide in their NoR offer an option for the long-term Cloud storage of result files (
      optionally cold archive + a wake-up process). For example, the upscaled processing over continental Africa would
      result in thousands of Sentinel tiles being processed. The ESA Project Results Repository (PRR) is a possible
      option here to take care of long-term storage. For short-term storage, it can also be an object storage that is
      not part of the platform offering per se and for which some data move operations will be needed.
* The selected platform should support the provisioning of dedicated compute power and storage service for the upscaling
  scenario to be executed.
  * For both openEO-based and Application Package-based algorithms, Platform Providers can choose whether to offer
      this through dedicated capacity or by utilising a large pool of elastic capacity.
  * In particular, for Application Package-based upscaling, resource provisioning can be done by:
    * Provisioning of dedicated Cloud processing resources (for instance, Kubernetes dedicated PODs) for the hosting
          of the algorithm(s) selected by the project for the processing of large-scale geographical areas.
    * Provisioning of dedicated HPC resources when available. For such environments, Toil is the recommended
          workflow engine optimised for distributed computing environments, enabling the execution of CWL workflows
          across multiple compute nodes. Toil can manage large-scale data processing tasks by integrating with batch
          processing systems (e.g., SLURM, AWS Batch).
* For openEO-based upscaling, the following extra requirements are considered valuable for upscaling:
  * The authentication should support non-interactive machine-to-machine-based methods such as OIDC client
      credentials.
  * The `export_workspace` process is used to export generated results directly to object storage buckets and, in some
      cases, STAC API’s. Upscaling without these features is also possible but more limited.

## Related background material

* Large scale processing, by [openEO platform](https://docs.openeo.cloud/usecases/large-scale-processing/)
  and [CDSE openEO](https://documentation.dataspace.copernicus.eu/APIs/openEO/large_scale_processing.html)
* Job management in openEO,
  a [Jupyter notebook](https://github.com/Open-EO/openeo-community-examples/blob/main/python/ManagingMultipleLargeScaleJobs/ManagingMultipleLargeScaleJobs.ipynb)``
