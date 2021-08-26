import { newSpecPage } from '@stencil/core/testing';
import { MyNewerComponent } from '../my-newer-component';

describe('my-newer-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyNewerComponent],
      html: `<my-newer-component></my-newer-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-newer-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-newer-component>
    `);
  });
});
