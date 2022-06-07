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
import TransactionList from './components/transactions/TransactionList.vue'
import CreateTransaction from './components/transactions/CreateTransaction.vue'
import Deposit from './components/accounts/Deposit.vue'
import Withdraw from './components/accounts/Withdraw.vue'

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
    { path: '/createaccount/:userID', component: CreateAccount, props: true},
    { path: '/transactions/:iban', component: TransactionList, props: true},
    { path: '/createtransaction/:iban', component: CreateTransaction, props: true},
    { path: '/deposit/:iban', component: Deposit, props: true },
    { path: '/withdraw/:iban', component: Withdraw, props: true}

];

const router = createRouter({
    "history": createWebHistory(),
    routes
})

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');