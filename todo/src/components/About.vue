<template>
    <div id="main">
        <span v-html="aboutHtml" v-once></span>
    </div>
</template>

<script>
export default {
    name : 'about',
    data() {
        return {
            'aboutHtml' : "<h1>About Us HTML</h1><h3>Sub title</h3><p>Lorem ipsum content</p>"
        }
    }
}
</script>