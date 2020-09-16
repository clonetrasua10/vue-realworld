import JwtService from "../common/jwt.service";
import ApiService, {AuthService} from '../common/api.service';

export default {
    namespaced: true,
    state: {
        user: {},
        errors: {},
        isAuth: !!JwtService.getToken(),

    },
    getters: {
        user(state) {
            return state.user;
        },

        isAuth(state) {
            return state.isAuth;
        }

    },
    mutations: {
        setUser(state, payload) {
            JwtService.setToken(payload.token);
            ApiService.setHeader();
            state.user = payload;
            state.isAuth = true;
        },

        setErrors(state, payload) {
            state.errors = payload;
        },

        destroyUser(state) {
            state.isAuth = false;
            state.user = {};
            JwtService.destroyToken();
        }
    },
    actions: {
        async login({commit}, payload) {
            return AuthService.login(payload)
                .then(({data}) => {
                    commit('setUser', data.user);
                })
                .catch(({response}) => {
                    const {errors} = response.data;
                    commit('setErrors', errors);
                    throw errors;
                });
        },

        async register({commit}, payload) {
            //console.log(payload);
            return AuthService.register(payload).then(({data}) => {
                commit('setUser', data.user);
            }).catch(({response}) => {
                const {errors} = response.data;
                commit('setErrors', errors);
                throw errors;
            });
        },

        async update({commit}, payload) {
            const {email, image, bio, username, password} = payload;
            return AuthService.updateSetting({email, image, bio, username, password}).then(({data}) => {
                commit('setUser', data.user);
            }).catch(({response}) => {
                const {errors} = response.data;
                commit('setErrors', errors);
                throw errors;
            });
        },

        logout({commit}) {
            commit('destroyUser');
        },

        checkAuth({commit}) {
            const token = JwtService.getToken();
            if (token) {
                ApiService.setHeader();
                AuthService.getCurrentUser()
                    .then(({data}) => {
                        //console.log(data);
                        commit('setUser', data.user);
                    })
                    .catch(error => console.log(error))
            } else {
                commit('destroyUser');
            }
        }

    }
}