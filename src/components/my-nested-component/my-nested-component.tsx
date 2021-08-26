import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-nested-component',
  styleUrl: 'my-nested-component.css',
  shadow: true,
})
export class MyNestedComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
