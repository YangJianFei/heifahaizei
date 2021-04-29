import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LayoutFlow from '@/components/layout/layout-flow.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: LayoutFlow,
    redirect: '/index',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('../views/index.vue'),
        meta: {
          title: '网站导航'
        }
      },
      {
        path: 'ai-about',
        name: 'AiAbout',
        component: () => import('../views/About.vue'),
        meta: {
          title: '关于'
        }
      },
      {
        path: '404',
        name: 'NotFound',
        component: () => import('../components/tip/not-found.vue'),
        meta: {
          title: '不知所踪'
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    window.document.title = to.meta.title + '-黑发海贼-杨剑飞';
  }
  next();
})

export default router
