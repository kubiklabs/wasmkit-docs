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
      items: [
        'getting-started/installation',
        'getting-started/overview',
        'getting-started/quickstart',
      ],
    },
    {
      label: 'Guides',
      type: 'category',
      items: [
        'guides/compiling-contracts',
        'guides/project',
        'guides/writing-scripts',
        'guides/testing',
        'guides/using-localnet',
      ],
    },
  ],
};

module.exports = sidebars;
