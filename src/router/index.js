import Vue from 'vue'
import Router from 'vue-router'
import Request from '@/components/Request'
import Tables from '@/components/Tables'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/Request',
    name: 'Request',
    component: Request
  },
  {
    path: '/Tables',
    name: 'Tables',
    component: Tables
  }
  ]
})
