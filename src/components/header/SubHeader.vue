<!-- SubHeader.vue -->
<script>
export default {
  name: "SubHeader",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <header class="subHeader">
    <nav class="subNav">
      <router-link v-for="link in links" :key="link.name" :to="link.to" class="subNavLink" active-class="active">
        {{ link.name }}
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
.subHeader {
  width: 100%;
  padding: 0.2em 0;
  background-color: var(--color-fondo-secundario);
}

.subNav {
  display: flex;
  justify-content: space-evenly;

  text-align: center;
}

.subNavLink {
  color: var(--color-texto-principal);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.subNavLink:hover,
.subNavLink:focus-visible {
  background-color: var(--color-hover-secundario);
  color: var(--color-fondo);
  outline: none;
}

.active {
  background-color: var(--color-hover-secundario);
  color: var(--color-texto-principal-blanco);
}
</style>
