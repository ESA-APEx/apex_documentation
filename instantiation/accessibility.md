---
title: Accessing your environment
---

Each instantiated component is assigned a dedicated URL following the convention:

`https://<tool>.<project>.apex.esa.int.`

This URL assignment process is fully automated by APEx, including the generation of the necessary security certificates.
For example, if a project named `project-a` requests the instantiation of a user forum and a project portal, the following
URLs will be created:

• `https://project-a.apex.esa.int` – the project portal
• `https://forum.project-a.apex.esa.int` – the project's user forum

This granular URL assignment ensures a clear separation between the different instantiated components, making them easy
to manage and access. Additionally, as these URLs are publicly accessible, projects can seamlessly integrate the components
into their existing websites by linking to them directly.

In addition to the default URLs provided during component instantiation, APEx also supports the use of custom domains owned
by the requesting project. Configuring custom domains requires additional setup, which is handled upon request. More information
can be found in the [Custom domains for your project environment](../guides/custom_domain.md) guide.
