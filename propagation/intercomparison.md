# Algorithm Intercomparison Service

The Algorithm Intercomparison Service benchmarks various algorithms against each other, providing a quality metric for
EO services that implement the same capability. This aids end users in making informed decisions about which algorithm
to choose.

Additionally, it assists in identifying the most suitable algorithms for [cloudification](./toolboxcloud.md) or [enhancement](./enhancement.md), ensuring that
only the most effective and efficient options are pursued.

## Examples

### Intercomparison of Sentinel-1 backscatter computation

The APEx framework allows to simplify intercomparison, by offering different implementations of the same algorithm through 
the same interface. One such example is Sentinel-1 backscatter computation, for which there are three openEO implementations,
all accessible via the `sar_backscatter` openEO process on different openEO backends:

| Backend | Implementation |
| --- | --- |
| EODC |  Sentinel-1 toolbox 'SNAP' implementation |
| CDSE |Orfeo implementation |
| Terrascope |  A custom implementation on the Sentinelhub | 

While all three implementations implement `sar_backscatter`, they may vary in the range of parameters they accept. 
Therefore, the range of supported parameters becomes an important point of comparision, alongside the cost in platform credits and correctness of the results.

## Call for service providers

APEx is looking for a first category of algorithms to be intercompared. If you have an algorithm, consider onboarding it
via the [Toolbox cloudification](./toolboxcloud.md) service, and request your peers to do the same so that a first 
intercomparison can be initiated.

If you believe your implementation outperforms one currently available in the APEx catalog, feel free to contact us.
We will further evaluate your case to determine if you have a potential candidate for intercomparison.