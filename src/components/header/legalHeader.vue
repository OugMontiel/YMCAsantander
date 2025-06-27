<script>
import SubHeader from "@/components/header/SubHeader.vue";

export default {
  name: "leagalHeader",
  components: {SubHeader},
  data() {
    return {
      proyectoLinks: [
        {name: "Esal", routeName: "esal"},
        {name: "Privacidad", routeName: "Privacidad"},
        {name: "terminosYCondiciones", routeName: "terminosYCondiciones"},
        {name: "politicaDeCookies", routeName: "politicaDeCookies"},
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
