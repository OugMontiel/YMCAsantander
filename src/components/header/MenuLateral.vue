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
    <!-- boton de cierre -->

    <!-- logo -->

    <!-- nav -->
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
.nav {
  position: absolute; /* <-- Este es el cambio más importante */
  top: 0;
  right: 0; /* <-- Añade esto */
  width: 100%; 
  height: 100vh;
  z-index: 100;
}

.navList {
  position: fixed;
  top: 0;
  right: 0;
  

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  list-style: none;

  padding: 2rem;
  width: 60%;
  height: 100vh;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);

  background-color: var(--color-fondo);
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
}

.navList2 {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.navLink {
  color: var(--color-texto-principal);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-align: center;
  font-size: 1.1rem;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.navLink:hover,
.navLink:focus-visible {
  background-color: var(--color-hover-primario);
  color: var(--color-fondo);
  outline: none;
}

.marcaNav {
  color: var(--color-texto-secundario);
}

.LogoNav {
  display: block;
}
</style>
