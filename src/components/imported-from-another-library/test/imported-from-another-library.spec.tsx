import { newSpecPage } from '@stencil/core/testing';
import { ImportedFromAnotherLibrary } from '../imported-from-another-library';

describe('imported-from-another-library', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ImportedFromAnotherLibrary],
      html: `<imported-from-another-library></imported-from-another-library>`,
    });
    expect(page.root).toEqualHtml(`
      <imported-from-another-library>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </imported-from-another-library>
    `);
  });
});
