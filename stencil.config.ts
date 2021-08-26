import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stats-flag-library',
  bundles: [{ components: ['first-collection-component', 'second-collection-component'] }],
  outputTargets: [
    { type: 'stats' },
    { type: 'stats', file: './a-specific-name.json' },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
