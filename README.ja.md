<p align="center">
  <a href="README.md">English</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

**[nexus-router](https://github.com/mcp-tool-shop-org/nexus-router) 用 HTTP/REST ディスパッチアダプター** — アダプターパッケージの契約の参照実装です。

---

## インストール

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

## 設定

| パラメータ | 型 | デフォルト値 | 説明 |
| ----------- | ------ | --------- | ------------- |
| `base_url` | `str` | *必須* | HTTP エンドポイントのベース URL |
| `adapter_id` | `str` | `http:{host}` | このアダプターの一意な識別子 |
| `timeout_s` | `float` | `30.0` | リクエストのタイムアウト時間（秒） |
| `headers` | `dict` | `{}` | 追加するヘッダー |
| `capabilities` | `frozenset` | `{apply, external, timeout}` | 機能のオーバーライド |

---

## HTTP プロトコル

```
POST {base_url}/{tool}/{method}
Content-Type: application/json
Accept: application/json

{args}
```

期待されるレスポンス：ステータスコード 2xx で、JSON オブジェクトを含むボディ。

---

## エラーコード

| コード | 意味 |
| ------ | --------- |
| `TIMEOUT` | リクエストのタイムアウト |
| `CONNECTION_FAILED` | サーバーへの接続に失敗 |
| `HTTP_ERROR` | HTTP 4xx/5xx エラー |
| `INVALID_JSON` | レスポンスが有効な JSON 形式でない、またはオブジェクトではない |

---

## 機能

- `apply` — 処理を実行可能
- `timeout` — リクエストのタイムアウトを適用（httpx を使用）
- `external` — ネットワーク接続を実行

---

## 開発

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```

---

## ライセンス

MIT

---

[MCP Tool Shop](https://mcp-tool-shop.github.io/) によって作成されました。
