<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.md">English</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

**HTTP/REST डिस्पैच एडाप्टर [nexus-router](https://github.com/mcp-tool-shop-org/nexus-router)** — एडाप्टर पैकेज अनुबंध का एक संदर्भ कार्यान्वयन।

---

## स्थापना

```bash
pip install nexus-router-adapter-http
```

---

## उपयोग

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

## कॉन्फ़िगरेशन

| पैरामीटर | प्रकार | डिफ़ॉल्ट | विवरण |
| ----------- | ------ | --------- | ------------- |
| `base_url` | `str` | *आवश्यक* | HTTP एंडपॉइंट के लिए बेस यूआरएल |
| `adapter_id` | `str` | `http:{host}` | इस एडाप्टर के लिए स्थिर पहचानकर्ता |
| `timeout_s` | `float` | `30.0` | सेकंड में अनुरोध समय सीमा |
| `headers` | `dict` | `{}` | शामिल करने के लिए अतिरिक्त हेडर |
| `capabilities` | `frozenset` | `{apply, external, timeout}` | क्षमताओं को ओवरराइड करें |

---

## HTTP प्रोटोकॉल

```
POST {base_url}/{tool}/{method}
Content-Type: application/json
Accept: application/json

{args}
```

अपेक्षित प्रतिक्रिया: JSON ऑब्जेक्ट बॉडी के साथ स्टेटस 2xx।

---

## त्रुटि कोड

| कोड | अर्थ |
| ------ | --------- |
| `TIMEOUT` | अनुरोध समय सीमा समाप्त |
| `CONNECTION_FAILED` | सर्वर से कनेक्ट नहीं हो सका |
| `HTTP_ERROR` | HTTP 4xx/5xx प्रतिक्रिया |
| `INVALID_JSON` | प्रतिक्रिया मान्य JSON नहीं थी या ऑब्जेक्ट नहीं थी |

---

## क्षमताएं

- `apply` — संचालन निष्पादित कर सकता है
- `timeout` — अनुरोध समय सीमा लागू करता है (httpx के माध्यम से)
- `external` — नेटवर्क कॉल करता है

---

## विकास

```bash
pip install -e ".[dev]"
pytest -v
ruff check .
mypy src/ --ignore-missing-imports
```

---

## लाइसेंस

MIT

---

[MCP Tool Shop](https://mcp-tool-shop.github.io/) द्वारा निर्मित।
