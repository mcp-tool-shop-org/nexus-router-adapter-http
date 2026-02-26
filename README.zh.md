<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.md">English</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/nexus-router-adapter-http/readme.png" alt="nexus-router-adapter-http" width="400">
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/nexus-router-adapter-http/actions/workflows/ci.yml"><img src="https://github.com/mcp-tool-shop-org/nexus-router-adapter-http/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://pypi.org/project/nexus-router-adapter-http/"><img src="https://img.shields.io/pypi/v/nexus-router-adapter-http" alt="PyPI"></a>
  <a href="https://github.com/mcp-tool-shop-org/nexus-router-adapter-http/blob/main/LICENSE"><img src="https://img.shields.io/github/license/mcp-tool-shop-org/nexus-router-adapter-http" alt="License"></a>
  <a href="https://mcp-tool-shop-org.github.io/nexus-router-adapter-http/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page"></a>
</p>

**HTTP/REST 适配器，适用于 [nexus-router](https://github.com/mcp-tool-shop-org/nexus-router)** — 适配器包的参考实现。

---

## 安装

```bash
pip install nexus-router-adapter-http
```

---

## 使用方法

```python
from nexus_router.plugins import load_adapter

adapter = load_adapter(
    "nexus_router_adapter_http:create_adapter",
    base_url="https://api.example.com/tools",
    timeout_s=30,
)

result = adapter.call("my-tool", "my-method", {"arg": "value"})
```

---

## 配置

| 参数 | 类型 | 默认值 | 描述 |
| ----------- | ------ | --------- | ------------- |
| `base_url` | `str` | *必需* | HTTP 接口的基准 URL |
| `adapter_id` | `str` | `http:{host}` | 此适配器的稳定标识符 |
| `timeout_s` | `float` | `30.0` | 请求超时时间（秒） |
| `headers` | `dict` | `{}` | 要包含的附加头部 |
| `capabilities` | `frozenset` | `{apply, external, timeout}` | 覆盖功能 |

---

## HTTP 协议

```
POST {base_url}/{tool}/{method}
Content-Type: application/json
Accept: application/json

{args}
```

预期响应：状态码为 2xx，且包含 JSON 对象。

---

## 错误代码

| 代码 | 含义 |
| ------ | --------- |
| `TIMEOUT` | 请求超时 |
| `CONNECTION_FAILED` | 无法连接到服务器 |
| `HTTP_ERROR` | HTTP 4xx/5xx 响应 |
| `INVALID_JSON` | 响应不是有效的 JSON 或不是对象 |

---

## 功能

- `apply` — 可以执行操作
- `timeout` — 强制执行请求超时（通过 httpx）
- `external` — 可以进行网络调用

---

## 开发

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```

---

## 许可证

MIT

---

由 [MCP Tool Shop](https://mcp-tool-shop.github.io/) 构建。
