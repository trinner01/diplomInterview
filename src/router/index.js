import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Main.vue')
    },
    {
      path: '/cabinet',
      name: 'Cabinet',
      component: () => import('../views/UserCabinet.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/quiz/:category',
      name: 'Quiz',
      component: () => import('../Quiz/Quiz.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('current_user')
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router