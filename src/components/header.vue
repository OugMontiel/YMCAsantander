<script>
import logoYMCA from "@/assets/logo.webp";

export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
      logoYMCA,
    };
  },
  methods: {
    // En lugar de usar querySelector
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        this.isMenuOpen = false;
      },
    },
  },
};
</script>

<template>
  <header>
    <!-- seccion de logos, uno grande y otro chico para diferenciar pantallas -->
    <router-link to="/" class="logoLink">
      <picture>
        <img :src="logoYMCA" alt="Logo" class="logo" loading="lazy" />
        <img :src="logoYMCA" alt="Logo" class="logoChico" loading="lazy" />
      </picture>
    </router-link>

    <!-- seccion de nevacion por la pagina -->
    <nav class="navHeader" aria-label="Navegación principal">
      <ul class="navList" :class="{show: isMenuOpen}" @click="closeMenu">
        <li role="none"><router-link to="/" role="menuitem" class="navLink">Inicio</router-link></li>
        <li role="none"><router-link to="/about" role="menuitem" class="navLink">¿quienes Somos?</router-link></li>
        <li role="none"><router-link to="/Programas" role="menuitem" class="navLink">Programas</router-link></li>
        <li role="none"><router-link to="/Voluntariado" role="menuitem" class="navLink">Voluntariado</router-link></li>
        <li role="none"><router-link to="/Publicaciones" role="menuitem" class="navLink">Publicaciones</router-link></li>
      </ul>
    </nav>

    <!-- seccion de iconos para cuando la pntalla es pequeña -->
    <button class="menuIcono" @click="toggleMenu" :arial-expanded="isMenuOpen" aria-label="Toggle navigation menu">
      <UIcon :name="isMenuOpen ? 'material-symbols-light:close' : 'material-symbols-light:menu-rounded'" class="size-10" />
    </button>
    <div class="menu-icon" @click="toggleMenu">
      <UButton icon="material-symbols-light:menu-rounded" variant="subtle">Button</UButton>
    </div>
  </header>
</template>

<style>
header {
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background-color: #333;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav ul li {
  margin: 0 1em;
}

.menu-icon {
  display: none; /* Ocultar el ícono del menú por defecto */
}
.logoChico {
  display: none; /* Mostrar el logo grande */
}

img {
  width: 8em;
}

/* Estilos para pantallas pequeñas (celulares) */
@media (max-width: 480px) {
  .logo {
    display: none; /* Ocultar el logo grande */
  }

  .logoChico {
    display: block; /* Mostrar el logo chico */
  }

  nav ul {
    flex-direction: column;
    display: none; /* Ocultar el menú por defecto */
  }

  nav ul.show {
    display: flex; /* Mostrar el menú cuando se active */
  }

  .menu-icon {
    display: block; /* Mostrar el ícono del menú */
  }
}
</style>
