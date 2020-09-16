<template>
    <div class="settings-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Your Settings</h1>

                    <form v-if="isAuth">
                        <fieldset>
                            <fieldset class="form-group">
                                <input v-model="user.image" class="form-control" type="text"
                                       placeholder="URL of profile picture">
                            </fieldset>
                            <fieldset class="form-group">
                                <input v-model="user.username" class="form-control form-control-lg" type="text"
                                       placeholder="Your Name">
                            </fieldset>
                            <fieldset class="form-group">
                                <textarea v-model="user.bio" class="form-control form-control-lg" rows="8"
                                          placeholder="Short bio about you"></textarea>
                            </fieldset>
                            <fieldset class="form-group">
                                <input v-model="user.email" class="form-control form-control-lg" type="text"
                                       placeholder="Email">
                            </fieldset>
                            <fieldset class="form-group">
                                <input v-model="user.password" class="form-control form-control-lg" type="password"
                                       placeholder="Password">
                            </fieldset>
                            <fieldset class="form-group">


                                <button @click.prevent="update" class="btn btn-lg btn-primary pull-xs-right m-l-3">
                                    Update Settings
                                </button>

                                <button @click.prevent="logout" class="btn btn-lg btn-outline-danger pull-xs-right">
                                    Logout
                                </button>
                            </fieldset>

                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import {mapState, mapGetters} from 'vuex';


    // import {mapState} from 'vuex'

    export default {
        data() {
            return {}
        },

        created() {
        },

        methods: {
            update() {
                this.$store.dispatch('auth/update', this.user).then(() => {
                    this.$router.push({name: 'GlobalFeed'});
                })
            },

            logout() {
                this.$store.dispatch('auth/logout').then(() => {
                    this.$router.push({name: 'GlobalFeed'});
                })
            }
        },

        computed: {
            ...mapState('auth', [
                "isAuth"
            ]),
            ...mapGetters({
                user: "auth/user" || {}
            }),
            // user() {
            //     return this.$store.getters["auth/user"] || {};
            // }
        }
    }
</script>