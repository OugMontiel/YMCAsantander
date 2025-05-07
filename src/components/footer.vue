<script>
import logoChico from "@/assets/Logo_Ymca-removebg-preview.png";
import logoGrande from "@/assets/logo.webp";

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
    <!-- seccion info paguina -->

    <div class="footerInfo">
      <!-- seccion de img y mensaje Bonito  -->
      <div class="footerLogo">
        <!-- Solo un logo con clases condicionales -->
        <router-link to="/" class="logoLink">
          <img :src="logoGrande" alt="YMCA - Logo principal" :class="{logoDesktop: true, logoMobile: false}" loading="eager" />
          <img :src="logoChico" alt="YMCA - Logo mobile" :class="{logoMobile: true, logoDesktop: false}" loading="eager" />
        </router-link>
        <p>mensaje bonito</p>
      </div>

      <!-- Seccion de links  -->
      <div class="footerLinks">
        <!-- barra de navegacion basica con todo y mas  -->
        <nav class="navBar">
          <ul>
            <li>
              <router-link to="/"> Inicio </router-link>
            </li>
            <li>
              <router-link to="/about"> ¿quienes Somos? </router-link>
            </li>
            <li>
              <router-link to="/Programas"> Programas </router-link>
            </li>
            <li>
              <router-link to="/Voluntariado"> Voluntariado </router-link>
            </li>
            <li>
              <router-link to="/Publicaciones"> Publicaciones </router-link>
            </li>
          </ul>
        </nav>

        <!-- barra de navegacion Legal -->
        <nav class="navBar">
          <ul>
            <li>
              <router-link to="/aviso-privacidad"> Aviso de privacidad </router-link>
            </li>
            <li>
              <router-link to="/terminos-y-condiciones"> Terminos y condiciones </router-link>
            </li>
            <li>
              <router-link to="/politica-de-cookies"> Politica de cookies </router-link>
            </li>
          </ul>
        </nav>
        <!-- barra de navegacion para conocenos  -->
        <nav class="navBar">
          <ul>
            <li>
              <router-link to="/Socio"> Hazte Socio </router-link>
            </li>
            <li>
              <router-link to="/donar"> Donar Ahora </router-link>
            </li>
            <li>
              <router-link to="/voluntariado"> hazte Voluntario </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- seccion del Desarrollador -->

    <div class="footerDesarrollador">
      <!-- Copiray -->
      <p>© 2023 YMCA. Todos los derechos reservados.</p>
      <p>
        Desarrollado por
        <a href="#">Diego Alejandro Montiel Florez</a>
      </p>
      <p>
        Diseñado por
        <a href="#">Diego Alejandro Montiel Florez</a>
      </p>
    </div>
  </footer>
</template>

<style>
footer {
  display: flex;
  flex-direction: column;
}
.footerInfo {
  display: flex;
  align-items: center;
}
.footerDesarrollador {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
