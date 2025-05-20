<script>
import SubHeader from "@/components/header/SubHeader.vue";

export default {
  name: "aporteHeader",
  components: {SubHeader},
  data() {
    return {
      experienciaLinks: [
        {name: "socio", to: "/aporta/socio"},
        {name: "donar", to: "/aporta/donar"},
        {name: "hazteVoluntario", to: "/aporta/hazteVoluntario"},
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
