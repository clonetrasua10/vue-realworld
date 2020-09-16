<template>
    <div class="article-page">

        <div class="banner">
            <div class="container">

                <h1>{{article.title}}</h1>

                <ArticleMeta :user="user" :article="article" :profile="profile"
                             @removeArticle="removeArticle" @processFavorite="processFavorite" @follow="follow"
                             @unfollow="unfollow"></ArticleMeta>

            </div>
        </div>

        <div class="container page">

            <div class="row article-content">
                <div class="col-md-12">
                    <p>

                    </p>
                    <h2 id="introducing-ionic">{{article.description}}</h2>
                    <p>{{article.body}}</p>
                    <TagList :tags="article.tagList"></TagList>
                </div>


            </div>

            <hr/>

            <div class="article-actions">
                <ArticleMeta :user="user" :article="article" :profile="profile"
                             @removeArticle="removeArticle" @processFavorite="processFavorite" @follow="follow"
                             @unfollow="unfollow"></ArticleMeta>
            </div>

            <div class="row">
                <CommentContain v-if="isAuth" :slug="slug" :user="user" :author="author"></CommentContain>
                <div v-else class="col-xs-12 col-md-8 offset-md-2">
                    <p>
                        <router-link :to="{name:'login'}" class="">Sign in</router-link>
                        or
                        <router-link :to="{name:'register'}" class="">sign up</router-link>
                        to add comments on this article.
                    </p>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'
    import ArticleMeta from "../../components/ArticleMeta";
    import CommentContain from "../../components/CommentContain";
    import TagList from "../../components/TagList";

    export default {
        props: {
            slug: {
                type: String
            }
        },


        mounted() {
            this.$store.dispatch('article/fetchArticle', this.slug).then(() => {
                this.$store.dispatch("profile/fetchProfile", this.author.username)
            });

        },
        methods: {
            ...mapActions({
                favorite: "article/favoriteArticle",
                unfavorite: "article/unfavoriteArticle",
                follow: "profile/follow",
                unfollow: "profile/unfollow",
            }),

            processFavorite(type) {
                if (!this.isAuth) {
                    this.$router.push({name:'login'});
                    return;
                }
                if (!type) {
                    //console.log('favorite');
                    this.favorite(this.article.slug).then(() => {
                        this.$store.dispatch('article/fetchArticle', this.slug);
                    })
                } else {
                    //console.log('unfavorite');
                    this.unfavorite(this.article.slug).then(() => {
                        this.$store.dispatch('article/fetchArticle', this.slug);
                    })
                }
            },

            removeArticle() {
                this.$store.dispatch('article/removeArticle', this.slug)
                    .then(() => {
                        this.$router.push({name: 'GlobalFeed'});
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        },
        computed: {
            ...mapGetters({
                article: "article/article" || {},
                user: "auth/user" || {},
                profile: "profile/profile" || {},
                isAuth: "auth/isAuth" || false
            }),
            author() {
                const {author} = this.article;
                return author || {};
            }
        },

        components: {
            ArticleMeta,
            CommentContain,
            TagList
        }
    }
</script>

script