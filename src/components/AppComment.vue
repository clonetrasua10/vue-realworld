<template>
    <div class="card">
        <div class="card-block">
            <p class="card-text">{{comment.body}}</p>
        </div>
        <div class="card-footer">
            <router-link :to="{name:'MyArticles', params:{username: author.username || 'admin'}}"
                         class="comment-author">
                <img :src="author.image" class="comment-author-img"/>
            </router-link>
            &nbsp;
            <router-link :to="{name:'MyArticles', params:{username: author.username || 'admin'}}"
                         class="comment-author">{{author.username}}
            </router-link>
            <span class="date-posted">{{comment.createdAt | date}}</span>
            <span v-if="user.username == author.username" class="mod-options" @click.prevent="removeComment"><i
                    class="ion-trash-a"></i></span>
        </div>
    </div>
</template>
<script>
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

            comment: {
                type: Object,
                required: true
            }
        },

        mounted() {
            //console.log(this.comment);
        },
        methods: {
            removeComment() {
                this.$store.dispatch('comment/removeComment', {slug: this.slug, id: this.id}).catch(err => {
                    this.$emit('setErrors', err.errors);
                })
            }
        },


        computed: {
            author() {
                const {author} = this.comment;
                return author || {};
            },
            id() {
                return this.comment.id;
            }
        }
    }
</script>