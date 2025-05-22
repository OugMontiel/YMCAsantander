<script>
import SubHeader from "@/components/header/SubHeader.vue";

export default {
  name: "leagalHeader",
  components: {SubHeader},
  data() {
    return {
      proyectoLinks: [
        {name: "Esal", to: "/Esal"},
        {name: "Privacidad", to: "/Esal/Privacidad"},
        {name: "terminosYCondiciones", to: "/Esal/terminosYCondiciones"},
        {name: "politicaDeCookies", to: "/Esal/politicaDeCookies"},
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
