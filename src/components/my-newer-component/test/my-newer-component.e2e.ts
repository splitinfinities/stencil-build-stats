import { newE2EPage } from '@stencil/core/testing';

describe('my-newer-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-newer-component></my-newer-component>');

    const element = await page.find('my-newer-component');
    expect(element).toHaveClass('hydrated');
  });
});
