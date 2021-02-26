<template>
  <div id="app" class="app" v-bind:class="{ dark: mode == 'dark' }">
    <Main />
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: mapGetters(["mode"]),
  mounted() {
    this.$store.dispatch("setNotes");
  },
  components: {
    Main,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

.app {
  width: 100%;
  min-height: 100vh;
  transition: 0.2s all ease-in-out;
  background: #f0f0f0;
}

.dark {
  background: #292929;
}
</style>
