---
title: User Workspace Finder
---

## Overview

The User Workspace Finder service within the APEx Project Environments provides secure, personalised environments for individual
users to perform a wide range of tasks, including development, data processing, visualisation, and analysis. These single-user
environments are managed by JupyterHub and dynamically provisioned using Kubernetes, ensuring scalability, isolation, and
ease of use.

It is designed to provide the following key benefits to users when accessing their instance:

* **Flexibility and customisation**\
Configure a workspace with tools and settings tailored to specific needs.
* **Optimised for EO tasks**\
Access specialised tools and libraries for Earth observation.
* **Integrated ecosystem**\
Utilise other APEx services through your workspace.
* **Collaborative work**\
Share workspaces within team to facilitate collaboration and data sharing. Enhance community engagement and knowledge
sharing by publishing results.

Key features and capabilities of the User Workspace include:

* **Cloud services orchestration:**\
High availability and performance of multi-user-facing services, via automated deployment and scaling of containerised
applications, as well as built-in load balancing and service discovery mechanisms.
* **Secure, Isolated Environments:**\
Each user is provided with a dedicated namespace within the Kubernetes cluster, ensuring resource isolation and secure
data management.
* **Customisable Workspaces:**\
Workspaces can be tailored to user needs with specific configurations and tools, including pre-configured environments
for tasks like data analysis and machine learning.
* **Seamless APEx integration:**\
Workspaces benefit from a generic, configurable framework, ensuring the delivery of a broad range of APEx applications
and services, empowering efficient user workflows.
* **EO-focused tools access:**\
Readiness for resource-intensive software libraries like SNAP and GDAL, which are specifically designed for Earth
observation tasks.
* **Robust data management:**\Secure, persistent storage and retrieval of data using PersistentVolumeClaims (PVCs), along
with data management tools, connectivity to external data sources, and data sharing mechanisms.

## Showcase Scenarios

The User Workspaces Finder support a variety of use cases, making them versatile tools for the EO community. 
Some typical scenarios include:

* **Development and Testing**\
  Researchers and developers can use the User Workspace Finder to share EOAP files under work within a team.

* **Data Analysis and Visualisation**\
  Analysts can manage and perform data sharing of their Jupyter notebook files, climate datasets and data analysis result files.

* **Educational and Training Purposes**\
  Users can curate and share tutorials, for example related to various aspects of APEx, from setting up workspaces and accessing data in the Product Catalogue to using the IDE for development tasks.

:::{.callout-tip}

## Stay Tuned

Additional information will be shared on this page as the project progresses.
:::
