<template>
    <div>
        <div v-if="articlesCount == 0" class="article-preview">
            No articles are here... yet.
        </div>
        <div v-else-if="isLoading == true" class="article-preview">
            Loading articles...
        </div>
        <ArticlePreview v-else v-for="(article, index) in articles" :key="article.title + index"
                        :slug="article.slug"></ArticlePreview>
        <Pagination :articlesCount="articlesCount" :limit="limit" :currentPage.sync="currentPage"></Pagination>
    </div>
</template>
<script>
    import ArticlePreview from '../components/ArticlePreview'
    import Pagination from '../components/Pagination'
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                currentPage: 1
            }
        },
        props: {
            type: {
                type: String,
                default: "global"
            },
            offset: {
                type: Number,
                default: 0,
            },

            limit: {
                type: Number,
                default: 10,
            },

            author: {
                type: String
            },

            favorited: {
                type: String
            },

            tag: {
                type: String
            },
        },

        mounted() {
            this.fetchArticles();
        },

        methods: {
            fetchArticles() {
                //console.log(this.listConfig);
                this.$store.dispatch('article/fetchArticles', this.listConfig);
            },

            resetPage() {
                const {filters} = this;
                filters.offset = 0;
            }
        },

        computed: {
            ...mapGetters({
                articles: "article/articles",
                articlesCount: "article/articlesCount",
                isLoading: "article/isLoading",
            }),
            listConfig() {
                const {type, limit, offset} = this;
                const filters = {
                    offset,
                    limit
                };

                if (this.author) {
                    filters.author = this.author;
                }

                if (this.favorited) {
                    filters.favorited = this.favorited;
                }

                if (this.tag) {
                    filters.tag = this.tag;
                }

                return {
                    type, filters
                }
            },


        },

        watch: {
            currentPage: {
                handler() {
                    const {filters} = this.listConfig;
                    filters.offset = (this.currentPage - 1) * this.limit;
                    this.fetchArticles();
                }
            },

            author(){
                this.fetchArticles();
            }

            // listConfig: {
            //     deep: true,
            //     handler() {
            //         this.fetchArticles();
            //     }
            // }
        },

        components: {
            ArticlePreview,
            Pagination
        },


    }
</script>