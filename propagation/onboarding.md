# Algorithm Onboarding Service

APEx offers an algorithm onboarding service as part of its propagation services to ensure that project workflows and
algorithms remain accessible to the EO community beyond the project's completion. This service not only aims to sustain
and promote the use of algorithms developed during ESA projects, ensuring their longevity and continued utilization, but
also ensures alignment with the FAIR and open science data principles. This is achieved through the implementation of
[APEx interoperability and compliance guidelines](../interoperability/index.md) and by registering the services in the
APEx Algorithm Catalogue for broader visibility and accessibility.

For engagement with stakeholders of the algorithm, APEx collaborates closely with
the [Stakeholder Engagement Facility](https://esa-sef.eu/). This initiative will provide outreach and training towards
users, to maximize the uptake of the onboarded algorithms.

By leveraging APEx’s Algorithm Onboarding service, you can ensure that your project’s innovations continue to benefit
the EO community long after your project ends.

## Service Overview

### Hosting Platform Onboarding Support

APEx can help to identify the different hosting environments that the project can choose from based on criteria such as
the chosen standard or the availability of specific datasets and processing capabilities that are needed by the project.
APEx also assists in the onboarding process, ensuring that your algorithm is available for execution on the selected
platform and ready for further integration into the APEx Algorithm Catalogue.

:::{.callout-tip}
A full list of the known APEx-compliant algorithm hosting platforms is
available [here](index.qmd#what-are-the-platforms-to-choose-from).
:::

### Automated Testing and Benchmarking

To ensure service integrity, APEx conducts automated testing and benchmarking in close collaboration with the respective project teams. This ensures that the algorithms remain functional and accessible over time. 
This ensures that algorithms in the APEx Algorithm Catalogue remain functional and accessible over time. APEx offers this testing service free of charge, reducing the maintenance burden on project teams.

Since the proper functioning of services depends on various external factors, APEx asks project teams to define at least one test scenario to verify that the service remains operational. This approach provides several benefits for all parties involved:

* Algorithm maintainers receive notifications about issue without needing to build their own testing and monitoring systems.
* Algorithm hosting platforms are similarly notified of any problems, helping them address issues early.
* APEx is able to maintain a catalogue of working services, which strengthens user trust and increases the uptake of reliable services.
* Service providers on platforms with SLAs, such as those available on the NoR, can identify and resolve potential issues before users report SLA breaches. Algorithm hosting platforms may also use the automated test scenarios as part of their own reporting process for on-demand service performance.
  
APEx does not have a reporting procedure towards the NoR, or a requirement to report on the state of a service or a potential SLA breach, as APEx is also not involved in the SLA definition.
Service providers are not forced to take action in case of a negative test. APEx may simply use a visual clue to indicate a (temporary) issue or may hide/remove services as part of regular catalogue housekeeping when the service provider indicates that the problem will not be resolved or is simply no longer reachable.

To run the defined tests, APEx also needs permission from the hosting platform, and an account with sufficient credits. Collaboration of the platform may be required to fulfil this requirement.

### APEx Algorithm Catalogue

The Algorithm Onboarding service supports result propagation through an algorithm catalogue, facilitating easy
browsing and access to available algorithms. Users and other projects can also easily onboard their own algorithms,
fostering collaboration and innovation within the EO community.

The algorithm catalogue allows visitors to execute algorithms on the corresponding APEx-compliant hosting environment.
For more details, please refer to [this section](#execute-a-service-from-the-apex-algorithm-catalogue).

## Considerations and Project responsibilities

### Algorithm Maintenance

While APEx ensures the long-term availability of the algorithm within the catalogue, the creation, maintenance, and
updating of the algorithm remain the responsibility of the original developer or the open-source community.

### Algorithm Execution

Algorithm execution is carried out one of the respective APEx-compliant algorithm hosting platforms. By default, APEx
does not provide direct access to processing resources on these platforms. However, projects can request processing
resources through [ESA's Network of Resources (NoR)](https://portfolio.nor-discover.org/). When resources are requested
for a specific algorithm, onboarded to the NoR, APEx can facilitate access to cloud processing resources on the
corresponding platform as a broker.

In the long term, APEx plans to offer a graphical interface that simplifies the execution of onboarded services.
However, it's important to note that even with this user-friendly interface, users will still need to authenticate with
the respective algorithm hosting platform and ensure they have access to the necessary processing resources on that
platform.

### Large-scale Data Processing

For large-scale processing tasks, projects can request additional support through
the [APEx upscaling service](./upscaling.md).

## Onboard Your Algorithm on the APEx Algorithm Catalogue

Stay tuned for more detailed instructions on how to onboard your algorithm into our catalogue.

## Execute a service from the APEx Algorithm Catalogue

::: {.callout-note title="Disclaimer"}
APEx relies on the APEx-compliant algorithm hosting environments for algorithm execution and the provisioning of the
corresponding cloud resources. Users wishing to execute an algorithm will need a valid account on the relevant hosting
platform or make a request through [ESA's Network of Resources (NoR)](https://portfolio.nor-discover.org/).
:::

Stay tuned for more detailed instructions on how to execute an algorithm through the APEx Algorithm Catalogue.
