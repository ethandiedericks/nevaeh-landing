import { LucideIcon } from "lucide-react";

export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    technologies : string[];
    link: string;
  }
  
  export interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
  }

  export interface Skill {
    name: string;
    icon: LucideIcon;
    description: string;
    technologies: string[];
  }
  
  export interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
  }

  export interface MobileAppTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
  }

  export interface FAQs {
    question: string;
    answer: string;
  }