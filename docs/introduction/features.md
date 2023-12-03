---
outline: deep
---

# Features

DiscordBox aims to keep things simple and easy to use. It leverages on the power of [`discord.js`](https://discord.js.org/) which is already a great library to interact with the Discord API. It handles most boilerplate code and generic configuration that is mandatory before even starting to implement any logic that is specific to what you want to achieve.

## Slash commands deployment

If your goal is to create a Discord bot that uses [Slash commands](https://discord.com/developers/docs/interactions/slash-commands), deploying them through Discord's API is mandatory. As it's easy to mess up, DiscordBox automatically handles this for you as long as you register them properly as shown in the [Run a simple bot](./getting-started#run-a-simple-bot) example.

<div class="tip custom-block" style="padding-top: 8px">

ℹ️ It means that the created interaction's property <code>action</code> must be a valid <a href="https://discord.js.org/docs/packages/builders/main/SlashCommandBuilder:Class" target="_blank"><code>SlashCommandBuilder</code></a> to detect that it should be deployed.

</div>

Regarding this topic, it is quite bothersome to wait for Slash commands to be deployed globally when you're developing your bot as it can take up to several hours to be available. To mitigate this, DiscordBox deploys them on a specific [guild](https://discord.com/developers/docs/resources/guild#:~:text=Guilds%20in%20Discord%20represent%20an,%22servers%22%20in%20the%20UI.) that you are highly recommanded to configure when `NODE_ENV` environment variable is set to `development`.

## Deeper interaction system

Based on how `discord.js` recommend to handle interactions, DiscordBox adds a layer of abstraction that also allows you to pass extra data to your interaction's callback or trigger other interaction handlers programmatically in some cases.

All of this is possible thanks to a specific way of dealing with [Message Components](https://discord.com/developers/docs/interactions/message-components) `customId` property.

Here is how we craft it by default:

```ts
const customId = `uniqueId:action:previousRequestId:extraData`;
```

As you can see it is composed of four parts separated by a `:`. If we break it down, here is what each part means:

- `uniqueId`: A unique identifier for that particular element.
- `action`: The action name that should be triggered when the element is interacted with. It must refer to a registered [interaction handler]().
- `previousRequestId`: By default, when an interaction is received by your bot, DiscordBox generate some [interaction metadata](), a unique request ID being one of them. In this case, this refers to the request ID of the interaction that made the current one possible.

<div class="tip custom-block" style="padding-top: 8px">

ℹ️ For example, you have a Slash command that replies with a message containing a button. You can use `metadata.requestId` in the Slash command's callback to set it as the `previousRequestId` in the button's `customId`. This way, when the button is clicked, you can trace back the whole interaction flow.

</div>

- `extraData`: Any extra information you want to dynamically pass to the interaction handler's callback. We recommend it to be a short string that could be a key in a cache for example.

Only `uniqueId` and `action` are mandatory. The other two are optional and can be omitted if you don't need them. You must keep the `:` separator though.

Here is an example:

```ts
const customId = `66ab3a868d839d62:ping::`;
```

<div class="warning custom-block" style="padding-top: 8px">
⚠️ Keep in mind that <code>customId</code> length is limited to <b>100</b> characters by <a href="https://discord.com/developers/docs/interactions/message-components#custom-id" target="_blank">Discord limitations</a>.

</div>

## Improved developer experience

As time goes by, more and more methods are added to this framework to enhance developer experience. Here are some examples:

- Send a direct message to a particular user
- Delete a specific message
- Generate cryptographically secure random strings
- Transform a given string into a Markdown code block with syntax highlighting

<div class="tip custom-block" style="padding-top: 8px">

ℹ️ You can find the full list of available methods in the [API reference](./api-reference).

</div>
