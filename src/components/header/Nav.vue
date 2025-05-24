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

<style scoped>
.navList {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.navLink {
  color: var(--color-texto-principal);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.navList2 {
  display: flex;
}

.marcaNav {
  display: none;
}

.LogoNav {
  display: none;
}

.navLink:hover,
.navLink:focus-visible {
  background-color: var(--color-hover-primario);
  color: var(--color-fondo);
  outline: none;
}
</style>
