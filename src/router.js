import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import { hasWonGame } from './composables/useGameState';

import generatedRoutes from '~pages';

const routes = [
  ...setupLayouts(generatedRoutes).map((route, index) => {
    route.meta = generatedRoutes[index].meta || {};
    return route;
  }),
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const baseUrl = import.meta.env.VITE_BASE_URL || '/naruto-game/';

const router = createRouter({
  history: createWebHistory(baseUrl),
  routes,
});

router.beforeEach((to) => {
  if (to.path === '/prize' && !hasWonGame.value) return '/';
});

export default router;
