<script>
import SubHeader from "@/components/header/SubHeader.vue";

export default {
  name: "legalHeader",
  components: {SubHeader},
  data() {
    return {
      proyectoLinks: [
        {name: "Esal", routeName: "esal"},
        {name: "tratamiento de datos personales", routeName: "Privacidad"},
        {name: "terminos Y Condiciones", routeName: "terminosYCondiciones"},
        {name: "politica De Cookies", routeName: "politicaDeCookies"},
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
