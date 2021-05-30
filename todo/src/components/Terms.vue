<template>
    <div id="main">
        <span v-html="termsHtml" v-once></span>
    </div>
</template>

<script>
export default {
    name : 'terms',
    data() {
        return {
            'termsHtml' : "<h1>Terms HTML</h1><h3>Sub title</h3><p>Lorem ipsum content</p>"
        }
    }
}
</script>