---
title: Getting Started
description: Install, configure, and use the HTTP adapter.
sidebar:
  order: 1
---

## Install

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

## What it does

This is the reference implementation of the nexus-router adapter contract. It routes tool calls over HTTP/REST with configurable timeouts, custom headers, and structured error handling.

## Development

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```
