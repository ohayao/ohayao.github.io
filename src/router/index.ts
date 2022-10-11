import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw, RouterOptions } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/ui'
  },
  {
    path: '/ui',
    component: () => import('../App.vue'),
    redirect: '/ui/goapp',
    children: [
      {
        path: 'goapp',
        component: () => import('../views/index.vue')
      }
    ]
  }
];
const router = createRouter(<RouterOptions>{
  history: createWebHashHistory('#'),
  routes: routes
});

export default router;
