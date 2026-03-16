// scripts/prerender.mjs
// Runs AFTER `vite build` + `vite build --ssr`.
// For each route, renders the app to HTML and writes dist/<route>/index.html.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');
const distClientDir = resolve(root, 'dist/client');
const distSsrDir = resolve(root, 'dist/ssr');

// ─────────────────────────────────────────────
// Route list (mirrors src/AppShell.tsx Routes)
// ─────────────────────────────────────────────
// Dynamic slugs are loaded from the compiled data files produced by the SSR build.
const { servicesData } = await import(resolve(distSsrDir, 'data/servicesData.js'));
const { treatmentCategories } = await import(resolve(distSsrDir, 'data/whatWeTreatData.js'));

const serviceRoutes = servicesData.map((s) => `/services/${s.slug}`);
const conditionRoutes = treatmentCategories.map((c) => `/what-we-treat/${c.slug}`);

const routes = [
  '/',
  '/about',
  '/why-us',
  '/prices',
  '/contact',
  '/book',
  '/services',
  '/what-we-treat',
  ...serviceRoutes,
  ...conditionRoutes,
];

// ─────────────────────────────────────────────
// Load template
// ─────────────────────────────────────────────
const templatePath = resolve(distClientDir, 'index.html');
const template = readFileSync(templatePath, 'utf-8');

// ─────────────────────────────────────────────
// Load the SSR render function
// ─────────────────────────────────────────────
const { render } = await import(resolve(distSsrDir, 'entry-server.js'));

// ─────────────────────────────────────────────
// Per-page SEO meta data (mirrors src/data/seoConfig.ts)
// ─────────────────────────────────────────────
const { seoConfig } = await import(resolve(distSsrDir, 'data/seoConfig.js'));

function getPageMeta(url) {
  if (url === '/') return { title: seoConfig.home.title, description: seoConfig.home.description, canonical: 'https://bodyfirst.uk/' };
  if (url === '/about') return { title: seoConfig.about.title, description: seoConfig.about.description, canonical: 'https://bodyfirst.uk/about' };
  if (url === '/why-us') return { title: seoConfig.whyUs.title, description: seoConfig.whyUs.description, canonical: 'https://bodyfirst.uk/why-us' };
  if (url === '/prices') return { title: seoConfig.prices.title, description: seoConfig.prices.description, canonical: 'https://bodyfirst.uk/prices' };
  if (url === '/contact') return { title: seoConfig.contact.title, description: seoConfig.contact.description, canonical: 'https://bodyfirst.uk/contact' };
  if (url === '/book') return { title: 'Book an Appointment | Body First UK', description: 'Book your physiotherapy appointment online at Body First UK, Hampton Hill, London.', canonical: 'https://bodyfirst.uk/book' };
  if (url === '/services') return { title: seoConfig.services.title, description: seoConfig.services.description, canonical: 'https://bodyfirst.uk/services' };
  if (url === '/what-we-treat') return { title: seoConfig.whatWeTreat.title, description: seoConfig.whatWeTreat.description, canonical: 'https://bodyfirst.uk/what-we-treat' };

  // Dynamic service page
  if (url.startsWith('/services/')) {
    const slug = url.replace('/services/', '');
    const service = servicesData.find((s) => s.slug === slug);
    if (service) return {
      title: `${service.name} | Body First UK`,
      description: service.shortDescription || service.heroDescription,
      canonical: `https://bodyfirst.uk/services/${slug}`,
    };
  }

  // Dynamic condition page
  if (url.startsWith('/what-we-treat/')) {
    const slug = url.replace('/what-we-treat/', '');
    const cat = treatmentCategories.find((c) => c.slug === slug);
    if (cat) return {
      title: `${cat.title} Treatment | Body First UK Physiotherapy`,
      description: cat.shortDescription,
      canonical: `https://bodyfirst.uk/what-we-treat/${slug}`,
    };
  }

  return {
    title: 'Body First UK | Hampton Hill Physiotherapy',
    description: 'Expert physiotherapy & wellness in Hampton, London. Sports massage, dry needling, shockwave therapy. HCPC registered. Insurance accepted.',
    canonical: `https://bodyfirst.uk${url}`,
  };
}

function buildHeadTags(url) {
  const { title, description, canonical } = getPageMeta(url);
  const ogImage = 'https://bodyfirst.uk/images/social-share-1200x630.png';

  return `
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${ogImage}" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${ogImage}" />`.trim();
}

// ─────────────────────────────────────────────
// Prerender
// ─────────────────────────────────────────────
for (const url of routes) {
  console.log(`Prerendering: ${url}`);

  let appHtml = '';
  try {
    appHtml = render(url);
  } catch (err) {
    console.error(`  ✖  Failed to render ${url}:`, err.message);
    continue;
  }

  const headTags = buildHeadTags(url);

  const html = template
    .replace('<!--app-head-->', headTags)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Write to dist/client/<route>/index.html
  const outputPath = url === '/'
    ? resolve(distClientDir, 'index.html')
    : resolve(distClientDir, url.slice(1), 'index.html');

  const outputDir = dirname(outputPath);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(outputPath, html, 'utf-8');
  console.log(`  ✔  Written to ${outputPath.replace(distClientDir, 'dist/client')}`);
}

console.log('\nPrerendering complete! Copy dist/client → dist for deployment.');

// Copy dist/client to dist root (Vercel serves from dist)
import { cpSync } from 'node:fs';
cpSync(distClientDir, distDir, { recursive: true, force: true });
console.log('  Copied dist/client → dist');
