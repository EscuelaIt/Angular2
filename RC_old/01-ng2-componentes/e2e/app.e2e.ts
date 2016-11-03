import { CashFlowPage } from './app.po';

describe('cash-flow App', function() {
  let page: CashFlowPage;

  beforeEach(() => {
    page = new CashFlowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cash-flow works!');
  });
});
