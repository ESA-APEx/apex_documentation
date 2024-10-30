---
title: Toolbox Cloudification Service
---

The toolbox cloudification service makes individual data processing procedures from existing toolboxes available as
cloud-based algorithms, compliant with APEx. This makes it possible to freely combine functionalities from multiple toolboxes as well as other APEx-compliant algorithms. The service focuses solely on the data-processing capabilities of toolboxes and does not include visualisation features.
Instead of the local processing scheme of a traditional toolbox, key operations can be performed in the
cloud. Furthermore, functions from various toolboxes can be combined in a single workflow by using one of the APEx-compliant technologies.

Service users may select functionalities from a toolbox that they would like to have access to as APEx-compliant
algorithms. The proposed functionalities and their toolbox will then be reviewed by ESA and APEx experts. Effort
estimation and an offer will be made following the review. On acceptance of the offer, the requested functionalities
will be provided as an Application Package according to the OGC best practice or as an openEO User Defined Process (UDP).

To ensure interoperability between procedures from different toolboxes, it is necessary to share data using standard
data formats when writing intermediary files to disk. Users should consider if the flexibility of this approach outweighs
the performance drawbacks and request deployment as a single, integrated package instead if performance is critical.

Functionalities made available through the toolbox cloudification service are hosted via the
APEx [Algorithm Onboarding](./onboarding.md) service. A similar set of features is offered by
the [Algorithm Enhancement](./enhancement.md) service, which focuses on improving the maturity and performance of algorithms
and preparing them for hosting on APEx.

## Service Overview

### Features of the Toolbox Cloudification Service

The toolbox cloudification service offers an analysis of the implementation of the toolbox and the requested processing
capabilities. On the basis of this analysis, an implementation strategy is proposed and executed to provide the requested
functionality outside the context of the toolbox as a fully cloud-integrated APEx-compliant algorithm.

Projects may benefit from the toolbox cloudification service by bringing key functions from traditional EO
toolboxes into the cloud, where they can be integrated into large-scale processing workflows.
If a toolbox is migrated to APEx, it shall be kept up to date. This requires maintenance.
The procedure to support the evolution of toolboxes is yet to be defined.

### How to use the Toolbox Cloudification Service

In order to use the toolbox cloudification service, a proposal specifies a candidate toolbox and selects key
functionality for cloudification. This proposal is then submitted to the APEx team. It should contain a short
justification explaining the need for the selected functionality. ESA reviews the proposal and submits selected
proposals to the APEx team for analysis and price offer.

In a first phase, the APEx team makes an initial analysis of the candidate toolbox and an assessment of the associated
proposal. On this basis, the team provides an assessment report to ESA. The report includes a final recommendation of
the key functionality to be cloudified, a description of the specific cloudification approach, and an effort and cost
estimation. ESA decides whether to accept the offer.

On acceptance, a team of suitably qualified APEx experts undertakes the cloudification process itself, recasting or
reimplementing the required functionality in cloud-hosted toolbox modules. In order for the cloudified modules to be
hosted through APEx, they will be implemented on one of the APEx-compliant technologies, such as openEO UDPs and/or
Application Packages. The more suitable variant depends largely on the original implementation of the toolbox
functionality. The newly created modules will be deployed through the APEx [Algorithm Onboarding](./onboarding.md) service and
thus become available for direct use and integration into larger cloud-hosted processing workflows.
