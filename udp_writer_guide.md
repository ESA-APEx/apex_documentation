## Guide for writing openEO User Defined Processes

User defined processes (UDPs) are one out of two standardized options that APEx offers to publish algorithms as a service.
This guide gives some concrete steps and guidelines to ensure that your UDP works well for your users. These guidelines are
written with APEx in mind, but can also serve as a general guide for openEO UDPs. Where needed, recommendations & choices 
are made to increase uniformity across the APEx algorithm catalog.


### Organizing your code

A UDP is simply a parametrized version of an openEO workflow, and as such we recommend that you use the same code to develop
and test your algorithm, as you use to generate the UDP json. This ensures that your UDP is functionally equivalent to your code.
Your code remains your own, and you only need to export the JSON UDP definition to share it with APEx.

It is however advisable for your UDP to link back to the git repository if relevant, making your open source code more 
discoverable. 

### How many UDPs should I write?

Deciding on the granularity of your UDP is an important aspect of making your algorithm usable. There is no need to try
and fit all possible use cases into a single UDP. Instead, consider to define pieces of functionality that can work with
a limited set of parameters, and write a single UDP for each piece.


### Parameter conventions

#### Spatial filtering

Any algorithm requires spatial filtering, so we can make the life of our users easier if we all use the same naming.

In other openEO processes, the spatial filtering is called `spatial_extent`, and we recommend to stick to that name as 
long as you don't have more specific names.

If you pass on the `spatial_extent` parameter to all `load_collection` processes in your UDP, then it is also allowed to
perform filtering using vector data. This conveniently allows for advanced spatial filtering use cases!

#### Temporal filtering

For UDP's that support arbitrary temporal ranges, the `temporal_extent` parameter from `load_collection` is the recommended option.

Many cases also require a time range with a fixed length. In such a case, you can allow to specify only the start or end
date, and use the `date_shift` process to construct the second date in the temporal interval, ensuring a fixed length. This
avoids faulty user input.


### Avoid use of `save_result`

Most openEO process graphs end in a `save_result`process. However, this is not recommended for UDPs, as the user may
want to perform additional processing steps before generating the result.


### UDP documentation

The description of your UDP should be quite extensive if you want users to be able to easily assess if it's suitable for them.
We recommend including these sections:

1. **Description**: A short description of what the algorithm does.
2. **Performance characteristics**: Information on the computational efficiency of the algorithm. Include a relative cost if available.
3. **Examples**: One or more examples of the algorithm in action, using images or plots to show a typical result. Point to a STAC metadata file with an actual output asset to give users full insight into what is generated.
4. **Literature references**: If your algorithm is based on scientific literature, provide references to the relevant publications.
5. **Known limitations**: Any known limitations of the algorithm, such as the type of data it works best with, or the size of the area it can process efficiently.
6. **Known artifacts**: Use images and plots to clearly show any known artifacts that the algorithm may produce. This helps users to understand what to expect from the algorithm.

