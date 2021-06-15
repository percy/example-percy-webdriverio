const Home = require('../page-objects/home.page').default; //proveri path za ovo 


before(() => {
    homepage = new Home({});
  });
  describe('Homepage', () => {
    it('Homepage has header ', () => {
      homepage.open();
      //homepage.header.waitForVisible();
      //header.waitForDisplayed();
      expect(homepage.header.getText()).to.equal("We design and ship digital products that transform companies.");
    }
    )
}
);

