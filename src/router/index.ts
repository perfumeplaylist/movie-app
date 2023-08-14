import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '~/router/HomePage.vue'
// import ModalView from '~/router/ModalView.vue'
import MovieDetailView from '~/view/MovieDetailView.vue'
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
