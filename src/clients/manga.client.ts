import { mangaEndpoints } from '../endpoints/manga.endpoints'
import type {
	CharacterWithRole,
	Forum,
	ForumFilter,
	Images,
	JikanResponse,
	JikanResponseWithPagination,
	Manga,
	MangaFull,
	MangaReviewWithUser,
	MangaSearchParams,
	MangaStatistics,
	MangaUserUpdate,
	MoreInfo,
	NamedResource,
	News,
	Recommendation,
	RelationResource
} from '../models'
import { BaseClient } from './base.client'

/**
 * Manga resource client for accessing all manga-related endpoints.
 *
 * Provides methods to fetch manga data, characters, news, forum topics,
 * pictures, statistics, reviews, relations, and more.
 * */
export class MangaClient extends BaseClient {
	/**
	 * Get complete manga resource data including relations and external links.
	 *
	 * @param id - MyAnimeList manga ID
	 * @returns Promise resolving to complete manga data
	 *	 */
	public async getMangaFullById(id: number): Promise<JikanResponse<MangaFull>> {
		return this.getResource<MangaFull>(mangaEndpoints.fullById, { id })
	}

	/**
	 * Get manga resource with basic information.
	 *
	 * @param id - MyAnimeList manga ID
	 * @returns Promise resolving to manga data
	 *	 */
	public async getMangaById(id: number): Promise<JikanResponse<Manga>> {
		return this.getResource<Manga>(mangaEndpoints.byId, { id })
	}

	/**
	 * Get characters that appear in a specific manga.
	 *
	 * @param id - MyAnimeList manga ID
	 * @returns Promise resolving to array of manga characters
	 *	 */
	public async getMangaCharacters(
		id: number
	): Promise<JikanResponse<CharacterWithRole[]>> {
		return this.getResource<CharacterWithRole[]>(mangaEndpoints.characters, {
			id
		})
	}

	/**
	 * Get news articles related to a specific manga.
	 *
	 * @param id - MyAnimeList manga ID
	 * @param page - Page number (default: 1)
	 * @returns Promise resolving to paginated news articles
	 *	 */
	public async getMangaNews(
		id: number,
		page = 1
	): Promise<JikanResponseWithPagination<News[]>> {
		return this.getResourceWithPagination<News[]>(
			mangaEndpoints.news,
			{ id },
			{ page }
		)
	}

	/**
	 * Get forum topics related to a specific manga.
	 *
	 * @param id - MyAnimeList manga ID
	 * @param filter - Optional filter for topic type ('all', 'episode', 'other')
	 * @returns Promise resolving to forum topics
	 *	 */
	public async getMangaForum(
		id: number,
		filter?: ForumFilter
	): Promise<JikanResponse<Forum[]>> {
		return this.getResource<Forum[]>(
			mangaEndpoints.topics,
			{ id },
			filter ? { filter } : undefined
		)
	}

	/**
	 * Get pictures/images related to the manga.
	 *
	 * @param id - MyAnimeList manga ID
	 * @returns Promise resolving to manga pictures
	 *	 */
	public async getMangaPictures(id: number): Promise<JikanResponse<Images[]>> {
		return this.getResource<Images[]>(mangaEndpoints.pictures, { id })
	}

	/**
	 * Get statistics for a specific manga (reading, completed, dropped, etc.).
	 *
	 * @param id - MyAnimeList manga ID
	 * @returns Promise resolving to manga statistics
	 *	 */
	public async getMangaStatistics(
		id: number
	): Promise<JikanResponse<MangaStatistics>> {
		return this.getResource<MangaStatistics>(mangaEndpoints.statistics, { id })
	}

	/**
	 * Get additional information about the manga (trivia, notes, etc.).
	 *
	 * @param id - MyAnimeList manga ID
	 * @returns Promise resolving to more info
	 *	 */
	public async getMangaMoreInfo(id: number): Promise<JikanResponse<MoreInfo>> {
		return this.getResource<MoreInfo>(mangaEndpoints.moreInfo, { id })
	}

	/**
	 * Get user recommendations for similar manga.
	 *
	 * @param id - MyAnimeList manga ID
	 * @returns Promise resolving to manga recommendations
	 *	 */
	public async getMangaRecommendations(
		id: number
	): Promise<JikanResponse<Recommendation[]>> {
		return this.getResource<Recommendation[]>(mangaEndpoints.recommendations, {
			id
		})
	}

	/**
	 * Get recent user updates for this manga (users adding/updating their list).
	 *
	 * @param id - MyAnimeList manga ID
	 * @param page - Page number (default: 1)
	 * @returns Promise resolving to paginated user updates
	 *	 */
	public async getMangaUserUpdates(
		id: number,
		page = 1
	): Promise<JikanResponseWithPagination<MangaUserUpdate[]>> {
		return this.getResourceWithPagination<MangaUserUpdate[]>(
			mangaEndpoints.userUpdates,
			{ id },
			{ page }
		)
	}

	/**
	 * Get user reviews for a specific manga.
	 *
	 * @param id - MyAnimeList manga ID
	 * @param page - Page number (default: 1)
	 * @param preliminary - Include preliminary reviews (default: undefined)
	 * @param spoilers - Include spoiler reviews (default: undefined)
	 * @returns Promise resolving to paginated reviews
	 *	 */
	public async getMangaReviews(
		id: number,
		page = 1,
		preliminary?: boolean,
		spoilers?: boolean
	): Promise<JikanResponseWithPagination<MangaReviewWithUser[]>> {
		const params: Record<string, unknown> = { page }
		if (preliminary !== undefined) params.preliminary = preliminary
		if (spoilers !== undefined) params.spoilers = spoilers

		return this.getResourceWithPagination<MangaReviewWithUser[]>(
			mangaEndpoints.reviews,
			{ id },
			params
		)
	}

	/**
	 * Get related manga and anime entries (sequels, prequels, adaptations, etc.).
	 *
	 * @param id - MyAnimeList manga ID
	 * @returns Promise resolving to manga relations
	 *	 */
	public async getMangaRelations(
		id: number
	): Promise<JikanResponse<RelationResource[]>> {
		return this.getResource<RelationResource[]>(mangaEndpoints.relations, {
			id
		})
	}

	/**
	 * Get external links for the manga (official sites, social media, etc.).
	 *
	 * @param id - MyAnimeList manga ID
	 * @returns Promise resolving to external links
	 *	 */
	public async getMangaExternal(
		id: number
	): Promise<JikanResponse<NamedResource[]>> {
		return this.getResource<NamedResource[]>(mangaEndpoints.external, { id })
	}

	/**
	 * Search for manga with various filters and parameters.
	 *
	 * @param searchParams - Search and filter parameters
	 * @returns Promise resolving to paginated manga search results
	 *	 */
	public async searchManga(
		searchParams: Partial<MangaSearchParams> = {}
	): Promise<JikanResponseWithPagination<Manga[]>> {
		return this.getResourceWithPagination<Manga[]>(
			mangaEndpoints.search,
			{},
			searchParams
		)
	}
}
