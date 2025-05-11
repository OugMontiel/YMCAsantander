<script>
import logoChico from "@/assets/logos/LogoAzul.png";
import logoGrande from "@/assets/logos/LogoAzul.png";

export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
      logoChico,
      logoGrande,
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
        :src="logoGrande"
        alt="YMCA - Logo principal"
        :class="{logoDesktop: true, logoMobile: false}"
        loading="eager"
        width="120"
        height="40"
      />
      <img
        v-if="!isMenuOpen"
        :src="logoChico"
        alt="YMCA - Logo mobile"
        :class="{logoMobile: true, logoDesktop: false}"
        loading="eager"
        width="80"
        height="30"
      />
    </router-link>

    <!-- seccion de nevacion por la pagina -->
    <nav class="nav" aria-label="Navegación principal">
      <!-- Opciones para la navegacion  -->
      <ul class="navList" :class="{'navList--open': isMenuOpen}" @click="closeMenu">
        <!-- imagen para cunado sale lateral  -->
        <img
          :src="logoChico"
          alt="YMCA - Logo mobile"
          class="LogoNav"
          :class="{'navList--open': isMenuOpen}"
          loading="eager"
          width="80"
          height="30"
        />
        <div class="navList2">
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
        </div>
        <!-- marca para cuando sale lateral -->
        <div class="marcaNav" :class="{'navList--open': isMenuOpen}">Diego Montiel</div>
      </ul>
    </nav>

    <!-- seccion de iconos para cuando la pntalla es pequeña -->
    <button class="menuButton" @click.stop="toggleMenu" :aria-expanded="isMenuOpen.toString()" aria-label="Menú de navegación">
      <UIcon :name="isMenuOpen ? 'material-symbols-light:close' : 'material-symbols-light:menu-rounded'" class="menu-icon" width="2em" />
    </button>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4rem;
  padding: 0.5rem 1.5rem;
  background-color: var(--color-fondo);
  border-bottom: 1px solid var(--color-borde);
}

.logoMobile {
  display: none;
}

.logoDesktop {
  display: block;
  width: 8em;
}
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
  background-color: var(--color-secundario-hover);
  color: var(--color-fondo);
  outline: none;
}

.menuButton {
  display: none;
}

@media (max-width: 770px) {
  .header {
    justify-content: space-around;
  }
  .logoDesktop {
    display: none;
  }
  .logoMobile {
    display: block;
    width: 8em;
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

  .menuButton {
    display: block;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--color-texto-principal);
    z-index: 100;
  }

  .navLink {
    width: 100%;
    text-align: center;
    font-size: 1.1rem;
  }
}
</style>
