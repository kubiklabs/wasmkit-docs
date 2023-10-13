import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a27'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c12'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '54c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '913'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '886'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '237'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '6a7'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'cde'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '01e'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '42e'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'c8a'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '9a3'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '266'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '674'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '993'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '41a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '04e'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '6da'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '791'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f79'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '0d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/getting-started/installation',
        component: ComponentCreator('/getting-started/installation', '43c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/getting-started/overview',
        component: ComponentCreator('/getting-started/overview', '64d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/getting-started/quickstart',
        component: ComponentCreator('/getting-started/quickstart', 'a80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/guides/compiling-contracts',
        component: ComponentCreator('/guides/compiling-contracts', '4b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/guides/project',
        component: ComponentCreator('/guides/project', 'f42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/guides/testing',
        component: ComponentCreator('/guides/testing', '0a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/guides/using-localnet',
        component: ComponentCreator('/guides/using-localnet', 'cde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/guides/writing-scripts',
        component: ComponentCreator('/guides/writing-scripts', '3d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
