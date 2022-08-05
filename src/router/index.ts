import { createRouter, createWebHistory, createWebHashHistory } from '../plugins'

import Home from '@/views/home.vue'
import Mine from '@/views/mine/index.vue'
import Detail from '@/views/mine/detail.vue'

const routes = [
  {
    name: 'Home',
    title: '这是home页面',
    path: '/home',
    component: Home
  },
  {
    name: 'Mine',
    title: '这是mine页面',
    path: '/mine',
    component: Mine
  },
  {
    name: 'MineDetail',
    title: '这是detail页面',
    path: '/mine/detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router


// router.push()
// router.back()
// router.replace()
// router.go()

