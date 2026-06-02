import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'

const routes = setupLayouts(generatedRoutes)
  .map((route, index) => {
    route.meta = generatedRoutes[index].meta || {}

    return route
  })

const router = createRouter({
  history: createWebHistory('/naruto-game/'),
  routes,
})

export default router
