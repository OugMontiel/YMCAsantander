<script>
import Logo from "@/assets/logos/LogoBlanco.png";
import FondoDinamico from "@/components/fondos/fondoDinamico.vue";
import Desarrollador from "@/components/util/desarrollador.vue";

export default {
  name: "Footer",
  components: {
    FondoDinamico,
    Desarrollador,
  },

  data() {
  const secciones = [
    {
      titulo: "YMCA Santander",
      links: [
        { name: "Inicio", routeName: "home" },
        { name: "¿Quiénes Somos?", routeName: "about" },
        { name: "Programas", routeName: "proyectos" },
        { name: "Experiencia", routeName: "experiencia" },
        { name: "Aporta", routeName: "aporta" },
        { name: "Social", routeName: "social" },
      ],
    },
    {
      titulo: "Legal",
      links: [
        { name: "Aviso de privacidad", routeName: "privacidad" },
        { name: "Términos y condiciones", routeName: "terminosYCondiciones" },
        { name: "Política de cookies", routeName: "politicaDeCookies" },
        { name: "ESAL", routeName: "esal" },
      ],
    },
    {
      titulo: "Conócenos",
      links: [
        { name: "Hazte socio", routeName: "Socio" },
        { name: "Donar ahora", routeName: "donar" },
        { name: "Hazte voluntario", routeName: "hazteVoluntario" },
      ],
    },
  ];

  return {
    Logo,
    secciones,
    legalLinks: secciones.find((s) => s.titulo === "Legal").links,
  };
}
};
</script>

<template>
  <div class="footer">
    <FondoDinamico />

    <div class="footerInfo">
      <!-- LOGO Y TEXTO - PRIMERA COLUMNA -->
      <div class="footerLogo">
        <router-link :to="{name: 'home'}" class="logoLink">
          <img :src="Logo" alt="YMCA - Logo principal" class="logoDesktop" loading="eager" />
        </router-link>
        <p>YMCA Inspirando Oportunidades.</p>
      </div>

      <!-- Secciones de navegación dinámicas -->
      <nav v-for="(seccion, i) in secciones" :key="i" class="navBar">
        <h3>{{ seccion.titulo }}</h3>
        <ul>
          <li v-for="(link, j) in seccion.links" :key="j">
            <router-link :to="{name: link.routeName}" class="navLink">{{ link.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <Desarrollador />
  </div>
</template>



<style>
/* Estilos generales iguales a los que ya tienes */

.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footerInfo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2.5rem 1rem;
  justify-content: flex-start;
}

.footerLogo,
.navBar {
  flex: 1 1 200px;
}

.footerLogo {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.logoLink {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footerLogo p {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--color-texto-principal);
}

.navBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.navBar h3 {
  padding: 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--color-borde);
  text-align: center;
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

.footerLegal {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem 1rem;
  border-top: 1px solid var(--color-borde);
  background-color: var(--color-fondo-secundario);
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
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .logoLink {
    justify-content: center;
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
