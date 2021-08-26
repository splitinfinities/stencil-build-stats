import { newE2EPage } from '@stencil/core/testing';

describe('imported-from-another-library', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<imported-from-another-library></imported-from-another-library>');

    const element = await page.find('imported-from-another-library');
    expect(element).toHaveClass('hydrated');
  });
});
