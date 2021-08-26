import { newE2EPage } from '@stencil/core/testing';

describe('first-collection-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<first-collection-component></first-collection-component>');

    const element = await page.find('first-collection-component');
    expect(element).toHaveClass('hydrated');
  });
});
