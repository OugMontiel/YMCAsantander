<script>
import logoYMCA from "@/assets/Logo_Ymca-removebg-preview.png";

export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
      logoYMCA,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleClickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.closeMenu();
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<template>
  <header class="header">
    <!-- seccion de logos, uno grande y otro chico para diferenciar pantallas -->
    <router-link to="/" class="logoLink">
      <!-- Solo un logo con clases condicionales -->
      <img
        :src="logoYMCA"
        alt="YMCA - Logo principal"
        :class="{logoDesktop: true, logoMobile: false}"
        loading="eager"
        width="120"
        height="40"
      />
      <img
        :src="logoYMCA"
        alt="YMCA - Logo mobile"
        :class="{logoMobile: true, logoDesktop: false}"
        loading="eager"
        width="80"
        height="30"
      />
    </router-link>

    <!-- seccion de nevacion por la pagina -->
    <nav class="nav" aria-label="Navegación principal">
      <ul class="navList" :class="{'navList--open': isMenuOpen}" @click="closeMenu">
        <li class="navItem" role="none">
          <router-link to="/" role="menuitem" class="navLink"> Inicio </router-link>
        </li>
        <li class="navItem" role="none">
          <router-link to="/about" role="menuitem" class="navLink"> ¿quienes Somos? </router-link>
        </li>
        <li class="navItem" role="none">
          <router-link to="/Programas" role="menuitem" class="navLink"> Programas </router-link>
        </li>
        <li class="navItem" role="none">
          <router-link to="/Voluntariado" role="menuitem" class="navLink"> Voluntariado </router-link>
        </li>
        <li class="navItem" role="none">
          <router-link to="/Publicaciones" role="menuitem" class="navLink"> Publicaciones </router-link>
        </li>

        <!-- Repetir para demás items -->
      </ul>
    </nav>

    <!-- seccion de iconos para cuando la pntalla es pequeña -->
    <button class="menuButton" @click.stop="toggleMenu" :aria-expanded="isMenuOpen.toString()" aria-label="Menú de navegación">
      <UIcon :name="isMenuOpen ? 'material-symbols-light:close' : 'material-symbols-light:menu-rounded'" class="menu-icon" />
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
  background-color: var(--color-fondo);
  border-bottom: 1px solid var(--color-borde);
}

.logoLink {
  z-index: 100;
}

.logo-link img {
  display: block;
  width: 8em; /* Tamaño desktop */
}

.logoMobile,
.logoDesktop {
  display: none;
}

.navList {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.navLink {
  position: relative;
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
  background-color: var(--color-secundario-hover);
  color: var(--color-fondo);
  outline: none;
}

.menuButton {
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--color-texto-principal);
  z-index: 100;
}
/* Mostrar desktop en pantallas grandes */
@media (min-width: 761px) {
  .logoDesktop {
    display: block;
    width: 8em;
  }
}

@media (max-width: 768px) {
  .logoMobile {
    display: block;
    width: 6em;
  }

  .navList {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    width: min(100%, 300px);
    padding: 2rem;
    background-color: var(--color-fondo);
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  }

  .navList--open {
    transform: translateX(0);
  }

  .menuButton {
    display: block;
  }

  .navLink {
    width: 100%;
    text-align: center;
    font-size: 1.1rem;
  }
}
</style>
