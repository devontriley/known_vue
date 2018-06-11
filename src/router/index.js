import Vue from 'vue'
import Router from 'vue-router'

// Import component routes
import Devon from '@/components/Devon'

Vue.use(Router)

// routes object accepts array of objects for multiple routes
export default new Router({
    routes: [
      {
        path: '/test',
        name: 'Devon',
        component: Devon
      }
    ]
})
