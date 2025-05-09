<script>
import logoChico from "@/assets/logos/Logo_Ymca-removebg-preview.png";
import logoGrande from "@/assets/logos/logo.webp";

export default {
  name: "footer",
  data() {
    return {
      logoChico,
      logoGrande,
    };
  },
};
</script>

<template>
  <footer>
    <!-- Sección de información principal del pie de página -->
    <div class="footerInfo">
      <!-- Logo y mensaje inspirador -->
      <div class="footerLogo">
        <router-link to="/" class="logoLink">
          <img :src="logoGrande" alt="YMCA - Logo principal" :class="{logoDesktop: true, logoMobile: false}" loading="eager" />
          <img :src="logoChico" alt="YMCA - Logo móvil" :class="{logoMobile: true, logoDesktop: false}" loading="eager" />
        </router-link>
        <p>Un mensaje bonito que inspire a todos los que lo lean.</p>
      </div>

      <!-- Sección de enlaces -->

      <!-- Navegación principal -->
      <nav class="navBar">
        <h3>YMCA Santander</h3>
        <ul>
          <li><router-link to="/" class="navLink">Inicio</router-link></li>
          <li><router-link to="/about" class="navLink">¿Quiénes somos?</router-link></li>
          <li><router-link to="/Programas" class="navLink">Programas</router-link></li>
          <li><router-link to="/Voluntariado" class="navLink">Voluntariado</router-link></li>
          <li><router-link to="/Publicaciones" class="navLink">Publicaciones</router-link></li>
        </ul>
      </nav>

      <!-- Navegación legal -->
      <nav class="navBar">
        <h3>Legal</h3>
        <ul>
          <li><router-link to="/avisoPrivacidad" class="navLink">Aviso de privacidad</router-link></li>
          <li><router-link to="/terminosYCondiciones" class="navLink">Términos y condiciones</router-link></li>
          <li><router-link to="/politicaDeCookies" class="navLink">Política de cookies</router-link></li>
          <li><router-link to="/esal" class="navLink">esal</router-link></li>
        </ul>
      </nav>

      <!-- Navegación de participación -->
      <nav class="navBar">
        <h3>Conocenos</h3>
        <ul>
          <li><router-link to="/Socio" class="navLink">Hazte socio</router-link></li>
          <li><router-link to="/donar" class="navLink">Donar ahora</router-link></li>
          <li><router-link to="/voluntariado" class="navLink">Hazte voluntario</router-link></li>
        </ul>
      </nav>
    </div>

    <!-- Créditos del desarrollador -->
    <div class="footerDesarrollador">
      <p>© 2023 YMCA. Todos los derechos reservados.</p>
      <p>
        Desarrollado por
        <a href="#">Diego Alejandro Montiel Flórez</a>
      </p>
    </div>
  </footer>
</template>

<style>
footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 20rem; /* responsive */

  background-color: var(--color-fondo);
  border-top: 1px solid var(--color-borde);
}
.footerDesarrollador {
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-top: 1px solid var(--color-borde);
}
.footerInfo {
  display: flex;
  justify-content: space-around;
  padding: 2.5rem 0 0 0; /* responsive */
  flex: 1;
}
.logoMobile {
  display: none;
}
.logoDesktop {
  display: block;
  width: 20rem; /* responsive */
  padding-bottom: 2rem;
}

.navBar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
}

.navBar h3 {
  padding: 0 1rem 0 0;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--color-borde);
}

.navLink {
  color: var(--color-texto-principal);
  text-decoration: none;
  font-weight: 500;
  padding: 0.2rem 1rem;
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
  text-decoration: underline;
}

@media (max-width: 940px) {
  .footerInfo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Dos columnas iguales */
    grid-template-rows: repeat(3, auto); /* Tres filas automáticas */
    padding: 2rem 0 0 0; /* responsive */
  }
  /* Primer hijo: ocupa la primera columna y abarca las 3 filas */
  .footerLogo {
    grid-column: 1 / 2;
    grid-row: 1 / 4;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .footerLogo p {
    padding: 0 0 0 0.8rem;
  }
  .navBar {
    padding: 0 0 1.5rem 1.5rem;
  }

  .logoDesktop {
    width: 15rem;
  }
}

@media (max-width: 770px) {
  .footerInfo {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Dos columnas iguales */
    grid-template-rows: repeat(2, auto); /* Dos filas automáticas */
  }
}
</style>
