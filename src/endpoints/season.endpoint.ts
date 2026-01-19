export const seasonEndpoints = {
  byYearAndSeason: "/seasons/{year}/{season}",
  now: "/seasons/now",
  list: "/seasons",
  upcoming: "/seasons/upcoming",
} as const;
