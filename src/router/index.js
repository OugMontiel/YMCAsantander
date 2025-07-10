import {createRouter, createWebHistory} from "vue-router";
import EnConstruccion from "../components/util/EnConstruccion.vue"; // nuevo componente genérico

// vistas principales
import Home from "../views/home.vue";
import About from "../views/about.vue";

// componentes de barra de navegacion de las rutas madres
import LegalHeader from "../components/header/legalHeader.vue";

// vistas legales
import Esal from "../views/legal/Esal.vue"; // Inicio de la vista legal

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
      ],
    },

    // 🚧 CUALQUIER OTRA RUTA que existía antes, ahora muestra "En Construcción"
    {
      path: "/:catchAll(.*)",
      name: "enConstruccion",
      component: EnConstruccion,
    },
    {path: "/esal", redirect: "/legal/Esal"},
  ],
});

export default router;
