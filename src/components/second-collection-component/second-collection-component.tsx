import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'second-collection-component',
  styleUrl: 'second-collection-component.css',
  shadow: true,
})
export class SecondCollectionComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
