<script>
import SubHeader from "@/components/header/SubHeader.vue";

export default {
  name: "legalHeader",
  components: {SubHeader},
  data() {
    return {
      proyectoLinks: [
        {name: "Esal", to: "/legal/Esal"},
        {name: "Políticas y Aviso Legal", to: "/legal/Privacidad"},
        {name: "Términos y Condiciones", to: "/legal/terminosYCondiciones"},
        {name: "Política de Cookies", to: "/legal/politicaDeCookies"},
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
