import { createRouter, createWebHashHistory } from 'vue-router'

const routes = []

const router = createRouter({
  // hash 模式路由
  history: createWebHashHistory(),
  routes
})

export default router
