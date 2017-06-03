import { AllunoWebPage } from './app.po';

describe('alluno-web App', () => {
  let page: AllunoWebPage;

  beforeEach(() => {
    page = new AllunoWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
