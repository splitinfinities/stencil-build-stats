import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'first-collection-component',
  styleUrl: 'first-collection-component.css',
  shadow: true,
})
export class FirstCollectionComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
