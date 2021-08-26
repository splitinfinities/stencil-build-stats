import { newSpecPage } from '@stencil/core/testing';
import { MyNestedComponent } from '../my-nested-component';

describe('my-nested-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyNestedComponent],
      html: `<my-nested-component></my-nested-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-nested-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-nested-component>
    `);
  });
});
