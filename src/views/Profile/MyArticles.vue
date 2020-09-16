<template>
    <div>
        <ArticleList type="global" :author="username" :limit="5"></ArticleList>
    </div>
</template>
<script>
    import ArticleList from '../../components/ArticleList'

    export default {
        props: {
            username: String
        },

        created() {
            //console.log(this.username);
        },

        components: {
            ArticleList
        }
    }
</script>