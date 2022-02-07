import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ac66da0c = () => interopDefault(import('../pages/appointments.vue' /* webpackChunkName: "pages/appointments" */))
const _b6ec439c = () => interopDefault(import('../pages/clients.vue' /* webpackChunkName: "pages/clients" */))
const _5229cb0e = () => interopDefault(import('../pages/courts.vue' /* webpackChunkName: "pages/courts" */))
const _3ce028da = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4cc67aaa = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _bf9c132e = () => interopDefault(import('../pages/reports.vue' /* webpackChunkName: "pages/reports" */))
const _4310bbb6 = () => interopDefault(import('../pages/sales.vue' /* webpackChunkName: "pages/sales" */))
const _d8c15680 = () => interopDefault(import('../pages/stock.vue' /* webpackChunkName: "pages/stock" */))
const _17e8487c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/appointments",
    component: _ac66da0c,
    name: "appointments"
  }, {
    path: "/clients",
    component: _b6ec439c,
    name: "clients"
  }, {
    path: "/courts",
    component: _5229cb0e,
    name: "courts"
  }, {
    path: "/login",
    component: _3ce028da,
    name: "login"
  }, {
    path: "/products",
    component: _4cc67aaa,
    name: "products"
  }, {
    path: "/reports",
    component: _bf9c132e,
    name: "reports"
  }, {
    path: "/sales",
    component: _4310bbb6,
    name: "sales"
  }, {
    path: "/stock",
    component: _d8c15680,
    name: "stock"
  }, {
    path: "/",
    component: _17e8487c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
