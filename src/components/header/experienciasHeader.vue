<script>
import SubHeader from "@/components/header/SubHeader.vue";

export default {
  name: "ExperienciaHeader",
  components: {SubHeader},
  data() {
    return {
      experienciaLinks: [
        {name: "areaInternacional", routeName: "areaInternacional"},
        {name: "experienciasLocales", routeName: "experienciasLocales"},
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
