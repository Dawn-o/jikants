import { reviewEndpoints } from '../constants/endpoints'
import type {
	AnimeReviewWithUser,
	MangaReviewWithUser,
	ReviewParams
} from '../models'
import { BaseClient } from './base.client'

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
