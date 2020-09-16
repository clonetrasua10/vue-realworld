<template>
    <nav>
        <ul class="pagination">
            <li v-for="n in paginationCount" :key="n" data-test="page-link-1"
                :class="{'page-item': true, active: n== currentPage}">
                <a href="" class="page-link" @click.prevent="nextPage(n)">{{n}}</a></li>
        </ul>
    </nav>
</template>
<script>
    export default {
        props: {
            articlesCount: {
                type: Number,
                default: 0,
                required: true,
            },
            limit: {
                type: Number,
                default: 1,
                required: true,
            },
            currentPage:{
                type: Number,
                required: true,
            }
        },

        mounted() {
        },

        methods: {
            nextPage(n) {
                this.$emit('update:currentPage', n);
            }
        },

        computed: {
            paginationCount() {
                return Math.ceil(this.articlesCount / this.limit);
            }
        }
    }
</script>