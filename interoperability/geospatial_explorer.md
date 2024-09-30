# Geospatial Explorer

This document outlines the requirements for the interoperability of the APEx Geospatial Explorer services. These requirements must be met in order to ensure the correct configuration and operation of the application and its instantiation.

A technical challenge of the geospatial exlporer service being provided by APEx is that it is to be instantiated on demand with functional requirements potentially varying amongst each service. A proposed solution to this challenge is the use of a well defined configuration schema, provided in the form of JSON, that outlines the interactive features and data sources to be used.

This approach will allow APEx to define and update the schema required in the interoperability guidelines which will then enable requesters of the service to configure the application on an individual project level with minimal external intervention.

The schema will likely need to be based on drafts or versioned in some manner as it is extremely likely to change as the APEx project matures. This does however allow for improvements and extra features to be easily added to the application and best practices shall be followed to avoid any breaking changes between versions.

@tbl-geoexplorer outlines the requirements for configuring an instance of the Geospatial Explorer application.

+-----------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ID              | Requirement                                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                                     |
+=================+====================================================================================================================================================================================================================================================================================+=================================================================================================================================================================================================================================================================================================================================================================+
| EXPLORER-REQ-01 | Configuration of the Geospatial Explorer shall adhere to the provided JSON schema                                                                                                                                                                                                  | The application is configured through a hosted JSON object which is fetched when the client-side application loads. For the application to correctly render, a valid configuration JSON that follows the outlined schema must be provided pre-instantiation. During early development the schema will be subject to change and provided with limited validation.|
+-----------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| EXPLORER-REQ-02 | Raster sources defined within the config shall be provided as either: - A well formed URL to a hosted Cloud Optimised GeoTiff (COG) - A public WMS or WMTS endpoint following the relevant OGC specifications. - A template URL following the XYZ format serving PNG or JPEG tiles |                                                                                                                                                                                                                                                                                                                                                                 |
+-----------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| EXPLORER-REQ-03 | Vector sources defined within the config shall be provided as either: - A well formed URL to a valid GeoJSON resource - A public WFS endpoint following the revleant OGC specifications                                                                                            |                                                                                                                                                                                                                                                                                                                                                                 |
+-----------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| EXPLORER-REQ-04 | All external sources shall be publically available                                                                                                                                                                                                                                 | Currently the application does not support fetching sources from hosts that require authentication                                                                                                                                                                                                                                                              |
+-----------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| EXPLORER-REQ-05 | All external sources shall be available utilising the HTTPS protocol                                                                                                                                                                                                               | It is best practice to utilise HTTPS where possible. Whilst not as of yet blocked specifically, non-secure resources may not function correctly.                                                                                                                                                                                                                |
+-----------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
: Interoperability requirements for the Geospatial Explorer application {#tbl-geoexplorer}{tbl-colwidths="[30,70]"}

## Configuration Schema 

The service configuration will be based on a schema that provides administrators with the expected structure and contents of the configuration. Taking this approach enables:

- Automated and dynamic instantiation of the service with differing functionality.
- Configuration validation.
- Definition of a "contract" for easier documentation of features and their configuration.

The following is an example of an working JSON file that may be used to configure the application. 

::: {.callout-warning}
The API is currently not well defined and as such this is currently subject to radical changes, the following is for illustrative purposes only. 
:::

```
{
    "layout": {
        "navigation": {
            "logo": "https://www.esa.int/extension/pillars/design/pillars/images/ESA_Logo.svg",
            "title": "APEx Geospatial Explorer"
        }
    },
    "interfaceGroups": [
        "Vectors",
        "Landcover",
        "Basemaps"
    ],
    "exclusivitySets": [
        "Landcover"
    ],
    "sources": [
        {
            "name": "Open Street Map",
            "isActive": true,
            "toggleable": false,
            "url": "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
            "type": "xyz",
            "interfaceGroup": "Basemaps"
        },
        {
            "name": "WMS Layer",
            "isActive": false,
            "toggleable": true,
            "url": "https://services.terrascope.be/wms/v2",
            "layers": "WORLDCOVER_2021_MAP",
            "interfaceGroup": "Landcover",
            "exclusivitySet": "Landcover",
            "type": "wms",
            "legend": {
                "type": "swatch",
                "visible": true,
                "data": [
                    {
                        "color": "rgb(0, 100, 0)",
                        "label": "Tree cover"
                    },
                    {
                        "color": "rgb(255, 187, 34)",
                        "label": "Shrubland"
                    },
                    {
                        "color": "rgb(255, 255, 76)",
                        "label": "Grassland"
                    },
                    {
                        "color": "rgb(240, 150, 255)",
                        "label": "Cropland"
                    },
                    {
                        "color": "rgb(255, 0, 0)",
                        "label": "Built up"
                    },
                    {
                        "color": "rgb(180, 180, 180)",
                        "label": "Bare"
                    },
                    {
                        "color": "rgb(240, 240, 240)",
                        "label": "Snow and ice"
                    },
                    {
                        "color": "rgb(0, 100, 200)",
                        "label": "Permanent water bodies"
                    },
                    {
                        "color": "rgb(0, 150, 160)",
                        "label": "Herbaceous wetland"
                    },
                    {
                        "color": "rgb(0, 207, 117)",
                        "label": "Mangroves"
                    },
                    {
                        "color": "rgb(250, 230, 160)",
                        "label": "Moss and lichen"
                    }
                ]
            }
        },
        {
            "name": "GeoJSON Layer",
            "isActive": false,
            "toggleable": true,
            "url": "https://dataworks.calderdale.gov.uk/download/24qmx/p18/Public%20Rights%20of%20Way%20-%20Jan%202022%20-%20JSON.json",
            "type": "geojson",
            "interfaceGroup": "Vectors"
        },
        {
            "name": "WFS Layer",
            "isActive": false,
            "toggleable": true,
            "url": "http://ogc.bgs.ac.uk/digmap625k_gsml_cgi_gs/wfs",
            "type": "wfs",
            "interfaceGroup": "Vectors",
            "typeName": "gsmlp:GeologicUnitView"
        },
        {
            "name": "GTIF - Above Ground Biomass",
            "attribution": {
                "text": "Forest Carbon Monitroing",
                "url": "https://www.forestcarbonplatform.org/"
            },
            "isActive": false,
            "toggleable": true,
            "normalize": false,
            "cogs": [
                {
                    "url": "https://eox-gtif-public.s3.eu-central-1.amazonaws.com/FCM/v2/JR/FCM_AGB-2021_Austria_20m_EPSG3857-COG.tif"
                }
            ],
            "type": "cog",
            "style": {
                "color": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "band",
                        1
                    ],
                    0,
                    "rgba(0, 0, 0, 0)",
                    1,
                    "rgb(255, 255, 255)",
                    100,
                    "rgb(0, 100, 0)"
                ]
            },
            "legend": {
                "visible": true,
                "type": "gradient",
                "data": {
                    "startColor": "rgb(255, 255, 255)",
                    "endColor": "rgb(0, 100, 0)"
                }
            }
        },
    ]
}
```