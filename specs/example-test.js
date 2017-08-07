var assert = require('assert');

after(function() {
  browser.percyFinalizeBuild();
});

describe('example page', function() {
    it('should look nice', function () {
      browser.url('http://localhost:4567/')
      browser.percyUseAssetLoader('filesystem', {buildDir: 'site/assets', mountPath:'/assets' });
      browser.percySnapshot('sample');
      assert.equal(browser.getTitle(), 'Hello webdriver with percy');
    });
});
