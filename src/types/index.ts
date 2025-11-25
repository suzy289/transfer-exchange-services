export interface Agency {
  id: string;
  name: string;
  address: string;
  city: string;
  region: string;
  coords: {
    lat: number;
    lng: number;
  };
  phone: string;
  whatsapp: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  description: string;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  category: 'banking' | 'transfer' | 'exchange' | 'mobile';
  details: string[];
  detailsEn: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  nameFr: string;
  nameEn: string;
  price: number;
  currency: string;
  dailyLimit: number;
  features: string[];
  featuresEn: string[];
  badge?: 'popular' | 'premium' | 'gold' | null;
  popular: boolean;
}

export interface Founder {
  name: string;
  nameEn: string;
  birthDate: string;
  title: string;
  titleEn: string;
  career: string[];
  careerEn: string[];
  vision: string;
  visionEn: string;
  role?: string;
  roleEn?: string;
  values: string[];
  valuesEn: string[];
  contact: {
    email: string;
    phone: string;
  };
  image?: string;
}

export interface REAVEMStructure {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  status: 'active' | 'construction';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  content: string;
  contentEn: string;
  rating: number;
  image?: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  labelEn: string;
  icon: string;
}


