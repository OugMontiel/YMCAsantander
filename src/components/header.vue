<script>
import FondoDinamico from "@/components/fondos/fondoDinamico.vue";
import Logo from "@/components/header/logo.vue";
import Navegacion from "@/components/header/Nav.vue";
import MenuLateral from "@/components/header/MenuLateral.vue";

export default {
  name: "Header",
  components: {
    FondoDinamico,
    Logo,
    Navegacion,
    MenuLateral,
  },
  data() {
    return {
      isMenuOpen: false,
      navLinks: [
        {name: "Inicio", to: "/"},
        {name: "¿Quiénes Somos?", to: "/about"},
        {name: "Liderazgo Juvenil", to: "/proyectos"},
        {name: "experiencia", to: "/experiencia"},
        {name: "aporta", to: "/aporta"},
        {name: "social", to: "/social"},
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleClickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.isMenuOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  unmounted() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<template>
  <header class="header">
    <!-- fondo dinamico -->
    <FondoDinamico />

    <!-- logo -->
    <logo />

    <!-- Navegación horizontal para pantallas grandes -->
    <Navegacion class="navDesktop" :links="navLinks" />

    <!-- Menú lateral para pantallas pequeñas -->
    <MenuLateral class="navMobil" :links="navLinks" v-show="isMenuOpen" @close-menu="isMenuOpen = false" />

    <!-- Botón solo visible en pantallas pequeñas -->
    <button class="menuButton" @click.stop="toggleMenu" :aria-expanded="isMenuOpen.toString()" aria-label="Menú de navegación">
      <UIcon name="material-symbols-light:menu-rounded" class="menu-icon" width="2em" />
    </button>
  </header>
</template>

<style scoped>
.header {
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 3rem;
  padding: 0.5rem 1.5rem;
}

.navDesktop {
  display: block;
}

.navMobil,
.menuButton {
  display: none;
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
  .navDesktop {
    display: none;
  }

  .menuButton,
  .navMobil {
    display: block;
  }

  .header {
    justify-content: space-around;
  }

  .menuButton {
    display: block;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--color-texto-principal-blanco);
  }
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
}
</style>
