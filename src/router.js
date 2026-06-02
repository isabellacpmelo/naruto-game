import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'
import { hasWonGame } from './composables/useGameState'

const routes = setupLayouts(generatedRoutes)
  .map((route, index) => {
    route.meta = generatedRoutes[index].meta || {}

    return route
  })

const router = createRouter({
  history: createWebHistory('/naruto-game/'),
  routes,
})

router.beforeEach((to) => {
  if (to.path === '/prize' && !hasWonGame.value)
    return '/'
})

export default router
