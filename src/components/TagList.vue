<template>
    <ul class="tag-list">
        <li v-for="(tag, index) in tags" :key="index" class="tag-pill tag-default">
            <i v-if="type == 'article'" class="ion-close-round" @click="$emit('removeTag', tag)"></i>
            {{tag}}
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            tags: {
                type: Array,
            },
            type: {
                type: String,
                default: "global",
            }
        },

        mounted() {

        },

        computed: {
            getRouteName(){
                return this.$route.name;
            }
        }
    }
</script>