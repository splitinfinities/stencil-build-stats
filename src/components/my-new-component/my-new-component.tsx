import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-new-component',
  styleUrl: 'my-new-component.css',
})
export class MyNewComponent {
  render() {
    return (
      <Host>
        <my-nested-component></my-nested-component>
        <slot></slot>
      </Host>
    );
  }
}
