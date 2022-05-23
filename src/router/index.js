import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/atendimento',
    name: 'atendimento',
    component: () => import('../views/Atendimento.vue')
  },
  {
    path: '/revisao',
    name: 'revisao',
    component: () => import('../views/RevisaoCadastro.vue')
  },
  {
    path: '/finalizado',
    name: 'finalizado',
    component: () => import('../views/Finalizado.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
