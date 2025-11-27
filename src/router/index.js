import {createRouter, createWebHistory} from "vue-router";
// vistas de en construccion
const EnConstruccion = () => import("../components/util/EnConstruccion.vue"); // nuevo componente genérico

// vistas principales
const Home = () => import("../views/home.vue");
const About = () => import("../views/about.vue");

// componentes de barra de navegacion de las rutas madres
const AporteHeader = () => import("../components/header/aporteHeader.vue");
const ExperienciaHeader = () => import("../components/header/experienciasHeader.vue");
const ProyectosHeader = () => import("../components/header/proyectosHeader.vue");
const SocialHeader = () => import("../components/header/socialHeader.vue");
const LegalHeader = () => import("../components/header/legalHeader.vue");

// vistas legales
const Esal = () => import("../views/legal/Esal.vue"); // Inicio de la vista legal
const Privacidad = () => import("../views/legal/Privacidad.vue");
const TerminosYCondiciones = () => import("../views/legal/TerminosYCondiciones.vue");
const PoliticaDeCookies = () => import("../views/legal/PoliticaDeCookies.vue");

// Vistas Proyectos
const Proyectos = () => import("../views/proyectos/proyectos.vue");
const PazaLaPaz = () => import("../views/proyectos/pazaLaPaz.vue");
const MisionPazYCiudadania = () => import("../views/proyectos/misionPazYCiudadania.vue");

// vistas sociales
const Social = () => import("../views/social/social.vue");
const Publicaciones = () => import("../views/social/publicaciones.vue");
const Voluntariado = () => import("../views/social/voluntariado.vue");

// vistas de aportes
const Socio = () => import("../views/aporta/socio.vue"); // Inicio de la vista de aportes
const Donar = () => import("../views/aporta/donar.vue");
const HazteVoluntario = () => import("../views/aporta/hazteVoluntario.vue");

// vistas de experiencia
const Experiencia = () => import("../views/experiencias/experiencia.vue");
const AreaInternacional = () => import("../views/experiencias/areaInternacional.vue");
const experienciasLocales = () => import("../views/experiencias/experienciasLocales.vue");

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
      component: EnConstruccion,
      redirect: {name: "experienciaInicio"},
      children: [
        {
          path: "",
          name: "experienciaInicio",
          component: EnConstruccion,
        },
        {
          path: "areaInternacional",
          name: "areaInternacional",
          component: EnConstruccion,
        },
        {
          path: "experienciasLocales",
          name: "experienciasLocales",
          component: EnConstruccion,
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
      redirect: {name: "Socio"},
      children: [
        {
          path: "",
          name: "aportaInicio",
          redirect: {name: "Socio"},
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
      component: EnConstruccion,
      redirect: {name: "socialInicio"},
      children: [
        {
          path: "",
          name: "socialInicio",
          component: EnConstruccion,
        },
        {
          path: "voluntariado",
          name: "voluntariado",
          component: EnConstruccion,
        },
        {
          path: "publicaciones",
          name: "publicaciones",
          component: EnConstruccion,
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
          component: EnConstruccion,
        },
      ],
    },
    {
      path: "/esal",
      redirect: "/legal/Esal",
    },

    // 🚧 CUALQUIER OTRA RUTA que existía antes, ahora muestra "En Construcción"
    {
      path: "/:catchAll(.*)",
      name: "enConstruccion",
      component: EnConstruccion,
    },
  ],
});

export default router;
