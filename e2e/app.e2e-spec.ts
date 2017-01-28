import { EssTraining2Page } from './app.po';

describe('ess-training2 App', function() {
  let page: EssTraining2Page;

  beforeEach(() => {
    page = new EssTraining2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
