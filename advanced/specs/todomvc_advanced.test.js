// PER-8195 Phase 1 — webdriverio advanced example.
// Each test exercises one row of the Advanced Feature Matrix. See ../matrix.yml
// for the canonical mapping of test name -> matrix row.

import { browser } from '@wdio/globals'
import percySnapshot from '@percy/webdriverio'
import httpServer from 'http-server'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PORT = process.env.PORT_NUMBER || 8005
const TEST_URL = `http://localhost:${PORT}`

describe('TodoMVC Advanced', function () {
  this.timeout(60000)
  let server

  before(() => {
    server = httpServer.createServer({ root: `${__dirname}/../..` })
    server.listen(PORT)
  })

  after(() => server && server.close())

  beforeEach(async () => {
    await browser.url(TEST_URL)
  })

  it('exercises widths', async function () {
    await percySnapshot(browser, this.test.fullTitle(), {
      widths: [375, 768, 1280, 1920],
    })
  })

  it('exercises percyCSS', async function () {
    await percySnapshot(browser, this.test.fullTitle(), {
      percyCSS: '.todo-list li { background: #fffde7 !important; }',
    })
  })

  it('exercises minHeight', async function () {
    await percySnapshot(browser, this.test.fullTitle(), { minHeight: 2000 })
  })

  it('exercises enableJavaScript', async function () {
    await percySnapshot(browser, this.test.fullTitle(), {
      enableJavaScript: true,
    })
  })

  it('exercises scope', async function () {
    await percySnapshot(browser, this.test.fullTitle(), {
      scope: '.todoapp',
    })
  })

  it('exercises domTransformation', async function () {
    await percySnapshot(browser, this.test.fullTitle(), {
      domTransformation: `(documentClone) => {
        const banner = documentClone.createElement('div');
        banner.textContent = 'Snapshot via domTransformation';
        banner.style.cssText = 'background:#1976d2;color:#fff;padding:8px;';
        documentClone.body.prepend(banner);
      }`,
    })
  })

  it('exercises responsiveSnapshotCapture', async function () {
    await percySnapshot(browser, this.test.fullTitle(), {
      responsiveSnapshotCapture: true,
      widths: [375, 1280],
    })
  })

  it('exercises labels', async function () {
    await percySnapshot(browser, this.test.fullTitle(), {
      labels: 'smoke,sdk-webdriverio',
    })
  })

  it('exercises testCase', async function () {
    await percySnapshot(browser, this.test.fullTitle(), {
      testCase: 'todomvc-advanced-suite',
    })
  })

  it('exercises devicePixelRatio', async function () {
    await percySnapshot(browser, this.test.fullTitle(), { devicePixelRatio: 2 })
  })

  it('exercises browsers override', async function () {
    await percySnapshot(browser, this.test.fullTitle(), {
      browsers: ['chrome', 'firefox'],
    })
  })

  it('exercises readiness preset', async function () {
    await percySnapshot(browser, this.test.fullTitle(), {
      readiness: { preset: 'strict', timeoutMs: 5000 },
    })
  })
})
