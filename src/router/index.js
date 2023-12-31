import { createRouter, createWebHistory } from 'vue-router'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/AboutView',
      name: 'AboutView',
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
