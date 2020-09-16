import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import("./assets/main.css");
import ErrorsFilter from './common/errors.filter';
import DateFilter from './common/date.filter';
import ApiService from "./common/api.service";


ApiService.init();
Vue.filter('error', ErrorsFilter);
Vue.filter('date', DateFilter);
new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        this.$store.dispatch('auth/checkAuth');
    }
}).$mount("#app");
