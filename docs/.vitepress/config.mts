import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DiscordBox",
  description:
    "A framework to create Discord bots. Deals with all the boilerplate to let you focus on what makes your bot unique!",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  cleanUrls: true,
  themeConfig: {
    nav: [{ text: "Guide", link: "/introduction/what-is-discordbox" }],
    sidebar: [
      {
        text: "Introduction",
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
  },
});
