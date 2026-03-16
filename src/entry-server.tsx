import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import AppShell from './AppShell';
import { servicesData } from './data/servicesData';
import { treatmentCategories } from './data/whatWeTreatData';
import { seoConfig } from './data/seoConfig';

// ─── Route list ────────────────────────────────────────────────────────────
export const routes: string[] = [
  '/',
  '/about',
  '/why-us',
  '/prices',
  '/contact',
  '/book',
  '/services',
  '/what-we-treat',
  ...servicesData.map((s) => `/services/${s.slug}`),
  ...treatmentCategories.map((c) => `/what-we-treat/${c.slug}`),
];

// ─── Per-page SEO meta ─────────────────────────────────────────────────────
const BASE_URL = 'https://bodyfirst.uk';
const OG_IMAGE = `${BASE_URL}/images/social-share-1200x630.png`;

export function getPageMeta(url: string): { title: string; description: string; canonical: string } {
  if (url === '/')           return { title: seoConfig.home.title,       description: seoConfig.home.description,       canonical: `${BASE_URL}/` };
  if (url === '/about')      return { title: seoConfig.about.title,      description: seoConfig.about.description,      canonical: `${BASE_URL}/about` };
  if (url === '/why-us')     return { title: seoConfig.whyUs.title,      description: seoConfig.whyUs.description,      canonical: `${BASE_URL}/why-us` };
  if (url === '/prices')     return { title: seoConfig.prices.title,     description: seoConfig.prices.description,     canonical: `${BASE_URL}/prices` };
  if (url === '/contact')    return { title: seoConfig.contact.title,    description: seoConfig.contact.description,    canonical: `${BASE_URL}/contact` };
  if (url === '/services')   return { title: seoConfig.services.title,   description: seoConfig.services.description,   canonical: `${BASE_URL}/services` };
  if (url === '/what-we-treat') return { title: seoConfig.whatWeTreat.title, description: seoConfig.whatWeTreat.description, canonical: `${BASE_URL}/what-we-treat` };
  if (url === '/book')       return { title: 'Book an Appointment | Body First UK', description: 'Book your physiotherapy appointment online at Body First UK, Hampton Hill, London.', canonical: `${BASE_URL}/book` };

  if (url.startsWith('/services/')) {
    const slug = url.slice('/services/'.length);
    const service = servicesData.find((s) => s.slug === slug);
    if (service) return {
      title: `${service.name} | Body First UK`,
      description: service.shortDescription || service.heroDescription,
      canonical: `${BASE_URL}/services/${slug}`,
    };
  }

  if (url.startsWith('/what-we-treat/')) {
    const slug = url.slice('/what-we-treat/'.length);
    const cat = treatmentCategories.find((c) => c.slug === slug);
    if (cat) return {
      title: `${cat.title} Treatment | Body First UK Physiotherapy`,
      description: cat.shortDescription,
      canonical: `${BASE_URL}/what-we-treat/${slug}`,
    };
  }

  return {
    title: 'Body First UK | Hampton Hill Physiotherapy',
    description: 'Expert physiotherapy & wellness in Hampton, London. HCPC registered. Insurance accepted.',
    canonical: `${BASE_URL}${url}`,
  };
}

export function getHeadTags(url: string): string {
  const { title, description, canonical } = getPageMeta(url);
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description.replace(/"/g, '&quot;')}" />`,
    `<meta name="robots" content="index,follow" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />`,
    `<meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}" />`,
    `<meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ].join('\n  ');
}

// ─── Render ────────────────────────────────────────────────────────────────
export function render(url: string): string {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </React.StrictMode>
  );
}
