export const characterEndpoints = {
	fullById: '/characters/{id}/full',
	byId: '/characters/{id}',
	anime: '/characters/{id}/anime',
	manga: '/characters/{id}/manga',
	voiceActors: '/characters/{id}/voices',
	pictures: '/characters/{id}/pictures',
	search: '/characters'
} as const
