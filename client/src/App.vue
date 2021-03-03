<template>
  <div id="app" class="app" v-bind:class="{ dark: mode == 'dark' }">
    <div class="main">
      <Navbar />
      <AddNote />
      <Notes />
    </div>
  </div>
</template>

<script>
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import Navbar from "./components/Navbar";
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: mapGetters(["mode"]),
  mounted() {
    this.$store.dispatch("setNotes");
  },
  components: { AddNote, Notes, Navbar },
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

.app .main {
  height: 100%;
  width: 85%;
  margin: auto;
}

.dark {
  background: #292929;
}
</style>
