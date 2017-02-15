'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /book when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/book");
  });


  describe('book', function() {

    beforeEach(function() {
      browser.get('#/book');
    });


    it('should render book when user navigates to /book', function() {
      // TODO make this actually test book existence
      expect(element.all(by.css('p')).first().getText()).
        toMatch(/Jessamyn Smith/);
    });

  });
});
