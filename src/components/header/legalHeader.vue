<script>
import SubHeader from "@/components/header/SubHeader.vue";

export default {
  name: "leagalHeader",
  components: {SubHeader},
  data() {
    return {
      proyectoLinks: [
        {name: "Esal", to: "/legal/Esal"},
        {name: "Privacidad", to: "/legal/Privacidad"},
        {name: "terminosYCondiciones", to: "/legal/terminosYCondiciones"},
        {name: "politicaDeCookies", to: "/legal/politicaDeCookies"},
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
