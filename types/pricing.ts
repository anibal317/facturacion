export interface PricingFeature {
  text: string;
  savings?: string | boolean | null; // Added null as a possible type
  hasInfo?: boolean;
  isPremium?: boolean;
}

export interface PricingPlan {
  id: string;
  isRecommended: boolean;
  title: string;
  subtitle: string | null;
  originalPrice: number;
  discountedPrice: number | null;
  freeMonths: number | null;
  discount?: string | null;
  features: PricingFeature[];
  purchasePoints: string | number; // Changed to allow both string and number
}

