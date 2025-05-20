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
  background-color: var(--color-fondo);
}

.subNav {
  display: flex;
  justify-content: center;
  gap: 3em;
  font-size: 1.1em;
  font-weight: 500;
}

.subNavLink {
  color: var(--color-texto-principal);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.subNavLink:hover,
.subNavLink:focus-visible {
  background-color: var(--color-hover-primario);
  color: var(--color-fondo);
  outline: none;
}

.active {
  color: var(--color-hover-primario);
}
</style>
