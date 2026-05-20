# Advanced Percy + WebdriverIO example — STUB

**Status:** Phase 1 stub. `matrix.yml` is populated based on `@percy/webdriverio` API research. Test code in `specs/advanced.test.js` is **not yet written**.

See the basic example at the repo root. See [`matrix.yml`](./matrix.yml) for the planned matrix-row coverage.

## What this example will cover

Each test will exercise one row of the matrix, plus both framework-mode (`percySnapshot(name)`) and standalone-mode (`percySnapshot(browser, name)`) signatures. Note: WebdriverIO SDK does NOT expose `regions`, `createRegion`, or `discovery` — those are marked `N/A` in `matrix.yml`.

## Run locally (once tests are written)

```bash
cd advanced
npm install
export PERCY_TOKEN="<your project token>"      # do NOT commit
npm run test:advanced
```

## Coverage matrix

Source of truth: [`matrix.yml`](./matrix.yml). States: `Covered` / `N/A — <reason>` / `Planned` / `Deprecated`.

> Phase 1 stub: most rows are currently `Planned`. Basic example has one bare `percySnapshot(browser, name)` call.
