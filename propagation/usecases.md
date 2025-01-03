---
title: Use Cases for APEx EO Service Support
---

The APEx Algorithm Services aim for FAIR compliance of algorithms/applications and are designed to enhance the
efficiency, interoperability, and scalability of EO workflows and algorithms. Below are several use cases that
demonstrate how APEx can support EO projects.

## Use Case 1: Transforming functionality of an existing toolbox into on-demand, APEx-compliant services

### Scenario

Both of the following scenarios are supported:

1. A project discovered a toolbox to perform EO data processing tasks and wants to integrate a specific set of features
   from this toolbox into a cloud-based service implementation, typically without a clear preference for either an
   openEO processing graph or use it as an OGC Application Package.

2. ESA receives a request from the EO community to make the functionality of a specific EO toolbox available as
   cloud-based services.

### Solution

The [APEx Toolbox Cloudification](toolboxcloud.md) activities aim to convert a subset of features (e.g. analytical or
processing functionality that’s unique to the toolbox) from an existing toolbox into cloud-based services that comply
with APEx standards, enabling seamless integration with cloud resources and existing platforms. It is important to note
that the cloudification efforts focus on the data transformation and analytics functions provided by the toolbox and do
not include user interface elements or data I/O (which would typically be replaced with existing cloud service
functionality).

### Outcome

APEx performs an initial analysis of the toolbox, defines a cloudification strategy and estimates the effort and budget
required. Once ESA approves the request, the APEx team performs the development work. Key features of the toolbox become
accessible via an openEO process or as an OGC Application Package, allowing the project and/or EO community to utilise
these features as reusable, on-demand services on existing hosting platforms.

## Use Case 2: Technical algorithm performance enhancement

### Scenario

A project is experiencing performance issues with an algorithm. Both of the following scenarios are supported:

1. The algorithm is available at the service level, i.e., it is already implemented in openEO or packaged as an OGC
   Application Package.

2. The algorithm is available at the native source code level, i.e., it has not yet been implemented into openEO or
   packaged as an OGC Application Package.

### Examples

* The project has created a workflow/algorithm as an openEO processing graph. Executing this workflow takes too long and
  incurs high execution costs, not making it viable for running at the intended scale.
* The project created a new machine learning model in Python that performs inference based on EO data. However, the
  training and/or inference steps take too long, hindering scalability for processing larger areas of interest.
* The project uses an established EO algorithm that lacks performance or consumes too much RAM in the application case
  and that would greatly benefit from transitioning into a cloud-service or GPU-based implementation

### Solution

APEx offers [support to optimise algorithms](enhancement.md) through a structured analysis and improvement process. This
may include steps such as refactoring or algorithm porting. In the case of scenario 2, the APEx team will also assess
whether performance can be enhanced by integrating the algorithm into APEx-compliant technologies, such as openEO or OGC
Application Package. If so, the APEx [Algorithm Porting](porting.md) support can be recommended to enable the
transformation of an algorithm into an openEO UDP or package it as an OGC Application Package. The algorithm
optimisation can happen at native source code (e.g. Python, Fortran) or service implementation level (i.e., openEO,
Application Package).

### Outcome

The algorithm's performance is significantly improved.

## Use Case 3: Transforming an existing EO data processing algorithm, workflow or application into an openEO UDP or OGC Application Package

### Scenario

A project has developed an algorithm, workflow or application using non-APEx-compliant technology and seeks to convert
it into an openEO User Defined Process (UDP) or package it as an OGC Application Package.

### Examples

* The project has created an EO data processing pipeline for generating a new air quality index and wants to encapsulate
  it in an openEO UDP or OGC Application Package to facilitate its execution and reuse by the user community.

### Solution

APEx offers a set of initial [guidelines](../interoperability/algohosting.md) and
online [resources](ondemandservices.qmd) to help projects integrate their algorithm, processing workflow or application
into an APEx-compliant technology. Should additional assistance be required, the APEx can provide
further [Algorithm Porting](porting.md) support. After an initial analysis, APEx experts will propose an appropriate
APEx-compliant technology and assist the project in its implementation.

