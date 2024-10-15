---
title: openEO based services
---

APEx services that follow the [openEO](https://openeo.org/) standard are implemented as openEO processes.


Services can be executed through the tools that are provided by the different processing platforms.
For OpenEO based services, there is an online user interface, web editor, Client Libraries (JavaScript, Python, R) and API.

There are several ways to discover how a service can be executed. When publishing a service on the APEx, a service provider can choose to provide the following information in the service details:

* An executable link which redirects the user to the user interface of the processing platform. If this is the case, an **Access app** button will appear when opening an EOplaza service.
* Sample code in the service description on how to execute a service.

## openEO backends

An APEx openEO service is always associated with one or more openEO backends that have been validated to produce the correct
results. So using one of these backends is the recommended approach. Thanks to openEO interoperability and standardization,
it may certainly be possible that other backends can run the same service, but do make sure to validate the results in that case.

To ensure a smooth experience, backends need to be compliant with [APEx guidelines](../interoperability/algohostingenv.md).
The currently known list of compliant backends is:

- [CDSE openEO federation](https://openeofed.dataspace.copernicus.eu)
- [openEO platform](https://openeo.cloud)

Both are federations, which means that they in fact are backed by multiple openEO instances. This increases the convenience
for the APEx user, avoiding to interact with a high number of backends.

## Online user interface

OpenEO provides an online user interface where users can execute services directly in a web browser.
Through the graphical user interface, users can execute, link, and configure different services. More information on the usage of the online applications is presented in the table below.

| OpenEO                                                                     |
|----------------------------------------------------------------------------|
| [Access CDSE openEO federation](https://openeofed.dataspace.copernicus.eu) |
| [Access openEO platform](https://editor.openeo.cloud)                      |
| [Documentation](https://openeo.org/documentation/1.0/#introduction)        |

::: {.callout-tip}
## Pro-tip: discovering API requests

These interface provide a great way to find out how to interact with an openEO backend at the level of the HTTP API.
Just use the 'developer tools' of your favourite browser and inspect HTTP requests to the backend to find out the various options.
:::

## Client libraries

OpenEO provides client libraries to support the creation and execution of JavaScript, Python and R services. The full client libraries documentation is available on the official OpenEO support pages:

* [JavaScript](https://openeo.org/documentation/1.0/javascript/)
* [Python](https://openeo.org/documentation/1.0/python/)
* [R](https://openeo.org/documentation/1.0/r/ )

The following example shows a code sample on how to execute a service through the OpenEO Python Client.

```python
import openeo

# Setup parameters
aoi = {
    "type": "Polygon",
    "coordinates": [
        [
            [
                5.179324150085449,
                51.2498689148547
            ],
            [
                5.178744792938232,
                51.24672597710759
            ],
            [
                5.185289382934569,
                51.24504696935156
            ],
            [
                5.18676996231079,
                51.245342479161295
            ],
            [
                5.187370777130127,
                51.24918393390799
            ],
            [
                5.179324150085449,
                51.2498689148547
            ]
        ]
    ]
}
date = '2020-06-01'

# Setup connection with OpenEO
eoconn = openeo.connect("openeofed.dataspace.copernicus.eu").authenticate_oidc()

# Create a processing graph from the BIOMASS process using an active openEO connection
taskmap = eoconn.datacube_from_process("taskmap_generate", namespace="https://github.com/ESA-APEx/apex_algorithms/raw/main/openeo_udp/worldcereal_inference.json", bbox=aoi)

# Execute the OpenEO request as a batch job
taskmap_job = taskmap.save_result(format='GTiff').send_job()
taskmap_job.start_and_wait().get_results()
```

To execute a service from the APEx through one of the OpenEO client libraries, it is important to use the *datacube_from_process* function.
This accepts the ID and namespace of the service.
Both are made available in the service description on the EOplaza.
The full documentation on using the function is available on the official [OpenEO documentation](https://open-eo.github.io/openeo-python-client/datacube_construction.html#datacube-from-process).

It is possible to combine the Python and R OpenEO libraries with the notebooks provided by PROBA-V MEP.
Examples are available in the [OpenEO GitHub repository](https://github.com/Open-EO/openeo-python-client/tree/master/examples).

## API

OpenEO provides a fully documented API for a more advanced way to integrate features in any existing application or workflow. The API can also be used to execute EOPlaza services. The documentation is available at:

| OpenEO |
|---|
| https://openeo.org/documentation/1.0/developers/api/reference.html |

The following example showcases how to use the OpenEO API to execute a synchronous request for the BioPAR service:

```curl
POST /openeo/1.2/result HTTP/1.1
Host: openeocloud.vito.be
Content-Type: application/json
Authorization: Bearer basic//basic.cHJvag==
Content-Length: 4587
{
    "process": {
        "id": "biopar1",
        "process_graph": {
            "biopar1": {
                "process_id": "biopar",
                "namespace": "vito",
                "arguments": {
                    "bbox": {
                        "west": 5.15183687210083,
                        "east": 5.153381824493408,
                        "south": 51.18192559252128,
                        "north": 51.18469636040683,
                        "crs": "EPSG:4326"
                    },
                    "time_range": [
                        "2020-05-06",
                        "2020-05-30"
                    ]
                },
                "result": true
            }
        }
    }
}
```
