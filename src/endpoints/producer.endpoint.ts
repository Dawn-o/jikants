export const producerEndpoints = {
  byId: "/producers/{id}",
  fullById: "/producers/{id}/full",
  external: "/producers/{id}/external",
  search: "/producers",
} as const;
