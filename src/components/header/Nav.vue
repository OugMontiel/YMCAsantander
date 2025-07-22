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
        <router-link :to="{name: link.routeName}" class="navLink" active-class="active">
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

.navLink:hover,
.navLink:focus-visible {
  background-color: var(--color-hover-primario);
  color: var(--color-fondo);
  outline: none;
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
  .navList {
    gap: 1rem;
  }
  .navLink {
    padding: 0.5rem 0.5rem;
  }
}
/* md - Tablets */
@media (max-width: 768px) {
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
}

/* Cambios hechos por Sara: Estilos específicos para móviles (teléfonos pequeños) */
@media (max-width: 575px) {
  .navlist {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--color-hover-primario); /* Asegura contraste */
    gap: 0.75rem; /* Espaciado uniforme */
    padding: 1rem;
  }

  .navlist a,
  .navlink-hover-visible {
    color: white; /* o var(--color-blanco) si tienes esa variable */
    font-weight: var(--peso-light);
    text-decoration: none;
  }

  .navlist a:hover {
    color: var(--color-secundario); /* Opcional: hover contrastado */
  }
}
</style>
