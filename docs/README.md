# Jikants Documentation

Welcome to the documentation for `@rushelasli/jikants`, a powerful TypeScript/JavaScript wrapper for the Jikan API v4.

## Installation

You can install the package using your preferred package manager:

```bash
npm install @rushelasli/jikants
# or
yarn add @rushelasli/jikants
# or
pnpm add @rushelasli/jikants
# or
bun add @rushelasli/jikants
```

## Basic Usage

The easiest way to use the library is through the `JikanClient` class, which provides access to all API endpoints.

```typescript
import { JikanClient } from '@rushelasli/jikants';

// Initialize the client
const client = new JikanClient();

// Use async/await to fetch data
async function getAnimeInfo() {
  try {
    // Get full anime details by ID (e.g., 1 for Cowboy Bebop)
    const anime = await client.anime.getAnimeFullById(1);
    console.log(anime.data.title);
    
    // Search for an anime
    const searchResults = await client.anime.getAnimeSearch({ q: 'Naruto' });
    console.log(`Found ${searchResults.data.length} results`);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getAnimeInfo();
```

## Caching

`jikants` comes with built-in caching support via `axios-cache-interceptor` to help you respect the Jikan API rate limits and improve performance. Caching is enabled by default.

```typescript
import { JikanClient } from '@rushelasli/jikants';

const client = new JikanClient();

async function manageCache() {
  // First call will hit the API and cache the result
  await client.anime.getAnimeById(1);
  
  // Second call will return the cached result immediately
  await client.anime.getAnimeById(1);
  
  // Clear all cached responses if you need fresh data
  await client.clearCache();
  
  // Or clear a specific cache entry
  await client.clearCacheEntry('some-cache-key');
}
```

## Available Clients

The `JikanClient` exposes the following sub-clients:

- `anime`: Anime data, characters, staff, episodes, etc.
- `manga`: Manga data, characters, news, etc.
- `characters`: Character details, voices, pictures, etc.
- `clubs`: Club information, members, etc.
- `genres`: Anime and manga genres.
- `magazines`: Magazine and serialization data.
- `people`: Voice actors, staff, creators, etc.
- `producers`: Anime studios and producers.
- `random`: Random anime, manga, characters, etc.
- `recommendations`: Recent anime and manga recommendations.
- `reviews`: Recent anime and manga reviews.
- `schedules`: Anime release schedules.
- `seasons`: Seasonal anime data.
- `top`: Top-ranked anime, manga, characters, etc.
- `users`: User profiles, statistics, favorites, etc.
- `watch`: Recently added episodes and promos.

You can also import and use these specific clients individually if you don't need the full `JikanClient`:

```typescript
import { AnimeClient } from '@rushelasli/jikants';

const animeClient = new AnimeClient();
```

## TypeScript Support

This package is written in TypeScript and provides comprehensive typings for all Jikan API responses. You can import these models for use in your own code:

```typescript
import type { Anime, JikanResponse } from '@rushelasli/jikants';

async function logAnimeTitle(response: JikanResponse<Anime>) {
  console.log(response.data.title);
}
```

## Further Reading

- [Comprehensive Examples Guide](./examples.md) - See detailed examples of using different API endpoints.
- [Official Jikan API v4 Documentation](https://docs.api.jikan.moe/) - Detailed information on specific endpoints and parameters.