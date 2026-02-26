import type { SiteConfig } from '@mcptoolshop/site-theme';

export const config: SiteConfig = {
  title: 'nexus-router-adapter-http',
  description: 'HTTP/REST dispatch adapter for nexus-router',
  logoBadge: 'NH',
  brandName: 'nexus-router-adapter-http',
  repoUrl: 'https://github.com/mcp-tool-shop-org/nexus-router-adapter-http',
  footerText: 'MIT Licensed — built by <a href="https://github.com/mcp-tool-shop-org" style="color:var(--color-muted);text-decoration:underline">mcp-tool-shop-org</a>',

  hero: {
    badge: 'Python / httpx',
    headline: 'nexus-router-adapter-http,',
    headlineAccent: 'HTTP dispatch for nexus-router.',
    description: 'Reference implementation of the nexus-router adapter contract. Route tool calls over HTTP/REST with timeouts, custom headers, and structured error handling.',
    primaryCta: { href: '#quick-start', label: 'Get started' },
    secondaryCta: { href: '#features', label: 'Learn more' },
    previews: [
      { label: 'Install', code: 'pip install nexus-router-adapter-http' },
      { label: 'Load', code: 'adapter = load_adapter("nexus_router_adapter_http:create_adapter", base_url="https://api.example.com/tools")' },
      { label: 'Call', code: 'result = adapter.call("my-tool", "my-method", {"arg": "value"})' },
    ],
  },

  sections: [
    {
      kind: 'features',
      id: 'features',
      title: 'Features',
      subtitle: 'Everything you need for HTTP-based tool dispatch.',
      features: [
        { title: 'Adapter Contract', desc: 'Reference implementation of the nexus-router adapter package contract — plug into any router.' },
        { title: 'httpx-Powered', desc: 'Built on httpx for robust HTTP with configurable timeouts and connection handling.' },
        { title: 'Structured Errors', desc: 'Typed error codes — TIMEOUT, CONNECTION_FAILED, HTTP_ERROR, INVALID_JSON — no guessing.' },
        { title: 'Custom Headers', desc: 'Pass authentication tokens, API keys, or any headers to downstream services.' },
        { title: 'Capability Model', desc: 'Declares apply, timeout, and external capabilities for router-level introspection.' },
        { title: 'Zero Config', desc: 'Only base_url is required. Sensible defaults for timeout, adapter ID, and capabilities.' },
      ],
    },
    {
      kind: 'code-cards',
      id: 'quick-start',
      title: 'Quick Start',
      cards: [
        {
          title: 'Install and load',
          code: 'pip install nexus-router-adapter-http\n\nfrom nexus_router.plugins import load_adapter\n\nadapter = load_adapter(\n    "nexus_router_adapter_http:create_adapter",\n    base_url="https://api.example.com/tools",\n    timeout_s=30,\n)',
        },
        {
          title: 'Call a tool',
          code: '# Dispatches POST {base_url}/{tool}/{method}\nresult = adapter.call("my-tool", "my-method", {"arg": "value"})\n\n# With custom headers\nadapter = load_adapter(\n    "nexus_router_adapter_http:create_adapter",\n    base_url="https://api.example.com/tools",\n    headers={"Authorization": "Bearer token"},\n)',
        },
      ],
    },
    {
      kind: 'data-table',
      id: 'configuration',
      title: 'Configuration',
      subtitle: 'All parameters for create_adapter.',
      columns: ['Parameter', 'Type', 'Default', 'Description'],
      rows: [
        ['base_url', 'str', 'required', 'Base URL for the HTTP endpoint'],
        ['adapter_id', 'str', 'http:{host}', 'Stable identifier for this adapter'],
        ['timeout_s', 'float', '30.0', 'Request timeout in seconds'],
        ['headers', 'dict', '{}', 'Additional headers to include'],
        ['capabilities', 'frozenset', '{apply, external, timeout}', 'Override capabilities'],
      ],
    },
    {
      kind: 'data-table',
      id: 'error-codes',
      title: 'Error Codes',
      subtitle: 'Structured error handling for every failure mode.',
      columns: ['Code', 'Meaning'],
      rows: [
        ['TIMEOUT', 'Request timed out'],
        ['CONNECTION_FAILED', 'Could not connect to server'],
        ['HTTP_ERROR', 'HTTP 4xx/5xx response'],
        ['INVALID_JSON', 'Response was not valid JSON or not an object'],
      ],
    },
    {
      kind: 'data-table',
      id: 'capabilities',
      title: 'Capabilities',
      subtitle: 'Declared capabilities for router-level introspection.',
      columns: ['Capability', 'Description'],
      rows: [
        ['apply', 'Can execute operations'],
        ['timeout', 'Enforces request timeouts (via httpx)'],
        ['external', 'Makes network calls'],
      ],
    },
  ],
};
