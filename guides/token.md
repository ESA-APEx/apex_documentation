---
title: Using the APEx Single Sign-On
---

APEx provides secure single sign-on (SSO) for all its instantiation services, supporting projects in implementing
security best practices.

For services with a user interface, the login is straightforward. However, direct integration with APIs requires
obtaining OIDC bearer token. This guide documents different approaches for generating a bearer token in a secure
manner.

## Interactive login from scripts & command line

The most secure login method involves an interactive login, and avoids storage of account credentials in scripts or on
your personal device. This is the **recommended** default method.

## Token generation via OIDC Agent

The [oidc-agent](https://github.com/indigo-dc/oidc-agent) CLI tool and its corresponding Python library allow you to
integrate secure OIDC token generation into your scripts. The tool
provides [installation instructions](https://github.com/indigo-dc/oidc-agent?tab=readme-ov-file#installation)
for various operating systems.

The following instructions show how to generate a token on a Linux operating system, which is provided by the [APEx User
Workspace](../instantiation/user_workspace.md).

### 1. Start `oidc-agent-service`

The first step is to ensure that the `oidc-agent-service` is correctly running on your system.

```bash
eval `oidc-agent-service start`
```

### 2. Generate your project configuration

Now add a configuration for your project. This requires that you request a client ID from the APEx support team.

You will need to provide the following project specific information:

* *apex_project_a* is simply the name of the configuration in OIDC agent, which you'll use whenever you need a token.
* the client id, which in this example is: *project-a-catalogue-dev-api*

Adjust these inputs in the following command, and run it to generate a new configuration. This step only needs to
happen once per device where you want to set up the agent.

```bash
oidc-gen --pub apex_project_a --flow=device --client-id=project-a-catalogue-dev-api --iss=https://auth.apex.esa.int/realms/apex --scope=openid --redirect-url=""
```

### 3a. Generate a token from command line

From now on, whenever an OIDC bearer token is needed, you can run the following command:

```bash
oidc-token apex_project_a
```

### 3b. Generate a token from a Python script

With the configuration in place and the service running, you can now securely request a token from within scripts.
When needed, this will trigger interactive authentication, but it will try to avoid this as much as possible via the use
of 'refresh tokens'.

```python

import liboidcagent as agent

token, issuer, expires_at = agent.get_token_response("apex_project_a")
```
