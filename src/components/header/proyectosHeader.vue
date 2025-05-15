<script>
export default {
  name: "headerProyectos",
  data() {
    return {
      links: [
        {name: "pazaLaPaz", to: "/proyectos/pazaLaPaz"},
        {name: "misionPazYCiudadania", to: "/proyectos/misionPazYCiudadania"},
      ],
    };
  },
};
</script>

<template>
  <header class="headerProyectos">
    <nav class="navProyectos">
      <router-link v-for="link in links" :key="link.name" :to="link.to" class="navProyectosLink" active-class="active">
        {{ link.name }}
      </router-link>
    </nav>
  </header>
  <router-view />
</template>

<style scoped>
.headerProyectos {
  width: 100%;
  padding: 0.2em 0;
  background-color: var(--color-fondo);
}

.navProyectos {
  display: flex;
  justify-content: center;
  gap: 3em;
  font-size: 1.1em;
  font-weight: 500;
}

.navProyectosLink {
  color: var(--color-texto-principal);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.navProyectosLink:hover,
.navProyectosLink:focus-visible {
  background-color: var(--color-primario-hover);
  color: var(--color-fondo);
  outline: none;
}

.active {
  color: var(--color-primario-hover);
}
</style>
