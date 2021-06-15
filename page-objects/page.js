class Page {
    constructor(path) {
      this.path = path;
    }
  open(link) {
      if (link) {
        browser.url(this.path + link);
      } else {
        browser.url(this.path);
      }
    }
  }
  exports.default = Page;
  //dodaj selektor za page header na home - u
