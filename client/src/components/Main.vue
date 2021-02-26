<template>
  <div class="main">
    <Navbar />
    <AddNote />
    <Notes />
  </div>
</template>

<script>
import AddNote from "./AddNote";
import Notes from "./Notes";
import Navbar from "./Navbar";

export default {
  components: { AddNote, Notes, Navbar },
};
</script>

<style lang='scss' scoped>
.main {
  height: 100%;
  width: 85%;
  margin: auto;
}
</style>