/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'introduction',
    {
      label: 'Getting started',
      type: 'category',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/quickstart',
        'getting-started/configuration',
        'getting-started/faq',
      ],
    },
    {
      label: 'Guides',
      type: 'category',
      collapsed: false,
      items: [
        'guides/project',
        'guides/compiling-contracts',
        'guides/writing-scripts',
        'guides/testing',
        'guides/using-localnet',
      ],
    },
    {
      label: 'Use cases',
      type: 'category',
      collapsed: false,
      items: [
        'use-cases/cw-plus',
        'use-cases/astroport',
        'use-cases/polytone',
      ],
    },
    {
      label: 'Library API',
      type: 'category',
      collapsed: false,
      items: [
        'api/account',
        'api/contract',
      ],
    },
  ],
};

module.exports = sidebars;
