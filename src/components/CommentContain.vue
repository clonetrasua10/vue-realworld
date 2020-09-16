<template>
    <div class="col-xs-12 col-md-8 offset-md-2">
        <ErrorNotify :errors="errors"></ErrorNotify>
        <form class="card comment-form">
            <div class="card-block">
                <textarea v-model="form.body" class="form-control" placeholder="Write a comment..." rows="3"></textarea>
            </div>
            <div class="card-footer">
                <img :src="user.image" class="comment-author-img"/>
                <button class="btn btn-sm btn-primary" @click.prevent="postComment">
                    Post Comment
                </button>
            </div>
        </form>
        <app-comment v-for="comment in comments" :key="comment.id" :user="user" :comment="comment" :slug="slug"
                     @setErrors="setErrors"></app-comment>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import AppComment from '../components/AppComment'
    import ErrorNotify from "./ErrorNotify";

    export default {
        props: {
            slug: {
                type: String,
                required: true
            },
            user: {
                type: Object,
                required: true
            },

            author: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                form: {
                    body: null
                },
                errors: {},
            }
        },

        methods: {
            postComment() {
                this.$store.dispatch('comment/createComment', {slug: this.slug, form: this.form})
                    .then(() => {
                        this.form.body = "";
                    })
                    .catch((err) => {
                        //console.log(err);
                        this.errors = err.errors;
                        //console.log(this.errors);
                    })
            },

            setErrors(errors) {
                this.errors = errors;
            }
        },


        mounted() {
            this.$store.dispatch('comment/fetchComments', this.slug);
        },

        computed: {
            ...mapGetters({
                comments: "comment/comments",
                //errors: "comment/errors"
            })

        },

        components: {
            AppComment,
            ErrorNotify
        }
    }
</script>