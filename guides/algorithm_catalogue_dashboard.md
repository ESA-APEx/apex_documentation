---
title: APEx Algorithm Dashboard
---

## Overview

The **APEx Algorithm Dashboard** is a web-based administration interface that is part of the broader
[APEx Algorithm Catalogue](https://algorithm-catalogue.apex.esa.int/) application
(source code: [apex-algorithms-catalogue-web](https://github.com/ESA-APEx/apex-algorithms-catalogue-web)).
While the public-facing Algorithm Catalogue allows anyone to browse and discover algorithms that have been onboarded
onto APEx, the Algorithm Dashboard provides authorised users with deeper operational insight into those same
algorithms — including benchmark health, performance metrics, cost analytics, and scenario-level detail.

The Dashboard is intended primarily for **APEx operators, service administrators, and algorithm providers**
who need to monitor the operational status of registered services and diagnose issues beyond what is
visible in the public catalogue.

::: {.callout-note}
The public Algorithm Catalogue — available at <https://algorithm-catalogue.apex.esa.int/> — does not require
a login and is covered separately. This page focuses exclusively on the **Dashboard** (admin area),
which requires authentication.
:::

## Key Capabilities

### Algorithm & Benchmark Overview

The Dashboard landing page presents a consolidated table of all algorithms registered in the catalogue
together with the current benchmark health status of each registered scenario.  For each algorithm the table
shows:

- Algorithm name and provider platform
- Benchmark status badge (`healthy`, `warning`, `critical`, or `no benchmark`)
- Number of test runs, success count, and failure count
- Date and phase of the most recent test run

Operators can use this view to spot at a glance which services are degraded or have never been benchmarked.

### Scenario-level Drill-down

Clicking on a row in the overview table navigates to a per-scenario detail page that contains:

- **Benchmark metrics table** — tabular view of individual test runs, including CPU (seconds),
  memory (MB-seconds), cost, duration (seconds), input pixel count (mega-pixels), maximum executor
  memory (GB), network received (bytes), and area size (km²).
- **Time-series line chart** — visualises how key metrics (e.g. duration, cost) evolve across
  successive test runs, making it easy to detect regressions.

### Date-range Filtering

Both the overview and the scenario detail pages support **date-range filtering** (`start` / `end`
query parameters in YYYY-MM-DD format) so that operators can focus on a specific time window and
compare periods.

### Benchmark Status Badges

Each algorithm and scenario is assigned a colour-coded status badge that summarises the outcome of the
most recent test run:

| Status           | Meaning                                                          |
| :--------------- | :--------------------------------------------------------------- |
| `healthy`        | The most recent test run completed successfully                  |
| `warning`        | A recent run finished with degraded performance                  |
| `critical`       | The most recent run failed                                       |
| `no benchmark`   | No test scenario has been registered for this algorithm yet      |

### Navigation & UI Layout

The Dashboard shares the same application shell as the public catalogue but surfaces additional
admin-only sections:

- **Top navigation bar** — provides links back to the public catalogue and to the Dashboard home.
- **Algorithm list / overview table** — main entry point (Dashboard home).
- **Scenario detail pages** — drill-down pages accessible by clicking an algorithm row.

## Data & Sources

| Data type | Description | Update frequency |
| :-------- | :---------- | :--------------- |
| Algorithm metadata | Title, description, provider, platform, licence, type | On every merge to the [apex_algorithms](https://github.com/ESA-APEx/apex_algorithms) repository |
| Benchmark run results | CPU, memory, cost, duration, etc. for each test run | Continuously, as APEx runs automated benchmark jobs |
| Benchmark health status | Derived from the latest run result | Real-time (API endpoints below) |

The Dashboard fetches its data from the following built-in API endpoints exposed by the catalogue
web application:

| Endpoint | Description |
| :------- | :---------- |
| `GET /api/services/benchmarks.json` | Latest benchmark status for every scenario (public) |
| `GET /api/services/{id}/benchmarks.json` | Per-service benchmark data for successful runs in the default time window (public) |
| `GET /api/admin/services/benchmarks.json` | Comprehensive benchmark statistics for all services with optional date filtering (admin only) |
| `GET /api/admin/services/{id}/benchmarks.json` | Detailed run-level data for a specific scenario with optional date filtering (admin only) |

Full API documentation is available in the
[apex-algorithms-catalogue-web README](https://github.com/ESA-APEx/apex-algorithms-catalogue-web#api-documentation).

## Roles & Permissions

The Dashboard uses [Keycloak](https://www.keycloak.org/) for authentication (federated via the APEx
identity provider).  Access control is enforced in the server middleware for all paths under `/dashboard`
and `/api/admin/`.

| Role / group | Access |
| :----------- | :----- |
| **Unauthenticated users** | Redirected to the Keycloak login page; no Dashboard access |
| **Authenticated users (general)** | No Dashboard access; redirected to the 403 page |
| **Administrators** (users assigned the `administrator` role in Keycloak, **or** whose institutional e-mail domain is listed in the `acl-mapping.json` server-side allow-list maintained by the APEx team) | Full Dashboard access including all admin API endpoints |

::: {.callout-note title="Contributor vs. read-only"}
The Dashboard currently has a single elevated access level ("administrator").  There is no separate
read-only contributor role for the Dashboard at this time.  A registered algorithm provider can
monitor the public benchmark status of their own algorithm via the public catalogue page without
requiring Dashboard access.
:::

## Known Limitations

- **Single admin role** — there is currently no granular role model (e.g., per-project or per-algorithm
  scoping).  Administrators have access to benchmark data for all algorithms.
- **No export/download UI** — bulk export of benchmark data is not yet available through the UI.
  Power users can query the JSON API endpoints directly (see [Data & Sources](#data--sources)).
- **No algorithm comparison view** — the Dashboard does not yet support side-by-side comparison of
  two or more algorithms.
- **Metrics limited to benchmark runs** — the Dashboard reflects only the results of APEx-run automated
  test scenarios.  Manual or third-party execution data is not included.
- **Cost analysis** — cost figures shown in the Dashboard are estimates derived from benchmark runs and
  should be treated as indicative values only.

## Requesting Access

### Who Can Request Access

Dashboard (admin) access is intended for:

- **APEx team members and operators** responsible for maintaining the Algorithm Catalogue
- **Algorithm providers** who need detailed diagnostic information about the health of their own
  registered services and who cannot resolve an issue using the public benchmark status alone
- **ESA staff or project partners** with a justified need to inspect benchmark data across multiple
  algorithms

If you only need to **browse or discover algorithms**, you do not need Dashboard access — the public
[APEx Algorithm Catalogue](https://algorithm-catalogue.apex.esa.int/) is openly accessible without
any login.

### How to Request Access

Follow these steps to request Dashboard access:

1. **Open an issue** in the [ESA-APEx/apex_documentation](https://github.com/ESA-APEx/apex_documentation/issues/new)
   repository using the subject line:

   > **Request: APEx Algorithm Dashboard access**

2. **Include the following details** in the issue body:

   | Field | Description |
   | :---- | :---------- |
   | Full name | Your full name |
   | GitHub username | Your GitHub handle (e.g. `@myusername`) |
   | Affiliation | Organisation or project you are acting on behalf of |
   | Intended use | Brief description of why you need Dashboard access (1–3 sentences) |
   | Desired access level | Currently only `administrator` is available |

   ::: {.callout-note}
   GitHub issues are public. Do **not** include your institutional e-mail address or other sensitive
   personal data in the issue body. The APEx team will follow up privately to collect any additional
   details needed to complete the access provisioning.
   :::

3. **Await approval** — a member of the APEx team will review your request.  Once approved, your
   institutional e-mail domain (or Keycloak role) will be added to the access control list.
   Expected turnaround is **5 business days**.

::: {.callout-tip}
If you are an ESA staff member or an APEx partner and already hold an account in the APEx Keycloak
realm, the APEx team may be able to grant access more quickly.  Mention this in your issue.
:::

### Approval Criteria

Requests are assessed based on:

- A clear and legitimate need to access admin-level benchmark data
- Association with an ESA project, APEx partner organisation, or the APEx operational team
- No outstanding security concerns raised during review

The APEx team reserves the right to decline requests that do not meet these criteria or to grant
time-limited access where appropriate.

## Related Resources

- [APEx Algorithm Catalogue](https://algorithm-catalogue.apex.esa.int/) — public-facing catalogue
- [apex-algorithms-catalogue-web source code](https://github.com/ESA-APEx/apex-algorithms-catalogue-web)
- [Registering your service in the APEx Algorithm Catalogue](algorithm_services_catalogue.qmd)
- [Creating benchmarks for your service](algorithm_services_catalogue_benchmarks.qmd)
- [Algorithm Onboarding](../propagation/onboarding.md)
