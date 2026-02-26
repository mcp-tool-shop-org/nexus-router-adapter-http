<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.md">English</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

Adattatore HTTP/REST per [nexus-router](https://github.com/mcp-tool-shop-org/nexus-router) — implementazione di riferimento del contratto del pacchetto adattatore.

---

## Installazione

```bash
pip install nexus-router-adapter-http
```

---

## Utilizzo

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

## Configurazione

| Parametro | Tipo | Valore predefinito | Descrizione |
| ----------- | ------ | --------- | ------------- |
| `base_url` | `str` | *obbligatorio* | URL di base per il punto di accesso HTTP |
| `adapter_id` | `str` | `http:{host}` | Identificativo univoco per questo adattatore |
| `timeout_s` | `float` | `30.0` | Timeout della richiesta in secondi |
| `headers` | `dict` | `{}` | Intestazioni aggiuntive da includere |
| `capabilities` | `frozenset` | `{apply, external, timeout}` | Sovrascrittura delle funzionalità |

---

## Protocollo HTTP

```
POST {base_url}/{tool}/{method}
Content-Type: application/json
Accept: application/json

{args}
```

Risposta prevista: stato 2xx con corpo JSON.

---

## Codici di errore

| Codice | Significato |
| ------ | --------- |
| `TIMEOUT` | Timeout della richiesta |
| `CONNECTION_FAILED` | Impossibile connettersi al server |
| `HTTP_ERROR` | Risposta HTTP 4xx/5xx |
| `INVALID_JSON` | La risposta non è un JSON valido o non è un oggetto |

---

## Funzionalità

- `apply` — Può eseguire operazioni
- `timeout` — Imposta i timeout delle richieste (tramite httpx)
- `external` — Effettua chiamate di rete

---

## Sviluppo

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```

---

## Licenza

MIT

---

Creato da [MCP Tool Shop](https://mcp-tool-shop.github.io/)
