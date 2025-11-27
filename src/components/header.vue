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
        {name: "Inicio", routeName: "home"},
        {name: "¿Quiénes Somos?", routeName: "about"},
        {name: "Liderazgo Juvenil", routeName: "proyectos"},
        // {name: "Experiencia", routeName: "experiencia"},
        // {name: "Aporta", routeName: "aporta"},
        // {name: "Social", routeName: "social"},
      ],
      // Mapeo de rutas a sus subLinks
      subLinksMap: {
        proyectos: [
          {name: "Paza La Paz", routeName: "pazaLaPaz"},
          {name: "Mision Paz Y Ciudadania", routeName: "misionPazYCiudadania"},
        ],
        experiencia: [
          {name: "areaInternacional", routeName: "areaInternacional"},
          {name: "experienciasLocales", routeName: "experienciasLocales"},
        ],
        aporta: [
          {name: "socio", routeName: "Socio"},
          {name: "donar", routeName: "donar"},
          {name: "hazteVoluntario", routeName: "hazteVoluntario"},
        ],
        social: [
          {name: "voluntariado", routeName: "voluntariado"},
          {name: "publicaciones", routeName: "publicaciones"},
        ],
        vistasLegales: [
          {name: "Esal", routeName: "esal"},
          {name: "Aviso de Privacidad", routeName: "Privacidad"},
          {name: "Manual Habeas Data", routeName: "terminosYCondiciones"},
        ],
      },
    };
  },
  computed: {
    currentSubLinks() {
      const route = this.$route;
      const routePath = route.path;

      // Detectar si estamos en una ruta hija de proyectos
      if (routePath.startsWith("/proyectos")) {
        return this.subLinksMap.proyectos;
      }
      // Detectar si estamos en una ruta hija de experiencia
      if (routePath.startsWith("/experiencia")) {
        return this.subLinksMap.experiencia;
      }
      // Detectar si estamos en una ruta hija de aporta
      if (routePath.startsWith("/aporta")) {
        return this.subLinksMap.aporta;
      }
      // Detectar si estamos en una ruta hija de social
      if (routePath.startsWith("/social")) {
        return this.subLinksMap.social;
      }
      // Detectar si estamos en una ruta legal
      if (routePath.startsWith("/legal") || routePath.startsWith("/esal")) {
        return this.subLinksMap.vistasLegales;
      }
      return null;
    },
    hasSubLinks() {
      return this.currentSubLinks && this.currentSubLinks.length > 0;
    },
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

    <div class="headerMain" :class="{withSubHeader: hasSubLinks}">
    <!-- logo -->
    <logo />

    <!-- Navegación horizontal para pantallas grandes -->
    <Navegacion class="navDesktop" :links="navLinks" />

    <!-- Menú lateral para pantallas pequeñas -->
    <MenuLateral id="navMobil" class="navMobil" :links="navLinks" v-show="isMenuOpen" @close-menu="isMenuOpen = false" />

    <!-- Botón solo visible en pantallas pequeñas -->
    <button
      class="menuButton"
      @click.stop="toggleMenu"
      :aria-expanded="isMenuOpen.toString()"
      aria-label="Menú de navegación"
      aria-controls="navMobil"
    >
      <UIcon name="material-symbols-light:menu-rounded" class="menu-icon" width="2em" />
    </button>
    </div>

    <!-- SubHeader integrado -->
    <nav v-if="hasSubLinks" class="subHeader">
      <router-link
        v-for="link in currentSubLinks"
        :key="link.name"
        :to="{name: link.routeName}"
        class="subNavLink"
        active-class="active"
      >
        {{ link.name }}
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* Fondo base semitransparente para permitir ver el fondo dinámico */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  z-index: 100;
  overflow: hidden;
}

.header::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(224, 224, 224, 0.3) 20%,
    rgba(224, 224, 224, 0.3) 80%,
    transparent 100%
  );
  z-index: 1;
}

