<template>
    <div class="editor-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-10 offset-md-1 col-xs-12">
                    <ErrorNotify :errors="errors"></ErrorNotify>
                    <form>
                        <fieldset>
                            <fieldset class="form-group">
                                <input v-model="article.title" type="text" class="form-control form-control-lg"
                                       placeholder="Article Title">
                            </fieldset>
                            <fieldset class="form-group">
                                <input v-model="article.description" type="text" class="form-control"
                                       placeholder="What's this article about?">
                            </fieldset>
                            <fieldset class="form-group">
                                <textarea v-model="article.body" class="form-control" rows="8"
                                          placeholder="Write your article (in markdown)"></textarea>
                            </fieldset>
                            <fieldset class="form-group">
                                <input type="text" class="form-control" placeholder="Enter tags"
                                       @keypress.enter.prevent="addTag">
                                <TagList :type="'article'" :tags="article.tagList" @removeTag="removeTag"></TagList>
                            </fieldset>
                            <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click.prevent="Update">
                                Update Article
                            </button>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import ErrorNotify from "../../components/ErrorNotify";
    import {mapGetters} from 'vuex'
    import TagList from "../../components/TagList";

    export default {
        data() {
            return {errors: {}}
        },
        props: {
            slug: {
                type: String
            }
        },
        mounted() {
            this.$store.dispatch('article/fetchArticle', this.slug);
        },

        methods: {
            Update() {
                const {body, title, description, tagList} = this.article;
                this.$store.dispatch("article/updateArticle", {
                    slug: this.slug,
                    form: {body, title, description, tagList}
                })
                    .then(data => {
                        const {article} = data;
                        this.$router.push({name: 'DetailArticle', params: {slug: article.slug}});
                    })
                    .catch(err => {
                        this.errors = err.errors;
                        //console.log(this.errors);
                    });

            },

            addTag(event) {
                //this.form.tagList.push(event.target.value);
                this.$store.dispatch("article/addTag", event.target.value);
                event.target.value = "";
            },

            removeTag(tag) {
                this.$store.dispatch("article/removeTag", tag);
            }
        },

        computed: {
            ...mapGetters({
                "article": "article/article" || {},
            }),


        },

        components: {
            ErrorNotify,
            TagList
        }
    }
</script>