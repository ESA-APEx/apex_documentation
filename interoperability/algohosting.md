---
title: Algorithm Developer and Provider Guidelines
---

## Requirements

@tbl-algohosting outlines the interoperability prerequisites required for algorithm providers, such as EO projects, to
host their workflows and algorithms within APEx. By satisfying these requirements, APEx guarantees the successful
integration of workflows and algorithms and ensures reusability within the broader EO community. It is important to
highlight that the majority of these requirements apply to EO projects that build an on-demand service to be exposed
via an HTTP-based API.

In terms of creating on-demand services, APEx currently supports two main interface standards: openEO [@openeo] or OGC
API Processes [@apiprocess], as described [here](../propagation/service_development.qmd). This selection should support
almost any possible on-demand service.

@tbl-algohosting-rec provides an overview of additional recommendations that will simplify the integration of your
algorithm into APEx. While these are not mandatory requirements, they are primarily suggestions aimed at enhancing the
quality of your service for long-term reuse. Adhering to these recommendations will further streamline the integration of
the service and improve its reusability, stability, and maintainability over time.

Finally, note that APEx also provides support to projects that need to fulfil these requirements. This support
includes implementing the guidelines in this document, offering a framework to run automated tests, and providing
packages to help improve the performance of algorithms. These are referred to as
[APEx Algorithm Support](../propagation/index.qmd).

In general, the aim is to simplify the process of building high-quality on-demand services rather than to add
complexity.

