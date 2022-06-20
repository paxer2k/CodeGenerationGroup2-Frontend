import { createStore } from 'vuex';
import axios from '../axios-auth'

const store = createStore({
    state() {
        return {
            JWTtoken: null,
            token_type: null,
            expires_at: null,
            userID: null,
            roles: null,
        }
    },

    getters: {
        isAuthenticated(state) {
            return state.JWTtoken != null;
        },

        isEmployee(state) {
            return state.roles.includes("ROLE_EMPLOYEE")
        }
    },

    mutations: {
        authenticateUser(state, parameters) {
            state.JWTtoken = parameters.JWTtoken;
            state.token_type = parameters.token_type;
            state.expires_at = parameters.expires_at;
            state.userID = parameters.userID;
            state.roles = parameters.roles;
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
            let JWTtoken = localStorage.getItem('JWTtoken');
            let token_type = localStorage.getItem('token_type');
            let expires_at = localStorage.getItem('expires_at');
            let userID = localStorage.getItem('userID');
            let roles = localStorage.getItem('roles');

            if (!JWTtoken)
                return;

            // if the token is STILL valid, auto login for the user
            axios.defaults.headers.common["Authorization"] = "Bearer " + JWTtoken;
            commit('authenticateUser', {
                JWTtoken: JWTtoken,
                token_type: token_type,
                expires_at: expires_at,
                userID: userID,
                roles: roles,
            });
        },

        logout() {
            return new Promise((resolve) => {
                localStorage.clear();
                axios.defaults.headers.common["Authorization"] = "";
                this.state.JWTtoken = null;
                this.state.token_type = null;
                this.state.expires_at = null;
                this.state.userID = null,
                this.state.roles = null,
                resolve();
            })
        },

        login({ commit }, parameters) {
            return new Promise((resolve, reject) => {
                axios.post("/login", {
                    email: parameters.email,
                    password: parameters.password,
                })
                    .then((result) => {
                        axios.defaults.headers.common["Authorization"] = "Bearer " +
                            result.data.JWTtoken;

                        // if f5 is pressed or the page is shut off, store the bearer token in the browser so that the user can stay logged in if the open the page again
                        localStorage.setItem('JWTtoken', result.data.JWTtoken);
                        localStorage.setItem('token_type', result.data.token_type);
                        localStorage.setItem('expires_at', result.data.expires_at);
                        localStorage.setItem('userID', result.data.userID);
                        localStorage.setItem('roles', result.data.roles);

                        commit('authenticateUser', {
                            JWTtoken: result.data.JWTtoken,
                            token_type: result.data.token_type,
                            expires_at: result.data.expires_at,
                            userID: result.data.userID,
                            roles: result.data.roles,
                        });
                        resolve();
                    })
                    .catch((error) => {
                        this.errorMessage = error.response.data.message;
                        reject(error)
                    });
            })
        }
    }
});

export default store;