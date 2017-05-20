import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Love from '@/components/LOVE'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/520',
      name: 'love',
      component: Love
    }
  ]
})
