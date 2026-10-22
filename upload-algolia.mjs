//   node upload-algolia.mjs            -> carica su Algolia
//   DRY_RUN=1 node upload-algolia.mjs  -> scrive solo algolia-records.json (nessun upload)

import { algoliasearch } from 'algoliasearch';
import { globby } from 'globby';
import * as cheerio from 'cheerio';
import fs from 'node:fs/promises';
import 'dotenv/config';

// configurazione
const APP_ID     = process.env.ALGOLIA_APP_ID;
const ADMIN_KEY  = process.env.ALGOLIA_ADMIN_KEY;      
const INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

const SITE_URL   = (process.env.SITE_URL || 'https://github.com/matteodanieli51-web/Veryant-Documentation').replace(/\/+$/, '');
const BASE       = process.env.SITE_BASE || '/Veryant-Documentation/';
const LANG       = process.env.SITE_LANG || 'en-US';
const DIST_DIR   = '.vitepress/dist';
const MAX_CHARS  = 4000;                                
const DRY_RUN    = process.env.DRY_RUN === '1';

const SECTIONS = {
  'release-notes': 'Release Notes',
  'release-overview': 'Release Overview',
  'is-cobol-evolve': 'isCOBOL Evolve',
};

const clean = (s) => (s || '').replace(/\u200b/g, '').replace(/\s+/g, ' ').trim();

function pageUrl(file) {l
  const rel = file.slice(DIST_DIR.length + 1);      
  const base = '/' + BASE.replace(/^\/+|\/+$/g, '') + '/';
  return `${SITE_URL}${base === '//' ? '/' : base}${rel}`;
}

function sectionName(file) {
  const parts = file.slice(DIST_DIR.length + 1).split('/');
  const key = parts[0] === 'pages' ? parts[1] : parts[0];
  return SECTIONS[key] || 'Documentation';
}

function emptyHierarchy() {
  return { lvl0: null, lvl1: null, lvl2: null, lvl3: null, lvl4: null, lvl5: null, lvl6: null };
}

function chunk(text) {
  if (text.length <= MAX_CHARS) return [text];
  const out = [];
  let rest = text;
  while (rest.length > MAX_CHARS) {
    let cut = rest.lastIndexOf('. ', MAX_CHARS);
    if (cut < MAX_CHARS * 0.5) cut = rest.lastIndexOf(' ', MAX_CHARS);
    if (cut <= 0) cut = MAX_CHARS;
    out.push(rest.slice(0, cut + 1).trim());
    rest = rest.slice(cut + 1);
  }
  if (rest.trim()) out.push(rest.trim());
  return out;
}

