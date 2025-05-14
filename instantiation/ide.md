---
title: Interactive Development Environment
---

## Overview

The Interactive Development Environment (IDE) within the APEx Project Tools primarily leverages the power of the [Code
Server solution (VS Code in the Cloud)](#code-server), as well as the [JupyterLab](#jupyterlab) solution, both made
available through the [User Workspace](user_workspace.md).

These IDE solutions allow developers to maintain a familiar environment and rich feature set while benefiting from the
power and resources of server-side computing. This is particularly advantageous for those working on resource-intensive
tasks or needing access to a consistent development environment from various locations and devices.

The server-based nature ensures that developers are not constrained by their local machine's hardware capabilities,
allowing them to harness the computational power of remote servers.

Tailored specifically for EO tasks, this environment furnishes developers with an array of tools and libraries
fine-tuned for programming languages and productivity plugins or extensions.

## Code Server

The Code Server setup encapsulates all the capabilities of Microsoft's popular VS Code editor and extends them to be run
and accessed on a remote server. Beyond the core functionality of its desktop counterpart, the Code Server IDE offers
additional features tailored for remote development, such as integrated Git support, debugging tools, and a plethora of
extensions (for Code Server, from the VS Code Marketplace and for JupyterLab, from the PyPI.org registry). It provides
support for programming languages like Python, R, and Java. Key libraries such as SNAP and GDAL are integrated,
providing robust capabilities for EO data discovery, access, processing, and analytical needs.

It seamlessly adapts to containerised environments, enabling developers to create, test, and deploy applications within
isolated, replicable, and consistent environments, ensuring consistent behaviour across development, staging, and
production phases.

## JupyterLab

The JupyterLab setup encapsulates a web-based interactive development environment for Jupyter notebooks, code, and data.
It is the user interface for Project Jupyter, offering a flexible user interface and more features than the classic
notebook UI. It is a web application providing a development environment in which processing algorithms and services can
be developed, tested, and debugged. JupyterLab supports execution environments (called "kernels") in several dozen
languages, including Julia, R, Haskell, Ruby, and Python (via the IPython kernel). It seamlessly adapts to containerised
environments, enabling developers to create, test, and deploy applications within isolated, replicable, and consistent
environments, ensuring consistent behaviour across development, staging, and production phases.

## Showcase Scenarios

The Interactive Development Environment supports a variety of use cases, making it an essential tool for developers,
researchers, and data scientists within the EO community. Some typical scenarios include:

* **Algorithm Development and Testing**\
Researchers and developers can write, test, and debug new algorithms for processing
satellite imagery or other EO data. For instance, a user might develop a script to detect deforestation using
multi-temporal satellite images. To support the productivity of developers, both the Code Server solution and the
JupyterLab solution use a mechanism of extensions. Code Server extensions are available from the Open VSX Registry.

* **Collaborative Projects**\
Teams can work collaboratively on projects, sharing code and resources in real-time. A group
of data scientists might collaboratively develop a machine-learning model to predict crop yields based on various data
inputs.

* **Data Science Notebooks**\
The term “Notebook” usually covers two different concepts, either the user-facing application
to edit code and text (this originates from Project Jupyter‘s software product initially branded “Jupyter Notebooks”,
nowadays “JupyterLab”), or more commonly the underlying file format which is interoperable across many IDE software
solutions. Both solutions proposed for APEx, Code Server, and JupyterLab have multi-kernel language support (python, R,
Ruby, ...). Code Server supports local development of Jupyter Notebooks: the Jupyter extension for VS Code is a very
popular extension in the VS Code Marketplace. JupyterLab is a very popular tool within the Open Science community for
working with notebooks, with its native support for data science, data visualisation and reproducible environments.

* **Data Processing Pipelines**\
Users can develop and test data processing pipelines that automate the ingestion,
processing, and analysis of large EO datasets. An example use case could be to create a workflow setting up a pipeline
to preprocess satellite images and extract relevant features for further analysis.

## Examples

@tbl-ide-examples showcases example projects that utilize the APEx IDE. It is important to note that each IDE requires a
valid APEx account and permissions from the project to access the environment.

| Project                         | URL                                                                                        |
| :------------------------------ | :----------------------------------------------------------------------------------------- |
| APEx (Demo)                     | [https://apphub.demo.apex.esa.int/](https://apphub.demo.apex.esa.int/)                     |
| SEF - Food Systems              | [https://apphub.sef-food.apex.esa.int/](https://apphub.sef-food.apex.esa.int/)             |
| SEF - Ecosystems & Biodiversity | [https://apphub.sef-ecosystems.apex.esa.int/](https://apphub.sef-ecosystems.apex.esa.int/) |

: APEx IDE - Project Examples {#tbl-ide-examples}{tbl-colwidths="[20,80]"}

:::{.callout-tip}

## Stay Tuned

Additional information will be shared on this page as the project progresses.
:::
