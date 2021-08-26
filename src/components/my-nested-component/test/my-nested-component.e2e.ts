import { newE2EPage } from '@stencil/core/testing';

describe('my-nested-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-nested-component></my-nested-component>');

    const element = await page.find('my-nested-component');
    expect(element).toHaveClass('hydrated');
  });
});
