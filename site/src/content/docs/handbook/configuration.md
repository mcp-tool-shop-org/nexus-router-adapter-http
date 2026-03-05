---
title: Configuration
description: All parameters and options.
sidebar:
  order: 3
---

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `base_url` | `str` | *required* | Base URL for the HTTP endpoint |
| `adapter_id` | `str` | `http:{host}` | Stable identifier for this adapter |
| `timeout_s` | `float` | `30.0` | Request timeout in seconds |
| `headers` | `dict` | `{}` | Additional headers to include |
| `capabilities` | `frozenset` | `{apply, external, timeout}` | Override capabilities |

## Example with custom headers

```python
from nexus_router.plugins import load_adapter

adapter = load_adapter(
    "nexus_router_adapter_http:create_adapter",
    base_url="https://api.example.com/tools",
    timeout_s=60,
    headers={"Authorization": "Bearer token123"},
)
```

## Security

- **Stateless** — no persistent state, no credential storage
- **No telemetry** — no analytics or tracking
- **HTTP/HTTPS outbound** — only via httpx for tool dispatch
