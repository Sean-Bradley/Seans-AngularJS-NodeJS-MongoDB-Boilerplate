'use strict';

describe('Home', function () {

  beforeEach(function () {
    browser.get('http://127.0.0.1:8080');
  });

  it('should render home page when url contains no path', function () {
    expect(element.all(by.css('[ng-view] h1'))
      .first()
      .getText()).
      toMatch(/seans angularjs nodejs mongodb boilerplate/);
  });
});

describe('Cats', function () {

  beforeEach(function () {
    browser.get('http://127.0.0.1:8080/#!/cats');
  });

  it('should render cats when user navigates to /cats', function () {
    expect(element.all(by.css('[ng-view] h1'))
      .first()
      .getText()).
      toMatch(/Cats/);
    //browser.driver.sleep(5000);
  });

});

describe('Dogs', function () {

  beforeEach(function () {
    browser.get('http://127.0.0.1:8080/#!/dogs');
  });

  it('should render Dogs when user navigates to #!/Dogs', function () {
    expect(element.all(by.css('[ng-view] h1'))
      .first()
      .getText()).
      toMatch(/Dogs/);
  });
});

describe('Birds', function () {

  beforeEach(function () {
    browser.get('http://127.0.0.1:8080/#!/birds');
  });

  it('should render Birds when user navigates to #!/Birds', function () {
    expect(element.all(by.css('[ng-view] h1'))
      .first()
      .getText()).
      toMatch(/Birds/);
  });

});

