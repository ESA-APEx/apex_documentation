# From earth observation application to service

The main goal of APEx is to support ESA projects in turning their EO applications into on-demand services.

Today, most ESA projects already generate a variety of results. This can be for instance derived products in the form of
raster files, an (open source) software toolbox that processes EO data, or even a 'system' or web service that generates results
on demand. 

What ESA envisions with APEx, is a focus on on-demand services as a key project outcome, built using standardized web service API's.
These web services can of course encapsulate software toolboxes, or be used to generate maps that can be disseminated in a classic way.
This is however a challenging task for many projects, so APEx is here to support all ESA application projects.

::: {.callout-tip}
## Related project types
If your project is an ESA 'science' project, you are supported by [Earth Code](https://earthcode.esa.int/).
For 'Green Transition Information Factory (GTIF)' projects, ESA's aim is to use EO services that are _already_ operational, so 
make sure to check out the APEx algorithm catalog when building a GTIF.

:::

The support offered by APEx is split up over various 'propagation services' that are offered. These services will appear
also in ESA network of resources, but for now can be activated by contacting the APEx team, who will evaluate it.

## What is an on-demand service?

An APEx-compliant on-demand service, is available eiter as an openEO 'User Defined Process' or as an OGC API Process, and
needs to meet a set of compliance guidelines. An important one is that the service has to remain available beyond the lifetime
of the ESA application project. This allows anyone to generate project results, via GUI's offered by APEx, or for instance a 
user interface that is purpose-built for a specific end-user application, such as a green transition information factory.

## How to build an on-demand service?

By far the easiest and cheapest option to build these on-demand services, is to use an existing platform, that is onboarded in the
ESA network of resources. APEx itself is _not_ a processing platform, but rather promotes the reuse of existing platforms.
By doing so, ESA encourages competition between platforms, hoping to incentivise them to innovate and improve their services.
This also leaves the option open for project consortia to build their own platform, as long as they comply with the guidelines.

### An openEO UDP based service.

When choosing to work with [openEO](https://openeo.org/), you need to simply turn your algorithm into a 'user defined process'. This is most easily
done in case you have built your application as an openEO process graph from the start, or if your workflow is sufficiently simple
to be translated into openEO. When in doubt, APEx may be able to support you with converting your algorithm into an efficient
openEO workflow!

Assuming you have such a workflow, the UDP can be built by parametrizing it. [This notebook](https://documentation.dataspace.copernicus.eu/notebook-samples/openeo/UDP.html)
shows how to do exactly that.

Once the UDP is available, it can be hosted in APEx, and associated with one or more backends that are able to run it.
As APEx evolves, tools will become available that aid this process, and that for instance allow to check if your service
is still functional.

### An OGC application package based service

Another option is to package your software using Docker containers. This approach is very generic, and is mostly relevant
if you have an existing piece of complex software that you want to make available as a service.

[This tutorial](https://terradue.github.io/ogc-eo-application-package-hands-on/) explains more about this option.

### What are the platforms to choose from?

The (likely incomplete) list of currently known platforms.

For openEO UDP's:

1. [openEO platform](https://openeo.cloud)
2. [CDSE openEO federation](https://dataspace.copernicus.eu)

For OGC Processes/Application Package:

1. [ELLIP](https://ellip.terradue.com)

Please contact APEX to be added here!

### How are services priced?

A key feature of these services, is that they need to be onboarded in the ESA [network of resources](https://nor-discover.org/), with
a pricing expressed in euros per km². ESA requests the standardized pricing scheme, to allow service offerings to be compared
more easily. 

The price of the service is determined by the project consortium, supported by APEx tooling. In general, the price needs to cover:

- The processing cost 
- A margin for fluctuation in processing cost
- Optionally, a margin for the ESA application project

Currently, it is the responsibility of the processing platform to add EO services to their NoR offering. This ensures that 
APEx retains a neutral position, and allows a direct negotiation between platform provider and service provider. Hence it
is also up to the platforms to provide an SLA (service level agreement) to the end user. The end user will thus interact with
the platform in case of service malfunctioning.

## What support does APEx offer to build these services?

As mentioned already, we want to simplify the complex task of building efficient, operational, cloud based services. 
ESA has recognized that this often involve specific IT skills that may not be present in the project consortium, or that
would require a large part of your project budget. Hence, the aim is to reduce this burden as much as possible.

### Algorithm enhancement service

The enhancement service starts from your own work, and based on automated benchmarks and expert review, tries to improve
it in terms of efficiency, while maintaining the same quality within error bounds relevant to your application.

This service always starts with an approval from the project officer to make an initial assessment of your work, and the 
feasibility of enhancing it, within a reasonable timeframe. Hence, the more detailed input you can provide in terms of code and
algorithm description, the more accurate the assessment will be, and the more likely it is that the service can be offered.
Applications that cannot be understood within the assessment period, may be deemed too risky to be enhanced.

Please keep in mind that this is about making good and promising algorithms even better. Hence provide a good motivation
for why your algorithm deserves spending some extra time on it.

### Algorithm upscaling service

This service helps with running your openEO UDP or OGC application package based algorithm over larger areas. This assumes
that the algorithm is already sufficiently efficient to be run at a larger scale in a cost-effective manner.

It mostly consists of self-service tooling that the project or even end-users can use to run an algorithm at scale, using
the processing capabilities of the platforms that are compatible with the service.

### Toolbox cloudification service

Sometimes an application algorithm may use features from an existing (open source) toolbox. This service is about porting
the toolbox functionality into the EO platform targeted by your project.

Like the enhancement service, this starts with an assessment of your request, to make an estimate of the effort required
to cloudify the toolbox. The main advantage of this approach, is that the specific piece of functionality will also become
available as a module building block for other projects. Hence, it is important to provide a good motivation for why
this feature is important enough to be 'cloudified'.

### Algorithm intercomparison service

The intercomparison service benchmarks various algorithms against each other. This allows us to provide a quality metric
for EO services that implement the same capability, helping end users to make informed decisions.

It can also be used to determine which algorithm is the best option to be 'cloudified' or enhanced.

