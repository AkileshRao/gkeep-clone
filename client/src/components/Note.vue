<template>
  <div
    class="note"
    v-bind:style="{
      background:
        note.color == 'transparent' && mode == 'light' ? 'white' : note.color,
      border: note.color == 'transparent' ? '2px solid' : 'none',
    }"
    v-bind:class="{ dark: mode == 'dark' }"
  >
    <div class="content">
      <h6
        v-bind:style="{
          color:
            mode == 'dark' && note.color == 'transparent'
              ? '#dadada'
              : 'initial',
        }"
      >
        {{ note.title }}
      </h6>
      <p
        v-bind:style="{
          color:
            mode == 'dark' && note.color == 'transparent'
              ? '#dadada'
              : 'initial',
        }"
      >
        {{ note.description }}
      </p>
    </div>
    <div class="actions">
      <button @click="setIsPinned()">
        <b-icon
          pack="fas"
          icon="thumbtack"
          size="is-small"
          v-bind:style="{
            color:
              mode == 'dark' && note.color == 'transparent'
                ? '#dadada'
                : 'initial',
          }"
        >
        </b-icon>
      </button>
      <button @click="isComponentModalActive = true">
        <b-icon
          pack="fas"
          icon="pencil-alt"
          size="is-small"
          v-bind:style="{
            color:
              mode == 'dark' && note.color == 'transparent'
                ? '#dadada'
                : 'initial',
          }"
        >
        </b-icon>
      </button>
      <button>
        <b-dropdown aria-role="list" position="is-top-right">
          <template #trigger>
            <b-icon
              pack="fas"
              icon="palette"
              size="is-small"
              v-bind:style="{
                color:
                  mode == 'dark' && note.color == 'transparent'
                    ? '#dadada'
                    : 'initial',
              }"
            >
            </b-icon>
          </template>
          <b-dropdown-item @click="changeColor('default')">
            <div class="block default"></div>
            Default
          </b-dropdown-item>
          <b-dropdown-item @click="changeColor('#ff7676')">
            <div class="block red"></div>
            Red
          </b-dropdown-item>
          <b-dropdown-item @click="changeColor('#8fbfff')">
            <div class="block blue"></div>
            Blue
          </b-dropdown-item>
          <b-dropdown-item @click="changeColor('#47f173')">
            <div class="block green"></div>
            Green
          </b-dropdown-item>
          <b-dropdown-item @click="changeColor('#ffdd57')">
            <div class="block yellow"></div>
            Yellow
          </b-dropdown-item>
        </b-dropdown>
      </button>
      <button @click="deleteNote">
        <b-icon
          pack="fas"
          icon="trash-alt"
          size="is-small"
          v-bind:style="{
            color:
              mode == 'dark' && note.color == 'transparent'
                ? '#dadada'
                : 'initial',
          }"
        >
        </b-icon>
      </button>
    </div>
    <b-modal
      v-model="isComponentModalActive"
      has-modal-card
      auto-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      class="modal"
      aria-modal
    >
      <template #default="props">
        <edit-note :note="note" @close="props.close"></edit-note>
      </template>
    </b-modal>
  </div>
</template>

<script>
import EditNote from "./EditNote.vue";
import { mapGetters } from "vuex";
import toast from "../ToastHelper";

export default {
  computed: mapGetters(["mode"]),
  components: { EditNote },
  name: "Note",
  props: ["note"],
  data() {
    return {
      isComponentModalActive: false,
    };
  },
  methods: {
    deleteNote() {
      this.$store.dispatch("deleteNote", this.note.id);
      this.$buefy.snackbar.open(toast("Note deleted succesfully!", "success"));
    },
    changeColor(color) {
      if (color == "default") {
        return this.$store.dispatch("changeColor", {
          id: this.note.id,
          color: "transparent",
        });
      }
      this.$store.dispatch("changeColor", { id: this.note.id, color });
    },
    setIsPinned() {
      this.$store.dispatch("setIsPinned", {
        id: this.note.id,
        isPinned: !this.note.isPinned,
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.note {
  border-color: white !important;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  background: white;
  box-sizing: border-box;
  .content {
    h6 {
      font-weight: 600;
      margin: 0.2rem 0;
      word-break: break-all;
      opacity: 0.8;
    }
    p {
      font-size: 0.9em;
      word-break: break-all;
      opacity: 0.8;
    }
  }
  .actions {
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-top: 2rem;
    transition: all 0.2s ease-in-out;
    button {
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      border-radius: 100%;
      border: none;
      background: transparent;
      &:hover {
        color: #000;
      }
      span {
        font-size: 1rem;
        opacity: 0.7;
      }
      .dropdown-item {
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 0.5rem;
        padding: 0.5rem 1rem !important;
        .block {
          height: 25px;
          width: 25px;
          border-radius: 100px;
        }
        .default {
          border: 2px solid rgba(0, 0, 0, 0.1);
        }
        .red {
          background: #ff7676;
        }
        .blue {
          background: #8fbfff;
        }
        .green {
          background: #47f173;
        }
        .yellow {
          background: #ffdd57;
        }
      }
    }
  }

  &:hover {
    cursor: pointer;
  }
  &:hover .actions {
    opacity: 1;
  }
}

.dark {
  .note {
    border-color: rgba(255, 255, 255, 0.1) !important;
  }
}

@media (max-width: 992px) {
  .note {
    .actions {
      opacity: 0.5;
    }
  }
}
</style>