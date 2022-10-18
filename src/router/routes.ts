import { RouteRecordRaw } from 'vue-router'

import MainLayout from 'src/layouts/mainLayout/MainLayout.vue'
import Demo from '../pages/Demo.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/demo',
    component: MainLayout,
    children: [{ path: '', component: Demo }]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
