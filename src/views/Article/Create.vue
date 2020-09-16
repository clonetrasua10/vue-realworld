<template>
    <div class="editor-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-10 offset-md-1 col-xs-12">
                    <ErrorNotify :errors="errors"></ErrorNotify>
                    <form>
                        <fieldset>
                            <fieldset class="form-group">
                                <input v-model="form.title" type="text" class="form-control form-control-lg"
                                       placeholder="Article Title">
                            </fieldset>
                            <fieldset class="form-group">
                                <input v-model="form.description" type="text" class="form-control"
                                       placeholder="What's this article about?">
                            </fieldset>
                            <fieldset class="form-group">
                                <textarea v-model="form.body" class="form-control" rows="8"
                                          placeholder="Write your article (in markdown)"></textarea>
                            </fieldset>
                            <fieldset class="form-group">
                                <input type="text" class="form-control" placeholder="Enter tags"
                                       @keypress.enter.prevent="addTag">
                                <TagList :type="'article'" :tags="form.tagList" @removeTag="removeTag"></TagList>
                            </fieldset>
                            <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click.prevent="publish">
                                Publish Article
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
    import TagList from "../../components/TagList";

    export default {
        data() {
            return {
                form: {
                    title: null,
                    description: null,
                    body: null,
                    tagList: []
                },
                errors: {}
            }
        },
        methods: {
            publish() {
                this.$store.dispatch("article/storeArticle", this.form)
                    .then(data => {
                        const {article} = data;
                        this.$router.push({name: 'DetailArticle', params: {slug: article.slug}});
                    })
                    .catch(err => {
                        this.errors = err.errors;
                        //console.log(this.errors);
                    })
            },

            addTag(event) {
                this.form.tagList.push(event.target.value);
                event.target.value = "";
            },

            removeTag(tag){
                this.form.tagList.splice(this.form.tagList.indexOf(tag), 1);
            }
        },

        components: {
            ErrorNotify,
            TagList
        }
    }
</script>