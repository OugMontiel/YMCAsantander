<script>
import SubHeader from "@/components/header/SubHeader.vue";

export default {
  name: "legalHeader",
  components: {SubHeader},
  data() {
    return {
      proyectoLinks: [
        {name: "Esal", routeName: "esal"},
        {name: "Aviso de Privacidad", routeName: "Privacidad"},
        {name: "Manual Habeas Data", routeName: "terminosYCondiciones"},
        // {name: "Política de cookies", routeName: "politicaDeCookies"},
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
