import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import auth from './auth.module'
import article from './article.module'
import profile from './profile.module'
import comment from './comment.module'
import tag from './tag.module'

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        article,
        profile,
        comment,
        tag
    }
});
