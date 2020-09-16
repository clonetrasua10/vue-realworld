<template>
    <div>
        <ArticleList type="global" :favorited="username" :limit="5"></ArticleList>
    </div>
</template>
<script>
    import ArticleList from '../../components/ArticleList'
    export default {
        props: {
            username: String
        },

        components:{
            ArticleList
        }
    }
</script>