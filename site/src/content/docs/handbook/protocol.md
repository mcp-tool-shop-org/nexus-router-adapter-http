---
title: Protocol
description: HTTP protocol, error codes, and capabilities.
sidebar:
  order: 2
---

## HTTP protocol

```
POST {base_url}/{tool}/{method}
Content-Type: application/json
Accept: application/json

{args}
```

Expected response: status 2xx with JSON object body.

## Error codes

| Code | Meaning |
|------|---------|
| `TIMEOUT` | Request timed out |
| `CONNECTION_FAILED` | Could not connect to server |
| `HTTP_ERROR` | HTTP 4xx/5xx response |
| `INVALID_JSON` | Response was not valid JSON or not an object |

## Capabilities

| Capability | Description |
|------------|-------------|
| `apply` | Can execute operations |
| `timeout` | Enforces request timeouts (via httpx) |
| `external` | Makes network calls |
