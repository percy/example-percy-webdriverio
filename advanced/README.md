# Advanced Percy + WebdriverIO example

This directory exercises the full applicable Percy SDK feature surface for `@percy/webdriverio`. See the basic example at the repo root for the minimum integration.

## What this example covers

A single mocha-style spec (`specs/todomvc_advanced.test.js`) run via `wdio` where each `it(...)` block exercises one row of the [Percy SDK Advanced Feature Matrix](../../../docs/advanced-example-feature-matrix.md). Global SDK config — readiness preset, default widths, discovery — lives in `.percy.yml`.

Note: WebdriverIO SDK does **not** expose `regions`, `createRegion`, or `discovery` per-snapshot — those are marked `N/A` in `matrix.yml`.

## Run locally

```bash
cd advanced
npm install
export PERCY_TOKEN="<your project token>"      # do NOT commit this
npm run test:advanced
```

To run without a real token (CI assertion mode):

```bash
npm run test:advanced:ci   # uses --testing + PERCY_TOKEN=fake_token
```

The CI variant asserts every matrix row appears in the captured POST bodies at the local `/test/requests` endpoint. No real Percy build is created.

## Coverage matrix

States: `Covered` / `N/A — <reason>` / `Planned` / `Deprecated`. Source of truth is [`matrix.yml`](./matrix.yml).

| Feature | State | Test |
|---|---|---|
| widths | Covered | `exercises widths` |
| percyCSS | Covered | `exercises percyCSS` |
| minHeight | Covered | `exercises minHeight` |
| enableJavaScript | Covered | `exercises enableJavaScript` |
| scope | Covered | `exercises scope` |
| domTransformation | Covered | `exercises domTransformation` |
| responsiveSnapshotCapture | Covered | `exercises responsiveSnapshotCapture` |
| labels | Covered | `exercises labels` |
| testCase | Covered | `exercises testCase` |
| devicePixelRatio | Covered | `exercises devicePixelRatio` |
| browsers override | Covered | `exercises browsers override` |
| readiness preset | Covered | `exercises readiness preset` |
| `.percy.yml` global config | Covered | `.percy.yml` consumed at build start |
| environment info reporting | Covered | automatic via `@percy/webdriverio` client info |
| PERCY_SERVER_ADDRESS via env | Covered | CI advanced job picks up `PERCY_SERVER_ADDRESS` |
| `cliEnableJavascript` alias | Planned | — |
| `scopeOptions.scroll` | Planned | — |
| `disableShadowDOM` | Planned | — |
| `enableLayout` | Planned | — |
| `reshuffleInvalidTags` | Planned | — |
| `pseudoClassEnabledElements` | Planned | — |
| sync mode | Planned | — |
| framework vs standalone signature | Planned | — |
| `regions` / `createRegion` | N/A | Not exported by `@percy/webdriverio` |
| `discovery` per-snapshot | N/A | discovery is CLI-layer only |
