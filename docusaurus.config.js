// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const footer = require("./footer");
const navbar = require("./navbar");
const lightCodeTheme = require("prism-react-renderer/themes/okaidia");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "esmyy",
  tagline: "我亦无他，唯手熟尔",
  url: "https://esmyy.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  customFields: {
    cover: {
      textColor: "#fff",
      img: "https://cdn.jsdelivr.net/gh/esmyy/imghost@main/images/air-beijing-chengdu.jpg",
      description: "北京飞往成都",
      date: "2022年10月11日",
    },
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: ["./postcss-tailwind-loader"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: navbar,
      footer: footer,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
