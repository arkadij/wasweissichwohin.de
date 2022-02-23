import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import Locations from '../views/Locations.vue'
import Create from '../views/Create.vue'
import LocationDetails from '@/components/Locations/LocationDetails.vue'
import { projectAuth } from '../firebase/config.js'


  const requireAuth = (to, from, next) => {
    let user = projectAuth.currentUser
    if(!user){
      next({path: '/'})
    }else{
      next()
    }  
  }

  // prevent logged in users from seing welcome page
  const  requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if(user){
    next({ path: '/chatroom'})
  }else{
    next()
  }  
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations,
    beforeEnter: requireAuth
  },
  {
    path: '/locations/create',
    name: 'Create',
    component: Create,
    beforeEnter: requireAuth
  },
  {
    path: '/locations/:id',
    name: 'LocationDetails',
    component: LocationDetails,
    beforeEnter: requireAuth
  }      
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
