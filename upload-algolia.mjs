import { algoliasearch } from 'algoliasearch';
import { globby } from 'globby';
import fs from 'fs/promises';
import { convert } from 'html-to-text';
import path from 'path';
import 'dotenv/config'; 

// configurazione
const appId = process.env.ALGOLIA_APP_ID;
const adminKey = process.env.ALGOLIA_ADMIN_KEY;
const indexName = process.env.ALGOLIA_INDEX_NAME;
const SITE_URL = process.env.SITE_URL || 'https://docs.veryant.com';

// inizializzazione per Algolia v5
const client = algoliasearch(appId, adminKey);

async function uploadToAlgolia() {
  try {
    console.log('--- Inizio indicizzazione locale per Algolia AI ---');

    const files = await globby('.vitepress/dist/**/*.html', {
      ignore: ['**/404.html', '**/dist/assets/**']
    });

    if (files.length === 0) {
      console.error('❌ Nessun file trovato. Hai eseguito "npm run build" prima di questo script?');
      return;
    }

    const records = await Promise.all(files.map(async (file) => {
      const htmlContent = await fs.readFile(file, 'utf-8');
      
      const text = convert(htmlContent, {
        wordwrap: false,
        selectors: [
          { selector: 'nav', format: 'skip' },
          { selector: 'aside', format: 'skip' },
          { selector: 'footer', format: 'skip' },
          { selector: 'a', options: { ignoreHref: true } }
        ]
      });

      /* let relativePath = file
        .replace('.vitepress/dist', '')
        .replace(/index\.html$/, '')
        .replace(/\.html$/, '');

      // assicurati che inizi sempre con /
      if (!relativePath.startsWith('/')) {
        relativePath = '/' + relativePath;
      } */

    let relativePath = file
        .replace('.vitepress/dist', '')
        .replace(/index\.html$/, '')
        .replace(/\.html$/, ''); 

    return {
        objectID: relativePath || '/',
        title: path.basename(file, '.html'),
        content: text.substring(0, 8000),
        url: `${SITE_URL}${relativePath.startsWith('/') ? relativePath.slice(1) : relativePath}`,
        lastUpdated: new Date().toISOString()
      };
    })); 

    /* return {
        objectID: relativePath,
        // Struttura che piace a DocSearch
        hierarchy: {
            lvl0: 'Documentazione',
            lvl1: path.basename(file, '.html'),
            lvl2: null
    },
      content: text.substring(0, 8000),
      url: `${SITE_URL.replace(/\/$/, '')}${relativePath}`,
      type: 'content'
    }})); */

      console.log(`Inviando ${records.length} pagine ad Algolia...`);
    
    // In Algolia v5, si passa indexName direttamente nel metodo saveObjects
    await client.saveObjects({
      indexName: indexName,
      objects: records
    });
    
    console.log(`✅ Successo! Dati caricati correttamente nell'indice: ${indexName}`);

  } catch (error) {
    console.error('❌ Errore durante il caricamento:', error);
  }
}

uploadToAlgolia();