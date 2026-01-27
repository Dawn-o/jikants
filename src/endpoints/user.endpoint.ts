export const userEndpoints = {
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
} as const
