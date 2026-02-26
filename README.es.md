<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.md">English</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/nexus-router-adapter-http/main/assets/logo-nexus-router-adapter-http.png" alt="nexus-router-adapter-http" width="400">
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/nexus-router-adapter-http/actions/workflows/ci.yml"><img src="https://github.com/mcp-tool-shop-org/nexus-router-adapter-http/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://pypi.org/project/nexus-router-adapter-http/"><img src="https://img.shields.io/pypi/v/nexus-router-adapter-http" alt="PyPI"></a>
  <a href="https://github.com/mcp-tool-shop-org/nexus-router-adapter-http/blob/main/LICENSE"><img src="https://img.shields.io/github/license/mcp-tool-shop-org/nexus-router-adapter-http" alt="License"></a>
  <a href="https://mcp-tool-shop-org.github.io/nexus-router-adapter-http/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page"></a>
</p>

Adaptador HTTP/REST para [nexus-router](https://github.com/mcp-tool-shop-org/nexus-router) — implementación de referencia del contrato del paquete de adaptadores.

---

## Instalación

```bash
pip install nexus-router-adapter-http
```

---

## Uso

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

## Configuración

| Parámetro | Tipo | Valor predeterminado | Descripción |
| ----------- | ------ | --------- | ------------- |
| `base_url` | `str` | *obligatorio* | URL base para el punto de acceso HTTP. |
| `adapter_id` | `str` | `http:{host}` | Identificador estable para este adaptador. |
| `timeout_s` | `float` | `30.0` | Tiempo de espera de la solicitud en segundos. |
| `headers` | `dict` | `{}` | Encabezados adicionales a incluir. |
| `capabilities` | `frozenset` | `{apply, external, timeout}` | Sobreescribir capacidades. |

---

## Protocolo HTTP

```
POST {base_url}/{tool}/{method}
Content-Type: application/json
Accept: application/json

{args}
```

Respuesta esperada: estado 2xx con cuerpo de objeto JSON.

---

## Códigos de error

| Código | Significado |
| ------ | --------- |
| `TIMEOUT` | Tiempo de espera de la solicitud. |
| `CONNECTION_FAILED` | No se pudo conectar al servidor. |
| `HTTP_ERROR` | Respuesta HTTP 4xx/5xx. |
| `INVALID_JSON` | La respuesta no es un JSON válido o no es un objeto. |

---

## Capacidades

- `apply` — Puede ejecutar operaciones.
- `timeout` — Aplica tiempos de espera de solicitud (a través de httpx).
- `external` — Realiza llamadas de red.

---

## Desarrollo

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```

---

## Licencia

MIT

---

Creado por [MCP Tool Shop](https://mcp-tool-shop.github.io/)
