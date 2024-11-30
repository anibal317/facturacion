export interface PricingFeature {
  text: string;
  savings?: string | boolean; // Permitir tanto string como boolean
  hasInfo?: boolean;
  isPremium?: boolean;
}

  
export interface PricingPlan {
  id: string;
  isRecommended: boolean;
  title: string;
  subtitle: string;
  originalPrice: number;
  discountedPrice: number | null; // Puede ser número o null
  freeMonths?: number | null; // Puede ser opcional y null
  discount?: string | null; // Puede ser cadena o null
  features: {
    text: string;
    savings?: string | boolean | undefined; // savings puede ser texto o booleano
    hasInfo?: boolean;
    isPremium?: boolean;
  }[];
}
