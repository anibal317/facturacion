export interface PlanFeature {
  id: number;
  text: string;
  savings: string | null;
  hasInfo: boolean;
  isPremium: boolean;
  planId: string;
}

export interface PricingPlan {
  id: number;
  planId: string;
  isRecommended: boolean;
  title: string;
  subtitle: string | null;
  originalPrice: number;
  discountedPrice: number | null;
  freeMonths: number | null;
  purchasePoints: string;
  planfeature: PlanFeature[];
}
