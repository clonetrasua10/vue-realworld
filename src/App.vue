<template>
    <div id="app">
        <app-header></app-header>
        <router-view/>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import AppHeader from './components/Header'
    import AppFooter from './components/Footer'

    export default {
        data() {
            return {}
        },
        created() {

        },
        components: {
            AppHeader,
            AppFooter
        }
    }
</script>
<style>
    @import "https://fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic";
    @import "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css";
</style>