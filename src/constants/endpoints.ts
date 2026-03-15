// Jikan API v4 Endpoints
export const ENDPOINTS = {
	ANIME: {
		fullById: '/anime/{id}/full',
		byId: '/anime/{id}',
		characters: '/anime/{id}/characters',
		staff: '/anime/{id}/staff',
		episodes: '/anime/{id}/episodes',
		episodeById: '/anime/{id}/episodes/{episode}',
		news: '/anime/{id}/news',
		forum: '/anime/{id}/forum',
		videos: '/anime/{id}/videos',
		videoEpisodes: '/anime/{id}/videos/episodes',
		pictures: '/anime/{id}/pictures',
		statistics: '/anime/{id}/statistics',
		moreInfo: '/anime/{id}/moreinfo',
		recommendations: '/anime/{id}/recommendations',
		userUpdates: '/anime/{id}/userupdates',
		reviews: '/anime/{id}/reviews',
		relations: '/anime/{id}/relations',
		themes: '/anime/{id}/themes',
		external: '/anime/{id}/external',
		streaming: '/anime/{id}/streaming',
		search: '/anime'
	},
	MANGA: {
		fullById: '/manga/{id}/full',
		byId: '/manga/{id}',
		characters: '/manga/{id}/characters',
		news: '/manga/{id}/news',
		topics: '/manga/{id}/forum',
		pictures: '/manga/{id}/pictures',
		statistics: '/manga/{id}/statistics',
		moreInfo: '/manga/{id}/moreinfo',
		recommendations: '/manga/{id}/recommendations',
		userUpdates: '/manga/{id}/userupdates',
		reviews: '/manga/{id}/reviews',
		relations: '/manga/{id}/relations',
		external: '/manga/{id}/external',
		search: '/manga'
	},
	CHARACTERS: {
		fullById: '/characters/{id}/full',
		byId: '/characters/{id}',
		anime: '/characters/{id}/anime',
		manga: '/characters/{id}/manga',
		voiceActors: '/characters/{id}/voices',
		pictures: '/characters/{id}/pictures',
		search: '/characters'
	},
	PEOPLE: {
		fullById: '/people/{id}/full',
		byId: '/people/{id}',
		anime: '/people/{id}/anime',
		voices: '/people/{id}/voices',
		manga: '/people/{id}/manga',
		pictures: '/people/{id}/pictures',
		search: '/people'
	},
	USERS: {
		search: '/users',
		byId: '/users/userbyid/{id}',
		fullProfile: '/users/{username}/full',
		profile: '/users/{username}',
		statistics: '/users/{username}/statistics',
		favorites: '/users/{username}/favorites',
		updates: '/users/{username}/userupdates',
		about: '/users/{username}/about',
		history: '/users/{username}/history',
		friends: '/users/{username}/friends',
		reviews: '/users/{username}/reviews',
		recommendations: '/users/{username}/recommendations',
		clubs: '/users/{username}/clubs',
		external: '/users/{username}/external'
	},
	CLUBS: {
		fullById: '/clubs/{id}/full',
		byId: '/clubs/{id}',
		relations: '/clubs/{id}/relations',
		members: '/clubs/{id}/members',
		staff: '/clubs/{id}/staff',
		search: '/clubs'
	},
	GENRES: {
		anime: '/genres/anime',
		manga: '/genres/manga'
	},
	MAGAZINES: {
		list: '/magazines'
	},
	PRODUCERS: {
		fullById: '/producers/{id}/full',
		byId: '/producers/{id}',
		external: '/producers/{id}/external',
		search: '/producers'
	},
	RECOMMENDATIONS: {
		anime: '/recommendations/anime',
		manga: '/recommendations/manga'
	},
	REVIEWS: {
		anime: '/reviews/anime',
		manga: '/reviews/manga'
	},
	SCHEDULES: {
		list: '/schedules'
	},
	SEASONS: {
		byYearAndSeason: '/seasons/{year}/{season}',
		now: '/seasons/now',
		upcoming: '/seasons/upcoming',
		list: '/seasons'
	},
	TOP: {
		anime: '/top/anime',
		manga: '/top/manga',
		characters: '/top/characters',
		people: '/top/people',
		reviews: '/top/reviews'
	},
	WATCH: {
		recentEpisodes: '/watch/episodes',
		popularEpisodes: '/watch/episodes/popular',
		recentPromos: '/watch/promos',
		popularPromos: '/watch/promos/popular'
	},
	RANDOM: {
		anime: '/random/anime',
		manga: '/random/manga',
		characters: '/random/characters',
		people: '/random/people',
		users: '/random/users'
	},
	SEARCH: {
		anime: '/anime',
		manga: '/manga',
		characters: '/characters',
		people: '/people',
		users: '/users'
	}
}

export const animeEndpoints = ENDPOINTS.ANIME
export const mangaEndpoints = ENDPOINTS.MANGA
export const characterEndpoints = ENDPOINTS.CHARACTERS
export const peopleEndpoints = ENDPOINTS.PEOPLE
export const userEndpoints = ENDPOINTS.USERS
export const clubEndpoints = ENDPOINTS.CLUBS
export const genreEndpoints = ENDPOINTS.GENRES
export const magazineEndpoints = ENDPOINTS.MAGAZINES
export const producerEndpoints = ENDPOINTS.PRODUCERS
export const recommendationEndpoints = ENDPOINTS.RECOMMENDATIONS
export const reviewEndpoints = ENDPOINTS.REVIEWS
export const scheduleEndpoints = ENDPOINTS.SCHEDULES
export const seasonEndpoints = ENDPOINTS.SEASONS
export const topEndpoints = ENDPOINTS.TOP
export const watchEndpoints = ENDPOINTS.WATCH
export const randomEndpoints = ENDPOINTS.RANDOM
export const searchEndpoints = ENDPOINTS.SEARCH