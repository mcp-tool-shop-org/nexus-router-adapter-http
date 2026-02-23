# nexus-router-adapter-http

[![CI](https://github.com/mcp-tool-shop-org/nexus-router-adapter-http/actions/workflows/ci.yml/badge.svg)](https://github.com/mcp-tool-shop-org/nexus-router-adapter-http/actions/workflows/ci.yml)
[![PyPI](https://img.shields.io/pypi/v/nexus-router-adapter-http)](https://pypi.org/project/nexus-router-adapter-http/)
[![License: MIT](https://img.shields.io/github/license/mcp-tool-shop-org/nexus-router-adapter-http)](LICENSE)

HTTP/REST dispatch adapter for [nexus-router](https://github.com/mcp-tool-shop-org/nexus-router) — reference implementation of the adapter package contract.

## Installation

```bash
pip install nexus-router-adapter-http
```

## Usage

```python
from nexus_router.plugins import load_adapter

adapter = load_adapter(
    "nexus_router_adapter_http:create_adapter",
    base_url="https://api.example.com/tools",
    timeout_s=30,
)

result = adapter.call("my-tool", "my-method", {"arg": "value"})
```

## Configuration

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `base_url` | `str` | *required* | Base URL for the HTTP endpoint |
| `adapter_id` | `str` | `http:{host}` | Stable identifier for this adapter |
| `timeout_s` | `float` | `30.0` | Request timeout in seconds |
| `headers` | `dict` | `{}` | Additional headers to include |
| `capabilities` | `frozenset` | `{apply, external, timeout}` | Override capabilities |

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

- `apply` — Can execute operations
- `timeout` — Enforces request timeouts (via httpx)
- `external` — Makes network calls

## Development

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```

## License

MIT

---

Built by [MCP Tool Shop](https://mcp-tool-shop.github.io/)
