---
title: Dynamic software components for your project
---

The APEx Project Environments are designed to provide managed, configurable environments that support the collaboration,
development, exploration, and visualisation of application project results. These tools are crucial for facilitating the
effective sharing, maintenance, and utilisation of project outcomes within the Earth Observation (EO) community,
ensuring that they remain readily accessible and usable for extended periods.

APEx aims to cater to the diverse and multifaceted needs of the EO community by delivering Software as a Service (SaaS)
products. It manages the delivery of single-user or shared work environments within a unified cloud infrastructure,
facilitating a wide range of user tasks, including development, hosting, execution, and exploratory analysis of EO
applications.

At the core of the APEx Project Environments is the ability to manage and deliver these environments effectively. Project-wide
community-oriented tools, such as the portal, catalogue, documentation portal, and user forum, are managed directly by
Kubernetes and typically instantiated once per project. Conversely, single-user-specific workspaces allow the
instantiation of tools by a single user at any time. These tools, including the User Workspace, Interactive Development
Environment (IDE), and, in certain cases, dashboards and web applications, are managed by JupyterHub. JupyterHub
orchestrates the launching and management of these software deployments, ensuring isolated and customisable environments
for individual users.

A key feature of the APEx Project Environments is the ability to provide managed, configurable environments. These environments
can be tailored to the specific needs of different projects and users, supporting various tasks, including development,
hosting, execution, and exploratory analysis of EO applications. This flexibility and configurability allow these
projects to focus on their primary research objectives without being bogged down by the technical complexities of
setting up and maintaining their workspaces.

Another critical component of the APEx Instantiation Services is the seamless integration with
the [ESA's Network of Resources (NoR)](https://portfolio.nor-discover.org/). The focus is on developing new tools, which
are those that do not currently exist in the NoR. These new tools are to be developed and onboarded into the NoR, making
them available as payable services. For tools components that already exist, such as the ELLIP IDE, the goal is to
integrate these existing services. The technical challenge lies in achieving seamless integration and alignment of
business models, ensuring that newly developed and existing services work harmoniously within the APEx.

The specific components of the APEx Project Environments include:

* **[Geospatial Explorer](geospatial_explorer.md)**\
  Provide a data-driven user interface to display and visualise geospatial and tabular data from a range of supported
  web services based on a configuration defined by a dashboard administrator.
* **[Project Portals](project_portal.md)**\
  Creating a project website based on Drupal, working in synergy with other APEx services.
* [**User Workspaces**](user_workspace.md)\
  Offering secure and personalised work environments with data-sharing mechanisms.
* [**Interactive Development Environments**](ide.md)\
  Leveraging Code Server (VS Code in the browser) tailored specifically for EO tasks.
* [**Product Catalogues**](catalog.qmd)\
  Featuring SpatioTemporal Asset Catalog (STAC) catalogues and streamlined data ingestion processes.
* [**Documentation Portals**](documentation.qmd)\
  Supporting customisation and interactive visualisation using the Quarto framework.
* [**User Forums**](forum.md)\
  Providing a community-building platform based on open-source software Discourse.

The APEx Project Environments will be essential for ensuring that the results of EO projects are effectively shared and
utilised, fostering greater collaboration and innovation within the EO community. By providing robust, scalable, and
user-friendly environments, the APEx Project Environments help maximise the impact of EO research and applications.

Learn how the APEx Project Environments facilitate collaborative working environments for various [use cases](./usecases.qmd).

## Creating a collaborative project environment

As shown in the [use cases](./usecases.qmd), APEx offers a flexible suite of tools that can be instantiated independently
or integrated to form a cohesive, collaborative project environment. Projects are encouraged to tailor the setup to their
specific needs, combining the various APEx tools in ways that enhance collaboration, accessibility, and visibility.

Projects can interconnect their instantiated services in several ways:

* **Integrated Navigation**: If a project already has a public-facing website or uses the APEx
[Project Portal](./project_portal.md), links to the instantiated tools, such as the
[Geospatial Explorer](./geospatial_explorer.md), [Product Catalogue](./catalog.qmd) or [JupyterLab](./ide.md), can be
embedded directly into the site's navigation structure. This provides a unified access point for project stakeholders
and visitors to the project website.

* **Public and Private Tool Segmentation**: Projects can choose to expose only selected tools to the public while
restricting others to registered team members. For instance, the [Geospatial Explorer](./geospatial_explorer.md) might be
made publicly available for data discovery, while the collaborative [JupyterLab](./ide.md) remains limited to project members.

By thoughtfully providing access to the APEx instantiated services, projects can create a rich, interactive, and secure
environment that supports ongoing collaboration, knowledge sharing, and engagement with both internal and external audiences.
