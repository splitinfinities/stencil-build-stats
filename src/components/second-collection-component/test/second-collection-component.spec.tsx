import { newSpecPage } from '@stencil/core/testing';
import { SecondCollectionComponent } from '../second-collection-component';

describe('second-collection-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SecondCollectionComponent],
      html: `<second-collection-component></second-collection-component>`,
    });
    expect(page.root).toEqualHtml(`
      <second-collection-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </second-collection-component>
    `);
  });
});
