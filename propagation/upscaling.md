---
title: Algorithm Upscaling
---

APEx can facilitate the execution of your openEO UDP or OGC application package-based algorithm over larger geographic
areas. To support these operations, APEx requires that the algorithm is already optimised for cost-effective
scalability, deployed as a service, and registered in the
APEx [Algorithm Services Catalogue](onboarding.md#apex-algorithm-services-catalogue). If needed, APEx can provide
additional support to ensure these prerequisites are met.

To execute large-scale data processing activities, APEx provides a range of services (from guidance to liaison with
Platform operators, or even the provision of tools, in some cases self-service tools) that project teams or end-users
can utilise to run an algorithm at scale, using the processing capabilities of the platforms that are compatible with
the APEx [guidelines](../interoperability/algohostingenv.md). This set of APEx services is designed to simplify the
complexities and challenges associated with geographical and temporal upscaling, such as tiling, input/output
management, and job orchestration, ensuring an efficient processing experience.

:::{.callout-warning}

## Work in progress

A preview version showcasing the currently available toolset is available [here](../guides/upscaling_openeo.ipynb).

Current roadmap items:

1. Upscaling of processes exposed via OGC API Processes.
2. Automated splitting of larger areas according to predefined grids.
3. Exposing upscaling capabilities via web based UI's.

:::

## Job Orchestration Client Tools

To address the complexities inherent in job orchestration, APEx adopts a stepped approach to ensure
that user requirements are fully addressed while ensuring the technical compatibility of APEx-compliant technologies and
platforms. The goal is to abstract the underlying complexities, providing users with a simplified and efficient way of
executing upscaling tasks.

APEx will start with establishing a formal procedure to gather in a structured way the upscaling requirements from ESA
projects. These requirements will serve as inputs for the consortium to prepare the environment for the upscaling
activities. This includes configuring a tailored environment and the pre-configuration of the job orchestration tools
that enable a simplified execution of upscaling tasks.

In the subsequent phase, APEx will explore potential enhancements to the user experience by further automating the
process.

For the **openEO-powered platforms**, users of the APEx upscaling service currently have access to the following client
tools, that will be pre-configured for them by the APEx Upscaling team, based on the provided ESA project requirements:

* An openEO batch job manager (Python library), which supports the creation of large-scale processing tasks for openEO
  developers by dividing them into separate batch jobs that can be automatically monitored. The openEO batch job manager
  is built on top of the openEO API and can therefore be used independently from the underlying platform.

During the following phase of APEx, the range of openEO client tools and their usability will be further enhanced to
better support comprehensive upscaling activities.

For the **Application Package compatible platforms**, users of the APEx upscaling service currently have access to the
following client tools that will be pre-configured for them by the APEx Upscaling team, based on the provided ESA
project requirements:

* An Application Package / OGC API Process systematic processing manager (Python library), which supports the creation
  of large-scale processing tasks for Application Package users having technical skills to run such tool. The systematic
  processing job manager is built on top of the OGC API Process standard interface and can, therefore, be used to
  communicate with the underlying compatible platform.

During the following phase of APEx, the range of Application Package tools and their usability will be further
integrated when providing comprehensive support to upscaling activities.

Overall, the envisioned goal is to support medium-sized upscaling activities through a tool or service requiring no
coding. We define 'medium-sized' as an activity that does not require specific coordination with the platform in terms
of required resources (more details are available [here](#requirements-for-the-selection-of-platforms)) and can be
finished in less than 3 days of processing. This distinction in size of activity is important in the sense that
automatic tooling cannot (yet) reliably handle all activities that are normally performed by human operators, and thus
constitutes a risk. For medium-sized activities, with relatively low processing costs, this risk is smaller.

## Data Management Client Tools

APEx is promoting the use of state-of-the-art technologies for data processing and data visualisation, based on S3 Cloud
storage as COG files encoding and with data assets registered on a STAC-compliant catalogue. Based on this, a system
shall provide the level of abstraction (tiling, CRS and projections, tiles and intermediate files) for the upscaling
scenarios part of the APEX upscaling activities. APEx is taking care of selecting Platforms which are supporting this
state-of-the-art.

In terms of tooling, APEx can provide access to a
dedicated [Geospatial Explorer](../instantiation/geospatial_explorer.md) instance, meant to leverage this technology and
that will be available to the ESA projects coming to APEx.

## Support Overview

As geographical and temporal upscaling can be challenging, APEx offers the possibility to request time-limited support
for ESA projects. Based on the project needs, APEx can provide:

* Basic training in the use of the upscaling tools.
* Support in defining an appropriate upscaling strategy tailored to the project’s needs.
* Selection of the most appropriate platform for the project’s upscaling task.

To make use of the upscaling tools, the following aspects should be considered by the project requesting support:

* The upscaling activities and tools are designed with APEx [guidelines](../interoperability/index.md) in mind,
  primarily supporting algorithms that have been onboarded to the
  APEx [Algorithm Services Catalogue](onboarding.md#apex-algorithm-services-catalogue). While users are able to utilise
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
