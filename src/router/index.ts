import ListaArticulos from '@/components/articulos/ListaArticulos.vue'
import PaginaNoEncontrada from '@/views/PaginaNoEncontrada.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListaArticulos,
      meta: { layout: 'default' }
    },
    {
      path: '/:catchAll(.*)',
      name: 'PaginaNoEncontrada',
      component: PaginaNoEncontrada
    }
  ]
})

export default router
