import Vue from 'vue'
import axios from 'axios'
import VueAxios from "vue-axios";
import JwtService from "./jwt.service";

const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = 'https://conduit.productionready.io/api';
    },

    setHeader() {
        Vue.axios.defaults.headers.common["Authorization"] = `Token ${JwtService.getToken()}`;
    },

    get(resource, params) {
        return Vue.axios.get(resource, params);
    },

    post(resource, params) {
        return Vue.axios.post(resource, params);
    },

    put(resource, params) {
        return Vue.axios.put(resource, params);
    },

    delete(resource) {
        return Vue.axios.delete(resource);
    },
}


export default ApiService;

export const AuthService = {
    login(form) {
        return ApiService.post('/users/login', {user: form});
    },

    register(form) {
        return ApiService.post('/users', {user: form});
    },

    getCurrentUser() {
        return ApiService.get('/user');
    },

    updateSetting(form) {
        return ApiService.put('/user', {user: form});
    }
}

export const ArticleService = {
    getList(type = 'global', params = {}) {
        //console.log(params)
        return ApiService.get('/articles' + ((type == 'feed') ? '/feed' : ''), {params})
    },

    detail(slug) {
        return ApiService.get(`/articles/${slug}`);
    },


    remove(slug) {
        return ApiService.delete(`/articles/${slug}`);
    },


    store(params) {
        return ApiService.post('/articles', {
            article: params
        })
    },

    update(slug, params) {
        return ApiService.put(`/articles/${slug}`, {
            article: params
        });
    },

    favorite(slug){
        return ApiService.post(`/articles/${slug}/favorite`);
    },

    unfavorite(slug){
        return ApiService.delete(`/articles/${slug}/favorite`);
    }


}

export const CommentService = {
    getList(slug) {
        return ApiService.get(`/articles/${slug}/comments`);
    },

    remove(slug, id) {
        return ApiService.delete(`/articles/${slug}/comments/${id}`);
    },

    create(slug, params) {
        return ApiService.post(`/articles/${slug}/comments`, {comment: params});
    }
}

export const ProfileService = {
    get(username) {
        return ApiService.get(`/profiles/${username}`);
    },

    follow(username){
        return ApiService.post(`/profiles/${username}/follow`);
    },
    unfollow(username){
        return ApiService.delete(`/profiles/${username}/follow`);
    }
}


export const TagService = {
    getList(){
        return ApiService.get('/tags');
    }
}