// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "City of Pawnee, Indiana",
  tagline: "When you're here, then you're home",
  url: "https://xapp.ai",
  baseUrl: "/pawnee/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "michaelmyers", // Usually your GitHub org/user name.
  projectName: "pawnee", // Usually your repo name.
  plugins: ["./plugins/inject-widget"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Pawnee, Indiana",
        logo: {
          alt: "Seal of Pawnee",
          src: "img/pawnee-seal.png",
        },
        items: [
          {
            type: "dropdown",
            position: "left",
            label: "Government",
            items: [
              {
                label: "City Hall",
                to: "/docs/city-hall",
              },
              {
                label: "City Council",
                to: "/docs/city-council",
              },
              {
                label: "Parks & Recreation",
                to: "/docs/parks-and-recreation",
              },
              {
                label: "Information Technology",
                to: "/docs/information-technology",
              },
            ],
          },
          {
            type: "doc",
            docId: "quick-facts",
            position: "left",
            label: "Quick Facts",
          },
          {
            type: "doc",
            docId: "history",
            position: "left",
            label: "History",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `CC-BY-SA`,
      },
      colorMode: {
        disableSwitch: true,
      },
    }),
};

module.exports = config;
