# Jikants Examples

This guide provides comprehensive examples for using the different clients available in `@rushelasli/jikants`.

## Setup

For all examples below, assume the `JikanClient` has been imported and initialized:

```typescript
import { JikanClient } from '@rushelasli/jikants';

const client = new JikanClient();
```

## Anime Client

The `anime` client gives you access to comprehensive anime data.

```typescript
// Get full details of an anime
const animeFull = await client.anime.getAnimeFullById(1); // Cowboy Bebop

// Get standard details of an anime
const anime = await client.anime.getAnimeById(1);

// Get episodes of an anime
const episodes = await client.anime.getAnimeEpisodes(1);
const episodeInfo = await client.anime.getAnimeEpisodeById(1, 1); // Anime ID, Episode ID

// Get staff and characters
const characters = await client.anime.getAnimeCharacters(1);
const staff = await client.anime.getAnimeStaff(1);

// Get news and forum topics
const news = await client.anime.getAnimeNews(1);
const forum = await client.anime.getAnimeForum(1);

// Get videos, episodes, and pictures
const videos = await client.anime.getAnimeVideos(1);
const videosEpisodes = await client.anime.getAnimeVideosEpisodes(1);
const pictures = await client.anime.getAnimePictures(1);

// Get statistics, more info, and recommendations
const stats = await client.anime.getAnimeStatistics(1);
const moreInfo = await client.anime.getAnimeMoreInfo(1);
const animeRecs = await client.anime.getAnimeRecommendations(1);

// Get user updates, reviews, and relations
const userUpdates = await client.anime.getAnimeUserUpdates(1);
const reviews = await client.anime.getAnimeReviews(1);
const relations = await client.anime.getAnimeRelations(1);

// Get themes, external links, and streaming
const themes = await client.anime.getAnimeThemes(1);
const externalLinks = await client.anime.getAnimeExternal(1);
const streaming = await client.anime.getAnimeStreaming(1);

// Search for anime with filters
const search = await client.anime.searchAnime({
  q: 'Naruto',
  status: 'complete',
  type: 'tv',
  min_score: 8
});
```

## Manga Client

The `manga` client provides similar access to manga data.

```typescript
// Get full details of a manga
const mangaFull = await client.manga.getMangaFullById(2); // Berserk

// Get standard details of a manga
const manga = await client.manga.getMangaById(2);

// Get characters associated with a manga
const characters = await client.manga.getMangaCharacters(2);

// Get news and forum topics
const news = await client.manga.getMangaNews(2);
const forum = await client.manga.getMangaForum(2);

// Get manga pictures/images
const pictures = await client.manga.getMangaPictures(2);

// Get statistics, more info, and recommendations
const stats = await client.manga.getMangaStatistics(2);
const moreInfo = await client.manga.getMangaMoreInfo(2);
const recommendations = await client.manga.getMangaRecommendations(2);

// Get user updates, reviews, and relations
const userUpdates = await client.manga.getMangaUserUpdates(2);
const reviews = await client.manga.getMangaReviews(2);
const relations = await client.manga.getMangaRelations(2);

// Get external links
const externalLinks = await client.manga.getMangaExternal(2);

// Search for manga
const search = await client.manga.searchManga({
  q: 'One Piece',
  order_by: 'chapters',
  sort: 'desc'
});
```

## Characters Client

The `characters` client lets you find information about specific characters.

```typescript
// Get full character details
const characterFull = await client.characters.getCharacterFullById(1); // Spike Spiegel

// Get standard character details
const character = await client.characters.getCharacterById(1);

// See what anime this character appears in
const animeApp = await client.characters.getCharacterAnime(1);

// See what manga this character appears in
const mangaApp = await client.characters.getCharacterManga(1);

// Get voice actors for this character
const voiceActors = await client.characters.getCharacterVoiceActors(1);

// Get pictures of a character
const pictures = await client.characters.getCharacterPictures(1);

// Search for characters
const search = await client.characters.getCharacterSearch({ q: 'Lelouch' });
```

## People Client

The `people` client provides information about voice actors, staff, and creators.

```typescript
// Get full person details
const personFull = await client.people.getPersonFullById(1); // Tomokazu Sugita

// Get standard person details
const person = await client.people.getPersonById(1);

// See anime this person has worked on
const animeStaff = await client
.people.getPersonAnime(1);

// See characters this person has voiced
const voices = await client.people.getPersonVoices(1);

// See manga this person has created/worked on
const manga = await client.people.getPersonManga(1);

// Get pictures of a person
const pictures = await client.people.getPersonPictures(1);

// Search for people
const search = await client.people.getPeopleSearch({ q: 'Kana Hanazawa' });
```

## Top Client

The `top` client is used for retrieving ranked lists.

```typescript
// Get top anime
const topAnime = await client.top.getTopAnime({
  type: 'tv',
  filter: 'bypopularity',
  page: 1
});

// Get top manga
const topManga = await client.top.getTopManga({
  type: 'manga'
});

// Get top characters
const topCharacters = await client.top.getTopCharacters();

// Get top people (voice actors, creators, etc.)
const topPeople = await client.top.getTopPeople();
```

