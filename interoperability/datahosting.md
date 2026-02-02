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

Table: Interoperability requirements for data providers
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
