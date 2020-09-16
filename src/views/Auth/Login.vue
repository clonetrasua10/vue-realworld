<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign in</h1>
                    <p class="text-xs-center">
                        <a href="">Need an account?</a>
                    </p>

                    <ErrorNotify :errors="errors"></ErrorNotify>

                    <form>
                        <fieldset class="form-group">
                            <input v-model="form.email" class="form-control form-control-lg" type="text"
                                   placeholder="Email">
                        </fieldset>
                        <fieldset class="form-group">
                            <input v-model="form.password" class="form-control form-control-lg" type="password"
                                   placeholder="Password">
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right" @click.prevent="login">
                            Sign in
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import ErrorNotify from "../../components/ErrorNotify";
    export default {
        data() {
            return {
                form: {
                    email: null,
                    password: null
                }
            }
        },

        methods: {
            login() {
                this.$store.dispatch('auth/login', this.form).then(() => {
                    this.$router.push({name:'GlobalFeed'});
                })
            }
        },

        computed: {
            ...mapState('auth', [
                "errors"
            ])
        },

        components:{
            ErrorNotify
        }
    }
</script>