:::{.callout-tip}

## Want to share your algorithm with the APEx community?

Please refer to [Use Case 4](#use-case-4-make-an-algorithm-available-in-the-apex-algorithm-services-catalogue) to learn
how APEx can support you in sharing your algorithm with the community.
:::

### Outcome

The algorithm, workflow or application is successfully transformed and is now available on a cloud platform and in
the [APEx Algorithm Services Catalogue](https://algorithm-catalogue.apex.esa.int/) as an openEO UDP or OGC API Process.

## Use Case 4: Make an algorithm available in the APEx Algorithm Services Catalogue

### Scenario

A project has implemented an algorithm as an openEO User Defined Process (UDP) or packaged it as an OGC Application
Package (or had it ported to one of these two options) and wants to make it available to the APEx community.

::: {.callout-tip}

## Your algorithm is not yet available as an openEO UDP or packaged as an OGC Application Package?

If your algorithm has not yet been implemented in an APEx-compliant technology, please refer to the
[previous use case](#use-case-3-transforming-an-existing-eo-data-processing-algorithm-workflow-or-application-into-an-openeo-udp-or-ogc-application-package)
to discover how APEx can provide support.
:::

### Examples

* The project has created an openEO UDP or OGC Application Package that calculates a new air quality index and wants to
  share this service with the EO community.
* The project has developed a new machine learning model encapsulated in an openEO UDP or Application Package and wants
  to ensure it runs stably and within a controlled cost range.
* The project has developed an OGC Application Package and is seeking support to host it on an APEx-compliant platform.

### Solution

APEx will provide the necessary tools and comprehensive [support](onboarding.md) for integrating an algorithm into
the [APEx Algorithm Services Catalogue](https://algorithm-catalogue.apex.esa.int), ensuring its availability for reuse
within the EO community. The support also includes:

* Assistance in selecting and onboarding an APEx-compliant algorithm hosting platform to guarantee that an algorithm is
  available for execution as an on-demand service.
* Provision of guidelines and tools for automated testing and benchmarking of the service.
* Publishing guidelines and documentation for registering an algorithm in the APEx Algorithm Services Catalogue.

### Outcome

The algorithm is available in the [APEx Algorithm Services Catalogue](https://algorithm-catalogue.apex.esa.int),
enhancing its visibility and usability within the EO community as an APEx-compliant service

## Use Case 5: Generating large-scale value-added products or maps based on on-demand EO services

### Scenario

A project is currently testing and validating a data processing pipeline based on openEO or OGC Application Package over
a limited geographical area and aims to upscale this pipeline for large-scale data processing.

:::{.callout-tip}

## Is your pipeline not yet implemented in openEO or packaged as an OGC Application Package?

APEx provides a set of initial [guidelines](../interoperability/algohosting.md) and
online [resources](index.qmd#how-to-build-an-on-demand-service) to help you get started. If your project requires
additional assistance in making the data processing pipeline APEx-compliant,
additional [APEx Algorithm Porting](porting.md) support is available.
:::

### Examples

* The project has developed a workflow as an openEO processing graph or OGC API Process to generate a new air quality
  index. So far, the testing and validation of this workflow have been carried out over a limited geographical area, and
  the project now aims to generate the index at the country/regional level.
* The project has discovered an algorithm in the APEx Algorithm Services Catalogue for generating a new air quality
  index and aims to execute this algorithm on all historical data for the entire continent of Europe.

### Solution

APEx offers [tools and support](upscaling.md) to assist projects in automating and scaling their data processing
pipelines. These tools may include:

* **Project-Specific Workspace**\
  A JupyterLab environment allowing users to start and monitor long-running jobs.
* **Intelligent Job Distribution Tools**\
  Tools for managing multiple job executions

### Outcome

The project team receives support and tools that enable them to start processing, monitor progress, and successfully
generate large-area value-added products.
