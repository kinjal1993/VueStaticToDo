<template>
  <div id="main">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <router-link :to="{ name: 'home' }" class="navbar-brand"
            ><img height="20" alt="Vue logo" :src="logo"
          /></router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><router-link :to="{ name: 'about' }">About</router-link></li>
            <li><router-link :to="{ name: 'terms' }">Terms</router-link></li>
            <li>
              <router-link :to="{ name: 'play-ground' }"
                >Play Ground</router-link
              >
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
    <div class="container-fluid">
      <div class="panel panel-warning">
        <div class="panel-heading">
          Joke
          <label class="label pull-right label-default"
            >Total Jokes Read : {{ totalFetchedJokes }}</label
          >
        </div>
        <div class="panel-body">{{ joke }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {
      logo: require("@/assets/logo.png"),
    };
  },
  computed: {
    ...mapGetters({
      joke: "getCurrentJoke",
      totalFetchedJokes: "getTotalFetchedJokes",
    }),
  },
  mounted() {
    setInterval(async () => {
      await this.newJoke()
    }, 10000);
  },
  methods: {
    ...mapActions({ newJoke: "setCurrentJoke" }),
  },
};
</script>

