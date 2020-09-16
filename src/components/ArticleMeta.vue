<template>
    <div class="article-meta">
        <router-link :to="{name:'MyArticles', params:{username: profile.username || 'admin'}}"><img
                :src="profile.image"/></router-link>
        <div class="info">
            <router-link :to="{name:'MyArticles', params:{username: profile.username || 'admin'}}" class="author">
                {{profile.username}}
            </router-link>
            <span class="date">{{article.createdAt | date}}</span>
        </div>
        <button v-if="profile.following == false && isAuthor == false" class="btn btn-sm btn-outline-secondary"
                @click="$emit('follow', profile.username)">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{profile.username}}
        </button>
        <button v-if="profile.following == true && isAuthor == false" class="btn btn-sm btn-outline-secondary"
                @click="$emit('unfollow', profile.username)">
            <i class="ion-plus-round"></i>
            &nbsp;
            Unfollow {{profile.username}}
        </button>
        &nbsp;&nbsp;
        <button v-if="isAuthor == false" class="btn btn-sm"
                :class="{'btn-outline-primary': !article.favorited, 'btn-primary': article.favorited}"
                @click="$emit('processFavorite', article.favorited)">
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post <span class="counter">({{article.favoritesCount}})</span>
        </button>

        <router-link v-if="isAuthor == true" :to="{name:'EditArticle', params:{slug: article.slug}}"
                     class="btn btn-sm btn-outline-secondary"><i
                class="ion-edit"></i><span>&nbsp;Edit Article</span></router-link>
        &nbsp;&nbsp;
        <button v-if="isAuthor == true" class="btn btn-outline-danger btn-sm" @click="removeArticle"><i
                class="ion-trash-a"></i><span>&nbsp;Delete Article</span>
        </button>
    </div>
</template>
<script>
    export default {
        props: {
            article: {
                type: Object,
            },
            profile: {
                type: Object,

            },
            user: {
                type: Object,
                required: true
            }
        },

        created() {
            //(this.profile);
            // setTimeout(() =>{
            //     console.log(this.user, this.author)
            // }, 1000)
            //console.log(this.isAuthor);
        },

        methods: {
            removeArticle() {
                this.$emit('removeArticle');
            }
        },
        computed: {
            isAuthor() {
                return !!(this.user.username == this.profile.username);
            }
        }
    }
</script>