// scripts/prerender.mjs
// Runs AFTER `vite build` + `vite build --ssr`.
// Imports routes / meta helpers / render from the single SSR bundle.
// Writes pre-rendered HTML to dist/client/<route>/index.html then copies to dist/.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { cpSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root        = resolve(__dirname, '..');
const distClient  = resolve(root, 'dist/client');
const distSsr     = resolve(root, 'dist/ssr');
const distRoot    = resolve(root, 'dist');

// Everything comes from the single SSR bundle (no separate data file imports needed).
const { render, routes, getHeadTags } = await import(
  resolve(distSsr, 'entry-server.js')
);

// Template produced by client build.
const template = readFileSync(resolve(distClient, 'index.html'), 'utf-8');

let ok = 0;
let failed = 0;

for (const url of routes) {
  process.stdout.write(`Prerendering ${url} … `);

  let appHtml;
  try {
    appHtml = render(url);
  } catch (err) {
    console.error(`FAILED: ${err.message}`);
    failed++;
    continue;
  }

  const headTags = getHeadTags(url);

  const html = template
    .replace('<!--app-head-->', headTags)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outPath = url === '/'
    ? resolve(distClient, 'index.html')
    : resolve(distClient, url.replace(/^\//, ''), 'index.html');

  const outDir = dirname(outPath);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  writeFileSync(outPath, html, 'utf-8');
  console.log('✔');
  ok++;
}

console.log(`\nPrerendering done: ${ok} ok, ${failed} failed.\n`);

// Copy dist/client → dist so Vercel serves pre-rendered files from dist/.
cpSync(distClient, distRoot, { recursive: true, force: true });
console.log('Copied dist/client → dist');
