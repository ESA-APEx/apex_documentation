---
title: User Workspace Finder
---

## User Workspace Finder Overview

The User Workspace Finder service within the APEx Project Environments provides secure, personalised environments for individual
users to perform a range of data management and data sharing tasks.

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

### ApplicationHub Showcase Scenarios

The ApplicationHub provides access to platforms and web apps in a Software-as-a-Service mode. Users can engage with
containerised Interactive Graphical Applications (IGAs), specialised geospatial data exploration web apps, and customizable
dashboards. This allows users not only to explore and analyse results but also to execute new applications or analyses and
customise their computing experiences, all accessed from the same integrated Hub interface.

* **Development and Testing**\
  Researchers and developers can use the User Workspace Finder to organise and share EOAP files under work within a team.

* **Data Analysis and Visualisation**\
  Analysts can manage and perform data sharing of their Jupyter Notebook files, climate datasets and data analysis result
  files.

* **Educational and Training Purposes**\
  Users can curate and share tutorials, for example related to various aspects of APEx, from setting up workspaces and
  accessing data in the Product Catalogue to using the IDE for development tasks.

### Workspace UI Showcase Scenarios

The Workspace UI allows a Workspace user to invite additional members, create new buckets for sharing data or for temporary
scratch storage, manage access to their own buckets (granting or revoking permissions), and request access to other shared
buckets.

* **Secure Collaboration**\
  Built-in Keycloak integration ensures unified authentication and fine-grained access control. Workspace owners can curate
  the project space, invite collaborators, organize buckets and define how data is shared by granting or revoking access
  permissions as needed.

  Upcoming releases will introduce vended credentials for scoped, time-limited access tokens.

* **Cross-workspace collaboration**\
  Users can browse and read from the UI the curated objects in the shared bucket from other Workspace owners, without
  duplicating data. Conversely, users can browse and organise their own datasets, and generate secure share links directly
  from the browser.

:::{.callout-tip}

## Stay Tuned

Additional information will be shared on this page as the project progresses.
:::
