<script>
import Logo from "@/components/header/logo.vue";
import FondoDinamico from "@/components/fondos/fondoDinamico.vue";

export default {
  name: "MenuLateral",
  components: {
    Logo,
    FondoDinamico,
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <section class="menuLateral" aria-label="Menú lateral">
    <div class="Lateral">
      <!-- fondo dinamico -->
      <FondoDinamico />

      <!-- Botón de cierre -->
      <button class="cierreBtn" @click.stop="$emit('close-menu')" aria-label="Cerrar menú lateral">
        <UIcon name="material-symbols-light:close" class="menu-icon" width="2em" />
      </button>

      <!-- Logo -->
      <Logo class="LogoLateral" />

      <!-- Navegación -->
      <nav class="nav" aria-label="Menú lateral de navegación">
        <ul class="navList" @click="$emit('close-menu')">
          <li class="navItem" v-for="link in links" :key="link.name">
            <router-link class="navLink" :to="link.to" active-class="active" aria-current="page">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.menuLateral {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  background-color: var(--overlay-negro);
}
.Lateral {
  position: fixed;
  top: 0;
  right: 0;

  height: 100%;
  background-color: var(--color-fondo);
  box-shadow: -2px 0 8px var(--color-fondo-shadow);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1em;

  padding: 1rem 2rem;
}

.nav {
  flex: 1;
}
.cierreBtn {
  align-self: flex-end;
}

.navList {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

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
</style>
