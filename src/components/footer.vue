<script>
import Logo from "@/assets/logos/LogoBlanco.png";
import FondoDinamico from "@/components/fondos/fondoDinamico.vue";
import Desarrollador from "@/components/util/desarrollador.vue";

export default {
  name: "footer",
  components: {
    FondoDinamico,
    Desarrollador,
  },
  data() {
    return {
      Logo,
      secciones: [
        {
          titulo: "YMCA Santander",
          links: [
            {name: "Inicio", to: "/"},
            {name: "¿Quiénes Somos?", to: "/about"},
            {name: "Programas", to: "/proyectos"},
            {name: "Experiencia", to: "/experiencia"},
            {name: "Aporta", to: "/aporta"},
            {name: "Social", to: "/social"},
          ],
        },
        {
          titulo: "Legal",
          links: [
            {name: "Aviso de privacidad", to: "/avisoPrivacidad"},
            {name: "Términos y condiciones", to: "/terminosYCondiciones"},
            {name: "Política de cookies", to: "/politicaDeCookies"},
            {name: "ESAL", to: "/esal"},
          ],
        },
        {
          titulo: "Conócenos",
          links: [
            {name: "Hazte socio", to: "/Socio"},
            {name: "Donar ahora", to: "/donar"},
            {name: "Hazte voluntario", to: "/voluntariado"},
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <footer>
    <FondoDinamico />
    <div class="footerInfo">
      <div class="footerLogo">
        <router-link to="/" class="logoLink">
          <img :src="Logo" alt="YMCA - Logo principal" class="logoDesktop" loading="eager" />
        </router-link>
        <p>YMCA Inspirando Oportunidades.</p>
      </div>

      <!-- Secciones de navegación dinámicas -->
      <nav v-for="(seccion, i) in secciones" :key="i" class="navBar">
        <h3>{{ seccion.titulo }}</h3>
        <ul>
          <li v-for="(link, j) in seccion.links" :key="j">
            <router-link :to="link.to" class="navLink">{{ link.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <Desarrollador />
  </footer>
</template>

<style>
/* Estilos generales iguales a los que ya tienes */

footer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footerInfo {
  display: flex;
  justify-content: space-around;
  padding: 2.5rem 0 1rem 0;
  flex: 1;
}
.logoLink {
  display: flex;
  justify-content: center;
}
.footerLogo {
  padding: 2em 0;
}
.footerLogo p {
  padding-left: 0.8rem;
  color: var(--color-texto-principal);
}

.logoDesktop {
  display: block;
  width: 20rem;
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
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--color-borde);
}

.navLink {
  display: inline-block;
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
  background-color: var(--color-hover-secundario);
  color: var(--color-fondo);
  outline: none;
  text-decoration: underline;
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
  .footerLogo {
    max-width: 320px;
  }
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
  .footerInfo {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
  }

  .footerLogo {
    max-width: none;
    padding-top: 0;

    grid-column: 1 / 4;
    grid-row: 1 / 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .navBar {
    align-items: center;
  }
  .navBar ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navBar li {
    text-align: center;
  }
}
/* md - Tablets */
@media (max-width: 768px) {
  .footerInfo {
    grid-template-columns: repeat(2, auto);
  }

  .footerLogo {
    grid-column: 1 / 3;
  }
  .navBar:last-child {
    grid-column: 1 / 3;
  }
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
  .footerInfo {
    grid-template-columns: 1fr;
  }
  .footerLogo {
    grid-column: 1 / 2;
  }
  .navBar:last-child {
    grid-column: 1 / 2;
  }
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
}
</style>
