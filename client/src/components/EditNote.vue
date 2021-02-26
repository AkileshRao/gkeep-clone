<template>
  <form
    class="edit-text"
    @submit.prevent="editNote"
    v-bind:class="{ dark: mode == 'dark' }"
  >
    <div>
      <input
        v-model="note.title"
        name="title"
        class="title"
        placeholder="Title"
      />
      <input
        v-model="note.description"
        name="description"
        class="subtitle"
        placeholder="Add a note"
      />
    </div>
    <b-button
      native-type="submit"
      type="is-success"
      icon-right="paper-plane"
      class="submit-button"
    />
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import toast from "../ToastHelper";
export default {
  computed: mapGetters(["mode"]),
  props: ["note"],
  methods: {
    editNote() {
      this.$store.dispatch("editNote", this.note);
      this.$parent.close();
      this.$buefy.snackbar.open(toast("Note updated succesfully!", "success"));
    },
  },
};
</script>

<style lang='scss' scoped>
.edit-text {
  border-radius: 10px;
  padding: 1.2rem;
  background: white;
  transition: 0.2s all ease-in-out;
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    background: transparent;
    border: 0px;
    margin: 0.3rem 0;
    width: 100%;
    cursor: pointer;
  }
  .title {
    font-weight: 700 !important;
  }
  .submit-button {
    border-radius: 100px;
  }
}

.dark {
  background: #1a1a1a !important;
  input {
    color: #dadada;
  }
}
</style>