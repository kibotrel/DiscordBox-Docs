# What is DiscordBox ?

DiscordBox is a Typescript framework based on [discord.js](https://discord.js.org) to easily create Discord bots. By default, it takes care of all the boilerplate so that you can directly integrate what makes your bot unique.

<div class="tip custom-block" style="padding-top: 8px">

Just want to try it out? Skip to the [Getting started](./getting-started) section.

</div>

## Goals and values

This project idea came from an extensive use of `discord.js` over the years. A lot of code has to be written no matter what your bot does and it can be very time consuming in the long run. To try solving this problem, we have few guiding principles.

### Simplicity

The framework should be as intuitive as possible to use. It should not require a lot of configuration to get started.

### Reduce boilerplate

If some code is required to run any bot and adds no value to it, it should be handled by the framework.

### Flexibility

Even if the default behaviors were designed to be as less opinionated as possible, you should be able to easily override or disable them.

### Developer experience

We want to ease up the development process as best as we can by providing useful tools and features.

### Performance

As most bots do not require a lot of resources, we want to keep the framework as lightweight as possible and provide ways to optimize resource usage.

<div class="warning custom-block" style="padding-top: 8px">

🚧 As of `1.1.0`, this is still work in progress, do not expect huge performance improvements.

</div>

## Features

As stated previously this framework focusses on simplicity and ease of use. To achieve this, we provide some features that will help you create your bot faster.

<div class="tip custom-block" style="padding-top: 8px">

ℹ️ More details about all these features and many more can be found in the [Features]() section.

</div>

### Minimalistic design

Little to no configuration is required to get started. DiscordBox is designed to be as simple as possible to use. By default it comes with most commonly used [Discord websocket events](https://discord.com/developers/docs/topics/gateway) and all [interraction types](https://discord.com/developers/docs/interactions/receiving-and-responding) handled.

### Simple logger

DiscordBox comes with a simple timestamp based multi-level [logger](). It is used in all default behaviors to provide you with useful information about what is happening.

### Automatic command deployment

If your bot has some [Slash commands](https://discord.com/developers/docs/interactions/slash-commands) registered, they will be automatically deployed or updated when the bot starts.

<div class="info custom-block" style="padding-top: 8px">

Based on `NODE_ENV` environment variable, the [deployment](./features.md#slash-commands-deployment) will either be global or target a specific guild. Useful for development.

</div>

### Advanced interaction system

Using [Message components](https://discord.com/developers/docs/interactions/message-components) unique identifers, we came up with a [deeper interaction system](./features.md#deeper-interaction-system) that allows you to easily attach arbitrary logic to any [`Button`](https://discord.com/developers/docs/interactions/message-components#buttons) or [`SelectMenu`](https://discord.com/developers/docs/interactions/message-components#select-menus).

Along with this system, by default all interactions that your bot receives will be parsed to extract relevant information that we call [interaction metadata]().

### Error handling

By default any error that occurs while processing an interaction will be caught and logged. We also provide a simple [error reporting]() system that users can use to notify you something not behaving as expected.
