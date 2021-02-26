import Vue from 'vue'
import App from './App.vue'
import { store } from './NotesStore'
import Buefy from "buefy";
import './assets/css/main.css';
import "buefy/dist/buefy.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

Vue.component("vue-fontawesome", FontAwesomeIcon);
Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas",
  customIconPacks: {
    fas: {
      sizes: {
        default: "lg",
        "is-small": "1x",
        "is-medium": "2x",
        "is-large": "3x",
      },
      iconPrefix: "",
    },
  },
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
