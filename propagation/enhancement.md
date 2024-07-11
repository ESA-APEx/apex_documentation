### Algorithm Enhancement Service 

The algorithm enhancement service helps scientists and algorithm developers to transform their research code into a performant and stable piece of software that can be run in an operational setting.
The service ensures code quality, maintainability and performance of the enhanced algorithm.
To ensure performant execution on a NoR processing platform which offers openEO or Application Package algorithms, optimization dedicated for the platform capabilities may be desirable.
The exact requirements, steps, and effort involved in this process can vary heavily from case to case, due to the variations in initial implementations and operational requirements

The code of the enhanced version of the algorithm will be published in a dedicated APEx git repository and algorithm providers are encouraged to use it as a basis for further development of the algorithm. This way, the version hosted on APEx can be kept up to date. 

The algorithm enhancement service has two phases. In the first phase, the algorithm provider submits their existing implementation, including source code, input data, and instructions to build, install and execute their code, together with details of any external dependencies to the enhancement team. The enhancement team will then analyze the algorithm and estimate the effort for the service, which results in an offer. In the second phase, on acceptance of the offer by the provider and by ESA, the enhancement is performed. The result of the enhancement is an APEx-integrated algorithm implementation. On APEx, the newly integrated algorithm will be available either as an Application Package according to OGC best practice, or as an openEO user defined process.

Complementary to this service, the [algorithm hosting service](./hosting.md) is responsible for hosting the algorithms prepared for hosting by the algorithm enhancement service. On the other side, the [toolbox cloudification service](./toolboxcloud.md) offers a similar set of features aimed at algorithms that are already available as part of standalone software packages (toolboxes) and makes them available as on-demand APEx-compatible algorithms.

#### Features of the Algorithm Enhancement Service 

The algorithm enhancement service offers the following features: 

- Analysis of current algorithm implementation and performance.
- Optimization of the algorithm with respect to computational efficiency.
    This may include switching to a distributed execution model and improving code quality.  
- Optimization considering the capabilities of target processing platforms.
- Exploitation of algorithms available on APEx where appropriate, e.g. replacing custom functions with equivalent pre-optimized openEO functions.
- Delivery of an enhanced implementation of the algorithm that is ready to be listed in the APEx algorithm catalogue.

#### How to use the Algorithm Enhancement Service 

To use the service, the first step is to deliver the current algorithm implementation, together with the complementary information that is required to make use of it. The necessary components are:  

- the source code 
- documentation of dependencies 
- build, installation and execution instructions 
- input data 
- expected outputs 

Once this information has been provided, the enhancement team will perform a two-phase analysis. The analysis consists of a briefer, standardized analysis phase, followed by a more thorough cost and effort estimate. On acceptance, the enhancement team will begin work to enhance and integrate the algorithm on APEx. The exact process of enhancement depends on the nature of the initial algorithm and its implementation. Depending on these conditions, the enhanced algorithm is integrated into APEx either as an openEO UDP or as an OGC Application Package. Application Packages are based upon one or more container images implementing the algorithm in a custom environment. 

If the algorithm was originally implemented in accordance with the APEx compliance guidelines, the process can be more straightforward. In this case there will be more overlap between the libraries and design patterns used in the initial implementation and those required for an optimized APEx version, and the enhancement process will be different and less changes have to be made to the code base. 
