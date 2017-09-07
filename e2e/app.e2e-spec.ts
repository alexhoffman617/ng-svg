import { BmdPage } from './app.po';

describe('bmd App', () => {
  let page: BmdPage;

  beforeEach(() => {
    page = new BmdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
