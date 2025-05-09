import {createRouter, createWebHistory} from "vue-router";

// vistas principales
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProgramasView from "../views/ProgramasView.vue";
import VoluntariadoView from "../views/VoluntariadoView.vue";
import PublicacionesView from "../views/PublicacionesView.vue";
import AvisoPrivacidadView from "../views/AvisoPrivacidadView.vue";
import TerminosYCondicionesView from "../views/TerminosYCondicionesView.vue";
import PoliticaDeCookiesView from "../views/PoliticaDeCookiesView.vue";
import EsalView from "../views/EsalView.vue";
import SocioView from "../views/SocioView.vue";
import DonarView from "../views/DonarView.vue";
import HazteVoluntarioView from "../views/HazteVoluntarioView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/programas",
      name: "programas",
      component: ProgramasView,
    },
    {
      path: "/voluntariado",
      name: "voluntariado",
      component: VoluntariadoView,
    },
    {
      path: "/publicaciones",
      name: "publicaciones",
      component: PublicacionesView,
    },
    {
      path: "/avisoPrivacidad",
      name: "avisoPrivacidad",
      component: AvisoPrivacidadView,
    },
    {
      path: "/terminosYCondiciones",
      name: "terminosYCondiciones",
      component: TerminosYCondicionesView,
    },
    {
      path: "/politicaDeCookies",
      name: "politicaDeCookies",
      component: PoliticaDeCookiesView,
    },
    {
      path: "/esal",
      name: "esal",
      component: EsalView,
    },
    {
      path: "/socio",
      name: "socio",
      component: SocioView,
    },
    {
      path: "/donar",
      name: "donar",
      component: DonarView,
    },
    {
      path: "/hazteVoluntario",
      name: "hazteVoluntario",
      component: HazteVoluntarioView,
    },
  ],
});

export default router;
