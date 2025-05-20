---
title: Geospatial Explorer
---

## Overview

The Geospatial Explorer provides an interactive web front end that can be used for the display and visualisation of
geospatial and tabular data ingested from web services following common interoperable protocols (e.g. OGC Standards,
STAC, etc.). The Explorer is data-driven, allowing administrators to define its configuration in
JSON (i.e. the data layers and functional operations possible for each layer). This configuration determines how the
user interface is rendered at run time and the resulting data and functionality that is exposed to the end user.

Typical functions will include the ability to visualise EO data, derived products and associated vector layers (e.g.
administrative boundaries), with control over layer ordering, transparency, product comparisons (split screen) and
support for features such as cursor inspection, queries, distance measurements and visualisation of tabular data via
integrated charts and graphs. The UI will also provide access to metadata records associated with the data that is
rendered in the Explorer.

## Examples

@tbl-explorer-examples showcases example projects that use the APEx Geospatial Explorer:

| Project                         | URL                                                                                            |
| :------------------------------ | :--------------------------------------------------------------------------------------------- |
| APEx (Demo)                     | [https://explorer.demo.apex.esa.int/](https://explorer.demo.apex.esa.int/)                     |
| SEF - Food Systems              | [https://explorer.sef-food.apex.esa.int/](https://explorer.sef-food.apex.esa.int/)             |
| SEF - Ecosystems & Biodiversity | [https://explorer.sef-ecosystems.apex.esa.int/](https://explorer.sef-ecosystems.apex.esa.int/) |

: APEx Geospatial Explorer - Project Examples {#tbl-explorer-examples}{tbl-colwidths="[20,80]"}

## User Guide

For a general overview of features, take a look at the [Geospatial Explorer User Guide](../guides/geospatial_explorer_guide.md)

## Recommendations

To learn more about the specific recommendations for the usage and the configuration of the Geosplace Explorer, please
refer to the our [APEx Geospatial Explorer Recommendations](../interoperability/geospatial_explorer.md) page.

## Example Configurations

Numerous example configurations can be found in the
[APEx Geospatial Explorer Configurations](https://github.com/ESA-APEx/apex_geospatial_explorer_configs) repository on GitHub.

:::{.callout-tip}

## Stay Tuned

Additional information will be shared on this page as the project progresses.
:::
