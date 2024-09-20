# Algorithm Intercomparison Service

The Algorithm Intercomparison Service benchmarks various algorithms against each other, providing a quality metric for
EO services that implement the same capability. This aids end users in making informed decisions about which algorithm
to choose.

Additionally, it assists in identifying the most suitable algorithms for 'cloudification' or enhancement, ensuring that
only the most effective and efficient options are pursued.

The APEx framework allows to simplify intercomparison, by offering different implementations of the same algorithm through 
the same interface. One such example is Sentinel-1 backscatter computation, of which we already have 3 implementations available, 
that are all exposed via the `sar_backscatter' openEO process:

- Sentinel-1 toolbox 'SNAP' implementation on EODC's openEO backend.
- Orfeo implementation on the CDSE openEO backend
- A custom implementation on the Sentinelhub, exposed via the Terrascope openEO backend.

All three implementations implement sar_backscatter, but may support different parameters. Hence the range of supported
parameters is an important point of comparision, but also the cost in platform credits as well as correctness of the results
can be easily compared.

## Call for service providers

We are looking for a first category of algorithms to be intercompared. If you have an algorithm, consider onboarding it
via the [Toolbox cloudification](./toolboxcloud.md) service, and request your peers to do the same so a first 
intercomparison can be initiated.

If you have an implementation that you believe to be better than an existing one available in the APEx catalog, consider
to also contact us, allowing to evaluate if you have a potential candidate for intercomparison.