const base = '/api';

export const CurrencyEndpoint = {
  cryptocurrency: `${base}/v1/cryptocurrency/map?start=1&limit=100&sort=id`,
} as const;
