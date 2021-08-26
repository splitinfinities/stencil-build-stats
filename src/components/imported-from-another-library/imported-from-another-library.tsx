import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'imported-from-another-library',
  styleUrl: 'imported-from-another-library.css',
  shadow: true,
})
export class ImportedFromAnotherLibrary {
  render() {
    return (
      <Host>
        <midwest-device frame="imac"></midwest-device>
        <slot></slot>
      </Host>
    );
  }
}
