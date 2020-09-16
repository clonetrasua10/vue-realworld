import {TagService} from "../common/api.service";

export default {
    namespaced: true,
    state: {
        tags: []
    },

    getters: {
        tags(state) {
            return state.tags.filter(e => e != "");
        }
    },

    mutations: {
        setTag(state, payload) {
            state.tags = payload;
        }
    },

    actions: {
        fetchTag({commit}) {
            TagService.getList()
                .then(({data}) => {
                    commit('setTag', data.tags);
                })
        }
    }
}