.headerMain {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3.5rem;
  padding: 0.75rem 1.5rem;
  /* Gradiente suave que se conecta con el subHeader */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.7) 70%,
    rgba(250, 250, 250, 0.65) 100%
  );
  transition: padding 0.3s ease, background 0.3s ease;
  z-index: 2;
}

.headerMain.withSubHeader {
  padding-bottom: 0.5rem;
  /* Gradiente muy suave que se conecta perfectamente con el subHeader */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.68) 60%,
    rgba(252, 252, 252, 0.65) 85%,
    rgba(250, 250, 250, 0.62) 95%,
    rgba(248, 248, 248, 0.6) 100%
  );
}

.navDesktop {
  display: block;
}

.navMobil,
.menuButton {
  display: none;
}

/* SubHeader integrado - transición suave */
.subHeader {
  width: 100%;
  padding: 0.75rem 1.5rem;
  /* Gradiente que continúa perfectamente desde el headerMain - transición muy suave */
  background: linear-gradient(
    to bottom,
    rgba(248, 248, 248, 0.6) 0%,
    rgba(247, 247, 247, 0.62) 30%,
    rgba(246, 246, 246, 0.65) 70%,
    rgba(245, 245, 245, 0.68) 100%
  );
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin;
  scrollbar-color: var(--color-hover-secundario) transparent;
  /* Animación suave al aparecer */
  animation: slideDown 0.3s ease-out;
  position: relative;
  z-index: 2;
}

.subHeader::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0.5px;
  /* Línea extremadamente sutil - casi imperceptible */
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(119, 80, 145, 0.08) 50%,
    transparent 100%
  );
  z-index: 1;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.subHeader::-webkit-scrollbar {
  height: 4px;
}

.subHeader::-webkit-scrollbar-track {
  background: transparent;
}

.subHeader::-webkit-scrollbar-thumb {
  background-color: var(--color-hover-secundario);
  border-radius: 2px;
}

.subHeader::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-espiritualidad);
}

.subNavLink {
  color: var(--color-texto-principal);
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  font-size: 0.9rem;
  font-weight: 400;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
}

.subNavLink::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--color-hover-secundario);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.subNavLink:hover::before,
.subNavLink.active::before {
  width: 80%;
}

.subNavLink:hover,
.subNavLink:focus-visible {
  background-color: rgba(119, 80, 145, 0.2);
  color: var(--color-hover-secundario);
  outline: none;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(119, 80, 145, 0.2);
}

.subNavLink.active {
  background-color: rgba(119, 80, 145, 0.25);
  color: var(--color-hover-secundario);
  font-weight: 500;
  box-shadow: 0 2px 6px rgba(119, 80, 145, 0.15);
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
  .headerMain {
    min-height: 3rem;
    padding: 0.5rem 1rem;
  }

  .subHeader {
    justify-content: flex-start;
    padding: 0.65rem 1rem;
    gap: 0.5rem;
  }
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

  .headerMain {
    justify-content: space-around;
    padding: 0.5rem 1rem;
  }

  .menuButton {
    display: block;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--color-texto-principal-blanco);
  }

  .subHeader {
    font-size: 0.875rem;
    padding: 0.6rem 1rem;
    gap: 0.4rem;
  }

  .subNavLink {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
  .headerMain {
    padding: 0.5rem 0.75rem;
  }

  .subHeader {
    padding: 0.55rem 0.75rem;
    gap: 0.3rem;
  }

  .subNavLink {
    padding: 0.45rem 0.85rem;
    font-size: 0.85rem;
  }
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
  .headerMain {
    padding: 0.5rem 0.5rem;
    min-height: 2.75rem;
  }

  .subHeader {
    padding: 0.5rem 0.5rem;
    gap: 0.25rem;
  }

  .subNavLink {
    padding: 0.4rem 0.7rem;
    font-size: 0.8rem;
  }
}
</style>
