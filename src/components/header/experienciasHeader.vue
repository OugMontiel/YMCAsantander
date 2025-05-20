<script>
import SubHeader from "@/components/header/SubHeader.vue";

export default {
  name: "ExperienciaHeader",
  components: {SubHeader},
  data() {
    return {
      experienciaLinks: [
        {name: "areaInternacional", to: "/experiencia/areaInternacional"},
        {name: "experienciasLocales", to: "/experiencia/experienciasLocales"},
      ],
    };
  },
};
</script>

<template>
  <div>
    <SubHeader :links="experienciaLinks" />
    <router-view />
  </div>
</template>
