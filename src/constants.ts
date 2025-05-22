export enum PromoSource {
  Twitter = 'twitter',
  Reddit = 'reddit',
}

export const PROMO_CODES: Record<PromoSource, string> = {
  [PromoSource.Twitter]: 'TWITTER20',
  [PromoSource.Reddit]: 'REDDIT15',
};

export const PROMO_DISCOUNTS: Record<PromoSource, number> = {
  [PromoSource.Twitter]: 20,
  [PromoSource.Reddit]: 15,
};
