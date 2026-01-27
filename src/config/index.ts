/**
 * Config public exports
 *
 * Centralized exports for HTTP & logging configuration helpers.
 */

export { BASE_URL } from '../constants/base.const'
export {
	createHttpCacheInstance,
	DEFAULT_CACHE_TTL,
	isAxiosCacheInstance
} from './http.client'
export type { Logger, LoggingOptions } from './logging.interceptor'
export {
	attachLoggingInterceptors,
	DEFAULT_MAX_RESPONSE_DATA_LENGTH
} from './logging.interceptor'
