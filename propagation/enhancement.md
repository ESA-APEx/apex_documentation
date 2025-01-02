---
title: Algorithm Enhancement
---

APEx supports scientists and algorithm developers in transforming their research code into a performant and stable piece
of software that can be run in an operational setting. These enhancement activities ensure code quality, maintainability
and performance, whether applied to the source code itself or its service implementation.

To ensure performant execution on an APEx-compliant EO platform, offering openEO or OGC API Processes, additional
optimisation dedicated to the platform capabilities may be needed. The exact requirements, steps, and effort involved in
this process can vary heavily from case to case due to the variations in initial implementations and operational
requirements.

In the case of open source algorithms, and with the agreement of the algorithm provider, the code of the enhanced
version of the algorithm will be published in a dedicated APEx GitHub repository, and algorithm providers are encouraged
to use it as a basis for further development of the algorithm. This approach ensures that the version hosted on APEx can
be kept up to date.

The algorithm enhancement is executed in two phases. In the first phase, the algorithm provider submits their existing
implementation, including source code, input data, and instructions to build, install and execute their code, together
with details of any external dependencies to the APEx enhancement team. The enhancement team will then analyse the
algorithm and estimate the effort for the envisioned activities, which results in an offer. In the second phase, on
acceptance of the offer by the provider and by ESA, the enhancement is performed. As a result, the algorithm provider
receives an optimised version of their algorithm code with high code quality. Optionally, the enhancement procedure can
include a porting or packaging step, supported by the APEx [algorithm porting](porting.md)
and [onboarding](onboarding.md) activities, where the algorithm is implemented as an openEO User Defined Process (UDP)
or Application Package and hosted on an existing platform. This approach ensures that the enhanced algorithm remains
available as an on-demand service.

## Support Overview

### Features

The algorithm enhancement activities offer the following features:

* Analysis of the current implementation and performance.
* Optimisation with respect to computational efficiency. This may include switching to a distributed execution model or
  moving suitable parts of the algorithm to GPU and improving code quality.
* Optimisation considering the capabilities of target processing platforms and use of existing services.
* Exploitation of algorithms available on APEx where appropriate, e.g., replacing custom functions with equivalent
  pre-optimized functions.
* Delivery of an enhanced implementation that is ready to be registered in the APEx Algorithm Services Catalogue.

### How to get started?

To get started with APEx’s algorithm enhancement activities, the first step is to deliver the current algorithm
implementation, together with the complementary information that is required to make use of it. The necessary components
are:

* the source code
* documentation of dependencies
* build, installation and execution instructions
* input data and expected output data
* performance issue and optimisation goal

Once this information has been provided, the APEx enhancement team will perform a two-phase analysis. The analysis
consists of a briefer, standardised analysis phase, followed by a more thorough cost and effort estimate. On acceptance,
the enhancement team will begin work to enhance the algorithm. The exact process of enhancement depends on the nature of
the initial algorithm and its implementation.

If the algorithm was originally implemented in accordance with the
APEx [Interoperability and Compliance guidelines](../interoperability/algohosting.md), the process can be more
straightforward, as, in this case, there will be more overlap between libraries and design patterns used in the initial
implementation and those required for an optimised APEx version. The enhancement process will be different, and fewer
changes will have to be made to the code base.

### Intellectual Property Rights

The intellectual property rights to their algorithm implementation remain with the algorithm authors. If the algorithm
is an implementation of published research, the APEx team reserves itself the non-exclusive right to run and further
develop the enhanced implementation. The algorithm provider has the right and is encouraged to use the enhanced code as
a basis for further algorithm development. For proprietary algorithms, the rights to publish the source code and run the
algorithm remain with the original property rights holder..
