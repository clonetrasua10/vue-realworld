import {ProfileService} from "../common/api.service";

export default {
    namespaced: true,
    state: {
        profile: {},
    },
    getters: {
        profile(state) {
            return state.profile || {};
        }
    },
    mutations: {
        setProfile(state, payload) {
            state.profile = payload;
        }
    },
    actions: {
        fetchProfile({commit}, payload) {
            ProfileService.get(payload)
                .then(({data}) => {
                    const {profile} = data;
                    //console.log(profile);
                    commit('setProfile', profile);
                })
                .catch(error => {
                    console.log(error)
                })
        },

        follow({commit}, payload) {
            //console.log(payload);
            ProfileService.follow(payload)
                .then(({data}) => {
                    const {profile} = data;
                    //console.log(profile);
                    commit('setProfile', profile);
                })
                .catch(error => {
                    console.log(error)
                })
        },

        unfollow({commit}, payload) {
            ProfileService.unfollow(payload)
                .then(({data}) => {
                    const {profile} = data;
                    //console.log(profile);
                    commit('setProfile', profile);
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}