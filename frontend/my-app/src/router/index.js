import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admArea',
    name: 'admArea',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminProdutos.vue')
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    // route level code-splitting
    // this generates a separate chunk (favoritos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "favoritos" */ '../views/Favorits.vue')
  },
  {
    path: '/historia',
    name: 'Registo de Compra',
    // route level code-splitting
    // this generates a separate chunk (historia.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "historia" */ '../views/History.vue')
  },
  {
    path: '/produto/:id',
    name: 'Info de Produto',
    // route level code-splitting
    // this generates a separate chunk (infoproduto.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "infoproduto" */ '../views/InfoProduct.vue')
  },
  {
    path: '/infouser',
    name: 'Info de Utilizador',
    // route level code-splitting
    // this generates a separate chunk (infouser.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "infouser" */ '../views/InfoUser.vue')
  },
  {
    path: '/registar',
    name: 'Registar Utilizador',
    // route level code-splitting
    // this generates a separate chunk (registar.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "registar" */ '../views/RegisterUser.vue')
  },
  {
    path: '/pesquisa/:plataforma',
    name: 'plataforma',
    // route level code-splitting
    // this generates a separate chunk (pesquisa.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pesquisa" */ '../views/Search.vue')
  },
  {
    path: '/alterarDadosUser',
    name: 'AlterarDadosUser',
    // route level code-splitting
    // this generates a separate chunk (pesquisa.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pesquisa" */ '../views/AlterarDadosUser.vue')
  },
  {
    path: '/alterarDadosProduto/:id',
    name: 'AlterarDadosProduto',
    // route level code-splitting
    // this generates a separate chunk (pesquisa.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pesquisa" */ '../views/AlterarDadosProduto.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (pesquisa.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pesquisa" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
