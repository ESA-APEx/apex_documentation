# Algorithm Upscaling Service

The Algorithm Upscaling Service facilitates the execution of your openEO UDP or OGC application package based algorithm
over larger geographic areas. The service assumes that the algorithm is already efficient enough to operate cost-effectively
at scale.

The service primarily provides self-service tools that project teams or end-users can utilize to run an algorithm at scale, using
the processing capabilities of the platforms that are compatible with the service.

## Work in progress

A prototype of this specific APEx service is expected to be available from november 2024 onwards. 

## Upscaling support

As upscaling to huge areas can remain challenging, APEx offers the possibility to request time-limited support for your 
ESA project. Please contact us if you believe that your project could benefit from this service. It is important to consider
that careful planning is needed:
 
 - Your service needs to be onboarded in APEx before upscaling can start. 
 - The performance of your service can drastically affect the feasibility of upscaling. Consider the use of the [algorithm enhancement service](./enhancement.md) to improve the performance of your algorithm.
 - Processing and approval of a support request can take up to 1 month. Basic metrics from the algorithm onboarding process are used to evaluate the overall feasibility of your request.
 - Before the actual production can start, preparation work may take a
 - significant amount of time, depending on your own experience and complexity of the task.
 - APEx does not provide operators to monitor your production.

The services that APEx can offer, based on your needs, are:

- Basic training in the use of the upscaling service.
- Definition of an appropriate upscaling strategy, tailored to your needs.
- Selection of the most appropriate platform for your upscaling task.

It is important to also consider contacting your platform provider, who may offer support packages dedicated for their
environment.

## Related background material

- Large scale processing, by [openEO platform](https://docs.openeo.cloud/usecases/large-scale-processing/) and [CDSE openEO](https://documentation.dataspace.copernicus.eu/APIs/openEO/large_scale_processing.html)
- Job management in openEO, a [Jupyter notebook](https://github.com/Open-EO/openeo-community-examples/blob/main/python/ManagingMultipleLargeScaleJobs/ManagingMultipleLargeScaleJobs.ipynb)