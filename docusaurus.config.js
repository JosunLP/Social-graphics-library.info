// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Social-graphics-library',
  tagline: 'An easy to use JS tool to create Social Media Banners',
  url: 'https://social-graphics-library.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'JosunLP', // Usually your GitHub org/user name.
  projectName: 'Social-graphics-library', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  clientModules: [
    require.resolve('./static/example.js'),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Social-graphics-library',
        logo: {
          alt: 'Social-graphics-library Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs', label: 'Docs', position: 'left' },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Social-graphics-library/Template-Generator',
            label: 'Template Generator',
            position: 'left',
          },
          {
            href: 'https://github.com/Social-graphics-library/Social-graphics-library',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [{
              label: 'Basic generation',
              to: 'docs/',
            },
            {
              label: 'Creating new style clases',
              to: 'docs/new_style_classes/',
            },
            {
              label: 'Multi calls',
              to: 'docs/multi_calls/',
            },
            {
              label: 'Inject Template (Experimental Feature)',
              to: 'docs/inject_template/',
            },
            ],
          },
          {
            title: 'Community',
            items: [{
              label: 'Discord',
              href: 'https://discord.gg/fraspbc',
            },
            {
              label: 'FearNixx Gaming',
              href: 'https://fearnixx.de/',
            },
            ],
          },
          {
            title: 'More',
            items: [{
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/josunlp/Social-graphics-library/',
            },
            {
              label: 'NPM',
              href: 'https://www.npmjs.com/package/social-graphics-library/',
            },
            {
              label: 'Impressum',
              href: 'https://josunlp.de/impressum/',
            }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Social-graphics-library, build with ❤ and with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
