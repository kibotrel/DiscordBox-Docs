import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DiscordBox",
  description:
    "A framework to create Discord bots. Deals with all the boilerplate to let you focus on what makes your bot unique!",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  markdown: {
    lineNumbers: true,
    defaultHighlightLang: "ts",
  },
  themeConfig: {
    nav: [{ text: "Guide", link: "/introduction/what-is-discordbox" }],
    logo: "/logo.svg",
    sidebar: [
      {
        text: "Introduction",
        collapsed: false,
        items: [
          {
            text: "What is DiscordBox?",
            link: "/introduction/what-is-discordbox",
          },
          {
            text: "Getting started",
            link: "/introduction/getting-started",
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
