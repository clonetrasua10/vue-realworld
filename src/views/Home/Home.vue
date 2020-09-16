<template>
    <div class="home-page">

        <div class="banner">
            <div class="container">
                <h1 class="logo-font">conduit</h1>
                <p>A place to share your knowledge.</p>
            </div>
        </div>

        <div class="container page">
            <div class="row">

                <div class="col-md-9">
                    <div class="feed-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li v-if="isAuth" class="nav-item">
                                <router-link :to="{name:'MyFeed'}"
                                             :class="{'nav-link': true, active: getRouteName == 'MyFeed'}">Your Feed
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'GlobalFeed'}"
                                             :class="{'nav-link': true, active: getRouteName == 'GlobalFeed'}">Global
                                    Feed
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <router-view></router-view>
                </div>

                <div class="col-md-3">
                    <div class="sidebar">
                        <p>Popular Tags</p>
                        <TagList :tags="tags"></TagList>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
    import TagList from '../../components/TagList'
    import {mapState, mapGetters} from 'vuex'

    export default {
        mounted() {
            this.$store.dispatch("tag/fetchTag");
        },

        computed: {
            ...mapState('auth', [
                "isAuth"
            ]),

            ...mapGetters({
                "tags": 'tag/tags'
            }),

            getRouteName() {
                return this.$route.name;
            }
        },

        components: {
            TagList
        }
    }
</script>

