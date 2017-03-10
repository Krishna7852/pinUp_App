import { PinUpAppPage } from './app.po';

describe('pin-up-app App', function() {
  let page: PinUpAppPage;

  beforeEach(() => {
    page = new PinUpAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
