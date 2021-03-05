# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## How to add a document

- Create a `md` file inside `docs/` folder
- This file has to contain an id (dashed-case), a title and a sidebar_label (example below)

````md
---
id: dress-code
title: Metadot Dress Code
sidebar_label: Dress Code
slug: /
---
````

- Do not forget to add the id inside the `sidebars.js` file

> The order of the metaman list matters

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Sites are hosted on Netlify.

### Production

The deployment is automated when someone merge to the `live` branch.

- <https://infallible-payne-0327ee.netlify.app>
- <https://metaman.metadot.com>

### Staging

The deployment is automated when someone merge to the `staging` branch.

- <https://unruffled-varahamihira-eff298.netlify.app>
- <https://staging.metaman.metadot.com>
