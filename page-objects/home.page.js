const Page = require('./page').default;


class Home extends Page{
    constructor(){
        super('./');

    }
    get header() { return $('["data-test-id="header-title-text"'); }
   
};




exports.default = Home;




