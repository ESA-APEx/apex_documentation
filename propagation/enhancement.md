---
title: Algorithm Enhancement Service
---

The algorithm enhancement service helps scientists and algorithm developers transform their research code into a
performant and stable piece of software that can be run in an operational setting.
These enhancement activities ensure code quality, maintainability and performance of your algorithm.
To ensure performant execution on a NoR processing platform, offering openEO or OGC API Processes,
additional optimisation dedicated to the platform capabilities may be needed.
The exact requirements, steps, and effort involved in this process can vary heavily from case to case due to the
variations in initial implementations and operational requirements.

The code of the enhanced version of the algorithm will be published in a dedicated APEx GitHub repository, and algorithm
providers are encouraged to use it as a basis for further development of the algorithm.
This approach ensures that the version, hosted on APEx, can be kept up to date.

The algorithm enhancement service has two phases. In the first phase, the algorithm provider submits their existing
implementation, including source code, input data, and instructions to build, install and execute their code, together
with details of any external dependencies to the APEx enhancement team. The enhancement team will then analyse the algorithm
and estimate the effort for the service, which results in an offer. In the second phase, on acceptance of the offer by
the provider and by ESA, the enhancement is performed.
As a result, the service user receives an optimised version of their algorithm code with high code quality.
Optionally, the enhancement procedure can include an onboarding step, supported by the [APEx Algorithm Onboarding](./onboarding.md) service, where the algorithm is implemented as an openEO
User Defined Process (UDP) or Application Package. This makes it possible to host the algorithm on a NoR platform and
provide it as an on-demand service.

The [Toolbox Cloudification](./toolboxcloud.md) service complements this service but aims at algorithms that are
already available as part of standalone software packages (toolboxes), with the ultimate goal of making them available as on-demand
APEx-compatible algorithms.

## Service Overview

### Features of the Algorithm Enhancement Service

The algorithm enhancement service offers the following features:

- Analysis of current algorithm implementation and performance.
- Optimisation of the algorithm with respect to computational efficiency.
  This may include switching to a distributed execution model and improving code quality.
- Optimisation considering the capabilities of target processing platforms.
- Exploitation of algorithms available on APEx where appropriate, e.g., replacing custom functions with equivalent
  pre-optimized functions.
- Delivery of an enhanced implementation of the algorithm that is ready to be onboarded in APEx.

### How to use the Algorithm Enhancement Service

To use the service, the first step is to deliver the current algorithm implementation, together with the complementary
information that is required to make use of it. The necessary components are:

- the source code
- documentation of dependencies
- build, installation and execution instructions
- input data
- expected outputs

Once this information has been provided, the APEx enhancement team will perform a two-phase analysis. The analysis consists
of a briefer, standardised analysis phase, followed by a more thorough cost and effort estimate. On acceptance, the
enhancement team will begin work to enhance the algorithm. The exact process of enhancement
depends on the nature of the initial algorithm and its implementation.

If the algorithm was originally implemented in accordance with the [APEx Interoperability and Compliance guidelines](../interoperability/algohosting.md), the process can be more
straightforward, as in this case, there will be more overlap between libraries and design patterns used in the initial
implementation and those required for an optimised APEx version. The enhancement process will be different, and fewer
changes will have to be made to the code base.

### Intellectual Property Rights

The intellectual property rights to their algorithm implementation remain with the algorithm authors.
If the algorithm is an implementation of published research, the APEx team reserves itself the non-exclusive
right to run and further develop the enhanced implementation. The algorithm provider has the right and is encouraged
to use the enhanced code as a basis for further algorithm development.
For proprietary algorithms, the rights to publish the source code and run the algorithm remain with the original
property rights holder.
