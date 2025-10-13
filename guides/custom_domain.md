---
title: Custom domains for your project environment
---

When you create a project environment in APEx, it is assigned a default domain name that typically looks like
`<tool>.<project-name>.apex.esa.int`, for example: [https://browser.demo.apex.esa.int](https://browser.demo.apex.esa.int).
While this default domain is functional, you might want to use a more personalized domain name that reflects your
project's branding or is easier to remember.

This guide will walk you through the steps to set up a custom domain for your APEx project environment.

## Prerequisites

Before you begin, ensure the following are in place:

- Access to your domain's DNS management settings. This is typically done through your domain registrar or hosting provider.
- Permission to manage DNS records in your DNS settings.
- Coordination with APEx operations to request custom-domain activation.

## Steps to Set Up a Custom Domain

:::{.callout-important title="Coordinate with APEx Operations"}
Using custom domains requires coordination with the APEx operations team to ensure proper configuration and security.
Please reach out to them early in the process to avoid delays and ensure a smooth setup.
:::

1. **Choose Your Custom Domain**\
   Decide on the custom domain name you want to use for your project environment. It could be a subdomain of your
   existing domain (e.g., `project.yourdomain.com`) or a completely new domain.
2. **Lower the TTL**\
   Before making DNS changes, it's advisable to lower the Time To Live (TTL) value for your DNS records. This ensures
   that changes propagate more quickly. A TTL of 10 seconds is recommended.
3. **Create a `A` Record**\
    In your DNS management settings, create an `A` record that points your chosen custom domain to the APEx ingress IP
    address. You can find the current ingress IP address by contacting the APEx operations team.
    - **Type**:`A`
    - **Name**: Your chosen subdomain (e.g., `project` if your full domain is `project.yourdomain.com`)
    - **Value**: APEx ingress IP address (obtain from APEx operations)
    - **TTL**: 300 seconds (or your preferred value)
4. **Request Custom Domain Activation**\
   After setting up the DNS record, contact the APEx operations team to request the activation of your custom domain.
   Provide them with the following information:
   - Your project name
   - The tool/environment you want to associate with the custom domain
   - The custom domain name you have set up
5. **Wait for Confirmation**\
   The APEx operations team will verify the DNS settings and activate the custom domain for your project environment.
   This process may take some time, so please be patient.
6. **Test Your Custom Domain**\
   Once you receive confirmation from the APEx operations team, test your custom domain by navigating to it in your web
   browser. Ensure that it correctly points to your project environment.
7. **Increase the TTL**\
   After confirming that your custom domain is working correctly, you may want to increase the TTL value for your DNS records
   to a longer duration (e.g., 3600 seconds or more) to reduce DNS query load.
