<script>
import SubHeader from "@/components/header/SubHeader.vue";

export default {
  name: "ProyectosHeader",
  components: {SubHeader},
  data() {
    return {
      proyectoLinks: [
        {name: "pazaLaPaz", to: "/proyectos/pazaLaPaz"},
        {name: "misionPazYCiudadania", to: "/proyectos/misionPazYCiudadania"},
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
