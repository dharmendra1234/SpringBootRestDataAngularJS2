import { Angularjs2crudPage } from './app.po';

describe('angularjs2crud App', function() {
  let page: Angularjs2crudPage;

  beforeEach(() => {
    page = new Angularjs2crudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
