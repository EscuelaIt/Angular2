import { HolaAngular2Page } from './app.po';

describe('hola-angular-2 App', function() {
  let page: HolaAngular2Page;

  beforeEach(() => {
    page = new HolaAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
