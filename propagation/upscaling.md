# Algorithm Upscaling Service

The Algorithm Upscaling Service facilitates the execution of your openEO UDP or OGC application package based algorithm
over larger geographic areas. The service assumes that the algorithm is already efficient enough to operate cost-effectively
at scale.

The service primarily provides self-service tools that project teams or end-users can utilize to run an algorithm at scale, using
the processing capabilities of the platforms that are compatible with the service. These tools currently include:

* An **openEO batch job manager**, which supports large-scale processing tasks by dividing them into separate batch jobs that are automatically monitored.

:::{.callout-warning}
# Work in progress

A prototype of this specific APEx service is expected to be available from November 2024 onwards. 
:::

## Upscaling support

As upscaling to large areas can be challenging, APEx offers the possibility to request time-limited support for your 
ESA project. Based on your needs, APEx can provide:

- Basic training in the use of the upscaling service.
- Definition of an appropriate upscaling strategy, tailored to your needs.
- Selection of the most appropriate platform for your upscaling task.

In order to make use of the upscaling service, please be aware that careful planning is needed:
 
 - Your service needs to be onboarded in APEx before upscaling can start. Please refer to our [Algorithm Onboarding](./onboarding.md) service for more information. 
 - The performance of your service can drastically affect the feasibility of upscaling. Consider the use of the [Algorithm Enhancement](./enhancement.md) service to improve the performance of your algorithm.
 - Processing and approval of a support request can take up to 1 month. Basic metrics from the algorithm onboarding process are used to evaluate the overall feasibility of your request.
 - Before the actual production can start, preparation work may take a significant amount of time, depending on your own experience and complexity of the task.
 - APEx does not provide operators to monitor your production.

It’s also advisable to contact your platform provider, as they may offer support packages specific to their environment.

:::{.callout-tip}
# Contact us
If you think your project could benefit from this service, please contact us.
:::

## Related background material

- Large scale processing, by [openEO platform](https://docs.openeo.cloud/usecases/large-scale-processing/) and [CDSE openEO](https://documentation.dataspace.copernicus.eu/APIs/openEO/large_scale_processing.html)
- Job management in openEO, a [Jupyter notebook](https://github.com/Open-EO/openeo-community-examples/blob/main/python/ManagingMultipleLargeScaleJobs/ManagingMultipleLargeScaleJobs.ipynb)