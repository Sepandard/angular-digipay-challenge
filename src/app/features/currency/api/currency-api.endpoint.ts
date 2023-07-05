const base = '/api';

export const CurrencyEndpoint = {
  listings: `${base}/v1/cryptocurrency/listings/latest`,
} as const;