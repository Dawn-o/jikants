import type {
	DateRange,
	Images,
	MalResource,
	NamedResource,
	RelationResource,
	TitleResource
} from './base'

export interface Anime {
	mal_id: number
	url: string
	images: Images
	trailer: AnimeTrailer
	approved: boolean
	titles: TitleResource[]
	/** @deprecated Use `titles` array instead */
	title: string
	/** @deprecated Use `titles` array instead */
	title_english: string | null
	/** @deprecated Use `titles` array instead */
	title_japanese: string | null
	/** @deprecated Use `titles` array instead */
	title_synonyms: string[]
	type: AnimeType | null
	source: string | null
	episodes: number | null
	status: AnimeStatus | null
	airing: boolean
	aired: DateRange
	duration: string | null
	rating: AnimeRating | null
	score: number | null
	scored_by: number | null
	rank: number | null
	popularity: number | null
	members: number | null
	favorites: number | null
	synopsis: string | null
	background: string | null
	season: AnimeSeason | null
	year: number | null
	broadcast: AnimeBroadcast
	producers: MalResource[]
	licensors: MalResource[]
	studios: MalResource[]
	genres: MalResource[]
	explicit_genres: MalResource[]
	themes: MalResource[]
	demographics: MalResource[]
}

export interface AnimeFull extends Anime {
	relations: RelationResource[]
	theme: AnimeTheme
	external: NamedResource[]
	streaming: NamedResource[]
}

export interface AnimeTrailer {
	youtube_id: string | null
	url: string | null
	embed_url: string | null
	images?: AnimeTrailerImages
}

export interface AnimeTrailerImages {
	image_url: string | null
	small_image_url: string | null
	medium_image_url: string | null
	large_image_url: string | null
	maximum_image_url: string | null
}

export interface AnimeBroadcast {
	day: string | null
	time: string | null
	timezone: string | null
	string: string | null
}

export interface AnimeTheme {
	openings: string[]
	endings: string[]
}

export type AnimeType =
	| 'TV'
	| 'OVA'
	| 'Movie'
	| 'Special'
	| 'ONA'
	| 'Music'
	| 'CM'
	| 'PV'
	| 'TV Special'

export type AnimeStatus =
	| 'Finished Airing'
	| 'Currently Airing'
	| 'Not yet aired'

export type AnimeRating =
	| 'G - All Ages'
	| 'PG - Children'
	| 'PG-13 - Teens 13 or older'
	| 'R - 17+ (violence & profanity)'
	| 'R+ - Mild Nudity'
	| 'Rx - Hentai'

export type AnimeSeason = 'winter' | 'spring' | 'summer' | 'fall'

// Episode model
export interface AnimeEpisode {
	mal_id: number
	url: string | null
	title: string
	title_japanese: string | null
	title_romanji: string | null
	duration: number | null
	aired: string | null
	score: number | null
	filler: boolean
	recap: boolean
	forum_url: string | null
}

// Review model
import type { UserMeta } from './base'

export interface AnimeReview {
	mal_id: number
	url: string
	type: string
	reactions: ReviewReactions
	date: string
	review: string
	score: number
	tags: string[]
	is_spoiler: boolean
	is_preliminary: boolean
	episodes_watched: number | null
}

export interface AnimeReviewWithUser extends AnimeReview {
	user: UserMeta
}

export interface ReviewReactions {
	overall: number
	nice: number
	love_it: number
	funny: number
	confusing: number
	informative: number
	well_written: number
	creative: number
}

// Statistics model
import type { Statistics } from './base'

export interface AnimeStatistics extends Statistics {
	watching: number
	plan_to_watch: number
}

export interface AnimeUserUpdate {
	user: UserMeta
	score: number | null
	status: string
	episodes_seen: number | null
	episodes_total: number | null
	date: string
}

// Videos model
export interface AnimeVideos {
	promo: AnimePromoVideo[]
	episodes: AnimeEpisodeVideo[]
	music_videos: AnimeMusicVideo[]
}

export interface AnimePromoVideo {
	title: string
	trailer: AnimeTrailer
}

export interface AnimeEpisodeVideo {
	mal_id: number
	url: string
	title: string
	episode: string
	images: Images
}

export interface AnimeMusicVideo {
	title: string
	video: AnimeTrailer
	meta: AnimeMusicVideoMeta
}

export interface AnimeMusicVideoMeta {
	title: string | null
	author: string | null
}

// Character-Staff model
import type { CharacterVoiceActor, CharacterWithRole, PersonMeta } from './base'

export interface AnimeCharacter extends CharacterWithRole {
	voice_actors: CharacterVoiceActor[]
}

export interface AnimeStaff {
	person: PersonMeta
	positions: string[]
}
