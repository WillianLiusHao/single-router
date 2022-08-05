export const createWebHistory = (base: string = '') => {
  const push = (path: string) => {
    window.history.pushState(null, '', `${base}${path}`)
    return path
  }
  const replace = (path: string) => {
    window.history.replaceState(null, '', `${base}${path}`)
    return path
  }
  const go = (num: number) => {
    window.history.go(num)
    return base.includes('#') ? location.href.split('#')[1] : location.pathname
  }
  const historyRouter = {
    push,
    replace,
    go
  }
  return historyRouter
}
