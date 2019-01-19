import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tables from '@/components/Tables'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/',
    name: 'Tables',
    component: Tables
  }
  ]
})
