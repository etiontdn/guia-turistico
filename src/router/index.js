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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/destino/:cidade',
      name: 'destino',

      component: () => import('../views/DestinoView.vue'),
    },
  ],
})

export default router
