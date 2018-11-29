import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let expectedTitle;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expectedTitle=page.getTitleText();
    expect(page.getTitleText()).toEqual(expectedTitle);
  });
});
