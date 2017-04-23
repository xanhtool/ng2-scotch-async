import { ScotchNg2AsyncPage } from './app.po';

describe('scotch-ng2-async App', () => {
  let page: ScotchNg2AsyncPage;

  beforeEach(() => {
    page = new ScotchNg2AsyncPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
