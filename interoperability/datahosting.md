---
title: Data Provider Guidelines
---

## Requirements

@tbl-datahosting outlines the interoperability guidelines for EO projects and data providers who wish to deliver their
datasets to APEx for integration within the [ESA Project Results Repository (PRR)](https://eoresults.esa.int/) for
long-term preservation and their utilisation within the APEx Project Environments. By fulfilling these requirements, APEx
ensures seamless integration, discoverability, and usability of the datasets across the ESA EO ecosystem, facilitating
broader access and reusability within the EO community.

Most of these requirements focus on standardising dataset metadata, formats, and access methods to ensure compatibility
with existing tools and support their efficient exploitation. In particular, datasets should adhere to well-established
EO data standards and provide consistent, machine-readable metadata descriptions.

APEx supports integration primarily through recognised standards such as STAC (SpatioTemporal Asset Catalogue) and
cloud-native data formats. This ensures that almost any EO dataset can be made available as a ready-to-use resource in
the ESA PRR and used through the APEx tooling.

Overall, the objective is to streamline and simplify the delivery of high-quality, interoperable EO datasets to APEx,
fostering wider adoption and enabling advanced use cases in downstream applications.

:::{#tbl-datahosting}
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
      <td>DATA-REQ-01</td>
      <td>EO project results with respect to raster data, shall be delivered as cloud-native datasets.</td>
      <td>Where possible, cloud optimized GeoTIFF [@cog] is preferred. For more complex datasets, CF-Compliant netCDF [@netcdf] is a good alternative. Use of the still evolving GeoZarr [@geozarr] format requires confirmation by APEx and may result in future incompatibility if the selected flavour is not standardised eventually. Additional recommendations for the usage of file formats within the APEx services are available on the <a href="../guides/file_formats.qmd">APEx documentation</a>.</td>
    </tr>
    <tr>
      <td>DATA-REQ-02</td>
      <td>EO project results with respect to vector data, shall be delivered as cloud-native datasets.</td>
      <td>Small datasets can use GeoJSON [@geojson], FlatGeobuf [@flatgeobuf] or GeoParquet [@geoparquet] are recommended for larger datasets.</td>
    </tr>
    <tr>
      <td>DATA-REQ-03</td>
      <td>EO project results should be accompanied with metadata in a STAC [@stac] format, including applicable STAC extensions.</td>
      <td>The specific STAC profiles will align with the recommendations will align with the recommendations provided in the [Metadata Recommendations](#metadata-recommendations) section.</td>
    </tr>
  </tbody>
</table>

Interoperability requirements for data providers
:::

:::{.callout-tip title="File Format Recommendations"}
For more details regarding the recommended file formats and their usage within APEx, please refer to the
[APEx File Format Recommendations](../guides/file_formats.qmd).
:::


## Metadata Recommendations

### Format Specific Recommendations

When sharing geospatial datasets in cloud-optimised formats, such as Cloud Optimised GeoTIFF (COG), NetCDF, and Zarr, it
is essential to embed as much relevant metadata as possible directly within the files. Although these formats are designed
for efficient cloud access, their interoperability potential is enhanced when the files carry rich, standardised metadata
aligned with their respective specifications. Doing so not only improves data reuse by third-party tools but also enables
more reliable automatic inference of STAC metadata during cataloguing or dataset publication.

APEx recommends that the following details be incorporated into the file metadata:

- The projection system used to present the data within the file
- he Nodata value applied
- The unit of measurement for values represented in the dataset
- A definition of the colour map or legend utilised for the dataset visualisation in case of categorical data.
- Band or variable names and descriptions

For more details and examples on adding this additional metadata to your results, please consult the specific tools
(e.g. gdal, rasterio, …) for generating the results.

### STAC Metadata Recommendations

The STAC specification provides a comprehensive and interoperable framework for describing geospatial datasets. Within
APEx, STAC serves as the foundation to enhance the discoverability, interoperability, and integration of data across a
range of platforms, data catalogues, including the ESA Project Results Repository, and tools such as the APEx Geospatial
Explorer.

To enhance interoperability, data providers are advised to consistently use a recommended set of STAC-related extensions
and best practices. These recommendations come from community input and collaboration with other initiatives, like
EarthCODE and EOEPCA, to ensure consistency across projects and promote the adoption of best practices.

@tbl-metadata offers a summary of the suggested metadata. For further details, please refer to the resources listed below.

- [STAC Best Practices](https://github.com/radiantearth/stac-best-practices/blob/main/README.md)
- [EOEPCA+ Datacube Access Best Practices](https://github.com/EOEPCA/datacube-access/blob/main/best_practices/stac_best_practices.md)
- [ESA PRR Collection Specifications](https://eoresults.esa.int/prr_collection_specifications.html)

:::{#tbl-metadata}
<table class="requirements">
  <thead>
    <tr>
      <th>ID</th>
      <th>Scenario</th>
      <th>Level</th>
      <th>Requirement</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="5"><b>General</b></td>
    </tr>
    <tr>
      <td>METADATA-REC-01</td>
      <td></td>
      <td>Collection / Item</td>
      <td>The STAC collection and items should use STAC 1.1 or higher.</td>
      <td></td>
    </tr>
    <tr>
      <td>METADATA-REC-02</td>
      <td></td>
      <td>Collection</td>
      <td>The STAC collection must follow the [ESA PRR collection specifications](https://eoresults.esa.int/prr_collection_specifications.html).</td>
      <td>This guarantees the collection is compatible for upload and registration in the ESA Project Results Repository.</td>
    </tr>
    <tr>
      <td>METADATA-REC-03</td>
      <td></td>
      <td>Collection / Item</td>
      <td>Collections must be homogeneous: each item has the same assets and uses the same asset keys.</td>
      <td>Consistent and homogeneous definition of assets simplifies client-side handling and supports datacube generation.</td>
    </tr>
    <tr>
      <td>METADATA-REC-04</td>
      <td></td>
      <td>Item</td>
      <td>Each item must have at least one asset where the role is set to *data*.</td>
      <td>This allows for accurate identification of assets containing the data.</td>
    </tr>
    <tr>
      <td>METADATA-REC-05</td>
      <td></td>
      <td>Item</td>
      <td>
      Each asset must include:
        <ul>
          <li>type</li>
          <li>role</li>
          <li>title</li>
          <li>file:size</li>
        </ul>
      Optionally properties:
        <ul>
          <li>file:checksum</li>
        </ul>
      </td>
      <td>These properties help tools and platforms accurately import the dataset. Furthermore, the *file* properties allow
      the ESA PRR to perform extra quality checks.</td>
    </tr>
    <tr>
      <td>METADATA-REC-06</td>
      <td>Data Visualisation</td>
      <td>Item</td>
      <td>
        <p>In the case of categorical datasets,
        <a href="https://github.com/stac-extensions/classification">classification extension</a> is recommended to identify
        the different classes used in the asset. </p>
        <p>For additional visualization support, it is recommend setting the *title* and *color_hint* properties to allow
        external tools, such as the [APEx Geospatial Explorer](../instantiation/geospatial_explorer.md) to properly visualise
        the data.</p>
      </td>
      <td>The  classification extension supports the proper interpretation of categorical data that is included in the
      collection, item or asset.</td>
    </tr>
    <tr>
      <td>METADATA-REC-07</td>
      <td>Data Visualisation</td>
      <td>Item / Asset</td>
      <td>
        <p>To support the visualization of the dataset, the
        <a href="https://github.com/stac-extensions/render">render extension</a> is recommended.</p>
        <p>The render extension allows the definition of the following properties:</p>
        <ul>
          <li>rescale: 2 dimensions array of delimited Min,Max range per band. If not provided, the data will not be rescaled.</li>
          <li>Colormap: that must be applied for a raster band</li>
        </ul>
      </td>
      <td>The render extension supplies rendering tools, like the [APEx Geospatial Explorer](../instantiation/geospatial_explorer.md),
      with key data to auto-configure visualization settings, including rescaling and colour maps.</td>
    </tr>
    <tr>
      <td colspan="5"><b>Datacube Formats (netCDF, ZARR, ...)</b></td>
    </tr>
    <tr>
      <td>METADATA-REC-08</td>
      <td>Data Processing</td>
      <td>Collection / Item</td>
      <td>
        <p>The <a href="https://github.com/stac-extensions/datacube"></a>datacube extension (v2.x) should be used to
        properly describe the datacube:</p>
        <ul>
          <li>For a single variable: only use *cube:dimensions*</li>
          <li>For multiple variables: *cube:variables* and *cube:dimensions*. Each variable should be a separate datacube,
          no attempt should be made to combine variables automatically.</li>
        </ul>
      </td>
      <td>
        <p>The extension enables correct data parsing into a datacube by the platform or tool.</p>
        <p>A variable can be bands in EO data or meteorological variables like rain or temperature in meteorological data
        sets.</p>
      </td>
    </tr>
    <tr>
      <td colspan="5"><b>Raster Formats (COG)</b></td>
    </tr>
    <tr>
      <td>METADATA-REC-09</td>
      <td>Data Processing,Data Visualisation</td>
      <td>Item</td>
      <td>
        <p>The <a href="https://github.com/stac-extensions/projection">projection extension</a> must be used to identify
        the CRS, raster bounds and shape.</p>
        <p>At minimum the following must be defined:</p>
        <ul>
          <li>*proj:code*</li>
          <li>*proj:bbox*</li>
          <li>*proj:shape*</li>
        </ul>
      </td>
      <td>
        <p>The projection extension ensures that any tools accessing the data can accurately determine key raster
        properties without the performance overhead of inspecting the raster file.</p>
        <p>If the goal is to visualise your data through the [APEx Geospatial Explorer](../instantiation/geospatial_explorer.md),
        please consider the projections that are currently supported, as defined in [EXPLORER-REQ-07](./geospatial_explorer.qmd).</p>
      </td>
    </tr>
    <tr>
      <td>METADATA-REC-10</td>
      <td>Data Processing,Data Visualisation</td>
      <td>Item</td>
      <td>To incorporate a time dimension, the item must define a *datetime*, *start_datetime* and *end_datetime* at the
      item level. Both properties contain a single value using ISO8601 time intervals.</td>
      <td>
        <p>These properties enable tools to accurately identify the data's temporal dimension, simplifying search and
        filtering within the STAC collection.</p>
        <p>For temporal dimensions, it is recommended to maintain the original level of granularity; data should not be
        aggregated from daily records to a single label unless specifically instructed by the user or noted in the metadata.
        When combining data and overlap exists, the user must indicate the methodology unless indicated in the metadata.</p>
      </td>
    </tr>
    <tr>
      <td>METADATA-REC-11</td>
      <td>Data Processing,Data Visualisation</td>
      <td>Item</td>
      <td>
        <p>The <a href="https://github.com/radiantearth/stac-best-practices/blob/main/best-practices-asset-and-link.md#bands">*bands*</a>
        array must be used to identify band information in the raster, keep the order as identified in the array.</p>
        <ul>
          <li>Use the *name* property, if provided. Alternatively, use *eo:common_name*. As a last resort, use the array
          indices.</li>
          <li>Ensure homogeneous data types across bands, choosing the most precise one.</li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>METADATA-REC-12</td>
      <td></td>
      <td>Item</td>
      <td>For other dimensions, the datacube extension must be provided.</td>
      <td></td>
    </tr>
    <tr>
      <td>METADATA-REC-13</td>
      <td>Data Processing,Data Visualisation</td>
      <td>Item</td>
      <td>
        <p>The <a href="https://github.com/stac-extensions/raster">raster extension</a> must be used to accurately specify
        the following attributes associated with the raster file: </p>
        <ul>
          <li>*raster:spatial_resolution* (if multiple resolutions are provided in the item, otherwise specify it in the
          Item)</li>
          <li>*raster:scale*</li>
          <li>*raster:offset*</li>
          <li>*raster:nodata value*</li>
        </ul>
      </td>
      <td>The raster extension offers valuable information about the dataset, eliminating the need to directly access or
      analyse the data itself. For instance, when visualising, details like scale and offset can help convert raw values
      into real-world figures.</td>
    </tr>
    <tr>
      <td colspan="5"><b>Statistical Data (FlatGeobuff, GeoJSON)</b></td>
    </tr>
    <tr>
      <td>METADATA-REC-14</td>
      <td>Data Visualisation</td>
      <td>Item</td>
      <td>It is recommended that STAC records for statistics include a *datetime* property that matches the time stamp of
      the source data that the statistics are derived from.  The description should also make reference to the boundary
      datasets (e.g. NUTS) that the statistics represent.</td>
      <td>This information offers clear insights into the statistical data and its applications and also assists in integrating
      this data into the [APEx Geospatial Explorer](../instantiation/geospatial_explorer.md).
      </td>
    </tr>
  </tbody>
</table>

Metadata Recommendations
:::
