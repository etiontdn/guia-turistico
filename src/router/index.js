import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/InicioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio,
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => import('../views/FavoritosView.vue'),
    },
    {
      path: '/destino/:cidade',
      name: 'destino',

      component: () => import('../views/DestinoView.vue'),
    },
    {
      path: '/por-perto',
      name: 'por-perto',

      component: () => import('../views/PorPertoView.vue'),
    },
  ],
})

export default router
