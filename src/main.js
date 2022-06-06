import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store/store'


import Home from './components/Home.vue';
import UserList from './components/users/UserList.vue'
import Login from './components/Login.vue'
import CreateUser from './components/users/CreateUser.vue'
import UserProfile from './components/users/UserProfile.vue'
import AccountList from './components/accounts/AccountList.vue'
import UpdateUser from './components/users/UpdateUser.vue'
import UpdateAccount from './components/accounts/UpdateAccount.vue'
import CreateAccount from './components/accounts/CreateAccount.vue'
// import the missing components


const routes = [
    { path: '/', component: Home },
    { path: '/users', component: UserList },
    { path: '/login', component: Login },
    { path: '/createuser', component: CreateUser},
    { path: '/profile', component: UserProfile},
    { path: '/accounts', component: AccountList},
    { path: '/updateuser/:userID', component: UpdateUser, props: true},
    { path: '/updateaccount/:iban', component: UpdateAccount, props: true},
    { path: '/createaccount', component: CreateAccount}

];

const router = createRouter({
    "history": createWebHistory(),
    routes
})

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');