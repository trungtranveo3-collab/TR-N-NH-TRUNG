
// FIX: Import `React` to make the `React` namespace available for `React.ReactNode`.
import React from 'react';

export interface PricingPlan {
  title: string;
  price: string;
  saving?: string;
  isRecommended?: boolean;
  isBestValue?: boolean;
  items: string[];
}

export interface Testimonial {
  avatar: string;
  name: string;
  age: number;
  location: string;
  quote: string;
}

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}
