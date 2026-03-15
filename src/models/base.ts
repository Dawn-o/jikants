// Base models - character, common, image, person, resource
export interface Images {
	jpg: ImagesVariant
	webp?: ImagesVariant
}

export interface ImagesVariant {
	image_url: string | null
	small_image_url?: string | null
	medium_image_url?: string | null
	large_image_url?: string | null
	maximum_image_url?: string | null
}

export interface Person {
	mal_id: number
	url: string
	images: Images
	name: string
}

export interface PersonMeta extends Person {}

export interface CharacterMeta {
	mal_id: number
	url: string
	images: Images
	name: string
}

export interface CharacterVoiceActor {
	person: Person
	language: string
}

export type CharacterRole = 'Main' | 'Supporting'

export interface CharacterWithRole {
	character: CharacterMeta
	role: CharacterRole
	voice_actors?: CharacterVoiceActor[]
}

export interface Pagination {
	last_visible_page: number
	has_next_page: boolean
	current_page?: number
	items?: PaginationItems
}

export interface PaginationItems {
	count: number
	total: number
	per_page: number
}

export interface Statistics {
	completed: number
	on_hold: number
	dropped: number
	total: number
	scores: StatisticsScore[]
}

export interface StatisticsScore {
	score: number
	votes: number
	percentage: number
}

export interface News {
	mal_id: number
	url: string
	title: string
	date: string
	author_username: string
	author_url: string
	forum_url: string
	images: Images
	comments: number
	excerpt: string
}

export interface Forum {
	mal_id: number
	url: string
	title: string
	date: string
	author_username: string
	author_url: string
	comments: number
	last_comment: ForumLastComment
}

export interface ForumLastComment {
	url: string
	author_username: string
	author_url: string
	date: string | null
}

export interface MoreInfo {
	moreinfo: string | null
}

export interface Recommendation {
	entry: RecommendationEntry
	url: string
	votes: number
}

export interface RecommendationEntry {
	mal_id: number
	url: string
	images: Images
	title: string
}

export interface UserMeta {
	username: string
	url: string
	images: UserImages
}

export interface UserImages {
	jpg: {
		image_url: string | null
	}
	webp?: {
		image_url: string | null
	}
}

export type ForumFilter = 'all' | 'episode' | 'other'

export type SortOrder = 'asc' | 'desc'

export interface MalResource {
	mal_id: number
	type: string
	name: string
	url: string
}

export interface NamedResource {
	name: string
	url: string
}

export interface TitleResource {
	type: string
	title: string
}

export interface DateRange {
	from: string | null
	to: string | null
	prop: {
		from: {
			day: number | null
			month: number | null
			year: number | null
		}
		to: {
			day: number | null
			month: number | null
			year: number | null
		}
		string: string | null
	}
}

export interface RelationResource {
	relation: string
	entry: MalResource[]
}