::: {#tbl-algohosting}
<table class="requirements">
  <thead>
    <tr>
      <th>ID</th>
      <th>Requirement</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ALGO-REQ-01</td>
      <td>
        The algorithms shall be provided according to one of these options:
        <ul>
          <li>Process graphs encapsulated in an openEO User Defined Process (UDP) [@udp], as a JSON format, defined using the openEO community standard and using the openEO API [@openeo].</li>
          <li>Applications written in a variety of coding languages (e.g., Python, R, Java, C++, C#, shell scripts) packaged according to the OGC Application Package Best Practice [@ap] as a CWL file [@cwl].</li>
        </ul>
      </td>
      <td>
        This ensures that the algorithm can be hosted on one of the APEx-compliant algorithm hosting platforms.
        The APEx documentation will provide clear guidance and samples demonstrating these two options.
      </td>
    </tr>
    <tr>
      <td>ALGO-REQ-02</td>
      <td>Non-code dependencies such as custom datasets or machine learning models shall either be packaged with the software or be clearly listed as external dependency.</td>
      <td>
        This approach prevents issues related to missing dependencies and ensures users can easily set up the environment for proper execution.
        It also promotes transparency and simplifies the deployment process.
      </td>
    </tr>
    <tr>
      <td>ALGO-REQ-03</td>
      <td>
        Algorithms shall expose a list of well-documented parameters, with examples showing valid combinations of parameters.
      </td>
      <td>
        Good documentation improves the usability of the algorithms by providing users with clear guidance on how to configure them correctly.
        Well-documented parameters and examples reduce the risk of incorrect usage.
        <br/>
        <br/>
        Depending on the used standard, this documentation should be added to the openEO UDP, CWL or OGC API Process.
      </td>
    </tr>
    <tr>
      <td>ALGO-REQ-04</td>
      <td>Executables shall offer at least one choice of a non-interactive command line interface, or an API for integration into a larger codebase.</td>
      <td>A non-interactive command line interface or API enables seamless automation and integration with other components and services.</td>
    </tr>
    <tr>
      <td>ALGO-REQ-05</td>
      <td>
        Algorithms shall be associated with and tested on at least one APEx compliant hosting platform.
      </td>
      <td>
        Testing and deployment on an APEx-compliant platform guarantees that the algorithm performs correctly within the intended environment
        and allows the algorithm to be executed as an on-demand service.
        <br><br>
        APEx provides tooling to execute and verify results on compliant platforms through automated testing.
      </td>
    </tr>
  </tbody>
</table>

Table: Interoperability requirements for algorithm providers
:::


::: {#tbl-algohosting-rec}
<table class="requirements">
  <thead>
    <tr>
      <th>ID</th>
      <th>Recommendation</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ALGO-REC-01</td>
      <td>Algorithm services should include documentation that addresses the scientific and technical limitations of the algorithm.</td>
      <td>
        For instance, the ability of the algorithm to generalize across space and time, input data requirements, error margins on predicted physical quantities.
      </td>
    </tr>
    <tr>
      <td>ALGO-REC-02</td>
      <td>The algorithm provider should demonstrate the code quality via static code analysis tools.</td>
      <td>
        For Python code, tools such as <em>pylint</em> can be used for static code analysis.
      </td>
    </tr>
    <tr>
      <td>ALGO-REC-03</td>
      <td>Validated outputs for a given set of input parameters should be made available by the algorithm provider, preferably on a small area that still allows for relevant testing.</td>
      <td>
        This allows validation of the correct functioning of the algorithm as changes are made.
      </td>
    </tr>
    <tr>
      <td>ALGO-REC-04</td>
      <td>Automated tests should be provided that compare the current output of the software against a persisted sample, for a representative area of interest.</td>
      <td>
        These tests enable APEx to automate the periodic validation of algorithms, ensuring they remain functionally available even after the project has finished.
      </td>
    </tr>
    <tr>
      <td>ALGO-REC-05</td>
      <td>A versioning scheme should be defined, preferably following a standardized approach such as <a href="https://semver.org">Semantic Versioning</a>.</td>
      <td>
        The versioning scheme provides a clear framework for communicating algorithm updates to users. By adopting standard practices, projects can highlight breaking changes, ensuring that users have accurate expectations and can adapt accordingly. The APEx documentation provides more examples and guidance on concrete cases.
      </td>
    </tr>
    <tr>
      <td>ALGO-REC-06</td>
      <td>The procedure for releasing new versions should be clearly documented.</td>
      <td>
        Clear documentation ensures that updates and new versions of algorithms are consistently and correctly released, reducing errors and providing transparency for users who rely on the latest features and fixes. It also helps maintain version control, which is crucial for reproducibility and compliance.
        <br/>
        A common way to provide this documentation is to add it in the <code>README</code> of the algorithm git repository.
      </td>
    </tr>
    <tr>
      <td>ALGO-REC-07</td>
      <td>For open source software developed within the project, a changelog should be maintained by the project.</td>
      <td>
        This outlines significant changes between versions, providing important information for users of your algorithm and the APEx consortium. These explanations help clarify any differences in outcomes or performance that could impact automated testing.
      </td>
    </tr>
    <tr>
      <td>ALGO-REC-08</td>
      <td>Algorithms shall clearly list software library dependencies, separated into testing, development, and minimal set of runtime dependencies. Supported versions or version ranges shall be indicated.</td>
      <td>
        By clearly listing and categorizing dependencies, users can quickly set up the necessary environment, avoid conflicts, and ensure the algorithm functions as intended across different scenarios.
      </td>
    </tr>
    <tr>
      <td>ALGO-REC-09</td>
      <td>Runtime dependencies shall be minimized as much as possible.</td>
      <td>
        For instance, libraries required for training a model should not be included in a version for inference.
      </td>
    </tr>
    <tr>
      <td>ALGO-REC-10</td>
      <td>Code should be written in a cross-platform manner, supporting at least Linux.</td>
      <td>
        The support for Linux is considered crucial to enable the deployment of the code on a cloud-based environment.
      </td>
    </tr>
  </tbody>
</table>

Table: Interoperability recommendations for algorithm providers
:::


## Best Practices

The following sections provide best practice guidelines for developing APEx-compliant algorithms. While these guidelines
are not mandatory, adhering to them will enhance the integration process and improve the overall experience of using the
algorithm.

### Parameter naming & typing

APEx proposes to standardise openEO UDP [@udp] and CWL [@cwl] parameter names and types that are exposed to the user.
This is best illustrated by an example: parameters such as `bounding_box`, `bbox`, `aoi`, and `spatial_extent`
likely refer to the same concept. However, without common conventions, algorithms might randomly select one of these
variants, complicating the usability of the eventual algorithm library.

At the time of writing, the actual conventions have not yet been defined. This becomes relevant when the first
algorithms reach a state where they can be published with a fixed interface. This best practice mostly targets new
developments that do not have an existing user base or API.

## Licensing requirements

For algorithms to be hosted and curated, APEx requires the ability to execute the algorithms as on-demand services on an
APEx-compliant algorithm hosting platform. This is straightforward for fully open-source algorithms, such as those
licensed under the Apache 2.0 license. However, for algorithms with more restrictive licenses or those dependent on
artefacts like trained machine learning models, the algorithm provider must be able to license APEx to execute the
service without incurring additional costs beyond the normal resource usage. Without such a license, the automated
benchmarking and testing provided by APEx may need to be disabled for the service in question.
