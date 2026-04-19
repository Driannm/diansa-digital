export interface PricingPlan {
    name: string;
    price: string;
    originalPrice?: string;
    discountBadge?: string; 
    description: string;
    features: string[];
    cta: string;
    highlighted: boolean;
    badge?: string;
  }