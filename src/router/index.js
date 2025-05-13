import {createRouter, createWebHistory} from "vue-router";

// vistas principales
import Home from "../views/home.vue";
import About from "../views/about.vue";

// componentes de barra de navegacion de las rutas madres
import AporteHeader from "../components/header/aporteHeader.vue";
import ExperienciaHeader from "../components/header/experienciasHeader.vue";
import ProyectosHeader from "../components/header/proyectosHeader.vue";
import SocialHeader from "../components/header/socialHeader.vue";
import LegalHeader from "../components/header/legalHeader.vue";

// vistas legales
import Privacidad from "../views/legal/Privacidad.vue";
import TerminosYCondiciones from "../views/legal/TerminosYCondiciones.vue";
import PoliticaDeCookies from "../views/legal/PoliticaDeCookies.vue";
import Esal from "../views/legal/Esal.vue";

// Vistas Proyectos
import Programas from "../views/proyectos/programas.vue";
import PazaLaPaz from "../views/proyectos/pazaLaPaz.vue";
import MisionPazYCiudadania from "../views/proyectos/misionPazYCiudadania.vue";

// vistas sociales
import Publicaciones from "../views/social/publicaciones.vue";
import Voluntariado from "../views/social/voluntariado.vue";

// vistas de aportes
import Socio from "../views/aporta/socio.vue";
import Donar from "../views/aporta/donar.vue";
import HazteVoluntario from "../views/aporta/hazteVoluntario.vue";

// vistas de experiencia
import AreaInternacional from "../views/experiencias/areaInternacional.vue";
import experienciasLocales from "../views/experiencias/experienciasLocales.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/experiencia",
      name: "experiencia",
      component: ExperienciaHeader,
      children: [
        {
          path: "areaInternacional",
          name: "areaInternacional",
          component: AreaInternacional,
        },
        {
          path: "experienciasLocales",
          name: "experienciasLocales",
          component: experienciasLocales,
        },
      ],
    },
    {
      path: "/proyectos",
      name: "proyectos",
      component: ProyectosHeader,
      children: [
        {
          path: "programas",
          name: "programas",
          component: Programas,
        },
        {
          path: "pazaLaPaz",
          name: "pazaLaPaz",
          component: PazaLaPaz,
        },
        {
          path: "misionPazYCiudadania",
          name: "misionPazYCiudadania",
          component: MisionPazYCiudadania,
        },
      ],
    },
    {
      path: "/aporta",
      name: "aporta",
      component: AporteHeader,
      children: [
        {
          path: "socio",
          name: "socio",
          component: Socio,
        },
        {
          path: "donar",
          name: "donar",
          component: Donar,
        },
        {
          path: "hazteVoluntario",
          name: "hazteVoluntario",
          component: HazteVoluntario,
        },
      ],
    },
    {
      path: "/social",
      name: "social",
      component: SocialHeader,
      children: [
        {
          path: "voluntariado",
          name: "voluntariado",
          component: Voluntariado,
        },
        {
          path: "publicaciones",
          name: "publicaciones",
          component: Publicaciones,
        },
      ],
    },
    {
      path: "/legal",
      name: "vistasLegales",
      component: LegalHeader,
      children: [
        {
          path: "Privacidad",
          name: "Privacidad",
          component: Privacidad,
        },
        {
          path: "terminosYCondiciones",
          name: "terminosYCondiciones",
          component: TerminosYCondiciones,
        },
        {
          path: "politicaDeCookies",
          name: "politicaDeCookies",
          component: PoliticaDeCookies,
        },
        {
          path: "esal",
          name: "esal",
          component: Esal,
        },
      ],
    },
  ],
});

export default router;
