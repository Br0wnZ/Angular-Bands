import { AngularBandsPage } from './app.po';

describe('angular-bands App', () => {
  let page: AngularBandsPage;

  beforeEach(() => {
    page = new AngularBandsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
