const base = '/api';

export const CurrencyEndpoint = {
  ticker: `${base}/v1/cryptocurrency/listings/latest`,
} as const;
