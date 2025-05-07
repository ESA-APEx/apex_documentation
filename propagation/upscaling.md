---
title: Algorithm Upscaling
---

APEx facilitates the execution of your openEO UDP or OGC application package-based algorithm over larger geographic
areas. To support these operations, the algorithm must be optimized for cost-effective scalability, deployed as a service, and registered in the APEx [Algorithm Services Catalogue](onboarding.md#apex-algorithm-services-catalogue). If needed, APEx can provide [support](#support-overview) to ensure these prerequisites are met.

To execute large-scale data processing activities, APEx offers various services - rangging from guidance to liaison with
Platform operators, and even the provision of tools, in some cases self-service tools. These services enable project teams or end-users to run an algorithm at scale using compatible processing capabilities, aligning with APEx [guidelines](../interoperability/algohostingenv.md). This set of APEx services aim to simplify the
complexities and challenges associated with upscaling tasks, such as tiling, input/output
management, and job orchestration, ensuring an efficient processing experience.

:::{.callout-warning}

## Work in progress

A preview version showcasing the currently available toolset is available [here](../guides/upscaling_openeo.ipynb).

Current roadmap items:

1. Upscaling of processes exposed via OGC API Processes.
2. Automated splitting of larger areas according to predefined grids.
3. Exposing upscaling capabilities via web-based UI's.

:::

## Upscaling Scenarios

Given the challenges of upscaling, APEx provides tools and services tailored to various scenarios. Each scenario comes with a dedicated set of tools designed for medium-sized upscaling activities that require limited to no coding. 'Medium-sized' is defined as activities not necessitating specific coordination with the platform regarding required resources (more details are available [here](#requirements-for-the-selection-of-platforms)) and can be completed in under 3 days of processing. This distinction is crucial, as automatic tools may not reliably handle tasks typically performed by human operators, which poses risks. For medium-sized activities with lower processing costs, the risks are minimized. APEx can provide additional [support](#support-overview) for larger upscaling activities.

Currently supported scenarios include:

### Geographical Upscaling

Geographical upscaling involves executing an algorithm over a larger area defined as exceeding the service's capabilities or benefitting from processing in parallel. This is accomplished by dividing the area into smaller tiles for separate processing. Challenges in such scenarios include input/output data management, tiling, and job orchestration.

APEx provides the following tools to support geographical upscaling activities:

* A graphical user interface will be created throughout the project for users, offering a self-service tool to perform the limited upscaling of APEx-compliant algorithms without requiring development experience. This tool will automate area splitting, execute the algorithm on each tile, and allow users to monitor progress and download results. This tool is currently under development. 

* For advanced workflows, users can access several [Job Orchestration Client Tools](#job-orchestration-client-tools) and [Data Management Client Tools](#data-management-client-tools). These tools support the automation of area splitting and algorithm execution while allowing users full control. While this approach requires some development experience, it provides the flexibility to customize the upscaling process to meet specific needs.

## Job Orchestration Client Tools

To address the complexities inherent in job orchestration, APEx adopts a stepped approach to ensure
that user requirements are fully addressed while ensuring the technical compatibility of APEx-compliant technologies and
platforms. The goal is to abstract the underlying complexities, providing users with a simplified and efficient way of
executing upscaling tasks.

APEx will start with establishing a formal procedure to gather in a structured way the upscaling requirements from ESA
projects. These requirements will serve as inputs for the consortium to prepare the environment for the upscaling
activities. This can include configuring a tailored environment and the pre-configuration of the job orchestration tools
that enable a simplified execution of upscaling tasks.

For the **openEO-powered platforms**, users of the APEx upscaling service currently have access to the following client
tools:

* An openEO batch job manager (Python library), which supports the creation of large-scale processing tasks for openEO
  developers by dividing them into separate batch jobs that can be automatically monitored. The openEO batch job manager
  is built on top of the openEO API and can therefore be used independently from the underlying platform.

During the following phase of APEx, the range of openEO client tools and their usability will be further enhanced to
better support comprehensive upscaling activities.

For the **Application Package compatible platforms**, users of the APEx upscaling service currently have access to the
following client tools:

* An Application Package / OGC API Process systematic processing manager (Python library), which supports the creation
  of large-scale processing tasks for Application Package users having technical skills to run such tool. The systematic
  processing job manager is built on top of the OGC API Process standard interface and can, therefore, be used to
  communicate with the underlying compatible platform.

During the following phase of APEx, the range of Application Package tools and their usability will be further
integrated when providing comprehensive support to upscaling activities.

The job orchestration client tools work in conjunction with other APEx services, like the [APEx Collaborative Environment](../instantiation/ide.md), to support upscaling activities alongside additional [support](#support-overview) for users needing assistance in setting up and configuring their environment.


## Data Management Client Tools

APEx is promoting the use of state-of-the-art technologies for data processing and data visualisation, based on S3 Cloud
storage as COG files encoding and with data assets registered on a STAC-compliant catalogue. Based on this, a system
shall provide the level of abstraction (tiling, CRS and projections, tiles and intermediate files) for the upscaling
scenarios part of the APEX upscaling activities. APEx is taking care of selecting Platforms which are supporting this
state-of-the-art.

In terms of tooling, APEx can provide access to a
dedicated [Geospatial Explorer](../instantiation/geospatial_explorer.md) instance, meant to leverage this technology and
that can be made available to projects upong request.

## Support Overview

Given the challenges of algorithm upscaling, APEx offers time-limited support for ESA projects, including:

* Basic training in the use of the upscaling tools.
* Support in defining an appropriate upscaling strategy tailored to the project’s needs.
* Guidance on selecting the most appropriate platform for the project’s upscaling task.

### Pre-requisites

To utilize the upscaling tools, projects must consider the following:

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


Projects are advised to contact their platform provider for possibly specific support packages.

:::{.callout-tip}

## Contact us

If your project could benefit from this service, please reach out to us.
:::

## Requirements for the selection of Platforms

Upscaling imposes additional requirements on platform providers beyond the APEx [compliance guidelines for platforms](../interoperability/algohostingenv.md). Please refer to the dedicated guidelines for [Algorithm Upscaling Platforms](../interoperability/upscaling.md) for more information.

## Related background material

* Large scale processing, by [openEO platform](https://docs.openeo.cloud/usecases/large-scale-processing/)
  and [CDSE openEO](https://documentation.dataspace.copernicus.eu/APIs/openEO/large_scale_processing.html)
* Job management in openEO,
  a [Jupyter notebook](https://github.com/Open-EO/openeo-community-examples/blob/main/python/ManagingMultipleLargeScaleJobs/ManagingMultipleLargeScaleJobs.ipynb)``