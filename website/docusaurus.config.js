const siteConfig = {
  title: 'ComponentKit',
  tagline: 'A declarative UI framework for iOS',
  url: "https://fabiomassimo.github.io",
  baseUrl: "/componentkit/",
  projectName: "componentkit",
  organizationName: "fabiomassimo",
  themeConfig: {
    navbar: {
      title: 'ComponentKit',
      logo: {
        alt: 'ComponentKit Logo',
        src: 'img/ck_logo.png',
      },
      links: [
        { to: 'docs/getting-started', label: 'Docs', position: 'right' },
        {
          href: 'https://github.com/facebook/componentkit',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
    },
  },
  favicon: 'img/favicon/favicon.ico',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = siteConfig;
