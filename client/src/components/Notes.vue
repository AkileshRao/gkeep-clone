<template>
  <div class="main-notes">
    <div class="pinned" v-if="pinnedNotes.length > 0">
      <h1 v-if="pinnedNotes.length > 0">PINNED</h1>
      <masonry
        :cols="{ default: 4, 1192: 3, 768: 2, 450: 1 }"
        :gutter="{ default: '20px', 700: '15px' }"
        class="notes pinnedNotes"
        v-if="pinnedNotes.length > 0"
      >
        <Note
          v-for="note in pinnedNotes"
          v-bind:key="note.id"
          v-bind:note="note"
        />
      </masonry>
    </div>

    <div class="unpinned" v-if="unpinnedNotes.length > 0">
      <h1 v-if="pinnedNotes.length > 0">OTHERS</h1>
      <masonry
        :cols="{ default: 4, 1192: 3, 768: 2, 450: 1 }"
        :gutter="{ default: '20px', 700: '15px' }"
        class="notes unpinnedNotes"
        v-if="unpinnedNotes.length > 0"
      >
        <Note
          v-for="note in unpinnedNotes"
          v-bind:key="note.id"
          v-bind:note="note"
        />
      </masonry>
    </div>

    <div v-if="notes.length <= 0" class="no-notes-section">
      <h1>Notes you add appear here</h1>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Note from "./Note";
import VueMasonry from "vue-masonry-css";
import { mapGetters } from "vuex";
Vue.use(VueMasonry);
export default {
  computed: mapGetters(["pinnedNotes", "unpinnedNotes", "notes"]),
  components: { Note },
};
</script>

<style lang='scss' scoped>
.main-notes {
  margin-top: 2rem;
  .pinned,
  .unpinned {
    margin: 2rem 0;
    h1 {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 3px;
      margin-bottom: 0rem;
      color: #929292;
    }
  }
  .no-notes-section {
    h1 {
      font-family: "DM Sans" !important;
      font-size: 3rem;
      font-weight: 700;
      opacity: 0.4;
      text-align: center;
      margin-top: 5rem;
    }
  }
}

@media (max-width: 550px) {
  .main-notes {
    .no-notes-section {
      h1 {
        font-size: 2rem;
      }
    }
  }
}
</style>