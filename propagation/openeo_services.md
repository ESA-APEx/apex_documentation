# openEO: datacube based processing  

When an EO application can be expressed in terms of the standardized openEO processes, it can also be parametrized so that
it effectively becomes a service that can be executed by an openEO backend. This is what we call a User Defined Process (UDP).

This option is a good choice when writing EO algorithms from scratch, or for instance when using Python libraries that support
numpy or XArray data structures, which includes many machine learning frameworks. Hence it's also fairly common for projects
to port their existing pure-Python algorithm into an openEO process graph. While this porting involves learning to understand
the concepts of data cube based processing, and the openEO processes, it does provide some benefits.

The standardardized, datacube based processing approach is designed to significantly reduce the reponsibilities of the EO
data scientist writing the algorithm. The openEO backend takes care of data access, solving performance and stability issues,
while also dealing with the multiple heterogenous formats that are used in earth observation. Backends will automatically 
parallellize the processing work, using state of the art technologies, as provided by Apache Spark or Pangeo.

Many common maintenance operations are performed by the openEO backend rather than by the EO service provider. This includes
integrating performance improvements, new versions of software libraries with bugfixes, or adjusting to changes in the EO
datasets.

When EO algorithms are expressed as process graphs, they also become easier to share and analyze by your peers, if you
would choose to do so. Transparent algorithms can greatly help to increase the confidence in the results, or even to receive
suggestions for improvements.