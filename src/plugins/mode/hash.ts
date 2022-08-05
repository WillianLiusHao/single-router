import { createWebHistory } from './history'
export const createWebHashHistory = () => {
  return createWebHistory('/#')
}
