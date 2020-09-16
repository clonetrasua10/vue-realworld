<template>
    <div class="article-preview">
        <div class="article-meta">
            <router-link :to="{name:'MyArticles', params:{username: author.username || 'admin'}}"><img
                    :src="author.image"/></router-link>
            <div class="info">
                <router-link :to="{name:'MyArticles', params:{username: author.username || 'admin'}}" class="author">
                    {{author.username}}
                </router-link>
                <span class="date">{{format_date(article.createdAt)}}</span>
            </div>
            <button @click="processFavorite(article.favorited)" class="btn btn-sm pull-xs-right"
                    :class="{'btn-outline-primary': !article.favorited, 'btn-primary': article.favorited}">
                <i class="ion-heart"></i> {{article.favoritesCount}}
            </button>
        </div>
        <router-link :to="{name:'DetailArticle', params:{slug:article.slug || 'admin'}}" class="preview-link">
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
            <TagList :tags="article.tagList"></TagList>
        </router-link>
    </div>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex'
    import TagList from "./TagList";

    export default {
        props: {
            slug: {
                type: String,
                required: true,
            }
        },

        data() {
            return {
                article: {}
            }
        },

        mounted() {
            this.$store.dispatch("article/fetchArticle", this.slug)
                .then(data => {
                    this.article = data.article;
                })
        },

        methods: {
            ...mapActions({
                favorite: "article/favoriteArticle",
                unfavorite: "article/unfavoriteArticle",
            }),

            format_date(date) {
                return new Date(date).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                })
            },

            processFavorite(type) {
                if (!this.isAuth) {
                    this.$router.push({name: 'login'});
                    return;
                }
                if (!type) {
                    //console.log('favorite');
                    this.favorite(this.article.slug).then(data => {
                        this.article = data.article;
                    })
                } else {
                    //console.log('unfavorite');
                    this.unfavorite(this.article.slug).then(data => {
                        this.article = data.article;
                    })
                }
            }
        },

        computed: {
            ...mapGetters({isAuth: "auth/isAuth"}),
            author() {
                const {author} = this.article;
                return author || {};
            }
        },

        components: {
            TagList
        }
    }
</script>