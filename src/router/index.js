import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '../views/ListView.vue'
import TeamsView from '../views/TeamsView.vue'
import MyTeamView from '../views/MyTeamView.vue'
import HomeView from "../views/HomeView.vue";
import 'bootstrap';


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/teams',
      name: 'teams',
      component: () => import('../views/TeamsView.vue')
    },
    {
      path: '/myteam',
      name: 'myteam',
      component: () => import('../views/MyTeamView.vue')
    },
    { 
      path: "/list/:id", 
      name: 'detail',
      component: () => import('../views/FootballDetail.vue'), 
      props: true
    },
    { 
      path: "/teams/:id", 
      name: 'teamsDetail',
      component: () => import('../views/TeamsDetailView.vue'), 
      props: true
    },
  ]
})

export default router
