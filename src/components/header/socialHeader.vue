<script>
import SubHeader from "@/components/header/SubHeader.vue";

export default {
  name: "socialHeader",
  components: {SubHeader},
  data() {
    return {
      proyectoLinks: [
        {name: "voluntariado", routeName: "voluntariado"},
        {name: "publicaciones", routeName: "publicaciones"},
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
