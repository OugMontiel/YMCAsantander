<script>
import SubHeader from "@/components/header/SubHeader.vue";

export default {
  name: "ProyectosHeader",
  components: {SubHeader},
  data() {
    return {
      proyectoLinks: [
        {name: "Paza La Paz", to: "/proyectos/pazaLaPaz"},
        {name: "Mision Paz Y Ciudadania", to: "/proyectos/misionPazYCiudadania"},
      ],
    };
  },
};
</script>

<template>
  <div>
    <SubHeader :links="proyectoLinks" />
    <router-view />
  </div>
</template>
