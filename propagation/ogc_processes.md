---
title: OGC API Processes - file-based processing for existing software
---

Another option to create an APEx-compliant service is to package your software using Docker containers. This approach is very generic and is particularly relevant if you have an existing piece of complex software that you want to make available as a service.
This process adheres to the Best Practices for Earth Observation Application Packaging as defined by the Open Geospatial Consortium (OGC) and the EO Exploitation Platform Common Architecture (EOEPCA) spearheaded by the European Space Agency (ESA). These guidelines ensure that EO applications are reproducible and portable across different execution scenarios.


An EO data processing application is a command-line interface (CLI) tool that runs as an unsupervised, non-interactive executable program: it receives input arguments, performs a computation, and terminates after producing some output. EO Applications typically offer functions that perform data operations like processing / reprocessing, projection, visualisation or analysis.

The applications can be written in a variety of coding languages (e.g. Python, C++, R, Java, C#, and also shell scripts) and make use of specific software libraries, like the Geospatial Data Abstraction Library (GDAL), the Sentinel Application platform (SNAP), Orfeo Toolbox (OTB). Overall, an EO application is treated as as a black-box that needs to be:

* Executable as a command-line tool.
* Delivered in a container image with all the necessary software, libraries and configuration files.

Complex workflows can be built on top of the applications following fan-in and fan-out design patterns that can be combined in the nodes of a Directed Acyclic Graph (DAG).  The Application Package document ensures the EO application reproducibility and portability of the application across various execution scenarios.

## Building an OGC application package based service

By packaging your software using Docker containers and using the CWL (Common Workflow Language) tooling and wrappers, you can start forming an OGC Application Package.
Application packaging is therefore a systematic software engineering process that encapsulates all components necessary for these EO data processing workflows. This includes the application code, dependencies, configuration files, metadata, and runtime environments. The primary objective is to create standardised, portable packages that can be deployed consistently across diverse environments, from local development setups to cloud-based infrastructures and to be deployed as a web service.

For further guidance on creating and using EOAP, you can explore the following resources:

- [OGC EO Application Package Best Practice](https://docs.ogc.org/bp/20-089r1.html)
- [EOAP tutorial](https://terradue.github.io/ogc-eo-application-package-hands-on/) explains more about this option.
- [EOAP Resources & Guides](https://eoap.github.io/)
