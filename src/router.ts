import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from '@/views/authentication/Login.vue';
import Register from '@/views/authentication/Register.vue';
import TasksAll from '@/views/tasks/TasksAll.vue';
import TasksCreate from '@/views/tasks/TasksCreate.vue';
import TasksEdit from '@/views/tasks/TasksEdit.vue';
import Ponies from '@/components/MyDynamicPony.vue';

Vue.use(Router);

const isLoggedIn: boolean = false;


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tasks',
      name: 'tasks-all',
      component: TasksAll,
      beforeEnter: (to, from, next) => {
        if (isLoggedIn) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/tasks/new',
      name: 'tasks-create',
      component: TasksCreate,
      beforeEnter: (to, from, next) => {
        if (isLoggedIn) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/tasks/:id',
      name: 'tasks-edit',
      component: TasksEdit,
      beforeEnter: (to, from, next) => {
        if (isLoggedIn) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (!isLoggedIn) {
          next();
        } else {
          next('/ponies');
        }
      },
    },
    {
      path: '/ponies',
      name: 'ponies',
      component: Ponies,
    },
  ],
  linkActiveClass: 'active-menu-link',
});
