<script>
export default {
  name: "MenuYMCA",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <nav class="nav" aria-label="Navegación principal">
    <ul class="navList" @click.self="$emit('close-menu')">
      <li v-for="link in links" :key="link.name" class="navItem">
        <router-link :to="link.to" class="navLink" active-class="active">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
