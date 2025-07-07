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
import Esal from "../views/legal/Esal.vue"; // Inicio de la vista legal
import Privacidad from "../views/legal/Privacidad.vue";
import TerminosYCondiciones from "../views/legal/TerminosYCondiciones.vue";
import PoliticaDeCookies from "../views/legal/PoliticaDeCookies.vue";

// Vistas Proyectos
import Proyectos from "../views/proyectos/proyectos.vue";
import PazaLaPaz from "../views/proyectos/pazaLaPaz.vue";
import MisionPazYCiudadania from "../views/proyectos/misionPazYCiudadania.vue";

// vistas sociales
import Social from "../views/social/social.vue";
import Publicaciones from "../views/social/publicaciones.vue";
import Voluntariado from "../views/social/voluntariado.vue";

// vistas de aportes
import Socio from "../views/aporta/socio.vue"; // Inicio de la vista de aportes
import Donar from "../views/aporta/donar.vue";
import HazteVoluntario from "../views/aporta/hazteVoluntario.vue";

// vistas de experiencia
import Experiencia from "../views/experiencias/experiencia.vue";
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
      redirect: {name: "experienciaInicio"},
      children: [
        {
          path: "",
          name: "experienciaInicio",
          component: Experiencia,
        },
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
      redirect: {name: "ProyectosInicio"},
      children: [
        {
          path: "",
          name: "ProyectosInicio",
          component: Proyectos,
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
      redirect: {name: "aportaInicio"},
      children: [
        {
          path: "",
          name: "aportaInicio",
          component: Socio,
        },
        {
          path: "Socio",
          name: "Socio",
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
      redirect: {name: "socialInicio"},
      children: [
        {
          path: "",
          name: "socialInicio",
          component: Social,
        },
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
      redirect: {name: "esal"},
      children: [
        {
          path: "",
          name: "no ay vista legal",
          redirect: "/legal/Esal",
        },
        {
          path: "Esal",
          name: "esal",
          component: Esal,
        },
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
      ],
    },
    {path: "/esal", redirect: "/legal/Esal"},
  ],
});

export default router;
