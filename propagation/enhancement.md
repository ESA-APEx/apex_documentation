# Algorithm Enhancement Service

The algorithm enhancement service helps scientists and algorithm developers to transform their research code into a
performant and stable piece of software that can be run in an operational setting.
These enhancement activities ensure code quality, maintainability and performance of your algorithm.
To ensure performant execution on a NoR processing platform which offers openEO or Application Package algorithms,
additional optimization dedicated for the platform capabilities may be needed.
The exact requirements, steps, and effort involved in this process can vary heavily from case to case, due to the
variations in initial implementations and operational requirements.

The code of the enhanced version of the algorithm will be published in a dedicated APEx GitHub repository and algorithm
providers are encouraged to use it as a basis for further development of the algorithm.
This way, the version hosted on APEx can be kept up to date.

The algorithm enhancement service has two phases. In the first phase, the algorithm provider submits their existing
implementation, including source code, input data, and instructions to build, install and execute their code, together
with details of any external dependencies to the enhancement team. The enhancement team will then analyse the algorithm
and estimate the effort for the service, which results in an offer. In the second phase, on acceptance of the offer by
the provider and by ESA, the enhancement is performed.
As a result, the service user receives an optimized version of their algorithm code with high code quality.
Optionally, the enhancement procedure includes a cloudification step, where the algorithm is implemented as an openEO
User Defined Process (UDP) or Application Package. This makes it possible to host the algorithm on an NoR platform and
provide it as an on-demand service.

Complementary to this service, the [Algorithm Onboarding](./onboarding.md) service can provide additional support for hosting the algorithms prepared by the algorithm enhancement service. On the other side,
the [Toolbox Cloudification](./toolboxcloud.md) service offers a similar set of features aimed at algorithms that are
already available as part of standalone software packages (toolboxes) and makes them available as on-demand
APEx-compatible algorithms.

## Service Overview

### Features of the Algorithm Enhancement Service

The algorithm enhancement service offers the following features:

- Analysis of current algorithm implementation and performance.
- Optimization of the algorithm with respect to computational efficiency.
  This may include switching to a distributed execution model and improving code quality.
- Optimization considering the capabilities of target processing platforms.
- Exploitation of algorithms available on APEx where appropriate, e.g., replacing custom functions with equivalent
  pre-optimized openEO functions.
- Delivery of an enhanced implementation of the algorithm that is ready to be listed in the APEx algorithm catalogue.

### How to use the Algorithm Enhancement Service

To use the service, the first step is to deliver the current algorithm implementation, together with the complementary
information that is required to make use of it. The necessary components are:

- the source code
- documentation of dependencies
- build, installation and execution instructions
- input data
- expected outputs

Once this information has been provided, the enhancement team will perform a two-phase analysis. The analysis consists
of a briefer, standardized analysis phase, followed by a more thorough cost and effort estimate. On acceptance, the
enhancement team will begin work to enhance and integrate the algorithm on APEx. The exact process of enhancement
depends on the nature of the initial algorithm and its implementation. Depending on these conditions, the enhanced
algorithm is integrated into APEx either as an openEO UDP or as an OGC Application Package. Application Packages are
based upon one or more container images implementing the algorithm in a custom environment.

If the algorithm was originally implemented in accordance with the APEx compliance guidelines, the process can be more
straightforward. In this case there will be more overlap between the libraries and design patterns used in the initial
implementation and those required for an optimized APEx version, and the enhancement process will be different and fewer
changes have to be made to the code base.

### Intellectual Property Rights

The intellectual property rights to their algorithm implementation remain with the algorithm authors.
If the algorithm is an implementation of published research, the APEx team reserves itself the non-exclusive
right to run and further develop the enhanced implementation. The algorithm provider has the right and is encouraged
to use the enhanced code as a basis for further algorithm development.
For proprietary algorithms, the rights to publish the source code and run the algorithm remain with the original
property rights holder.
