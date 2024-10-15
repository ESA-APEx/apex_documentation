# From Earth Observation Application to Service

One of the primary goals of APEx is to support ESA projects in transforming their EO applications into re-usable, scalable, on-demand services.

Today, most ESA projects generate a variety of results. These can include for instance derived products in the form of
raster files, (open-source) software toolboxes for processing EO data, or even a 'system' or web service that generates results
on demand.

What ESA envisions with APEx, is a focus on on-demand services as a key project outcome, built using standardized web service APIs.
These web services can encapsulate software toolboxes or be used to generate maps that can be disseminated in a classic way.

However, developing on-demand services is a challenging task for many projects.
APEx is here to support all ESA application projects in overcoming these challenges.

::: {.callout-tip}

## Related project types
* If your project is an **ESA Science Project**, you are supported by [EarthCODE](https://earthcode.esa.int/).
* For **Green Transition Information Factory (GTIF)** projects, ESA's aim is to use EO services that are already operational.
Therefore, when building a GTIF, be sure to check out the APEx Algorithm Catalogue.
:::

The support offered by APEx is split up over various 'propagation services' that are offered. These services will appear
also in ESA network of resources, but for now can be activated by contacting the APEx team, who will evaluate it.

## What is an on-demand service?

An APEx-compliant on-demand service is available eiter as an openEO User Defined Process (UDP) or as an OGC API Process and
must meet a set of [compliance guidelines](interoperability/algohosting.md). A key requirement is that the service must
remain available beyond the lifetime of the ESA application project. This ensures that projects results can be generated
by anyone via graphical user interfaces offered by APEx, or a user interface purpose-built for a
specific end-user application, such as the Green Transition Information Factories.

## How to build an on-demand service?

The easiest and most cost-effective way to build these on-demand services is to use an existing platform that is onboarded
in the [ESA Network of Resources (NoR)](https://nor-discover.org/en/portfolio/). It is important to note that APEx itself is _not_
a processing platform, but rather promotes the reuse of existing platforms.This approach also allows project consortia the option to build their own platform,
provided they comply with the established [guidelines](interoperability/algohostingenv.md).

### Building an openEO UDP based service

When choosing to work with [openEO](https://openeo.org/), you need to turn your algorithm into a User Defined Process (UDP). This process
is straightforward if you have built your application as an openEO process graph from the start or if your workflow is simple
enough to be translated into openEO. If you need assistance, APEx can support you in converting your algorithm into an
efficient openEO workflow!

Assuming you have such a workflow, the UDP can be built by parametrizing it. [This notebook](https://documentation.dataspace.copernicus.eu/notebook-samples/openeo/UDP.html)
demonstrates exactly how to do that.

Once the UDP is available, it can be hosted in APEx and associated with one or more backends capable of running it.
As APEx evolves, tools will become available that aid this process, such as including functionality to check if your service
is still functional.

The following resources can support you in learning more about UDPs:

- [APEx openEO process (UDP) writer guide](udp_writer_guide.qmd#sec-udp-writing)
- [APEx openEO process (UDP) integration guide](udp_writer_guide.qmd#sec-udp-integration)
- [UDP support in Python](https://open-eo.github.io/openeo-python-client/udp.html#user-defined-processes)
- [Jupyter notebook example](https://github.com/Open-EO/openeo-community-examples/blob/main/python/Sentinel1_Stats/Sentinel1_Stats.ipynb)
- [Official openEO specification](https://api.openeo.org/#tag/User-Defined-Processes)


### Building an OGC application package based service

Another option is to package your software using Docker containers. This approach is very generic and is particularly relevant
if you have an existing piece of complex software that you want to make available as a service.

[This tutorial](https://terradue.github.io/ogc-eo-application-package-hands-on/) explains more about this option.

### What are the platforms to choose from?

Currently, APEx supports the integration of services for the following APEx-compliant platforms.
However, it is important to note that this list can be extended as APEx evolves.


For openEO UDPs:

* [openEO platform](https://openeo.cloud)
* [CDSE openEO federation](https://dataspace.copernicus.eu)

For OGC Processes/Application Package:

* [ELLIP](https://ellip.terradue.com)

Please contact APEX to be added here!

### How are services priced?

A key feature of the resulting on demand services is that they need to be onboarded in the ESA [Network of Resources (NoR)](https://nor-discover.org/), with
pricing expressed in euros per km². The price of the service is determined by the project consortium, supported by APEx tooling.
In general, the price needs to cover:

- The processing cost
- A margin for fluctuation in processing cost
- Optionally, a margin for the ESA Application Project

Currently, it is the responsibility of the processing platform to add EO services to their NoR offering. This ensures that
APEx retains a neutral position, and allows a direct negotiation between platform provider and service provider. Consequently, it
is also up to the platforms to provide an SLA (service level agreement) to the end user. The end user will thus interact with
the platform directly in case of service malfunctioning.

## What support does APEx offer to build these services?

As stated earlier, our goal is to simplify the complex task of building efficient, operational, cloud-based services.
ESA has recognized that this often involve specific IT skills that may not be present in the project consortium, or that
would consume a large part of the project budget. Therefore, we aim to reduce these burdens as much as possible by providing
the following services:



* **[Algorithm Hosting](propagation/hosting.md)**
    <br/>xplore how APEx can assist in hosting your algorithms within an APEx-compatible environment and sharing them across the EO community.
* **[Algorithm Upscaling](propagation/upscaling.md)**
  <br/>Learn how APEx enables the execution of algorithms at scale.
* **[Algorithm Enhancement](propagation/enhancement.md)**
  <br/>Discover how APEx supports improving the performance of your algorithms or workflows.
* **[Toolbox Cloudification](propagation/toolboxcloud.md)**
  <br/>Turn the features of your favorite toolbox into cloud-based building blocks with APEx.
* **[Algorithm Intercomparison](propagation/intercomparison.md)**
  <br/>Learn how APEx facilitates comparing algorithms and workflows to aid decision-making.
