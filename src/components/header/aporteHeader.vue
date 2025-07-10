<script>
import SubHeader from "@/components/header/SubHeader.vue";

export default {
  name: "aporteHeader",
  components: {SubHeader},
  data() {
    return {
      experienciaLinks: [
        {name: "socio", routeName: "Socio"},
        {name: "donar", routeName: "donar"},
        {name: "hazteVoluntario", routeName: "hazteVoluntario"},
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
