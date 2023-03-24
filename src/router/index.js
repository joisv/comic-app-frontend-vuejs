import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Trending from '../views/Trending.vue'
import Favourite from '../views/Favourite.vue'
import ShowView from '../views/detail/ShowView.vue'
import ReadAreaView from '../views/detail/ReadAreaView.vue'
import GenresView from '../views/GenresView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/trending',
      name: 'trending',
      component: () => import('../views/Trending.vue')
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: () => import('../views/Favourite.vue')
    },
    {
      path: '/detail/:slug',
      name: 'detail',
      component: () => import('../views/detail/ShowView.vue'),
      props: true
    },
    {
      path: '/readme/:slug',
      name: 'readarea',
      component: () => import('../views/detail/ReadAreaView.vue'),
      props: true
    },
    {
      path: '/genres',
      name: 'genres',
      component: () => import('../views/GenresView.vue'),
    }
  ]
})

export default router
