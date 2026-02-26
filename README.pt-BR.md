<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.md">English</a>
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

Adaptador HTTP/REST para [nexus-router](https://github.com/mcp-tool-shop-org/nexus-router) — implementação de referência do contrato do pacote de adaptadores.

---

## Instalação

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

## Configuração

| Parâmetro | Tipo | Padrão | Descrição |
| ----------- | ------ | --------- | ------------- |
| `base_url` | `str` | *obrigatório* | URL base para o endpoint HTTP. |
| `adapter_id` | `str` | `http:{host}` | Identificador estável para este adaptador. |
| `timeout_s` | `float` | `30.0` | Tempo limite de requisição em segundos. |
| `headers` | `dict` | `{}` | Cabeçalhos adicionais a serem incluídos. |
| `capabilities` | `frozenset` | `{apply, external, timeout}` | Substitui as capacidades. |

---

## Protocolo HTTP

```
POST {base_url}/{tool}/{method}
Content-Type: application/json
Accept: application/json

{args}
```

Resposta esperada: status 2xx com corpo em formato JSON.

---

## Códigos de Erro

| Código | Significado |
| ------ | --------- |
| `TIMEOUT` | Tempo limite da requisição excedido. |
| `CONNECTION_FAILED` | Não foi possível conectar ao servidor. |
| `HTTP_ERROR` | Resposta HTTP 4xx/5xx. |
| `INVALID_JSON` | A resposta não é um JSON válido ou não é um objeto. |

---

## Capacidades

- `apply` — Pode executar operações.
- `timeout` — Aplica tempos limite de requisição (via httpx).
- `external` — Realiza chamadas de rede.

---

## Desenvolvimento

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```

---

## Licença

MIT

---

Criado por [MCP Tool Shop](https://mcp-tool-shop.github.io/)
