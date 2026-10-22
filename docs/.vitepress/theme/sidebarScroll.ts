// dopo ogni cambio pagina (link, risultato ricerca, avanti/indietro) porta la sidebar alla voce della pagina corrente.
import { watch, onMounted, nextTick } from 'vue'
import { useRoute } from 'vitepress'

function scrollSidebarToActive() {
  const sidebar = document.querySelector<HTMLElement>('.VPSidebar')
  if (!sidebar) return
  const active = sidebar.querySelector<HTMLElement>('.VPSidebarItem.is-active > .item')
  if (!active) return
  const s = sidebar.getBoundingClientRect()
  const a = active.getBoundingClientRect()
  // scorre solo se la voce non è già visibile, così i click nella sidebar non la fanno "saltare"
  if (a.top < s.top + 64 || a.bottom > s.bottom - 16) {
    sidebar.scrollTo({
      top: sidebar.scrollTop + (a.top - s.top) - s.height / 2 + a.height / 2,
      behavior: 'smooth'
    })
  }
}

function schedule() {
  // attende che le cartelle antenate si espandano prima di misurare la posizione
  nextTick(() => setTimeout(scrollSidebarToActive, 80))
}

export function useSidebarAutoScroll() {
  const route = useRoute()
  onMounted(schedule)
  watch(() => route.path, schedule)
}
