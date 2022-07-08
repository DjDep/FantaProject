import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '../views/ListView.vue'
import TeamsView from '../views/TeamsView.vue'
import MyTeamView from '../views/MyTeamView.vue'
import HomeView from "../views/HomeView.vue";
import 'bootstrap';


Vue.use(VueRouter)
//routes alle varie pagine del sito
const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    //path principale
    {
      path: '/', 
      component: () => import('../views/HomeView.vue') 
    },
    //lista calciatori
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue')
    },
    //lista squadre
    {
      path: '/teams',
      name: 'teams',
      component: () => import('../views/TeamsView.vue')
    },
    //la mia squadra
    {
      path: '/myteam',
      name: 'myteam',
      component: () => import('../views/MyTeamView.vue')
    },
    //dettaglio calciatore
    { 
      path: "/list/:id", 
      name: 'detail',
      component: () => import('../views/FootballDetail.vue'), 
      props: true
    },
    //dettaglio squadra
    { 
      path: "/teams/:id", 
      name: 'teamsDetail',
      component: () => import('../views/TeamsDetailView.vue'), 
      props: true
    },
  ]
})

export default router
