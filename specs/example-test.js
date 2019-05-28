const assert = require('assert')
const httpServer = require('http-server')
const { percySnapshot } = require('@percy/webdriverio');

describe('example page', function() {
  const PORT = 8000
  const TEST_URL = `http://localhost:${PORT}`

  let server = null

  before(function() {
    // Start local server to host app under test.
    server = httpServer.createServer({ root: `${__dirname}/../site` })
    server.listen(PORT)
  })

  after(function() {
    // Shut down the HTTP server.
    server.close()
  })

  it('should look nice', async function() {
    await browser.url(TEST_URL)
    await percySnapshot(browser, 'sample')
    assert.equal(await browser.getTitle(), 'jQuery • TodoMVC')
  })
})
