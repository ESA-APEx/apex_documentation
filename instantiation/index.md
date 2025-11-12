---
title: Dynamic software components for your project
---

The APEx Project Environments are designed to provide managed, configurable environments that support the collaboration,
development, exploration, and visualisation of Earth Observation (EO) application project results.
These tools are crucial for facilitating the effective sharing, maintenance, and utilisation of project outcomes within
the Earth Observation community, ensuring that they remain readily accessible and usable for extended time periods.

APEx aims to cater to the diverse and multifaceted needs of the EO community by delivering Project Environments as Software
as a Service (SaaS) products. It manages the delivery of either single-user or shared environments, managed within a
unified cloud infrastructure, thus facilitating a wide range of user tasks, including development, hosting, execution,
and exploratory analysis of EO applications.

At the core of the APEx Project Environments is the ability for APEx to manage and deliver these environments effectively.
Project-wide community-oriented tools, such as the Project Web Portal, Product Catalogue, Documentation Portal, and User
Forum, are managed directly by Kubernetes and typically instantiated once per project.
Conversely, single-user-specific workspaces allow the instantiation of Apps by a single user at any time, while sharing
data across these Apps. These tools, including the User Workspace Finder, the Code Server Interactive Development
Environment (IDE),the JupyterLab workspace, the QGIS user workspace, and in certain cases, dashboards and web applications,
are all managed by a dedicated ApplicationHub server. This ApplicationHub orchestrates the launch and management of such
software deployments,ensuring secured (isolated from other users) and customisable environments for individual users, while
allowing targeted file sharing operations among users.

A key feature of the APEx Project Environments is the ability to provide managed, configurable environments.
These environments can be tailored to the specific needs of different projects and users, supporting various tasks,
including exploratory analysis, development, hosting, and execution of EO applications.
This flexibility and configurability allow the project members to focus on their primary research objectives
without being bogged down by the technical complexities of setting up and maintaining advanced, Cloud-native workspaces.

Another critical component of the APEx Instantiation Services is the seamless integration with
the [ESA's Network of Resources (NoR)](https://nor-discover.org/en/portfolio/). The focus is on developing new tools, which
are meant to enrich the current NoR Portfolio offering. These new tools are being onboarded into the NoR, making
them available as purchasable services. For services that already exist in the NoR Portfolio, such as the ELLIP Studio IDE, the goal is to
integrate these through coordination with their provider(s). The technical challenge lies in achieving seamless integration and alignment of
business models, ensuring that newly developed and existing services work harmoniously within the APEx.

The specific components of the APEx Project Environments include:

* **[Geospatial Explorer](geospatial_explorer.md)**\
  Provide a data-driven user interface to display and visualise geospatial and tabular data from a range of supported
  web services based on a configuration defined by a dashboard administrator.
* **[Project Web Portal](project_portal.md)**\
  Creating a project website based on Drupal, working in synergy with other APEx services.
<!-- // * [**User Workspace Finder**](user_workspace_finder.md)\
//  Offering a secure and personalised work environment with data management and data sharing mechanisms. -->
* [**Code Server IDE**](app_code_server.md)\
  Leveraging IDE capabilities tailored specifically for EO tasks, based on the open-source software Code Server (VS Code in the browser).
* [**JupyterLab IDE**](app_jupyterlab.md)\
  Leveraging IDE capabilities tailored specifically for EO tasks, based on open-source software JupyterLab.
* [**QGIS on a Remote Desktop**](app_qgis.md)\
  Leveraging Geographic Information System functions, based on the open-source software QGIS.
* [**Product Catalogue**](catalog.qmd)\
  Featuring SpatioTemporal Asset Catalog (STAC) catalogues and streamlined data ingestion processes.
* [**Documentation Portal**](documentation.qmd)\
  Supporting customisation and interactive visualisation using the Quarto framework.
* [**User Forum**](forum.md)\
  Providing a community-building platform based on the open-source software Discourse.

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
[Project Web Portal](./project_portal.md), links to the instantiated tools, such as the
[Geospatial Explorer](./geospatial_explorer.md), [Product Catalogue](./catalog.qmd) or [JupyterLab](./app_jupyterlab.md), can be
embedded directly into the site's navigation structure. This provides a unified access point for project stakeholders
and visitors to the project website.

* **Public and Private Tool Segmentation**: Projects can choose to expose only selected tools to the public while
restricting others to registered team members. For instance, the [Geospatial Explorer](./geospatial_explorer.md) might be
made publicly available for data discovery, while the collaborative [JupyterLab](./app_jupyterlab.md) remains limited to project members.

By thoughtfully providing access to the APEx instantiated services, projects can create a rich, interactive, and secure
environment that supports ongoing collaboration, knowledge sharing, and engagement with both internal and external audiences.
