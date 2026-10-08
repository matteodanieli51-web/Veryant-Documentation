// https://vitepress.dev/guide/custom-theme
// docs/.vitepress/theme/index.ts
import { h, watch, onMounted } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css' 

export default {
  extends: DefaultTheme, 
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // bottone AI
      'nav-bar-content-before': () => h('button', { 
        class: 'ask-ai-btn',
        onClick: () => { }
      }, [
        h('span', { class: 'ai-icon' }, '✨'),
        h('span', 'AI')
      ]),
      // footer
      'doc-after': () => h('div', { class: 'custom-footer' }, [
        // copyright
        h('p', { class: 'footer-copyright' }, 'Copyrights © 2026 All Rights Reserved by Veryant LLC'),
        // link
        h('div', { class: 'footer-links' }, [
          h('a', { href: 'https://www.veryant.com/it/legal.html' }, 'Terms of Use'),
          h('span', ' / '),
          h('a', { href: 'https://www.veryant.com/it/privacy.html' }, 'Privacy Policy'),
          h('span', ' / '),
          h('a', { href: 'mailto:webmaster@veryant.com' }, 'Site Feedback'),
          h('span', ' / '),
          h('a', { href: 'https://www.veryant.com/it/contact-request.html' }, 'Contact Us'),
          ]),
        // contatti
        h('div', { class: 'footer-contact' }, [
          h('a', 'Email: info@veryant.it'),
          h('span', ' / '),
          h('a', 'Tel: +1 619 453 0914'),
          ]),
        // PDF 
        h('div', { class: 'footer-pdf' }, [
          h('a', { href: '#', onClick: () => window.print(), class: 'print-link' }, 'Save this page as a PDF')
        ])
      ])
    })
  },
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      // Funzione per evidenziare il testo
      const highlightSearchTerm = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const term = urlParams.get('highlight'); // VitePress usa spesso questo parametro
        
        if (!term) return;

        const content = document.querySelector('.vp-doc');
        if (content) {
          const regex = new RegExp(`(${term})`, 'gi');
          content.innerHTML = content.innerHTML.replace(
            regex, 
            '<mark class="page-highlight">$1</mark>'
          );
        }
      };

      // Esegue l'evidenziazione al caricamento della pagina e quando il percorso cambia
      onMounted(highlightSearchTerm);
      watch(() => router.route.path, () => setTimeout(highlightSearchTerm, 100));
    }
  }
} satisfies Theme