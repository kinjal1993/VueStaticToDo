<template>
<div id="main">
  <nav-bar />
  <div class="container">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  },
};
</script>
