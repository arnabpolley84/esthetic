export interface HeroSlide {
  id: number;
  eyebrow: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaAction: string;
  secondaryCtaText?: string;
  secondaryCtaAction?: string;
  image: string;
  fallbackImage?: string;
  alt: string;
  photoTitle?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  text: string;
  rating: number;
  badge?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  fallbackUrl?: string;
  title: string;
  caption: string;
  aspect?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
