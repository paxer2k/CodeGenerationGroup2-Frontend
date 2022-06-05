import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store/store'


import Home from './components/Home.vue';
import UserList from './components/users/UserList.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
// import the missing components


const routes = [
    { path: '/', component: Home },
    { path: '/users', component: UserList },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup}

];

const router = createRouter({
    "history": createWebHistory(),
    routes
})

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');