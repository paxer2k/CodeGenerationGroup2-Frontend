import { createStore } from 'vuex';
import axios from '../axios-auth'

const store = createStore({
    state() {
        return {
            token: null,
            username: null,
        }
    },

    getters: {

    },

    mutations: {
        authenticateUser(state, parameters) {
            state.token = parameters.token;
            state.username = parameters.username;
        },

        // logout(state) {
        //     state.id = null;
        //     state.token = null;
        //     state.username = null;
        //     state.role = null;
        // }
    },

    // action has to call the mutation method to change the state
    actions: {

        autoLogin({ commit }) {
            let token = localStorage.getItem('token');
            let username = localStorage.getItem('username');

            if (!token)
                return;

            // if the token is STILL valid, auto login for the user
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            commit('authenticateUser', {
                token: token,
                username: username,
            });
        },

        logout() {
            return new Promise((resolve) => {
                localStorage.clear();
                axios.defaults.headers.common["Authorization"] = "";
                this.state.token = null;
                this.state.username = null;
                resolve();
            })
        },

        login({ commit }, parameters) {
            return new Promise((resolve, reject) => {
                axios.post("/login", {
                    username: parameters.username,
                    password: parameters.password,
                })
                    .then((result) => {
                        axios.defaults.headers.common["Authorization"] = "Bearer " +
                            result.data.token;

                        // if f5 is pressed or the page is shut off, store the bearer token in the browser so that the user can stay logged in if the open the page again
                        localStorage.setItem('token', result.data.token);
                        localStorage.setItem('username', result.data.username);

                        commit('authenticateUser', {
                            token: result.data.token,
                            username: result.data.username,
                        });
                        resolve();
                    })
                    .catch((error) => {
                        reject(error)
                    });
            })
        }
    }
});

export default store;