# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.0.x   | Yes       |

## Reporting a Vulnerability

Email: **64996768+mcp-tool-shop@users.noreply.github.com**

Include:
- Description of the vulnerability
- Steps to reproduce
- Version affected
- Potential impact

### Response timeline

| Action | Target |
|--------|--------|
| Acknowledge report | 48 hours |
| Assess severity | 7 days |
| Release fix | 30 days |

## Scope

nexus-router-adapter-http is a **Python library** providing HTTP dispatch for nexus-router.

- **Data touched:** HTTP request/response payloads for tool dispatch. nexus-router event metadata
- **Data NOT touched:** No telemetry. No analytics. No credential storage. No persistent state
- **Network:** HTTP/HTTPS outbound requests via httpx for tool dispatch
- **Permissions:** Read: router configuration. Write: none (stateless adapter)
- **No telemetry** is collected or sent
