# Use Cases for APEx EO Service Support

The APEx services are designed to enhance the efficiency, interoperability, and scalability of EO workflows and
algorithms.
Below are several use cases that demonstrate how these services can be applied to support your EO project.

## Use Case 1: Transforming features of an existing toolbox into an on-demand, APEx-compliant service

### Scenarios

* A project discovered a toolbox to perform EO data processing tasks and wants to integrate a specific set of features
  from this toolbox into an openEO processing graph or use it within a CWL workflow.

### Solution

The [APEx Toolbox Cloudfication](toolboxcloud.md) service aims to convert a subset of features from an existing toolbox
into
cloud-based services that comply with APEx standards, enabling seamless integration with cloud resources and existing
platforms. It is important to note that the cloudification efforts focus on the core functions provided by the toolbox
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
  Defined
  Process (UDP) or OGC Application Package.

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

## Use Case 5: Automating EO Data Processing Pipelines for Large-Scale Data Processing

### Scenarios

* A project is currently testing and validating an openEO or CWL data processing pipeline on a limited subset of data
  and aims to upscale this pipeline for production and large-scale data processing.

:::{.callout-tip}

# Is your pipeline not yet implemented in openEO or CWL?

APEx provides a set of initial [guidelines](../interoperability/algohosting.md) and
online [resources](index.qmd#how-to-build-an-on-demand-service) to help you get started. If your project requires
additional assistance in making the data processing pipeline APEx-compliant, the [APEx Algorithm Porting](porting.md)
service is available to provide further support.
:::

### Solution

The [APEx Upscaling Service](upscaling.md) offers tools and support to assist projects in automating and scaling their
data processing pipelines.
These tool may include:

* **Project-Specific Workspace**
  <br/>A dedicated workspace for managing and monitoring your processing pipelines.
* **Intelligent Job Distribution Tools**
  <br/>Automated tools for distributing and tracking processing jobs efficiently

### Outcome

A comprehensive data processing environment is established for your project, equipped with the necessary tools and
support for scaling your EO data processing pipeline.
