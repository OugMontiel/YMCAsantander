import "./assets/base.css";

import {createApp} from "vue";
import VueLazyLoad from "vue3-lazyload";
import App from "./App.vue";
import router from "./router";
import ui from "@nuxt/ui/vue-plugin";

import {calcularAniosYMCA} from "./utils/composables/fechaYMCA.js";

const app = createApp(App);

// propiedades globales
app.config.globalProperties.$aniosYMCA = calcularAniosYMCA;

app.use(router);
app.use(ui);
app.use(VueLazyLoad, {
  loading: "@/assets/fondos/fondoAzulOpc1.webp", // Placeholder mientras carga (opcional)
  error: "@/assets/fondos/FondoIcono.webp", // Imagen en caso de error (opcional)
  observerOptions: {
    rootMargin: "0px",
    threshold: 0.1,
  },
  delay: 200,
  log: true,
  logLevel: "info",
  lifecycle: {
    // loading(el) {
    //   console.log("imagen cargando:", el);
    // },
    error(el) {
      console.error("error al cargar:", el);
    },
    // loaded(el) {
    //   console.log("imagen cargada:", el);
    // },
  },
});

app.mount("#app");
