import HomePage from '../router/HomePage.vue'
import MovieDetailView from '../view/MovieDetailView.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        {
          path: '/detail/:id',
          component: MovieDetailView
        }
      ]
    }
  ]
})
