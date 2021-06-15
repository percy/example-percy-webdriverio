const Page = require('../page-objects/page').default;
before(() => {
  homePage = new Page({});
});

describe('example page', function() {
 

  it('should look nice', () =>{

     homePage.open();
     //browser.pause(2000);
  })
})
// u it gore iznad dodaj provera da li je taj header jednak tekstu
