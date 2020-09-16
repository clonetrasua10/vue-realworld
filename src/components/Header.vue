<template>
    <nav class="navbar navbar-light">
        <div class="container">
            <router-link class="navbar-brand" :to="{name:'GlobalFeed'}">conduit</router-link>
            <ul v-if="isAuth == false" class="nav navbar-nav pull-xs-right">
                <li class="nav-item">
                    <!-- Add "active" class when you're on that page" -->
                    <router-link :to="{name:'GlobalFeed'}" class="nav-link active" href="">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'login'}" class="nav-link" href="">Sign in</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'register'}" class="nav-link" href="">Sign up</router-link>
                </li>
            </ul>
            <ul v-else class="nav navbar-nav pull-xs-right">
                <li class="nav-item">
                    <!-- Add "active" class when you're on that page" -->
                    <router-link :to="{name:'GlobalFeed'}" class="nav-link active" href="">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'CreateArticle'}">
                        <i class="ion-compose"></i>&nbsp;New Post
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'settings'}">
                        <i class="ion-gear-a"></i>&nbsp;Settings
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'MyArticles', params: {username: user.username}}">
                        <i class="ion-gear-a"></i>&nbsp;{{user.username}}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        created() {

        },

        computed: {
            ...mapState('auth', [
                'user',
                'isAuth'
            ])
        },
        methods: {}
    }
</script>