import "./assets/base.css";

import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import ui from "@nuxt/ui/vue-plugin";

import {calcularAniosYMCA} from "./utils/composables/fechaYMCA.js";

const app = createApp(App);

// propiedades globales
app.config.globalProperties.$aniosYMCA = calcularAniosYMCA;

app.use(router);
app.use(ui);

app.mount("#app");
