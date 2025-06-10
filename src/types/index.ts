export interface Credential {
  icon: string;
  title: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string | number;
  period: string;
  features: string[];
  buttonText: string;
  featured?: boolean;
  popular?: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  hours: string;
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface TrainerInfo {
  name: string;
  title: string;
  description: string;
  credentials: Credential[];
  image: string;
}

export interface ScrollPosition {
  x: number;
  y: number;
}
