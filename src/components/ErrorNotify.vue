<template>
    <ul class="error-messages">
        <li v-for="(err, index) in errors" :key="index">{{index}}: {{err | error}}</li>
    </ul>
</template>
<script>
    export default {
        props: {
            errors: {
                type: Object,
                required: true
            }
        }
    }
</script>