function extractRecords(file, html) {
  const $ = cheerio.load(html);
  const doc = $('.vp-doc').first();
  if (!doc.length) return [];                      

  doc.find('.header-anchor, button.copy, span.lang, .line-numbers-wrapper, script, style').remove();
  doc.find('p, li, td, th, tr, dt, dd, br, div, pre, h5, h6, blockquote').append(' ');

  const url = pageUrl(file);
  const lvl0 = sectionName(file);
  const pageTitle =
    clean(doc.find('h1').first().text()) ||
    clean($('title').text()).replace(/\s*\|.*$/, '') ||
    file.split('/').pop().replace(/\.html$/, '');

  const sections = [];
  let current = { hierarchy: { ...emptyHierarchy(), lvl0, lvl1: pageTitle }, level: 0, anchor: '', parts: [] }; // testo prima del primo titolo
  const stack = { lvl1: pageTitle, lvl2: null, lvl3: null, lvl4: null };

  const root = doc.children().length === 1 && doc.children().first().is('div') ? doc.children().first() : doc;
  root.children().each((_, el) => {
    const $el = $(el);
    const tag = (el.tagName || '').toLowerCase();
    const m = /^h([1-4])$/.exec(tag);
    if (m) {
      sections.push(current);
      const level = Number(m[1]);
      const text = clean($el.text());
      if (level === 1) { stack.lvl1 = text; stack.lvl2 = stack.lvl3 = stack.lvl4 = null; }
      if (level === 2) { stack.lvl2 = text; stack.lvl3 = stack.lvl4 = null; }
      if (level === 3) { stack.lvl3 = text; stack.lvl4 = null; }
      if (level === 4) { stack.lvl4 = text; }
      current = {
        hierarchy: { ...emptyHierarchy(), lvl0, ...stack },
        level,
        anchor: $el.attr('id') || '',
        parts: [],
      };
    } else {
      const text = clean($el.text());
      if (text) current.parts.push(text);
    }
  });
  sections.push(current);

  const records = [];
  let position = 0;
  for (const s of sections) {
    const fullUrl = s.anchor ? `${url}#${s.anchor}` : url;
    const text = s.parts.join(' ');
    if (s.level === 0 && !text) continue;              
    const base = {
      url: fullUrl,
      url_without_anchor: url,
      hierarchy: s.hierarchy,
      lang: LANG,
      weight: { level: 100 - Math.max(s.level, 1) * 10, position: 0 },
    };
    if (!text) {
      records.push({
        ...base,
        objectID: `${fullUrl}::h`,
        type: `lvl${Math.max(s.level, 1)}`,
        content: null,
        weight: { ...base.weight, position: position++ },
      });
      continue;
    }
    chunk(text).forEach((piece, i) => {
      records.push({
        ...base,
        objectID: `${fullUrl}::${i}`,
        type: 'content',
        content: piece,
        weight: { ...base.weight, level: base.weight.level - 5, position: position++ },
      });
    });
  }
  return records;
}

const INDEX_SETTINGS = {
  searchableAttributes: [
    'unordered(hierarchy.lvl0)',
    'unordered(hierarchy.lvl1)',
    'unordered(hierarchy.lvl2)',
    'unordered(hierarchy.lvl3)',
    'unordered(hierarchy.lvl4)',
    'unordered(hierarchy.lvl5)',
    'unordered(hierarchy.lvl6)',
    'content',
  ],
  attributesForFaceting: ['type', 'lang'],
  attributesToRetrieve: ['hierarchy', 'content', 'url', 'url_without_anchor', 'type'],
  attributesToHighlight: ['hierarchy', 'content'],
  attributesToSnippet: ['content:10'],
  customRanking: ['desc(weight.level)', 'asc(weight.position)'],
  distinct: true,
  attributeForDistinct: 'url',
  ignorePlurals: true,
  removeWordsIfNoResults: 'allOptional',
  minProximity: 1,
  separatorsToIndex: '_',
};

async function main() {
  const files = await globby(`${DIST_DIR}/**/*.html`, { ignore: [`${DIST_DIR}/404.html`, `${DIST_DIR}/assets/**`] });
  if (files.length === 0) throw new Error('Nessun file HTML trovato: esegui prima "npm run build".');

  const records = [];
  for (const file of files) {
    const html = await fs.readFile(file, 'utf-8');
    records.push(...extractRecords(file, html));
  }
  console.log(`Pagine: ${files.length} — record generati: ${records.length}`);

  if (DRY_RUN) {
    await fs.writeFile('algolia-records.json', JSON.stringify(records, null, 2));
    console.log('DRY_RUN: record scritti in algolia-records.json, nessun upload.');
    return;
  }

  if (!APP_ID || !ADMIN_KEY || !INDEX_NAME) {
    throw new Error('Mancano ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY o ALGOLIA_INDEX_NAME nel file .env');
  }
  const client = algoliasearch(APP_ID, ADMIN_KEY);

  await client.replaceAllObjects({ indexName: INDEX_NAME, objects: records, batchSize: 1000 });

  const { taskID } = await client.setSettings({ indexName: INDEX_NAME, indexSettings: INDEX_SETTINGS });
  await client.waitForTask({ indexName: INDEX_NAME, taskID });

  console.log(`✅ Caricati ${records.length} record nell'indice "${INDEX_NAME}"`);
}

main().catch((err) => {
  console.error('❌ Errore durante l\'indicizzazione:', err);
  process.exitCode = 1;
});
