import {
	clubEndpoints,
	producerEndpoints,
	seasonEndpoints,
	topEndpoints,
	watchEndpoints
} from '../endpoints'
import type {
	Anime,
	AnimeSeason,
	Character,
	Club,
	ClubMember,
	ClubRelations,
	ClubSearchParams,
	ClubStaff,
	Manga,
	NamedResource,
	People,
	Producer,
	ProducerFull,
	ProducerSearchParams,
	SeasonParams,
	SeasonsList,
	TopAnimeParams,
	TopCharactersParams,
	TopMangaParams,
	TopPeopleParams,
	WatchEpisode,
	WatchPromo
} from '../models'
import { BaseClient } from './base.client'

/**
 * **Clubs Client**
 *
 * Client used to access the Club Endpoints.
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class ClubsClient extends BaseClient {
	/**
	 * @returns Club resource
	 * @param id Club ID
	 */
	public getClubsById(id: number) {
		return this.getResource<Club>(clubEndpoints.byId, { id })
	}

	/**
	 * @returns Club members resource
	 * @param id Club ID
	 * @param params
	 */
	public getClubMembers(id: number, params: Partial<{ page: number }> = {}) {
		return this.getResource<ClubMember[]>(clubEndpoints.members, { id }, params)
	}

	/**
	 * @returns Club staff
	 * @param id Club ID
	 */
	public getClubStaff(id: number) {
		return this.getResource<ClubStaff[]>(clubEndpoints.staff, { id })
	}

	/**
	 * @returns Club relations
	 * @param id Club ID
	 */
	public getClubRelations(id: number) {
		return this.getResource<ClubRelations>(clubEndpoints.relations, { id })
	}

	/**
	 * @returns Search results for Clubs
	 * @param params
	 */
	public getClubSearch(params: Partial<ClubSearchParams> = {}) {
		return this.getResource<Club[]>(clubEndpoints.search, {}, params)
	}
}

/**
 * **Producers Client**
 *
 * Client used to access the Producers Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class ProducersClient extends BaseClient {
	/**
	 * Get producer resource
	 * @param id Producer ID
	 */
	public getProducerById(id: number) {
		return this.getResource<Producer>(producerEndpoints.byId, { id })
	}

	/**
	 * Get complete producer resource data
	 * @param id Producer ID
	 */
	public getProducerFullById(id: number) {
		return this.getResource<ProducerFull>(producerEndpoints.fullById, { id })
	}

	/**
	 * Get producer's external links
	 * @param id Producer ID
	 */
	public getProducerExternal(id: number) {
		return this.getResource<NamedResource[]>(producerEndpoints.external, { id })
	}

	/**
	 * Get all Producers within the given filter. Returns all Producers if no filters are given.
	 * @param searchParams Filter parameters
	 */
	public getProducersSearch(searchParams?: Partial<ProducerSearchParams>) {
		return this.getResource<Producer[]>(
			producerEndpoints.search,
			{},
			searchParams
		)
	}
}

/**
 * **Top Client**
 *
 * Client used to access the Top Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class TopClient extends BaseClient {
	/**
	 * Get the top Animes
	 * @param searchParams Filter parameters
	 */
	public getTopAnime(searchParams?: Partial<TopAnimeParams>) {
		return this.getResource<Anime[]>(topEndpoints.anime, {}, searchParams)
	}

	/**
	 * Get the top Mangas
	 * @param searchParams Filter parameters
	 */
	public getTopManga(searchParams?: Partial<TopMangaParams>) {
		return this.getResource<Manga[]>(topEndpoints.manga, {}, searchParams)
	}

	/**
	 * Get the top Characters
	 * @param searchParams Filter parameters
	 */
	public getTopCharacters(searchParams?: Partial<TopCharactersParams>) {
		return this.getResource<Character[]>(
			topEndpoints.characters,
			{},
			searchParams
		)
	}

	/**
	 * Get the top People
	 * @param searchParams Filter parameters
	 */
	public getTopPeople(searchParams?: Partial<TopPeopleParams>) {
		return this.getResource<People[]>(topEndpoints.people, {}, searchParams)
	}
}

/**
 * **Seasons Client**
 *
 * Client used to access the Seasons Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class SeasonsClient extends BaseClient {
	/**
	 * Get the seasonal anime by year and season
	 * @param year Season year
	 * @param season Season value
	 * @param searchParams Filter parameters
	 */
	public getSeason(
		year: number,
		season: AnimeSeason,
		searchParams?: Partial<SeasonParams>
	) {
		return this.getResource<Anime[]>(
			seasonEndpoints.byYearAndSeason,
			{ year, season },
			searchParams
		)
	}

	/**
	 * Get current seasonal anime
	 * @param searchParams Filter parameters
	 */
	public getSeasonNow(searchParams?: Partial<SeasonParams>) {
		return this.getResource<Anime[]>(seasonEndpoints.now, {}, searchParams)
	}

	/**
	 * Get available list of seasons
	 */
	public getSeasonsList() {
		return this.getResource<SeasonsList[]>(seasonEndpoints.list)
	}

	/**
	 * Get upcoming season's anime
	 * @param searchParams Filter parameters
	 */
	public getSeasonUpcoming(searchParams?: Partial<SeasonParams>) {
		return this.getResource<Anime[]>(seasonEndpoints.upcoming, {}, searchParams)
	}
}

/**
 * **Watch Client**
 *  Client used to access the Watch Endpoint:
 *
 *  See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class WatchClient extends BaseClient {
	/**
	 * @returns Recently added episodes
	 */
	public getWatchRecentEpisodes() {
		return this.getResource<WatchEpisode[]>(watchEndpoints.recentEpisodes)
	}

	/**
	 * @returns Recently Popular episodes
	 */
	public getWatchPopularEpisodes() {
		return this.getResource<WatchEpisode[]>(watchEndpoints.popularEpisodes)
	}

	/**
	 * @returns Recently added promotional videos
	 */
	public getWatchRecentPromos(params: Partial<{ page: number }> = {}) {
		return this.getResource<WatchPromo[]>(
			watchEndpoints.recentPromos,
			{},
			params
		)
	}

	/**
	 * @returns Popular promotional videos
	 */
	public getWatchPopularPromos() {
		return this.getResource<WatchPromo[]>(watchEndpoints.popularPromos)
	}
}
