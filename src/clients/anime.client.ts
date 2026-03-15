import { animeEndpoints } from '../endpoints/anime.endpoints'
import type {
	Anime,
	AnimeCharacter,
	AnimeEpisode,
	AnimeEpisodeVideo,
	AnimeFull,
	AnimeReviewWithUser,
	AnimeSearchParams,
	AnimeStaff,
	AnimeStatistics,
	AnimeTheme,
	AnimeUserUpdate,
	AnimeVideos,
	Forum,
	ForumFilter,
	Images,
	JikanResponse,
	JikanResponseWithPagination,
	MoreInfo,
	NamedResource,
	News,
	Recommendation,
	RelationResource
} from '../models'
import { BaseClient } from './base.client'

/**
 * Anime resource client for accessing all anime-related endpoints.
 *
 * Provides methods to fetch anime data, characters, staff, episodes,
 * news, forum topics, videos, pictures, statistics, and more.
 * */
export class AnimeClient extends BaseClient {
	/**
	 * Get complete anime resource data including relations, theme songs, and external links.
	 *
	 * @param id - MyAnimeList anime ID
	 * @returns Promise resolving to complete anime data
	 *	 */
	public async getAnimeFullById(id: number): Promise<JikanResponse<AnimeFull>> {
		return this.getResource<AnimeFull>(animeEndpoints.fullById, { id })
	}

	/**
	 * Get anime resource with basic information.
	 *
	 * @param id - MyAnimeList anime ID
	 * @returns Promise resolving to anime data
	 *	 */
	public async getAnimeById(id: number): Promise<JikanResponse<Anime>> {
		return this.getResource<Anime>(animeEndpoints.byId, { id })
	}

	/**
	 * Get characters and their voice actors for a specific anime.
	 *
	 * @param id - MyAnimeList anime ID
	 * @returns Promise resolving to array of anime characters with voice actors
	 *	 */
	public async getAnimeCharacters(
		id: number
	): Promise<JikanResponse<AnimeCharacter[]>> {
		return this.getResource<AnimeCharacter[]>(animeEndpoints.characters, {
			id
		})
	}

	/**
	 * Get staff members who worked on a specific anime.
	 *
	 * @param id - MyAnimeList anime ID
	 * @returns Promise resolving to array of anime staff
	 *	 */
	public async getAnimeStaff(id: number): Promise<JikanResponse<AnimeStaff[]>> {
		return this.getResource<AnimeStaff[]>(animeEndpoints.staff, { id })
	}

	/**
	 * Get a paginated list of episodes for a specific anime.
	 *
	 * @param id - MyAnimeList anime ID
	 * @param page - Page number (default: 1)
	 * @returns Promise resolving to paginated episode list
	 *	 */
	public async getAnimeEpisodes(
		id: number,
		page = 1
	): Promise<JikanResponseWithPagination<AnimeEpisode[]>> {
		return this.getResourceWithPagination<AnimeEpisode[]>(
			animeEndpoints.episodes,
			{ id },
			{ page }
		)
	}

	/**
	 * Get a single episode by its episode number.
	 *
	 * @param id - MyAnimeList anime ID
	 * @param episode - Episode number
	 * @returns Promise resolving to episode data
	 *	 */
	public async getAnimeEpisodeById(
		id: number,
		episode: number
	): Promise<JikanResponse<AnimeEpisode>> {
		return this.getResource<AnimeEpisode>(animeEndpoints.episodeById, {
			id,
			episode
		})
	}

	/**
	 * Get news articles related to a specific anime.
	 *
	 * @param id - MyAnimeList anime ID
	 * @param page - Page number (default: 1)
	 * @returns Promise resolving to paginated news articles
	 *	 */
	public async getAnimeNews(
		id: number,
		page = 1
	): Promise<JikanResponseWithPagination<News[]>> {
		return this.getResourceWithPagination<News[]>(
			animeEndpoints.news,
			{ id },
			{ page }
		)
	}

	/**
	 * Get forum topics related to a specific anime.
	 *
	 * @param id - MyAnimeList anime ID
	 * @param filter - Optional filter for topic type ('all', 'episode', 'other')
	 * @returns Promise resolving to forum topics
	 *	 */
	public async getAnimeForum(
		id: number,
		filter?: ForumFilter
	): Promise<JikanResponse<Forum[]>> {
		return this.getResource<Forum[]>(
			animeEndpoints.forum,
			{ id },
			filter ? { filter } : undefined
		)
	}

	/**
	 * Get videos related to the anime (promotional videos, music videos, episodes).
	 *
	 * @param id - MyAnimeList anime ID
	 * @returns Promise resolving to anime videos
	 *	 */
	public async getAnimeVideos(id: number): Promise<JikanResponse<AnimeVideos>> {
		return this.getResource<AnimeVideos>(animeEndpoints.videos, { id })
	}

	/**
	 * Get episode videos for a specific anime with pagination.
	 *
	 * @param id - MyAnimeList anime ID
	 * @param page - Page number (default: 1)
	 * @returns Promise resolving to paginated episode videos
	 *	 */
	public async getAnimeVideosEpisodes(
		id: number,
		page = 1
	): Promise<JikanResponseWithPagination<AnimeEpisodeVideo[]>> {
		return this.getResourceWithPagination<AnimeEpisodeVideo[]>(
			animeEndpoints.videoEpisodes,
			{ id },
			{ page }
		)
	}

