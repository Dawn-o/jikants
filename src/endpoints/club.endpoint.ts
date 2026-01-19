export const clubEndpoints = {
  byId: "/clubs/{id}",
  members: "/clubs/{id}/members",
  staff: "/clubs/{id}/staff",
  relations: "/clubs/{id}/relations",
  search: "/clubs",
} as const;
