import { newSpecPage } from '@stencil/core/testing';
import { FirstCollectionComponent } from '../first-collection-component';

describe('first-collection-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FirstCollectionComponent],
      html: `<first-collection-component></first-collection-component>`,
    });
    expect(page.root).toEqualHtml(`
      <first-collection-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </first-collection-component>
    `);
  });
});
