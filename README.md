# jikants

![jikants-banner](https://img.shields.io/badge/jikants-Jikan%20API%20Wrapper-blue?style=for-the-badge)

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

## Usage

### Basic Example - Get Anime by ID

```ts
import { JikanClient } from '@rushelasli/jikants';

const jikan = new JikanClient();

// Get anime by ID
const anime = await jikan.anime.getAnimeById(1);
console.log(anime.data.title);     // "Cowboy Bebop"
console.log(anime.data.score);     // 8.75
console.log(anime.data.episodes);  // 26
```

### Using Individual Clients (for tree-shaking)

```ts
import { AnimeClient } from '@rushelasli/jikants';

const animeClient = new AnimeClient();
const anime = await animeClient.getAnimeById(1);
console.log(anime.data.title); // "Cowboy Bebop"
```

### Get Full Anime Details

```ts
// Get complete info including relations, themes, streaming platforms
const animeFull = await jikan.anime.getAnimeFullById(1);

console.log(animeFull.data.relations);         // Related anime/manga
console.log(animeFull.data.theme.openings);    // Opening songs
console.log(animeFull.data.theme.endings);     // Ending songs
console.log(animeFull.data.streaming);         // Streaming platforms
```

### Search Anime

```ts
const results = await jikan.anime.searchAnime({
  q: 'Naruto',
  type: 'TV',
  order_by: 'score',
  sort: 'desc',
  limit: 5
});

console.log(`Found ${results.data.length} results`);
results.data.forEach(anime => {
  console.log(`${anime.title} - Score: ${anime.score}`);
});
```

### Get Characters and Staff

```ts
// Get anime characters
const characters = await jikan.anime.getAnimeCharacters(1);
characters.data.forEach(char => {
  console.log(`${char.character.name} (${char.role})`);
});

// Get staff members
const staff = await jikan.anime.getAnimeStaff(1);
staff.data.forEach(member => {
  console.log(`${member.person.name}: ${member.positions.join(', ')}`);
});
```

### Get Episodes

```ts
// Get paginated episode list
const episodes = await jikan.anime.getAnimeEpisodes(1, 1); // anime_id, page
console.log(episodes.data);        // Array of episodes
console.log(episodes.pagination);  // Pagination info

// Get specific episode
const episode = await jikan.anime.getAnimeEpisodeById(1, 1); // anime_id, episode_number
console.log(episode.data.title);
```

### Seasonal and Top Rankings

```ts
// Get current season anime
const seasonal = await jikan.seasons.getSeasonNow();

// Get specific season
const winter2024 = await jikan.seasons.getSeason(2024, 'winter');

// Get top anime
const topAnime = await jikan.top.getTopAnime({ limit: 10 });
```

### Manga Operations

```ts
// Get manga by ID
const manga = await jikan.manga.getMangaById(1);
console.log(manga.data.title);      // "Monster"
console.log(manga.data.chapters);   // 162
console.log(manga.data.volumes);    // 18

// Search manga
const mangaResults = await jikan.manga.searchManga({
  q: 'berserk',
  order_by: 'score',
  sort: 'desc'
});
```

### Character Details

```ts
// Get character by ID
const character = await jikan.characters.getCharactersById(1);
console.log(character.data.name);       // "Spike Spiegel"
console.log(character.data.favorites);  // Favorites count

// Get full character info with anime/manga appearances
const charFull = await jikan.characters.getCharactersFullById(1);
console.log(charFull.data.anime);   // Anime appearances
console.log(charFull.data.manga);   // Manga appearances
console.log(charFull.data.voices);  // Voice actors
```

### User Operations

```ts
// Get user profile
const user = await jikan.users.getUserProfile('username');
console.log(user.data.username);
console.log(user.data.joined);

// Get user statistics
const stats = await jikan.users.getUserStatistics('username');
console.log(stats.data.anime.watching);
console.log(stats.data.anime.completed);

// Get user favorites
const favorites = await jikan.users.getUserFavorites('username');
console.log(favorites.data.anime);  // Favorite anime list
```

### Random Content

```ts
// Get random anime
const randomAnime = await jikan.random.getRandomAnime();
console.log(randomAnime.data.title);

// Get random manga
const randomManga = await jikan.random.getRandomManga();

// Get random character
const randomChar = await jikan.random.getRandomCharacters();
```

### Cache Management

```ts
// Get anime (cached for 24 hours by default)
const anime1 = await jikan.anime.getAnimeById(1);

// Same request returns from cache (< 5ms)
const anime2 = await jikan.anime.getAnimeById(1);

// Clear all cache
await jikan.clearCache();

// Clear specific endpoint
await jikan.clearCacheEntry('/anime/1');
```

## Client Configuration

### Cache Configuration

Jikants uses `axios-cache-interceptor` to store request results (default TTL: 24 hours).
To use a specific configuration, pass the `cacheOptions` argument when instantiating a client:

```ts
import { JikanClient } from '@rushelasli/jikants';

const jikanClient = new JikanClient({
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

const jikanClient = new JikanClient({
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

const jikanClient = new JikanClient({
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
| **JikanClient** (Main client) | All clients | Supported |

**Total: 101 Jikan API v4 endpoints fully covered**

## TypeScript Support

Full type safety with autocomplete:

```ts
import type { 
  Anime,
  AnimeFull,
  Manga,
  Character,
  JikanResponse,
  JikanResponseWithPagination,
  AnimeSearchParams 
} from '@rushelasli/jikants';

// Typed response
const response: JikanResponse<Anime> = await jikan.anime.getAnimeById(1);
const anime: Anime = response.data;

// Typed search parameters
const params: AnimeSearchParams = {
  q: 'naruto',
  type: 'TV',          // Autocomplete: TV, Movie, OVA, etc.
  status: 'complete',  // Autocomplete: airing, complete, upcoming
  order_by: 'score',   // Autocomplete: title, score, episodes, etc.
  sort: 'desc'         // Autocomplete: asc, desc
};

// Paginated response
const results: JikanResponseWithPagination<Anime[]> = 
  await jikan.anime.searchAnime(params);
```

## Rate Limiting

**Important:** Jikan API has rate limits:
- 3 requests per second
- 60 requests per minute

**The built-in 24-hour cache helps you stay within limits automatically.**

If making multiple sequential requests, add delays:

```ts
// Good practice for multiple requests
for (const id of animeIds) {
  const anime = await jikan.anime.getAnimeById(id);
  // Wait 350ms between requests (safely under 3 req/sec)
  await new Promise(resolve => setTimeout(resolve, 350));
}
```

## API Coverage

All 101 Jikan API v4 endpoints are supported across 17 resource clients:

- **Anime** (21 endpoints): Full data, characters, staff, episodes, news, videos, reviews, etc.
- **Manga** (14 endpoints): Full data, characters, news, reviews, etc.
- **Characters** (7 endpoints): Details, anime/manga appearances, voice actors
- **People** (6 endpoints): Voice actors and staff information
- **Seasons** (4 endpoints): Seasonal anime, current season, upcoming
- **Top** (4 endpoints): Top anime, manga, characters, people
- **Users** (14 endpoints): Profile, statistics, favorites, lists
- **Clubs** (5 endpoints): Club information and search
- **Genres** (2 endpoints): Anime and manga genres
- **Producers** (3 endpoints): Studios and producers
- **Magazines** (1 endpoint): Manga magazines
- **Recommendations** (2 endpoints): Anime and manga recommendations
- **Reviews** (2 endpoints): Recent reviews
- **Random** (5 endpoints): Random anime, manga, characters, etc.
- **Schedules** (1 endpoint): Weekly anime schedule
- **Watch** (4 endpoints): Recently aired episodes

## Resources

- [Jikan API Documentation](https://docs.api.jikan.moe/)
- [GitHub Repository](https://github.com/rushelasli/jikants)
- [npm Package](https://www.npmjs.com/package/@rushelasli/jikants)
- [Examples Directory](https://github.com/rushelasli/jikants/tree/main/examples)

## Leave your feedback

- Did you find this project useful? [Leave a star](https://github.com/rushelasli/jikants)
- Found a problem? [Create an issue](https://github.com/rushelasli/jikants/issues)
- Want to contribute? [Submit a PR](https://github.com/rushelasli/jikants/pulls)

## License

MIT License - see [LICENSE](LICENSE) file for details.
