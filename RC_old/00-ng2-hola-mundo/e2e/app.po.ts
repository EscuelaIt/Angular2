export class HolaMundoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hola-mundo-app h1')).getText();
  }
}
