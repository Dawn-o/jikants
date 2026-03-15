import {
	genreEndpoints,
	magazineEndpoints,
	randomEndpoints,
	recommendationEndpoints,
	reviewEndpoints,
	scheduleEndpoints
} from '../endpoints'
import type {
	Anime,
	AnimeReviewWithUser,
	Character,
	Genre,
	GenreFilter,
	Magazine,
	MagazineSearchParams,
	Manga,
	MangaReviewWithUser,
	People,
	ReviewParams,
	ScheduleParams,
	User,
	UserRecommendation
} from '../models'
import { BaseClient } from './base.client'

/**
 * **Schedules Client**
 *
 * Client used to access the Schedules Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class SchedulesClient extends BaseClient {
	/**
	 * Returns weekly schedule
	 * @param searchParams Filter parameters
	 */
	public getSchedules(searchParams?: Partial<ScheduleParams>) {
		return this.getResource<Anime[]>(scheduleEndpoints.list, {}, searchParams)
	}
}

/**
 * **Magazines Client**
 *
 * Client used to access the Magazines Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class MagazinesClient extends BaseClient {
	/**
	 * @returns Magazines collection
	 * @param params
	 */
	public getMagazines(params: Partial<MagazineSearchParams> = {}) {
		return this.getResource<Magazine[]>(magazineEndpoints.list, {}, params)
	}
}

/**
 * **Genres Client**
 *
 * Client used to access the Genres Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class GenresClient extends BaseClient {
	/**
	 * Get Anime genres
	 * @param filter Type of the desired genres
	 */
	public getAnimeGenres(filter?: GenreFilter) {
		return this.getResource<Genre[]>(
			genreEndpoints.anime,
			{},
			filter ? { filter } : undefined
		)
	}

	/**
	 * Get Manga genres
	 * @param filter Type of the desired genres
	 */
	public getMangaGenres(filter?: GenreFilter) {
		return this.getResource<Genre[]>(
			genreEndpoints.manga,
			{},
			filter ? { filter } : undefined
		)
	}
}

/**
 * **Recommendations Client**
 *
 * Client used to access the Recommendations Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class RecommendationsClient extends BaseClient {
	/**
	 * Get recent anime recommendations
	 * @param page Page number
	 */
	public getRecentAnimeRecommendations(page?: number) {
		return this.getResource<UserRecommendation[]>(
			recommendationEndpoints.anime,
			{},
			page ? { page } : undefined
		)
	}

	/**
	 * Get recent manga recommendations
	 * @param page Page number
	 */
	public getRecentMangaRecommendations(page?: number) {
		return this.getResource<UserRecommendation[]>(
			recommendationEndpoints.manga,
			{},
			page ? { page } : undefined
		)
	}
}

/**
 * **Reviews Client**
 *
 * Client used to access the Reviews Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class ReviewsClient extends BaseClient {
	/**
	 * Get recent anime reviews
	 * @param params Filter parameters
	 */
	public getRecentAnimeReviews(params?: Partial<ReviewParams>) {
		return this.getResource<AnimeReviewWithUser[]>(
			reviewEndpoints.anime,
			{},
			params
		)
	}

	/**
	 * Get recent manga reviews
	 * @param params Filter parameters
	 */
	public getRecentMangaReviews(params?: Partial<ReviewParams>) {
		return this.getResource<MangaReviewWithUser[]>(
			reviewEndpoints.manga,
			{},
			params
		)
	}
}

/**
 * **Random Client**
 *
 * Client used to access the Random Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class RandomClient extends BaseClient {
	/**
	 * Get random anime
	 */
	public getRandomAnime() {
		return this.getResource<Anime>(randomEndpoints.anime)
	}

	/**
	 * Get random manga
	 */
	public getRandomManga() {
		return this.getResource<Manga>(randomEndpoints.manga)
	}

	/**
	 * Get random character
	 */
	public getRandomCharacters() {
		return this.getResource<Character>(randomEndpoints.characters)
	}

	/**
	 * Get random person
	 */
	public getRandomPeople() {
		return this.getResource<People>(randomEndpoints.people)
	}

	/**
	 * Get random user
	 */
	public getRandomUsers() {
		return this.getResource<User>(randomEndpoints.users)
	}
}
