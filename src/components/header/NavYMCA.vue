<script>
import LogoAzul from "@/assets/logos/LogoAzul.png";

export default {
  name: "NavYMCA",
  props: {
    isMenuOpen: Boolean,
  },
  emits: ["close-menu"],
  methods: {
    closeMenu() {
      this.$emit("close-menu");
    },
  },
  data() {
    return {
      LogoAzul,
      navLinks: [
        {name: "Inicio", to: "/"},
        {name: "¿Quiénes Somos?", to: "/about"},
        {name: "Programas", to: "/proyectos"},
        {name: "experiencia", to: "/experiencia"},
        {name: "aporta", to: "/aporta"},
        {name: "social", to: "/social"},
      ],
    };
  },
};
</script>

<template>
  <nav class="nav" aria-label="Navegación principal">
    <ul class="navList" :class="{'navList--open': isMenuOpen}" @click.self="closeMenu">
      <router-link to="/" class="logoLink">
        <img v-if="isMenuOpen" :src="LogoAzul" alt="YMCA - Logo" class="LogoNav" loading="eager" width="80" height="30" />
      </router-link>

      <nav class="navList2" role="menu" aria-label="Opciones del menú">
        <li v-for="link in navLinks" :key="link.name" class="navItem" role="none">
          <router-link :to="link.to" class="navLink" role="menuitem" active-class="active">
            {{ link.name }}
          </router-link>
        </li>
      </nav>

      <div class="marcaNav" :class="{'navList--open': isMenuOpen}">Diego Montiel</div>
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

.navList2 {
  display: flex;
}

.marcaNav {
  display: none;
}

.LogoNav {
  display: none;
}

.navLink:hover,
.navLink:focus-visible {
  background-color: var(--color-hover-secundario);
  color: var(--color-fondo);
  outline: none;
}

@media (max-width: 770px) {
  .nav {
    z-index: 100;
  }
  .navList {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: space-between;
    width: min(100%, 300px);
    padding: 2rem;
    background-color: var(--color-fondo);
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  }

  .navList2 {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .marcaNav {
    display: block;
    color: var(--color-texto-secundario);
  }

  .LogoNav {
    display: block;
  }

  .navList--open {
    transform: translateX(0);
  }

  .navLink {
    width: 100%;
    text-align: center;
    font-size: 1.1rem;
  }
}
</style>
