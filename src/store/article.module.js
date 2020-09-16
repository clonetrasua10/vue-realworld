import {ArticleService} from "../common/api.service";

export default {
    namespaced: true,
    state: {
        articles: [],
        article: {
            tagList: []
        },
        articlesCount: 0,
        isLoading: true,
    },
    getters: {
        article(state) {
            return state.article || {};
        },

        articles(state) {
            return state.articles || [];
        },

        articlesCount(state) {
            return state.articlesCount || 0;
        },

        isLoading(state) {
            return state.isLoading || false;
        }

    },
    mutations: {
        setArticle(state, payload) {
            // console.log(payload);
            const {article} = payload;
            state.article = article;
        },

        setArticles(state, payload) {
            const {articles, articlesCount} = payload;
            state.articles = articles;
            state.articlesCount = articlesCount;
            state.isLoading = false;
        },

        setIsLoading(state, payload) {
            state.isLoading = payload;
        }
    },
    actions: {
        fetchArticles({commit}, {type, filters}) {
            //console.log(params);
            commit('setIsLoading', true);
            ArticleService.getList(type, filters)
                .then(({data}) => {
                    commit('setArticles', data);
                    //console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                })
        },

        fetchArticle({commit}, slug) {
            return ArticleService.detail(slug)
                .then(({data}) => {
                    commit('setArticle', data);
                    return data;
                })
                .catch((error) => {
                    throw error;
                    //console.log(error);
                })
        },

        storeArticle(context, payload) {
            return ArticleService.store(payload)
                .then(({data}) => {
                    return data;
                })
                .catch(({response}) => {
                    throw response.data;
                    //commit('setErrors', response.data.errors);
                })
        },


        addTag({state}, payload) {
            state.article.tagList.push(payload);
        },

        removeTag({state}, payload) {
            state.article.tagList.splice(state.article.tagList.indexOf(payload), 1);
        },

        updateArticle(context, {slug, form}) {
            // console.log(slug,form);
            return ArticleService.update(slug, form)
                .then(({data}) => {
                    return data;
                })
                .catch(({response}) => {
                    throw response.data;
                    //commit('setErrors', response.data.errors);
                })
        },

        removeArticle(context, slug) {
            // console.log(slug,form);
            return ArticleService.remove(slug)
                .then(({data}) => {
                    return data;
                })
                .catch(({response}) => {
                    throw response.data;
                    //commit('setErrors', response.data.errors);
                })
        },

        favoriteArticle(context, slug) {
            return ArticleService.favorite(slug)
                .then(({data}) => {
                    return data;
                })
                .catch(err => {
                    throw err;
                })
        },

        unfavoriteArticle(context, slug) {
            return ArticleService.unfavorite(slug)
                .then(({data}) => {
                    return data;
                })
                .catch(err => {
                    throw err;
                })
        }

    }
}