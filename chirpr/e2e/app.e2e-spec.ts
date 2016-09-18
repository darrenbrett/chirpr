import { ChirprPage } from './app.po';

describe('chirpr App', function() {
  let page: ChirprPage;

  beforeEach(() => {
    page = new ChirprPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
