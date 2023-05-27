import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f0e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '232'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '08b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '070'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '00f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '5f3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '37a'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'cb7'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'e61'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '85a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '96c'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '356'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '901'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '984'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '2bf'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '26d'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'c64'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd4a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '83f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '74c'),
    routes: [
      {
        path: '/docs/Getting-started/installation',
        component: ComponentCreator('/docs/Getting-started/installation', '091'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Getting-started/overview',
        component: ComponentCreator('/docs/Getting-started/overview', 'e6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Getting-started/quickstart',
        component: ComponentCreator('/docs/Getting-started/quickstart', '5ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/compiling-contracts',
        component: ComponentCreator('/docs/guides/compiling-contracts', '06c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/project',
        component: ComponentCreator('/docs/guides/project', 'abd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/testing',
        component: ComponentCreator('/docs/guides/testing', 'dbd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/using-localenet',
        component: ComponentCreator('/docs/guides/using-localenet', '392'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/writing-scripts',
        component: ComponentCreator('/docs/guides/writing-scripts', '0c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '238'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
