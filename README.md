# jikants

> Jikan API wrapper for TypeScript and Node.js with built-in typing and automatic caching.

## Features

- Fully typed with complete TypeScript definitions
- HTTP request caching with configurable TTL
- Logging support for debugging
- ESM with tree shaking support
- 100% endpoint coverage (all 101 Jikan API v4 endpoints)

## Installation

```bash
npm install @rushelasli/jikants axios axios-cache-interceptor
```

or
```bash
yarn add @rushelasli/jikants axios axios-cache-interceptor
```

or
```bash
bun add @rushelasli/jikants axios axios-cache-interceptor
```

## Quick Start

```ts
import { JikanClient } from '@rushelasli/jikants';

const jikan = new JikanClient();
const anime = await jikan.anime.getAnimeById(1);
console.log(anime.data.title);
```

## Documentation

View the full documentation and examples [on GitHub.](https://github.com/rushelasli/jikants/tree/main/docs)
