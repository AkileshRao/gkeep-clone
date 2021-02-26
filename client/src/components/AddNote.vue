<template>
  <form
    class="add-text"
    v-bind:class="{ dark: mode == 'dark' }"
    @submit.prevent="submit"
  >
    <div>
      <input placeholder="Title" v-model="title" name="title" class="title" />
      <input
        placeholder="Take a note"
        v-model="description"
        name="description"
        class="subtitle"
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
  name: "AddNote",
  computed: mapGetters(["mode"]),
  data: () => ({
    title: "",
    description: "",
  }),
  methods: {
    submit() {
      if (this.title == "") {
        return this.$buefy.snackbar.open(
          toast("Title cannot be empty", "warning")
        );
      }
      this.$store.dispatch("addNote", {
        title: this.title,
        description: this.description,
      });
      this.title = this.description = "";
      this.$buefy.snackbar.open(toast("Note added succesfully!", "success"));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.add-text {
  background: white;
  border-radius: 10px;
  padding: 1.2rem;
  transition: 0.2s all ease-in-out;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    background: transparent;
    border: 0px;
    margin: 0.2rem 0;
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
