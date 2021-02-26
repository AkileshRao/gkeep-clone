<template>
  <div class="navbar">
    <div class="toggle">
      <label class="switch">
        <input type="checkbox" v-on:change="setMode" />
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setMode() {
      if (this.$store.state.mode == "light") {
        this.$store.commit("SET_MODE", "dark");
      } else {
        this.$store.commit("SET_MODE", "light");
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding-top: 2rem;
  margin-bottom: 2rem;
  .switch {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 25px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #b4b4b4;
    transition: 0.2s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.2s;
  }

  input:checked + .slider {
    background-color: #4b61b0;
  }
  input:checked + .slider:before {
    transform: translateX(18px);
  }

  .slider,
  .slider:before {
    border-radius: 100px;
  }
}
</style>