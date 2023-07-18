const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Hans-Revolution',
  tagline: '技術筆記、生活記事',
  url: 'https://oneal32xx.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/HansRev.ico',
  organizationName: 'oneal32xx', // Usually your GitHub org/user name.
  projectName: 'HansRenolution', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://oneal32xx.github.io/HansRenolution/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://oneal32xx.github.io/HansRenolution/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-72JQNET9K0',
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "support_us",
        content:
          '⭐️ 如果我的筆記內容有幫助到您，可以到我的 <a target="_blank" rel="noopener noreferrer" href="https://github.com/oneal32xx">Github</a> 給顆星星哦！ ⭐️',
        // backgroundColor: "",

        //textColor: "#091E42",
        isCloseable: false,
      },
      navbar: {
        title: 'Hans-Renolution',
        logo: {
          alt: 'Hans-Renolution',
          src: 'img/HansRevLogo.svg',
          srcDark: 'img/HansRevLogo-dark.svg',
        },

        items: [
          //{to: '/HansRenolution/docs/about/about', label: '關於本站', position: 'left'},
          {
            type: "doc",
            docId: "about/about",
            position: "left",
            label: "技術筆記",
            // type: 'dropdown',
            // docId: 'intro',
            // position: 'left',
            // label: '技術筆記',
            // items:[
            //   {
            //     label: 'Tutorial Intro',
            //     to: '/docs/intro',
            //     },
            //     {
            //     label: 'Tutorial - Basics',
            //     to: '/docs/ReactJS/ReactJS-Begin',
            //     },
            // ]
          },
          {to: '/blog', label: '生活記事', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'Dinosaurs官方',
            position: 'right',
          },
          {
            href: 'https://github.com/oneal32xx',
            position: 'right',
            className: 'header-github-link',
          },          
          {
            href: 'https://medium.com/hans-revolution',
            position: 'right',
            className: 'header-medium-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/hansjic/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/C.Hans.Jiang',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'oneal32xx@gmail.com',
                href: 'mailto:oneal32xx@gmail.com',
                src: '/img/homepage/undraw_envelope_white.svg',
                width: 160,
                height: 51,
              },
              {
                label: 'GitHub',
                href: 'https://github.com/oneal32xx',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HansJiang, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'RK13VLDJAB',
  
        // Public API key: it is safe to commit it
        apiKey: '8521ff5e8d4e176eed5005c0bf179584',
  
        indexName: 'hansrevolution',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
});
