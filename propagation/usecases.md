---
toc: false
---
# Use Cases for APEx EO Service Support

The APEx services are designed to enhance the efficiency, interoperability, and scalability of EO workflows and algorithms.
Below are several use cases that demonstrate how these services can be applied to support your EO project.

---

## Use Case 1: Transforming an existing toolbox into an on-demand, reusable, APEx-compliant service

### Problem

A project has been using a toolbox to perform EO data processing tasks but now wants to integrate a specific set of features 
from this toolbox into an openEO processing graph or include it within a CWL workflow.

### Examples

*

### Solution
The [APEx Toolbox Cloudfication](toolboxcloud.md) service aims to convert a subset of features from an existing toolbox into 
cloud-based services that comply with APEx standards, enabling seamless integration with cloud resources and existing 
platforms. The cloudification efforts focus on the core functions provided by the toolbox and do not include user interface 
elements.

### Outcome
Key features of the toolbox become accessible via an openEO process or as an OGC Application Package, allowing the project 
to utilize these features as reusable, on-demand services on existing hosting platforms.

---

## Use Case 2: Improving algorithm performance

### Problem
A project is facing performance issues with:

1. An algorithm that is already available as an openEO processing graph or an OGC Application Package.
2. An algorithm that has not yet been implemented as an openEO processing graph or OGC Application Package.

### Examples

*

### Solution
The [APEx Algorithm Enhancement](enhancement.md) service offers support to optimize your algorithm through a structured 
analysis and improvement process. In the case of scenario 2, the APEx team will also assess whether performance can be enhanced 
by integrating the algorithm into APEx-compliant technologies, such as openEO or OGC Application Package. If so, the 
[APEx Toolbox Cloudification](toolboxcloud.md) service can be recommended to transform the algorithm into an openEO process or 
OGC Application Package.

### Outcome
The algorithm's performance is significantly improved.

---

## Use Case 3: Onboarding an existing openEO UDP or OGC Application Package onto the APEx catalogue

### Problem
A project has packaged its algorithm into an openEO UDP or OGC Application Package and wants to onboard it to the APEx Algorithm Catalogue.

### Examples

*

### Solution
The [APEx Interoperability and Compliance Guidelines](../interoperability/algohosting.md) serve as a starting point for 
algorithm and workflow developers to prepare their openEO processing graph or OGC Application Package for integration into 
the APEx catalogue. Once the processing graph is prepared, or if additional assistance is needed, the 
[APEx Algorithm Onboarding](onboarding.md) service provides support for implementing and validating these guidelines and facilitating 
the onboarding process. The service also helps projects in identify APEx-compliant hosting platforms suitable for running 
the algorithm.

### Outcome
The workflow is successfully onboarded into the APEx Algorithm Catalogue, enhancing its visibility and usability within
the EO community as an APEx-compliant service.

---

## Use Case 4: Transforming an existing EO data processing workflow into an openEO UDP or OGC Application Package

### Problem
A project has developed a workflow using non-APEx-compliant technology and wants to convert it into an openEO UDP or OGC 
Application Package.

### Examples

*

### Solution
Within the project, it is the responsibility of the algorithm developer to implement the existing workflow using APEx-compliant 
technologies, following the [APEx Interoperability and Compliance Guidelines](../interoperability/algohosting.md). If needed, 
additional support for implementing these guidelines and onboarding the workflow into the APEx Algorithm Catalogue can be requested 
through the [APEx Algorithm Onboarding](onboarding.md) service. If the EO data processing workflow is part of an existing toolbox, the 
project may also consider using the [APEx Toolbox Cloudification service](toolboxcloud.md).


### Outcome
The workflow is successfully migrated to an APEx-compliant on-demand service and onboarded into the APEx Algorithm Catalogue, increasing 
its visibility and usability within the EO community as an APEx-compliant service.

---

## Use Case 5: Automating EO Data Processing Pipelines for Large-Scale Data Processing

### Problem
A project is currently testing and validating a data processing pipeline on a limited subset of data and aims to upscale
this pipeline for production, large-scale data processing.

### Examples

*

### Solution
The [APEx Upscaling Service](upscaling.md) provides tools and support to assist projects in automating and scaling their
data processing pipelines. A key prerequisite for utilizing this service is that your data processing pipeline must be
APEx-compliant. The [APEx Interoperability and Compliance Guidelines](../interoperability/algohosting.md) serve as an
excellent starting point for ensuring your pipeline meets APEx compliance. If your project requires additional assistance
in making the data processing pipeline APEx-compliant, the [APEx Algorithm Onboarding](onboarding.md) service is available to
provide further support.

If your pipeline includes steps that are not compatible with cloud-based environments, you may consider using the
[APEx Toolbox Cloudification](toolboxcloud.md) service to transform those components into modular APEx-compliant services.

### Outcome
A comprehensive data processing environment is established for your project, equipped with the necessary tools and support
for scaling your EO data processing pipeline.

---
