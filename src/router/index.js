import { createRouter, createWebHistory } from 'vue-router'
const LandingView = () => import('@/views/LandingView.vue')

const routes = [
  {
    path: '',
    name: 'LandingView',
    component: LandingView,
    children: [
      {
        path: '',
        name: 'DefaultLandingView',
        redirect: '/waitlist'
      },
      {
        path: '/waitlist',
        name: 'WaitlistPage',
        component: () =>
          import(
            /* webpackChunkName: "landing" */
            '@/layout/landing/WaitlistPage.vue'
          )
      },
      {
        path: '/home',
        name: 'HomePage',
        component: () =>
          import(
            /* webpackChunkName: "landing" */
            '@/layout/landing/HomePage.vue'
          )
      },
      {
        path: '/interest-calculator',
        name: 'InterestCalculatorPage',
        component: () =>
          import(
            /* webpackChunkName: "landing" */
            '@/layout/landing/InterestCalculatorPage.vue'
          )
      },
      {
        path: '/career',
        name: 'CareerPage',
        component: () =>
          import(
            /* webpackChunkName: "landing" */
            '@/layout/landing/CareerPage.vue'
          )
      },
      {
        path: '/business',
        name: 'BusinessPage',
        component: () =>
          import(
            /* webpackChunkName: "landing" */
            '@/layout/landing/BusinessPage.vue'
          )
      },
      {
        path: '/learn',
        name: 'LearnPage',
        component: () =>
          import(
            /* webpackChunkName: "landing" */
            '@/layout/landing/LearnPage.vue'
          )
      },
      {
        path: '/signin',
        name: 'SignInPage',
        component: () =>
          import(
            /* webpackChunkName: "landing" */
            '@/layout/landing/SignInPage.vue'
          )
      },
      {
        path: '/create-account',
        name: 'CreateAccountPage',
        component: () =>
          import(
            /* webpackChunkName: "landing" */
            '@/layout/landing/CreateAccountPage.vue'
          )
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ el: '#app', top: 0 })
      }, 500)
    })
  }
})

export default router
