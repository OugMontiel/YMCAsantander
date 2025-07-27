<script>
import FondoDinamico from "@/components/fondos/fondoDinamico.vue";
import Logo from "@/components/header/logo.vue";
import Navegacion from "@/components/header/Nav.vue";
import MenuLateral from "@/components/header/MenuLateral.vue";
import LoginButton from "@/components/auth/LoginButton.vue";
import SubHeader from "@/components/header/SubHeader.vue";


export default {
  name: "Header",
  components: {
    FondoDinamico,
    Logo,
    Navegacion,
    MenuLateral,
    LoginButton,
    SubHeader,
  },
  data() {
    return {
      isMenuOpen: false,
      navLinks: [
        {name: "Inicio", routeName: "home"},
        {name: "¿Quiénes Somos?", routeName: "about"},
        {name: "Liderazgo Juvenil", routeName: "proyectos"},
        {name: "Experiencia", routeName: "experiencia"},
        {name: "Aporta", routeName: "aporta"},
        {name: "Social", routeName: "social"},
      ],
      subNavLinks: [
      { name: "Esal", routeName: "esal" },
      { name: "Privacidad", routeName: "privacidad" },
      { name: "Términos y Condiciones", routeName: "terminosYCondiciones" },
      { name: "Política de Cookies", routeName: "politicaDeCookies" },
    ]
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
    <!-- Fondo dinámico -->
    <FondoDinamico />

    <!-- Contenedor principal superior -->
    <div class="header-top nav-flex">
      <Logo />
      <Navegacion :links="navLinks" />
      <LoginButton class="login-button" />

      <!-- Menú hamburguesa para móvil -->
      <button
        class="menuButton"
        @click.stop="toggleMenu"
        :aria-expanded="isMenuOpen.toString()"
        aria-label="Menú de navegación"
      >
        <UIcon name="material-symbols-light:menu-rounded" class="menu-icon" width="2em" />
      </button>
    </div>

    <!-- Menú lateral en móvil -->
    <MenuLateral
      class="navMobil"
      :links="navLinks"
      v-show="isMenuOpen"
      @close-menu="isMenuOpen = false"
    />
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

/* nuevo */
.nav-flex {
  display: flex;
  align-items: center;
  gap: 1rem;
} 

.navMobil,
.menuButton {
  display: none;
}

.subheader-inline {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-left: auto; /* los empuja a la derecha */
  font-size: 0.85rem;
  color: white;
}

.subheader-inline a {
  color: white;
  text-decoration: none;
}

.subheader-inline a:hover {
  text-decoration: underline;
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

  .login-button {
  margin-left: 1rem;
  background: transparent;
  color: var(--color-texto-principal-blanco); /* Nuevo */
  border: 1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
}

/* Pendiente verificar que el botón no se esconda en móviles - nuevo */
@media (max-width: 768px) {
  .login-button {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
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
