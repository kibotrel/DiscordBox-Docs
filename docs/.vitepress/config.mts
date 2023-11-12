import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DiscordBox",
  description:
    "A framework to create Discord bots. Deals with all the boilerplate to let you focus on what makes your bot unique!",
  head: [["link", { rel: "icon", href: "/assets/logo.svg" }]],
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    defaultHighlightLang: "ts",
  },
  themeConfig: {
    nav: [{ text: "Guide", link: "/introduction/what-is-discordbox" }],
    logo: "/assets/logo.svg",
    sidebar: [
      {
        text: "Introduction",
        collapsed: false,
        items: [
          {
            text: "What is DiscordBox?",
            link: "/introduction/what-is-discordbox",
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/kibotrel/DiscordBox" },
    ],
    footer: {
      message: "This project is not affiliated by any means with Discord.",
    },
    editLink: {
      pattern:
        "https://github.com/kibotrel/DiscordBox-Docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: {
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    search: {
      provider: "local",
    },
  },
});
