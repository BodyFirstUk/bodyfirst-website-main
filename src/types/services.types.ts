/**
 * Type Definitions for Services Data
 * 
 * This file contains all TypeScript interfaces and types
 * used throughout the services section.
 * 
 * Optional: You can keep these in servicesData.ts or extract them here
 * for better organization in larger projects.
 */

/**
 * Represents a content section within a service detail page
 */
export interface ServiceSection {
  /** Section heading/title */
  title: string;
  
  /** Main paragraph content for the section */
  body: string;
  
  /** Optional bullet points to display under the body text */
  bullets?: string[];
}

/**
 * Represents a complete service with all its information
 */
export interface Service {
  /** URL-friendly identifier (used in routes) */
  slug: string;
  
  /** Display name of the service */
  name: string;
  
  /** Brief description shown on service cards (1-2 sentences) */
  shortDescription: string;
  
  /** Longer description shown in hero section of detail page */
  heroDescription: string;
  
  /** Array of content sections that make up the service detail page */
  sections: ServiceSection[];
  
  /** Optional: Image URL for the service */
  image?: string;
  
  /** Optional: Price information */
  price?: string | number;
  
  /** Optional: Duration in minutes */
  duration?: number;
  
  /** Optional: Category for filtering */
  category?: ServiceCategory;
}

/**
 * Service categories for potential filtering/grouping
 */
export type ServiceCategory = 
  | 'manual-therapy'
  | 'assessment'
  | 'technology-based'
  | 'massage'
  | 'recovery';

/**
 * Props for service card components
 */
export interface ServiceCardProps {
  service: Service;
  className?: string;
}

/**
 * Props for service section components
 */
export interface ServiceSectionProps {
  section: ServiceSection;
  index: number;
}

/**
 * Helper type for route parameters
 */
export interface ServiceRouteParams {
  slug: string;
}
