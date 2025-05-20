<script>
import SubHeader from "@/components/header/SubHeader.vue";

export default {
  name: "socialHeader",
  components: {SubHeader},
  data() {
    return {
      proyectoLinks: [
        {name: "voluntariado", to: "/social/voluntariado"},
        {name: "publicaciones", to: "/social/publicaciones"},
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
