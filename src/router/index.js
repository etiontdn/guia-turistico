import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/InicioView.vue'
import Destino from '../views/DestinoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio,
    },
    {
      path: '/destino/:cidade',
      name: 'destino',

      component: Destino,
    },
  ],
})

export default router
