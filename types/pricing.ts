export interface PricingFeature {
    text: string;
    savings?: string;
    isPremium?: boolean;
    hasInfo?: boolean;
  }
  
  export interface PricingPlan {
    id: string;
    isRecommended: boolean;
    title: string;
    subtitle: string;
    originalPrice: number;
    discountedPrice: number | null;
    discount?: number | null;
    freeMonths: number | null;
    features: PricingFeature[];
  }
  
  