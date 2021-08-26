import { newE2EPage } from '@stencil/core/testing';

describe('second-collection-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<second-collection-component></second-collection-component>');

    const element = await page.find('second-collection-component');
    expect(element).toHaveClass('hydrated');
  });
});
