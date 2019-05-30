const siteConfig = {
  title: "ComponentKit",
  tagline: "A declarative UI framework for iOS",
  url: "https://componentkit.org",
  baseUrl: "/",
  projectName: "componentkit",
  organizationName: "facebook",
  themeConfig: {
    headerLinks: [
      { url: "docs/getting-started", label: "Docs" },
    ],
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            }
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
    },
  },
  favicon: "img/favicon/favicon.ico",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        }
      }
    ]
  ]
};

module.exports = siteConfig;
