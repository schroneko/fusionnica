const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Fusionnica",
  tagline: "Fusionnica is the wiki about Nuclear Fusion Tech.",
  url: "https://www.fusionnica.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "schroneko", // Usually your GitHub org/user name.
  projectName: "fusionnica", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Fusionnica",
      logo: {
        alt: "Fusionnica Logo",
        src: "img/logo.png",
      },
      items: [
        {
          href: "https://twitter.com/fusionnica",
          label: "Twitter",
          position: "right",
        },
        {
          href: "https://github.com/schroneko/fusionnica",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Determinant, Inc. All rights reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      respectPrefersColorScheme: true,
      switchConfig: {
        lightIcon: " ",
        darkIcon: " ",
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/schroneko/fusionnica/edit/main/website/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
