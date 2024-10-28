# Geospatial Explorer

This document outlines the requirements for the interoperability of the APEx Geospatial Explorer services. These requirements must be met in order to ensure the correct configuration and operation of the application and its instantiation.

A technical challenge of the Geospatial Explorer service being provided by APEx is that it is to be instantiated on demand with functional requirements potentially varying amongst each service. This challenge is addressed by the use of a well defined configuration schema, provided in the form of JSON, that outlines the interactive features and data sources to be used.

This approach will allow APEx to define and update the schema required in the interoperability guidelines which will then enable requesters of the service to configure the application on an individual project level with minimal external intervention.

The schema will be versioned as it will change over the course of the APEx project as the functional capabilities of the Geospatial Explorer mature. This does however allow for improvements and extra features to be easily added to the application and best practices shall be followed to avoid any breaking changes between versions.

@tbl-geoexplorer outlines the requirements for configuring an instance of the Geospatial Explorer application.

+-----------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ID              | Requirement                                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                                     |
+=================+====================================================================================================================================================================================================================================================================================+=================================================================================================================================================================================================================================================================================================================================================================+
| EXPLORER-REQ-01 | Configuration of the Geospatial Explorer shall adhere to the provided JSON schema                                                                                                                                                                                                  | The application is configured through a hosted JSON object which is fetched when the client-side application loads. For the application to correctly render, a valid configuration JSON that follows the outlined schema must be provided pre-instantiation. During early development the schema will be subject to change and provided with limited validation.|
+-----------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| EXPLORER-REQ-02 | Raster sources defined within the config shall be provided as either:                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                 |
|                 |                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                 |
|                 | - A well formed URL to a hosted Cloud Optimised GeoTiff (COG)                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                 |
|                 | - A WMS or WMTS endpoint following the relevant OGC specifications.                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                 |
|                 | - A template URL following the XYZ format serving PNG or JPEG tiles                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                 |
+-----------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| EXPLORER-REQ-03 | Vector sources defined within the config shall be provided as either: - A well formed URL to a valid GeoJSON resource - A public WFS endpoint following the relevant OGC specifications                                                                                            |                                                                                                                                                                                                                                                                                                                                                                 |
+-----------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| EXPLORER-REQ-04 | All external sources shall be publicly available                                                                                                                                                                                                                                   | Currently the application does not support fetching sources from hosts that require authentication                                                                                                                                                                                                                                                              |
+-----------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| EXPLORER-REQ-05 | All external sources shall be available utilising the HTTPS protocol                                                                                                                                                                                                               | It is best practice to utilise HTTPS where possible. Whilst not as of yet blocked specifically, non-secure resources may not function correctly.                                                                                                                                                                                                                |
+-----------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| EXPLORER-REQ-06 | All datasets shall be projected to CRS EPSG:3857 (Web Mercator)                                                                                                                                                                                                                    | Other projections may work but will not be explicity supported in the inital versions of the application                                                                                                                                                                                                                                                        |
+-----------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| EXPLORER-REQ-07 | Legends should be configured by providing: - Inline configuration using either the 'Swatch' or 'Gradient' outlined in the schema. - Providing a  URL to a browser supported image resource (PNG, JPEG, SVG) - A WMS getLegendGraphic request (If supported by a WMS source)        |                                                                                                                                                                                                                                                                                                                                                                 |
+-----------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
: Interoperability requirements for the Geospatial Explorer application {#tbl-geoexplorer}{tbl-colwidths="[30,70]"}

## Configuration Schema

The service configuration will be based on a schema that provides administrators with the expected structure and contents of the configuration. Taking this approach enables:

- Automated and dynamic instantiation of the service with differing functionality.
- Configuration validation.
- Definition of a "contract" for easier documentation of features and their configuration.

The sections below briefly outline the structure of the configuration schema and provides a preliminary description of each field/property within. The schema currently consists of four top-level fields, all properties are written in camel case:

### Layout - `layout`

An object with properties that modify the elements that the application will render. These properties and elements relate specifically to non-geospatial layout components, like navigation and footer.

Currently supported properties:

#### Navigation - `navigation`

An object which supports two properties:

- `logo`: A URL string that points to a logo image asset.
- `title`: A string to be used as a title for the application.

### Interface Groups - `interfaceGroups`

An optional array of strings to be used as names/keys. This is currently used to configure the grouping of layer UI elements such as the layer cards. Will be expanded in later versions

### Exclusivity Sets - `exclusivitySets`

An optional array of strings to be used as names/keys. This is currently not in use but is a placeholder for future work.

### Sources - `sources`

An array of objects. Each object outlines a particular data source to be configured for display within the application, with properties detailing both the geospatial and user interface configuration.

Currently supported properties within a source object are:

#### Name - `name`

A string that is used to identify layers in both the user interface and OpenLayers state

#### Is Active - `isActive`

A boolean. Determines if a layer is currently shown on the map. Setting this to true will show the show the layer on the map when the application loads.

#### Layout - `layout`

An object to determine which interface elements are rendered for the layer. Supports two properties:

##### Layer Card - `layerCard`

An object that will determine if a layer card should be rendered for this layer and what other interface elements should be rendered within the card. This is currenlty the main way to interact with a layer within the application. The layercard can show: a toggle for the layer, a selection of buttons or controls for the layer, legends and attribution text. This currently supports the following properties:

- `toggleable`: A boolean that determines if a toggle switch to enable/disable the layer should be rendered.
- `controls`: An optional array of strings that configure which buttons to render in the layer card for interaction with the layer.
- `legend`: An optional object that can be configured to show static or dynamic legend elements within the layer card when active.
- `attribution`: An optional object to render some text or a link for use with attribution of layer datasets.

##### Interface Group - `interfaceGroup`

An optional string used to identify which interface group this layer belongs to.

#### Data - `data`

An object that provides configuration of the data to be displayed in the layer. This currently supports the following properties:

- `url`: A required URL string that points to the datasets publically available resource.
- `type`: A required string that identifies what kind of dataset is requested. Can be one of the following: 'wms', 'wmts', 'cog', 'xyz', 'wfs', 'geojson'.
- `layers`: Only required for sources of type: 'wms' and 'wmts'. A string the describes the layer to be requested from the external service.
- `typeName`: Only required for sources of type: 'wfs'. A string the describes the type to be requested from the external service.
- `zIndex`: Optional interger that determines rendering order within the map. Can be used to override the default rendering of Open Layers.
- `exlusivitySet`: Optional string used to identify a group of other layers that should be disabled when this layer is enabled. They must share the same string.
- `projection`: Optional EPSG code string that describes the projection of the dataset to Open Layers. If the projection is supported (and doesn't match the maps configured projection) it will attempt to reproject the data.
- `style`: Open Layers style object that is passed through to the library to modify the rendering of the layer within the map.
- `normalise`: Only required for sources of type: 'cog'. Boolean that configures the map to normalise the raster pixel values to between 0 and 1. False by default.
- `images`: Only required for sources of type: 'cog'. An array of objects that contain a url property pointing to a COG resource. Replaces the 'url' property for this source type. Allows loading multiple GeoTiffs into one layer.


## Example Schema

The following is an example of an working JSON file that may be used to configure the application.

::: {.callout-warning}
The API is an early draft that will be subject to significant on-going changes. The following is for illustrative purposes only.
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
        "Basemaps",
        "STAC"
    ],
    "exclusivitySets": [
        "Landcover"
    ],
    "sources": [
        {
            "name": "Open Street Map",
            "isActive": true,
            "layout": {
                "interfaceGroup": "Basemaps"
            },
            "data": {
                "url": "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
                "type": "xyz",
                "zIndex": 0
            }
        },
        {
            "name": "WMS Layer",
            "isActive": false,
            "layout": {
                "layerCard": {
                    "toggleable": true,
                    "controls": [
                        "zoomToCenter"
                    ],
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
                "interfaceGroup": "Landcover"
            },
            "data": {
                "url": "https://services.terrascope.be/wms/v2",
                "layers": "WORLDCOVER_2021_MAP",
                "exclusivitySet": "Landcover",
                "zIndex": 2,
                "type": "wms"
            }
        },
        {
            "name": "WMTS Layer",
            "isActive": false,
            "layout": {
                "layerCard": {
                    "toggleable": true,
                    "controls": [
                        "zoomToCenter"
                    ],
                    "legend": {
                        "type": "swatch",
                        "visible": true,
                        "data": [
                               ....
                        ]
                    }
                },
                "interfaceGroup": "Landcover"
            },
            "data": {
                "url": "https://services.terrascope.be/wmts/v2",
                "layers": "WORLDCOVER_2021_MAP",
                "exclusivitySet": "Landcover",
                "zIndex": 2,
                "type": "wmts"
            }
        },
        {
            "name": "GeoJSON Layer",
            "isActive": false,
            "layout": {
                "layerCard": {
                    "toggleable": true
                },
                "interfaceGroup": "Vectors"
            },
            "data": {
                "url": "https://dataworks.calderdale.gov.uk/download/24qmx/p18/Public%20Rights%20of%20Way%20-%20Jan%202022%20-%20JSON.json",
                "zIndex": 10,
                "type": "geojson"
            }
        },
        {
            "name": "WFS Layer",
            "isActive": false,
            "layout": {
                "layerCard": {
                    "toggleable": true,
                    "controls": [
                        "zoomToCenter"
                    ]
                },
                "interfaceGroup": "Vectors"
            },
            "data": {
                "url": "http://ogc.bgs.ac.uk/digmap625k_gsml_cgi_gs/wfs",
                "zIndex": 10,
                "type": "wfs",
                "typeName": "gsmlp:GeologicUnitView"
            }
        },
        {
            "name": "GTIF - Above Ground Biomass",
            "isActive": false,
            "layout": {
                "layerCard": {
                    "toggleable": true,
                    "attribution": {
                        "text": "Forest Carbon Monitroing",
                        "url": "https://www.forestcarbonplatform.org/"
                    },
                    "legend": {
                        "visible": true,
                        "type": "gradient",
                        "data": {
                            "startColor": "rgb(255, 255, 255)",
                            "endColor": "rgb(0, 100, 0)"
                        }
                    }
                }
            },
            "data": {
                "zIndex": 3,
                "type": "cog",
                "normalize": false,
                "images": [
                    {
                        "url": "https://eox-gtif-public.s3.eu-central-1.amazonaws.com/FCM/v2/JR/FCM_AGB-2021_Austria_20m_EPSG3857-COG.tif"
                    }
                ],
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
                }
            }
        },
        {
            "name": "STAC Item",
            "isActive": false,
            "layout": {
                "layerCard": {
                    "toggleable": true
                },
                "interfaceGroup": "STAC"
            },
            "data": {
                "url": "https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json",
                "zIndex": 5,
                "type": "stac"
            }
        },
        {
            "name": "World Soil",
            "isActive": false,
            "layout": {
                "layerCard": {
                    "toggleable": true
                }
            },
            "data": {
                "zIndex": 3,
                "projection": "EPSG:3035",
                "type": "cog",
                "normalize": false,
                "images": [
                    {
                        "url": "http://localhost:5173/europe_aggr-orgc_00-020_mean_100_201803-202010.tif"
                    }
                ],
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
                        22,
                        "rgb(10,10,40)",
                        5344,
                        "rgb(173,216,230)"
                    ]
                }
            }
        }
    ]
}
```
