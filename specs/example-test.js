
//const httpServer = require('http-server')
//const { percySnapshot } = require('@percy/webdriverio');

describe('example page', function() {
 

  it('should look nice', () =>{

     browser.url('./')
     browser.pause(2000);
    //await percySnapshot(browser, 'sample')
    //assert.equal(await browser.getTitle(), 'jQuery • TodoMVC')
  })
})
