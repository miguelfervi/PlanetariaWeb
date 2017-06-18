import { PlanetariaWebPage } from './app.po';

describe('planetaria-web App', function() {
  let page: PlanetariaWebPage;

  beforeEach(() => {
    page = new PlanetariaWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
