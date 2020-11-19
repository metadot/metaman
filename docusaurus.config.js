module.exports = {
  title: 'Welcome to the Metaman',
  tagline: 'The operating manual of Metadot Corporation.',
  url: 'https://www.metadot.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Metadot', // Usually your GitHub org/user name.
  projectName: 'metaman', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Metaman',
      logo: {
        alt: 'Metaman Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'The Meta manual',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/metadot/metaman',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'The Manual',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://github.com/metadot/metaman',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/metadot/metaman',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Metadot Corporation.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/metadot/metaman/edit/master/',
        },
        // blog: {
          // showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
            // 'https://github.com/metadot/metaman/edit/master/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
