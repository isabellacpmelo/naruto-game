import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'

const routes = setupLayouts(generatedRoutes)
  .map((route, index) => {
    route.meta = generatedRoutes[index].meta || {}

    return route
  })

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// router.beforeEach((to, from, next) => {
//     if(to.meta?.isAuthenticated){
//         next('/')
//     }
//     next()
// })

export default router
