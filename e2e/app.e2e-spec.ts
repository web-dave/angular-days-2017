import { AngularDaysPage } from './app.po';

describe('angular-days App', () => {
  let page: AngularDaysPage;

  beforeEach(() => {
    page = new AngularDaysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
