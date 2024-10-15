# OGC API Processes: file-based processing for existing software

The OGC API processes specification allows you to expose basically any type of (processing) web service. As a service
designer, you get the full freedom and responsibility in the definition of your service.

Whether or not your service will be interoperable with other services or tools, also depends on how you define it.

APEx recommends that these services are built based on the OGC Application Package best practice. This allows service providers
to easily host their application on a compatible hosting platform, taking away key IT-challenges.

## When to use OGC Application packages

An OGC application package is a good choice when you have an existing piece of software that you want to make available as a service,
and do not aim to make substantial changes. In effect, it is simply a packages version of your software, using (Docker) containers, which
is a well-known technology for most IT professionals. In fact, a large amount of existing EO applications are known to 
already use containers. The container is invoked by a workflow written in the 'common workflow language' (CWL), which is 
a fairly thin wrapper around your software.

If concepts like containers are already familiar to you, and you prefer to have full control and responsibility over your software,
including all details with respect to how you read raw EO products, then this might be the right choice for your project. 
Of course, the APEx propagation services exist to help you with the integration of your service into the APEx ecosystem.

To offer your application as an on-demand service, you will need to define clear constraints on possible input parameters,
and make sure that your software is well tested to be able to handle variations in input parameters. When changes occur for 
instance to raw EO data sources, you will need to update your software accordingly, or it might no longer be compatible with provided inputs.
Likewise, if improvements are made to dependencies of your software, you will have the choice of updating your software, or 
sticking to the old versions.






