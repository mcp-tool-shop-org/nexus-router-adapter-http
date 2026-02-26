<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.md">English</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

Adaptateur HTTP/REST pour [nexus-router](https://github.com/mcp-tool-shop-org/nexus-router) — implémentation de référence du contrat du paquet d'adaptateur.

---

## Installation

```bash
pip install nexus-router-adapter-http
```

---

## Utilisation

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

## Configuration

| Paramètre | Type | Valeur par défaut | Description |
| ----------- | ------ | --------- | ------------- |
| `base_url` | `str` | *obligatoire* | URL de base du point de terminaison HTTP |
| `adapter_id` | `str` | `http:{host}` | Identifiant stable pour cet adaptateur |
| `timeout_s` | `float` | `30.0` | Délai d'attente de la requête en secondes |
| `headers` | `dict` | `{}` | En-têtes supplémentaires à inclure |
| `capabilities` | `frozenset` | `{apply, external, timeout}` | Surcharge des capacités |

---

## Protocole HTTP

```
POST {base_url}/{tool}/{method}
Content-Type: application/json
Accept: application/json

{args}
```

Réponse attendue : code 2xx avec un corps JSON.

---

## Codes d'erreur

| Code | Signification |
| ------ | --------- |
| `TIMEOUT` | Délai de la requête dépassé |
| `CONNECTION_FAILED` | Impossible de se connecter au serveur |
| `HTTP_ERROR` | Réponse HTTP 4xx/5xx |
| `INVALID_JSON` | La réponse n'est pas un JSON valide ou n'est pas un objet |

---

## Capacités

- `apply` — Peut exécuter des opérations
- `timeout` — Applique les délais d'attente des requêtes (via httpx)
- `external` — Effectue des appels réseau

---

## Développement

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```

---

## Licence

MIT

---

Créé par [MCP Tool Shop](https://mcp-tool-shop.github.io/)
