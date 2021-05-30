<template>
    <div id="main">
        <span v-html="Html" v-once></span>
        <p>Go back to <router-link :to = "{name : 'home'}">Home</router-link></p>
    </div>
</template>

<script>
export default {
    name : 'NotFound',
    data() {
        return {
            'Html' : "<h1>404</h1><h3>Page not found</h3>"
        }
    }
}
</script>