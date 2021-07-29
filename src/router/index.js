import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetail from '../views/ProductDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  { 
    path: "*", 
    component: () => import(/* webpackChunkName: "about" */ '../views/404Page.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
