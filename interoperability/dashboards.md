---
title: Dashboards
---

This document outlines the requirements for the interoperability of the APEx dashboard services. These requirements must be met in order to ensure the correct configuration and operation of a dashboard and its instantiation.

A technical challenge of the dashboard service being provided by APEx is that it is to be instantiated on demand with functional requirements potentially varying amongst each service. A proposed solution to this challenge is the use of a well defined configuration schema, provided in the form of JSON, that outlines the interactive features and data sources to be used.

This approach will allow APEx to define and update the schema required in the interoperability guidelines which will then enable requesters of the service to configure the dashboard on an individual project level with minimal external intervention.

The schema will likely need to be based on drafts or versioned in some manner as it is extremely likely to change as the APEx project matures. This does however allow for improvements and extra features to be easily added to the dashboard instantiation service and best practices should be followed to avoid any breaking changes between versions.

## Data Sources

The first release of  the dashboard service will expect data sources to be:

- Publicly hosted and exposed via a `HTTPS` endpoint.
- Correctly configured to serve the data to a third party domain (e.g. Cross Origin Resource Sharing)
- Providers of a response that conforms with the one of the following standards:
    - **OGC web standards**:
        - WMS (Web Map Service)
        - WMTS (Web Map Tile Service)
        - WFS (Web Feature Service)
        - GeoJSON
    - **Other common (non OGC) standards will include**: 
        - XYZ: A standard widely uses for tile based APIs
    - **Spatial Temporal Asset Catalogue**: A catalogue service for metadata regarding a dataset. This would be supported for the specific  use of retrieving an item in a catalogue along with its metadata. Note: The data itself must still conform to one of the response formats outlined above.

Considerations for future dashboard service releases include:

- **TMS (Tile Map Service)**: A standard supported by the Open Layers framework
- **TileJSON (Mapbox)**: A standard for describing tile services using JSON

## Configuration Schema 

The Dashboard service configuration will be based on a schema that provides dashboard administrators with the expected structure and contents of the dashboard configuration. Taking this approach enables:

- Automated and dynamic instantiation of dashboards with differing functionality.
- Configuration validation.
- Definition of a "contract" for easier documentation of dashboard features and their configuration.

The following is a very loose example of an initial JSON file that may be used to configure a dashboard. 

::: {.callout-warning}
The API is currently not well defined and as such this is currently subject to radical changes, the following is for illustrative purposes only. 
:::

```
 {
    config: {
        name: String,
    }
    layout: {
        navigation: {
            alignment: String,
            logo: String.
            heading: String
            children: [
                {
                    component: String
                    properties: {
                        href: String
                        text: String
                    }
                }
            ]
        },
        map: {
            layers: [
                {
                    name: String
                    source: String
                    sourceType: String
                    toggleable: Boolean
                },
                {
                    name: String
                    source: String
                    sourceType: String
                    toggleable: Boolean
                },
                {
                    name: String
                    source: String
                    sourceType: String
                    toggleable: Boolean
                }
            ]
        }
        sidebar: {
            alignment: String,
        }
    }
 }
```