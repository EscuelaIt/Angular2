import { HolaMundoPage } from './app.po';

describe('hola-mundo App', function() {
  let page: HolaMundoPage;

  beforeEach(() => {
    page = new HolaMundoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hola-mundo works!');
  });
});
