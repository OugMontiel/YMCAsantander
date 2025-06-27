<script>
import logo from "@/assets/logos/LogoBlanco.png";

export default {
  name: "LogoYMCA",
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      logo,
    };
  },
};
</script>

<template>
  <router-link :to="{name: 'home'}" class="logoLink">
    <img v-if="!isMenuOpen" :src="logo" alt="YMCA - Logo" class="logo" loading="eager" />
  </router-link>
</template>

<style scoped>
.logo {
  width: 8em;
  height: auto;
}

@media (max-width: 770px) {
  .logo {
    width: 8em;
  }
}
</style>
