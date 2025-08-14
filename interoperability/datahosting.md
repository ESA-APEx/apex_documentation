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
      <td>The specific STAC profiles will align with the recommendations provided by the <a href="https://eoresults.esa.int/reg-api/docs#/Implemented%20tranaction%20operations%3A/collection_items_post_request_collections__collectionId__items_post">ESA Project Results Repository (PRR)</a>. More details regarding which profiles to apply will be added as the project progresses.</td>
    </tr>
  </tbody>
</table>

Table: Interoperability requirements for data providers
:::
