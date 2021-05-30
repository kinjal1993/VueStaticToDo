<template>
    <div id="main">
        <span>To Do Item {{ $route.params.id }}</span>
        <br>
        <span>Accessing id via props {{ id }}</span>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name : 'to-do-item',
    props : ['id'],
    data() {
        return {
            
        }
    }
}
</script>