	/**
	 * Get pictures/images related to the anime.
	 *
	 * @param id - MyAnimeList anime ID
	 * @returns Promise resolving to anime pictures
	 *	 */
	public async getAnimePictures(id: number): Promise<JikanResponse<Images[]>> {
		return this.getResource<Images[]>(animeEndpoints.pictures, { id })
	}

	/**
	 * Get statistics for a specific anime (watching, completed, dropped, etc.).
	 *
	 * @param id - MyAnimeList anime ID
	 * @returns Promise resolving to anime statistics
	 *	 */
	public async getAnimeStatistics(
		id: number
	): Promise<JikanResponse<AnimeStatistics>> {
		return this.getResource<AnimeStatistics>(animeEndpoints.statistics, { id })
	}

	/**
	 * Get additional information about the anime (trivia, notes, etc.).
	 *
	 * @param id - MyAnimeList anime ID
	 * @returns Promise resolving to more info
	 *	 */
	public async getAnimeMoreInfo(id: number): Promise<JikanResponse<MoreInfo>> {
		return this.getResource<MoreInfo>(animeEndpoints.moreInfo, { id })
	}

	/**
	 * Get user recommendations for similar anime.
	 *
	 * @param id - MyAnimeList anime ID
	 * @returns Promise resolving to anime recommendations
	 *	 */
	public async getAnimeRecommendations(
		id: number
	): Promise<JikanResponse<Recommendation[]>> {
		return this.getResource<Recommendation[]>(animeEndpoints.recommendations, {
			id
		})
	}

	/**
	 * Get recent user updates for this anime (users adding/updating their list).
	 *
	 * @param id - MyAnimeList anime ID
	 * @param page - Page number (default: 1)
	 * @returns Promise resolving to paginated user updates
	 *	 */
	public async getAnimeUserUpdates(
		id: number,
		page = 1
	): Promise<JikanResponseWithPagination<AnimeUserUpdate[]>> {
		return this.getResourceWithPagination<AnimeUserUpdate[]>(
			animeEndpoints.userUpdates,
			{ id },
			{ page }
		)
	}

	/**
	 * Get user reviews for a specific anime.
	 *
	 * @param id - MyAnimeList anime ID
	 * @param page - Page number (default: 1)
	 * @param preliminary - Include preliminary reviews (default: undefined)
	 * @param spoilers - Include spoiler reviews (default: undefined)
	 * @returns Promise resolving to paginated reviews
	 *	 */
	public async getAnimeReviews(
		id: number,
		page = 1,
		preliminary?: boolean,
		spoilers?: boolean
	): Promise<JikanResponseWithPagination<AnimeReviewWithUser[]>> {
		const params: Record<string, unknown> = { page }
		if (preliminary !== undefined) params.preliminary = preliminary
		if (spoilers !== undefined) params.spoilers = spoilers

		return this.getResourceWithPagination<AnimeReviewWithUser[]>(
			animeEndpoints.reviews,
			{ id },
			params
		)
	}

	/**
	 * Get related anime and manga entries (sequels, prequels, side stories, etc.).
	 *
	 * @param id - MyAnimeList anime ID
	 * @returns Promise resolving to anime relations
	 *	 */
	public async getAnimeRelations(
		id: number
	): Promise<JikanResponse<RelationResource[]>> {
		return this.getResource<RelationResource[]>(animeEndpoints.relations, {
			id
		})
	}

	/**
	 * Get opening and ending theme songs for the anime.
	 *
	 * @param id - MyAnimeList anime ID
	 * @returns Promise resolving to anime themes
	 *	 */
	public async getAnimeThemes(id: number): Promise<JikanResponse<AnimeTheme>> {
		return this.getResource<AnimeTheme>(animeEndpoints.themes, { id })
	}

	/**
	 * Get external links for the anime (official sites, social media, etc.).
	 *
	 * @param id - MyAnimeList anime ID
	 * @returns Promise resolving to external links
	 *	 */
	public async getAnimeExternal(
		id: number
	): Promise<JikanResponse<NamedResource[]>> {
		return this.getResource<NamedResource[]>(animeEndpoints.external, { id })
	}

	/**
	 * Get streaming platform links for the anime (Crunchyroll, Netflix, etc.).
	 *
	 * @param id - MyAnimeList anime ID
	 * @returns Promise resolving to streaming links
	 *	 */
	public async getAnimeStreaming(
		id: number
	): Promise<JikanResponse<NamedResource[]>> {
		return this.getResource<NamedResource[]>(animeEndpoints.streaming, { id })
	}

	/**
	 * Search for anime with various filters and parameters.
	 *
	 * @param searchParams - Search and filter parameters
	 * @returns Promise resolving to paginated anime search results
	 *	 */
	public async searchAnime(
		searchParams: Partial<AnimeSearchParams> = {}
	): Promise<JikanResponseWithPagination<Anime[]>> {
		return this.getResourceWithPagination<Anime[]>(
			animeEndpoints.search,
			{},
			searchParams
		)
	}
}
