import { App, shallowRef, Ref } from 'vue'
import { createWebHistory } from './mode/history'
import { createWebHashHistory } from './mode/hash'
import MyRouterviews from '@/component/MyRouterviews.vue'

type RouteType = {
  name: string
  path: string
  title: string
  component: any
}

interface VueRouterApp extends App {
  '$route'?: Object
}

interface RouterOption {
  history: any
  routes: RouteType[]
}

interface MyRouter {
  currentRoute: any
  push: Function
  replace: Function
  go: Function
  back: Function
  forward: Function
  install: any
}

// 全局 router 对象
let _router: MyRouter

const setCurrentRoute = (routes: any, path: string) => {
  const page = routes.find((x: RouteType) => x.path === path)
  return page
}

const createRouter = (options: RouterOption) => {
  
  const push = (path: string) => {
    const curpath = options.history.push(path)
    _router.currentRoute.value = setCurrentRoute(options.routes, curpath)
  }
  const replace = (path: string) => {
    const curpath = options.history.replace(path)
    _router.currentRoute.value = setCurrentRoute(options.routes, curpath)
  }
  const go = (num: number) => {
    const curpath = options.history.go(num)
    _router.currentRoute.value = setCurrentRoute(options.routes, curpath)
  }
  
  window.addEventListener('popstate', () => {
    console.log('popstate')
    const toPath = (location.href.indexOf('#') ? location.hash.split('#')[1] : location.pathname) as string
    _router.currentRoute.value = setCurrentRoute(options.routes, toPath)
  })

  const initPath = (location.href.indexOf('#') ? location.hash.split('#')[1] : location.pathname) as string
  const currentRoute = shallowRef(setCurrentRoute(options.routes, initPath))

  _router = {
    // [] todo: router-hooks
    // beforeEach
    // beforeResolve
    // afterEach
    currentRoute,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    install(app: VueRouterApp) {
      console.log('执行install Vue注册了router')
      app.component('MyRouterviews', MyRouterviews)
      app.$route = _router
      console.log(app)
    }
  }

  return _router
}

const useRouter = () => {
  return _router
}

export {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  useRouter
}