## Seasons Client

The `seasons` client provides information about seasonal anime releases.

```typescript
// Get anime for the current season
const currentSeason = await client.seasons.getSeasonNow();

// Get anime for a specific season and year
const winter2024 = await client.seasons.getSeason(2024, 'winter');

// Get upcoming anime
const upcoming = await client.seasons.getSeasonUpcoming();

// Get a list of all available years and seasons
const seasonsList = await client.seasons.getSeasonsList();
```

## Schedules Client

The `schedules` client lets you see when currently airing anime release their episodes.

```typescript
// Get the anime schedule for a specific day
const mondaySchedule = await client.schedules.getSchedules({ filter: 'monday' });

// Get schedule for all days
const fullSchedule = await client.schedules.getSchedules();
```

## Users Client

The `users` client accesses user profiles, statistics, and public lists.

```typescript
// Get user profile by username
const profile = await client.users.getUserProfile('Xinil');
const fullProfile = await client.users.getUserFullProfile('Xinil');

// Get user by ID
const userById = await client.users.getUserById(1);

// Get user statistics and about
const stats = await client.users.getUserStatistics('Xinil');
const about = await client.users.getUserAbout('Xinil');

// Get user's favorite anime, manga, characters, and people
const favorites = await client.users.getUserFavorites('Xinil');

// Get user's recently updated anime/manga lists, and history
const updates = await client.users.getUserUpdates('Xinil');
const history = await client.users.getUserHistory('Xinil');

// Get user's friends, reviews, recommendations, clubs, and external links
const friends = await client.users.getUserFriends('Xinil');
const reviews = await client.users.getUserReviews('Xinil');
const recs = await client.users.getUserRecommendations('Xinil');
const clubs = await client.users.getUserClubs('Xinil');
const external = await client.users.getUserExternal('Xinil');

// Search for users
const search = await client.users.getUsersSearch({ q: 'Xinil' });
```

## Clubs Client

The `clubs` client retrieves information about MyAnimeList clubs.

```typescript
// Get club details
const club = await client.clubs.getClubsById(1);

// Get club members
const members = await client.clubs.getClubMembers(1);

// Get club staff and relations
const staff = await client.clubs.getClubStaff(1);
const relations = await client.clubs.getClubRelations(1);

// Search for clubs
const search = await client.clubs.getClubSearch({ q: 'Anime' });
```

## Genres Client

The `genres` client fetches anime and manga genres.

```typescript
// Get anime genres
const animeGenres = await client.genres.getAnimeGenres();

// Get manga genres
const mangaGenres = await client.genres.getMangaGenres();
```

## Magazines Client

The `magazines` client gets information about manga magazines and serializations.

```typescript
// Get magazines
const magazines = await client.magazines.getMagazines();
```

## Producers Client

The `producers` client fetches information about anime studios and producers.

```typescript
// Get full producer details
const producerFull = await client.producers.getProducerFullById(2); // Kyoto Animation

// Get standard producer details
const producer = await client.producers.getProducerById(2);

// Get producer external links
const external = await client.producers.getProducerExternal(2);

// Search for producers
const search = await client.producers.getProducersSearch({ q: 'Kyoto' });
```

## Random Client

The `random` client gets random entries from the database.

```typescript
// Get a random anime
const randomAnime = await client.random.getRandomAnime();

// Get a random manga
const randomManga = await client.random.getRandomManga();

// Get random characters, people, and users
const randomCharacter = await client.random.getRandomCharacters();
const randomPerson = await client.random.getRandomPeople();
const randomUser = await client.random.getRandomUsers();
```

## Recommendations Client

The `recommendations` client gets recent global recommendations.

```typescript
// Get recent anime recommendations
const animeRecs = await client.recommendations.getRecentAnimeRecommendations();

// Get recent manga recommendations
const mangaRecs = await client.recommendations.getRecentMangaRecommendations();
```

## Reviews Client

The `reviews` client gets recent global reviews.

```typescript
// Get recent anime reviews
const animeReviews = await client.reviews.getRecentAnimeReviews();

// Get recent manga reviews
const mangaReviews = await client.reviews.getRecentMangaReviews();
```

## Watch Client

The `watch` client gets recently added episodes and promotional videos.

```typescript
// Get recent episodes
const recentEpisodes = await client.watch.getWatchRecentEpisodes();
const popularEpisodes = await client.watch.getWatchPopularEpisodes();

// Get promotional videos
const recentPromos = await client.watch.getWatchRecentPromos();
const popularPromos = await client.watch.getWatchPopularPromos();
```

## Cache Management

The JikanClient also provides methods for managing the built-in cache.

```typescript
// Clear the entire cache
await client.clearCache();

// Clear a specific cache entry by its key
await client.clearCacheEntry('cache-key');

// Get the underlying AxiosCacheInstance to manage interceptors or advanced cache
const axiosInstance = client.getAxiosInstance();
```
