var assert = require('assert');

describe('example page', function() {
    it('should look nice', function () {
      browser.url('http://localhost:4567/')
      browser.percySnapshot('sample');
      assert.equal(browser.getTitle(), 'jQuery • TodoMVC');
    });
});
