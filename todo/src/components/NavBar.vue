<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link :to="{name:'home'}" class="navbar-brand"><img height="20" alt="Vue logo" :src="logo"
        /></router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><router-link :to="{name:'about'}">About</router-link></li>
          <li><router-link :to="{name:'terms'}">Terms</router-link></li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      logo: require("@/assets/logo.png"),
    };
  },
};
</script>

