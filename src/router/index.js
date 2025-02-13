import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/Main.vue'
import UserCabinet from '../views/UserCabinet.vue'

const routes = [
  { 
    path: '/', 
    component: () => import('../views/Main.vue') // Явный импорт
  },
  { 
    path: '/cabinet', 
    component: () => import('../views/UserCabinet.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('current_user')
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router