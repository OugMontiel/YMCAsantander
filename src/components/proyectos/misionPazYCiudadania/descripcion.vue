<script>
import imgProyecto from "@/assets/img/proyectos/misionPazYCiudadania/misionPazYCiudadania.jpg";

export default {
  name: "pazYCiudadniaDescripcion",
  data() {
    return {
      imgProyecto,
    };
  },
};
</script>

<template>
  <section class="descripcionPazYCiudadnia">
    <div class="contenidoDescripcionPazYCiudadnia">
      <p>
        El Proyecto <strong>Misión Paz – Líderes Juveniles Multiplicadores de Paz</strong> tiene el objetivo de “Fortalecer el liderazgo
        juvenil desarrollando competencias y habilidades en jóvenes líderes, empoderándolos como formadores y multiplicadores de Paz quienes
        contribuyen a la transformación de sus entornos comunitarios y aportan en la construcción de paz en el departamento de Santander”.
      </p>
      <p>
        Para lograrlo, se parte de la convocatoria y selección de aquellos jóvenes líderes con el perfil y el interés manifiesto de
        proyectarse como agentes de cambio, fortaleciendo sus conocimientos, habilidades y competencias en construcción de paz, prevención,
        resolución de conflictos, transferencia de saberes y afianzamiento de prácticas.
      </p>
      <p>
        Este proyecto es financiado desde la <strong>Fundación Bolívar Davivienda</strong> y busca impactar de manera directa a
        <strong>100 jóvenes</strong>, los cuales son formados como líderes multiplicadores de paz, con una labor importante de generar
        iniciativas sociales que contribuyan a la transformación social de las comunidades.
      </p>
    </div>
    <div class="logoContainer">
      <img :src="imgProyecto" alt="Logo de Misión Paz y Ciudadanía" class="logoPazYCiudadniaDescripcion" />
    </div>
  </section>
</template>

<style scoped></style>
