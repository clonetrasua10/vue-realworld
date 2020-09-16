import {CommentService} from "../common/api.service";

export default {
    namespaced: true,
    state: {
        comments: [],
        errors: []
    },
    getters: {
        comments(state) {
            return state.comments;
        },
        errors(state) {
            return state.errors;
        }
    },
    mutations: {
        setComments(state, payload) {
            state.comments = payload;
        },
        setErrors(state, payload) {
            state.errors = payload;
        }
    },
    actions: {
        fetchComments({commit}, slug) {
            CommentService.getList(slug)
                .then(({data}) => {
                    const {comments} = data;
                    commit('setComments', comments);
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async createComment({dispatch}, {slug, form}) {
            //console.log(slug,form);
            return await CommentService.create(slug, form)
                .then(() => {
                    //console.log(data);
                    dispatch('fetchComments', slug);
                })
                .catch(({response}) => {
                    throw response.data;
                    //commit('setErrors', response.data.errors);
                })
        },

        async removeComment({dispatch}, {slug, id}) {
            return CommentService.remove(slug, id)
                .then(() => {
                    dispatch('fetchComments', slug);
                }).catch(({response}) => {
                    throw response.data;
                    //commit('setErrors', response.data.errors);
                })

        }
    }
}