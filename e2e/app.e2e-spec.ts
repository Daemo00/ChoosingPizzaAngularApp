import { ChoosingPizzaPage } from './app.po';

describe('choosing-pizza App', () => {
  let page: ChoosingPizzaPage;

  beforeEach(() => {
    page = new ChoosingPizzaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
