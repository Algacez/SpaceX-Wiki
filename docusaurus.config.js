// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SpaceX Wiki',
  tagline: 'Occupy Mars!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://algacez.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/SpaceX-Wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Algacez', // Usually your GitHub org/user name.
  projectName: 'SpaceX-Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Algacez/SpaceX-Wiki/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Algacez/SpaceX-Wiki/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'SpaceX Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/spacex-svgrepo-com.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'rocketSidebar',
            position: 'left',
            label: 'Rockets',
          },
          {
            type: 'docSidebar',
            sidebarId: 'engineSidebar',
            position: 'left',
            label: 'Engines',
          },
          {
            type: 'docSidebar',
            sidebarId: 'projectSidebar',
            position: 'left',
            label: 'Projects',
          },
          {
            type: 'docSidebar',
            sidebarId: 'launchesSidebar',
            position: 'left',
            label: 'Launches',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/algacez/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Rockets',
            items: [
              {
                label: 'Falcon 9',
                to: '/docs/rockets/falcon-9/',
              },
              {
                label: 'Falcon Heavy',
                to: '/docs/rockets/falcon-heavy/',
              },
              {
                label: 'Starship',
                to: '/docs/rockets/starship/',
              },
            ],
          },
          {
            title: 'Engines',
            items: [
              {
                label: 'Raptor',
                to: '/docs/engines/raptor',
              },
              {
                label: 'Merlin',
                to: '/docs/engines/merlin',
              },
            ],
          },
          {
            title: 'Projects',
            items: [
              {
                label: 'Dragon',
                to: '/docs/projects/dragon',
              },
              {
                label: 'Starlink',
                href: '/docs/projects/starlink',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'SpaceX',
                href: 'https://www.spacex.com/',
              },
              {
                label: 'Starlink',
                href: 'https://www.starlink.com/',
              },
              {
                label: 'Find Starlink',
                href: 'https://findstarlink.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Algacez`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
