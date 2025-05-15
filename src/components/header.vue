<script>
import FondoDinamico from "@/components/fondos/fondoDinamico.vue";
import LogoYMCA from "@/components/header/logoYMCA.vue";
import NavYMCA from "@/components/header/NavYMCA.vue";

export default {
  name: "Header",
  components: {
    FondoDinamico,
    LogoYMCA,
    NavYMCA,
  },
  data() {
    return {
      isMenuOpen: false,
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
    <LogoYMCA :isMenuOpen="isMenuOpen" />

    <!-- Navegacion -->
    <NavYMCA :isMenuOpen="isMenuOpen" @close-menu="isMenuOpen = false" />

    <!-- seccion de iconos para cuando la pntalla es pequeña -->
    <button class="menuButton" @click.stop="toggleMenu" :aria-expanded="isMenuOpen.toString()" aria-label="Menú de navegación">
      <UIcon :name="isMenuOpen ? 'material-symbols-light:close' : 'material-symbols-light:menu-rounded'" class="menu-icon" width="2em" />
    </button>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4rem;
  padding: 0.5rem 1.5rem;
}

.menuButton {
  display: none;
}

@media (max-width: 770px) {
  .header {
    justify-content: space-around;
  }

  .menuButton {
    display: block;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--color-texto-principal);
    z-index: 100;
  }
}
</style>
