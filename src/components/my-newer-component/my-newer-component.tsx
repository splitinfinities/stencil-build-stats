import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-newer-component',
  styleUrl: 'my-newer-component.css',
  scoped: true,
})
export class MyNewerComponent {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
