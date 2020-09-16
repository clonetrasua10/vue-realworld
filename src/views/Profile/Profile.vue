<template>
    <div class="profile-page">

        <div class="user-info">
            <div class="container">
                <div class="row">

                    <div class="col-xs-12 col-md-10 offset-md-1">
                        <img :src="profile.image" class="user-img"/>
                        <h4>{{profile.username}}</h4>
                        <p>
                            {{profile.bio}}
                        </p>
                        <router-link v-if="isAuthor" :to="{name:'settings'}"
                                     class="btn btn-sm btn-outline-danger action-btn">
                            <i class="ion-plus-round"></i>
                            &nbsp;
                            Settings
                        </router-link>
                        <button v-else-if="profile.following == false"
                                class="btn btn-sm btn-outline-secondary action-btn" @click="follow(profile.username)">
                            <i class="ion-plus-round"></i>
                            &nbsp;
                            Follow {{profile.username}}
                        </button>
                        <button v-else-if="profile.following == true"
                                class="btn btn-sm btn-secondary action-btn" @click="unfollow(profile.username)">
                            <i class="ion-plus-round"></i>
                            &nbsp;
                            Unfollow {{profile.username}}
                        </button>
                    </div>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">

                <div class="col-xs-12 col-md-10 offset-md-1">
                    <div class="articles-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li class="nav-item">
                                <router-link :class="{'nav-link': true, active: getRouteName == 'MyArticles'}"
                                             :to="{name: 'MyArticles', props:{username: username}}">My Articles
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :class="{'nav-link': true, active: getRouteName == 'MyFavorites'}"
                                             :to="{name: 'MyFavorites', props:{username: username}}">
                                    Favorited Articles
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <router-view></router-view>

                </div>

            </div>
        </div>

    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        props: {
            username: String
        },

        mounted() {
            this.$store.dispatch("profile/fetchProfile", this.username)
        },

        methods: {
            ...mapActions({
                "follow": "profile/follow",
                "unfollow": "profile/unfollow",
            })

            /*follow(username){
                console.log(username);
                this.$store.dispatch("profile/follow", username);
            },
            unfollow(username){
                this.$store.dispatch("profile/unfollow", username);
            }*/
        },

        computed: {
            ...mapGetters({
                "user": "auth/user",
                "profile": "profile/profile" || {}
            }),

            getRouteName() {
                return this.$route.name;
            },

            isAuthor() {
                return !!(this.user.username == this.profile.username);
            }
        },

        watch: {
            username() {
                this.$store.dispatch("profile/fetchProfile", this.username);
            }
        }
    }
</script>