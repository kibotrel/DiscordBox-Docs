# Getting Started

This documentation assumes you have a good understanding of [Discord API](https://discord.com/developers/docs/intro) and [Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome). It won't cover their concepts but will often refer to them.

## Installation

::: code-group

```sh [npm]
npm add discordbox
```

```sh [pnpm]
pnpm add discordbox
```

```sh [yarn]
yarn add discordbox
```

```sh [bun]
bun add discordbox
```

:::

<div class="warning custom-block" style="padding-top: 8px">

⚠️ DiscordBox is an ESM-only package. Don't use <code>require()</code> to import it. Your <code>package.json</code> file must contain <code>"type": "module"</code> or change file extensions of your project to <code>.mjs</code> or <code>.mts</code>.

</div>

### Requirements

You need [Node.js](https://nodejs.org/en/) version **18** or higher and a [Discord integration](https://discord.com/developers/applications) with a bot user.

## Run a simple bot

Here is a simple example of a bot that registers a slash command called `ping` that replies with `Pong!` when used.

```js
import { DiscordBox } from "discordbox";
import { SlashCommandBuilder } from "discord.js";

const bot = new DiscordBox({
  token: "xxxxxxxxxxxxxxxxxx",
  guildId: "xxxxxxxxxxxxxxxxxx",
  clientId: "xxxxxxxxxxxxxxxxxx",
  supportUserId: "xxxxxxxxxxxxxxxxxx",
});

const ping = {
  action: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("sends Pong!"),

  callback: async (interaction) => {
    await interaction.reply({ content: "Pong!", ephemeral: true });
  },
};

bot.addGenericInteractions([ping]);

await bot.start();
```

- `token` is the unique identifier of your bot. You can find it in the [Discord Developer Portal](https://discord.com/developers/applications).

- `clientId` is the unique identifier of your Discord integration, a [Snowflake](https://discord.com/developers/docs/reference#snowflakes). Needed to deploy [Slash commands](https://discord.com/developers/docs/interactions/slash-commands).

- `guildId` is used during your development to iterate faster, another `Snowflake`.

- `supportUserId` is a Discord user `Snowflake` that will be used in the default [error handling]() system.

<div class="tip custom-block" style="padding-top: 8px">

ℹ️ You might need to enable Developer Mode in your Discord client those <b>snowflakes</b>.

</div>

And you're done! No more code is needed on your end. [Slash commands are automatically registered and updated](./features.md#slash-command-deployment) when you start your bot and a custom interaction handler is available by default.

## Next steps

- Delve into [core concepts]() and discover the [default behaviors]() set up to reduce your need to write boilerplate.

- DiscordBox is highly customizable, learn how to [configure]() it to fit your needs. Most parts are either optional or can be replaced.

- Check out [API documentation](), there are plenty of useful methods and classes to help you build your bot.
