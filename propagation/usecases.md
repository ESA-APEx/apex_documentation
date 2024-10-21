# Use Cases for APEx EO Service Support

The APEx services are designed to enhance the efficiency, interoperability, and scalability of EO workflows and
algorithms.
Below are several use cases that demonstrate how these services can be applied to support your EO project.

## Use Case 1: Transforming features of an existing toolbox into an on-demand, APEx-compliant service

### Scenarios

* A project discovered a toolbox to perform EO data processing tasks and wants to integrate a specific set of features
  from this toolbox into an openEO processing graph or use it as a OGC Application Package.

### Solution

The [APEx Toolbox Cloudfication](toolboxcloud.md) service aims to convert a subset of features from an existing toolbox
into
cloud-based services that comply with APEx standards, enabling seamless integration with cloud resources and existing
platforms. It is important to note that the cloudification efforts focus on the data transformation functions provided by the toolbox
and do not include user interface elements.

### Outcome

Key features of the toolbox become accessible via an openEO process or as an OGC Application Package, allowing the
project
to utilize these features as reusable, on-demand services on existing hosting platforms.

## Use Case 2: Improving algorithm performance

### Scenarios

A project is experiencing performance issues with an algorithm. The following scenarios are supported:

1. The algorithm is implemented in openEO or made available as an OGC Application Package.
2. The algorithm has not yet been integrated into an openEO or OGC Application Package.

### Examples

* The project has created an openEO processing graph. Executing this workflow takes too long and incurs high execution
  costs, making it unviable for running at the intended scale.
* The project created a new machine learning model in Python that performs inference based on EO data. However, the
  training and/or inference steps take too long, hindering scalability for processing larger areas of interest.

### Solution

The [APEx Algorithm Enhancement](enhancement.md) service offers support to optimize your algorithm through a structured
analysis and improvement process. In the case of scenario 2, the APEx team will also assess whether performance can be
enhanced
by integrating the algorithm into APEx-compliant technologies, such as openEO or OGC Application Package. If so, the
[APEx Algorithm Porting](porting.md) service can be recommended to support the transformation of your algorithm into an
openEO UDP or package it as an
OGC Application Package.

### Outcome

The algorithm's performance is significantly improved.

## Use Case 3: Transforming an existing EO data processing workflow into an openEO UDP or OGC Application Package

### Scenarios

* A project has developed a workflow using non-APEx-compliant technology and seeks to convert it into an openEO User
  Defined Process (UDP) or OGC Application Package.

### Examples

* The project has created an EO data processing pipeline for generating a new air quality index and wants to encapsulate
  it in a UDP or OGC Application Package to facilitate easy execution by stakeholders and
  integration into a dashboard.

### Solution

APEx offers a set of initial [guidelines](../interoperability/algohosting.md) and
online [resources](index.qmd#how-to-build-an-on-demand-service)
to help projects with integrating their processing workflow into an APEx-compliant technology. Should additional
assistance be required, the [APEx Algorithm Porting](porting.md) service can provide further support. After an initial
analysis, APEx experts will propose an appropriate APEx-compliant technology and assist your team in its implementation.

:::{.callout-tip}

# Want to share your algorithm with the APEx community?

Please refer to Use Case 4 to learn how APEx can support you in sharing your algorithm with the community.
:::

### Outcome

The algorithm is successfully transformed and is now available as an openEO UDP or OGC Application Package.

## Use Case 4: Make your algorithm available in the APEx Algorithm Catalogue

### Scenarios

* A project has implemented its algorithm as an openEO User Defined Process (UDP) or packaged it as an OGC Application
  Package and wants to make it available to the APEx community.

::: {.callout-tip}

# Your algorithm is not yet available as an openEO UDP or packaged as an OGC Application Package?

If your algorithm has not yet been implemented in an APEx-compliant technology, please refer to the previous use case to
discover how APEx can provide support.
:::

### Examples

* The project has created an openEO UDP or OGC Application Package that calculates a new air quality index and wants to
  share this service with the EO community.
* The project has developed a new machine learning model encapsulated in an openEO UDP or Application Package and wants
  to ensure it runs stably and within a controlled cost range.
* The project has developed an OGC Application Package and is seeking support to host it on an APEx-compliant platform.

### Solution

The [APEx Algorithm Onboarding](onboarding.md) service offers comprehensive support for integrating your algorithm into
the APEx Algorithm Catalogue, ensuring its availability for reuse within the EO community. The service includes:

* Assistance in selecting an APEx-compliant algorithm hosting platform to guarantee that your algorithm is available for
  execution.
* Provision of tools for automated testing and benchmarking of your algorithm.
* Support and resources for registering your algorithm in the APEx Algorithm Catalogue.

### Outcome

The algorithm is available in the APEx Algorithm Catalogue, enhancing its visibility and usability within
the EO community as an APEx-compliant service.

## Use Case 5: Generating large scale maps or results based on on-demand EO services

### Scenarios

* A project is currently testing and validating an openEO or OGC Application Package based data processing pipeline on a
  limited subset of data and aims to upscale this pipeline for production and large-scale data processing.

:::{.callout-tip}

# Is your on-demand service not yet implemented in openEO or OGC API Process?

APEx provides a set of initial [guidelines](../interoperability/algohosting.md) and
online [resources](index.qmd#how-to-build-an-on-demand-service) to help you get started. If your project requires
additional assistance in making the data processing pipeline APEx-compliant, the [APEx Algorithm Porting](porting.md)
service is available to provide further support.
:::

### Examples

* The project has developed an openEO processing graph or OGC Application Package-based workflow to generate a new air
  quality index. So far, the testing and validation of this workflow have been carried out over a limited geographical
  area, and the project now aims to generate the index at the country level.
* The project has discovered an algorithm in the APEx Algorithm Catalogue for generating a new air quality index and
  aims to execute this algorithm on all historical data for the entire continent of Europe.

### Solution

The [APEx Upscaling Service](upscaling.md) offers tools and support to assist projects in automating and scaling their
data processing pipelines.
These tool may include:

* **Project-Specific Workspace**
  <br/>A Jupyterlab environment allowing to start and monitor long-running jobs.
* **Intelligent Job Distribution Tools**
  <br/>Tools for managing multiple job executions.

### Outcome

A comprehensive data processing environment is established for your project, equipped with the necessary tools and
support for scaling your EO data processing pipeline.
