# jikants

<p align="center">
  <strong>Modern TypeScript wrapper for the Jikan API v4</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@rushelasli/jikants?style=for-the-badge&color=blue" alt="npm version">
  <img src="https://img.shields.io/npm/dt/@rushelasli/jikants?style=for-the-badge&color=red" alt="npm downloads">
  <img src="https://img.shields.io/github/license/rushelasli/jikants?style=for-the-badge&color=blueviolet" alt="license">
  <img src="https://img.shields.io/badge/language-typescript-blue?style=for-the-badge" alt="typescript">
  <img src="https://img.shields.io/badge/code%20style-Biome-60A5FA?style=for-the-badge&logo=biome" alt="biome">
  <img src="https://img.shields.io/bundlephobia/minzip/@rushelasli/jikants?style=for-the-badge&color=darkgreen" alt="bundle size">
</p>

> Jikan API wrapper for TypeScript and Node.js with built-in typing and automatic caching.

## Features

- Fully typed with complete TypeScript definitions
- HTTP request caching with configurable TTL
- ESM with tree shaking support
- 100% endpoint coverage (all 101 Jikan API v4 endpoints)
- Logging support for debugging
- Lightweight and modern

## Installation

```bash
npm install @rushelasli/jikants axios axios-cache-interceptor
```

or

```bash
yarn add @rushelasli/jikants axios axios-cache-interceptor
```

## Quick Start

Using the main **JikanClient**:

```ts
import { JikanClient, JikanResponse, Anime } from '@rushelasli/jikants';

const jikan = new JikanClient();

// Get anime by ID
jikan.anime
  .getAnimeById(1)
  .then((response: JikanResponse<Anime>) => {
    console.log(response.data.title); // "Cowboy Bebop"
  });

// Search anime
const results = await jikan.anime.searchAnime({
  q: 'naruto',
  type: 'TV',
  order_by: 'score',
  sort: 'desc'
});

// Get seasonal anime
const seasonal = await jikan.seasons.getSeasonNow();

// Get top anime
const top = await jikan.top.getTopAnime({ limit: 10 });
```

Using a specific client, like **AnimeClient**:

```ts
import { AnimeClient, JikanResponse, Anime } from '@rushelasli/jikants';

const animeClient = new AnimeClient();

animeClient
  .getAnimeById(1)
  .then((response: JikanResponse<Anime>) => {
    console.log(response.data);
  });
```

## Client Configuration

### Cache Configuration

Jikants uses `axios-cache-interceptor` to store request results (default TTL: 24 hours).
To use a specific configuration, pass the `cacheOptions` argument when instantiating a client:

```ts
import { JikanClient } from '@rushelasli/jikants';

const jikan = new JikanClient({
  cacheOptions: {
    ttl: 1000 * 60 * 30, // 30 minutes
  }
});
```

For more information, check out the [axios-cache-interceptor Documentation](https://axios-cache-interceptor.js.org/).

### Custom Axios Instance

Jikants uses `axios` as an HTTP client. If you need custom settings, you can provide your own axios instance:

```ts
import { JikanClient } from '@rushelasli/jikants';
import Axios from 'axios';

const jikan = new JikanClient({
  axiosInstance: Axios.create({
    timeout: 10000,
    headers: { 'User-Agent': 'MyApp/1.0.0' }
  })
});
```

### Logging

To enable logging for debugging, pass the `enableLogging` argument as `true`:

```ts
import { JikanClient } from '@rushelasli/jikants';

const jikan = new JikanClient({
  enableLogging: true
});
```

## Available Clients

| Client | Endpoints | Status |
|--------|-----------|--------|
| **AnimeClient** | 21 endpoints | Supported |
| **MangaClient** | 14 endpoints | Supported |
| **CharactersClient** | 7 endpoints | Supported |
| **PeopleClient** | 6 endpoints | Supported |
| **SeasonsClient** | 4 endpoints | Supported |
| **TopClient** | 4 endpoints | Supported |
| **ClubsClient** | 5 endpoints | Supported |
| **UsersClient** | 14 endpoints | Supported |
| **ProducersClient** | 3 endpoints | Supported |
| **GenresClient** | 2 endpoints | Supported |
| **RecommendationsClient** | 2 endpoints | Supported |
| **ReviewsClient** | 2 endpoints | Supported |
| **RandomClient** | 5 endpoints | Supported |
| **SchedulesClient** | 1 endpoint | Supported |
| **MagazinesClient** | 1 endpoint | Supported |
| **WatchClient** | 4 endpoints | Supported |
| **JikanClient** | All clients | Supported |

**Total: 101 Jikan API v4 endpoints fully covered**

## Usage Examples

### Search with Filters

```ts
const results = await jikan.anime.searchAnime({
  q: 'one piece',
  type: 'TV',
  status: 'airing',
  rating: 'pg13',
  min_score: 8,
  order_by: 'score',
  sort: 'desc',
  sfw: true,
  page: 1,
  limit: 25
});
```

### Get Character Details

```ts
const character = await jikan.characters.getCharactersFullById(1);
console.log(character.data.name);
console.log(character.data.anime); // Anime appearances
console.log(character.data.voices); // Voice actors
```

### Get User Profile

```ts
const user = await jikan.users.getUserProfile('username');
console.log(user.data.statistics);

const favorites = await jikan.users.getUserFavorites('username');
console.log(favorites.data.anime);
```

### Cache Management

```ts
// Clear all cache
await jikan.clearCache();

// Clear specific entry
await jikan.clearCacheEntry('/anime/1');
```

### Error Handling

```ts
try {
  const anime = await jikan.anime.getAnimeById(999999);
} catch (error) {
  console.error(error.response?.status); // 404
}
```

## TypeScript Support

Full type safety out of the box:

```ts
import type { 
  Anime, 
  Manga,
  Character,
  JikanResponse,
  AnimeSearchParams 
} from '@rushelasli/jikants';

const { data }: JikanResponse<Anime> = await jikan.anime.getAnimeById(1);
```

## Rate Limits

Jikan API limits: **3 requests/second**, **60 requests/minute**

The built-in cache helps you stay within limits automatically.

## Resources

- [Jikan API Documentation](https://docs.api.jikan.moe/)
- [GitHub Repository](https://github.com/rushelasli/jikants)
- [npm Package](https://www.npmjs.com/package/@rushelasli/jikants)

## Contributing

Found a bug or want to contribute? Check out the [GitHub repository](https://github.com/rushelasli/jikants) and feel free to submit issues or pull requests.