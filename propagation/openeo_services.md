---
title: openEO - datacube based processing
---

When an EO application can be expressed in terms of the standardised openEO processes, it can also be parametrised so that
it effectively becomes a service that can be executed by an openEO backend. This is what we call a User Defined Process (UDP).

This option is a good choice when writing EO algorithms from scratch, or when using Python libraries that support
numpy or XArray data structures, which includes many machine learning frameworks. Therefore, it is also fairly common for projects
to port their existing pure-Python algorithm into an openEO process graph. While this porting involves learning to understand
the concepts of datacube-based processing and the openEO processes, it does provide some benefits.

The standardised, datacube-based processing approach is designed to significantly reduce the responsibilities of the EO
data scientist writing the algorithm. The openEO backend takes care of data access, solving performance and stability issues,
while also dealing with the multiple heterogeneous formats that are used in earth observation. Backends will automatically
parallelise the processing work, using state-of-the-art technologies, as provided by Apache Spark or Pangeo.

Many common maintenance operations are performed by the openEO backend rather than by the EO service provider. This includes
integrating performance improvements, new versions of software libraries with bug fixes, or adjusting to changes in the EO
datasets.

Various complex preprocessing steps may be offered by the backend. Examples include backscatter computation for Sentinel-1,
or cloud masking and compositing of optical data. Use cases like machine learning training data extraction are also supported.

When EO algorithms are expressed as process graphs, they also become easier to share and analyse by your peers, if you
choose to make them public. Transparent algorithms can greatly help to increase confidence in the results, or even to receive
suggestions for improvements.


## Example use cases

A set of platform-agnostic example cases that showcase how openEO supports various cases can be found in the
[openEO community examples repository](https://github.com/Open-EO/openeo-community-examples).
We recommend browsing the notebooks available there to get a sense of what openEO can do, or to even find a starting point for your own
algorithm.

In addition to that, we list testimonials of ESA projects that successfully used openEO in the past.

### ESA WorldCereal

The ESA WorldCereal project effectively built a system on top of openEO, that enables the training of custom machine
learning models for crop type detection anywhere in the world. The created models can then be used within openEO, to
generate maps at large scale. The system is very easy to use because all the complex computation and data access is performed
in the cloud.

The WorldCereal workflow for crop type map production contains these steps:

1. Generation on monthly Sentinel-2 median composites for 1 year of input data.
2. Generation of monthly Sentinel-1 backscatter composites from raw GRD input, for 1 year of input data filtered by orbit direction.
3. Loading DEM, slope, and AGERA5 datasets.
3. Computation of features based on all the above inputs, using a foundation model.
4. Inference using a (user-defined) catboost model.
5. Output to FAIR GeoTIFFs with STAC metadata.

### ESA ANIN

The ESA ANIN project computed a combined drought index for South Africa using openEO. It successfully combined data from
a variety of sources and applied rule-based techniques to compute the result.

### ESA WorldWater

The ESA WorldWater project converted their decision algorithm based on Sentinel-1 and Sentinel-2 into openEO. This
allowed them to run their water detection algorithm anywhere in the world using a cloud-based system.

### ESA Luisa

Luisa used openEO to compute biophysical parameters such as LAI and fAPAR from Sentinel-2 data over various test areas
in Africa.
