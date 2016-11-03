export class CashFlowPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cash-flow-app h1')).getText();
  }
}
