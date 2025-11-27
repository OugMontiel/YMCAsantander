<script>
import imgProyecto from "@/assets/img/proyectos/misionPazYCiudadania/misionPazYCiudadania.webp";

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
  <div class="flex flex-col lg:flex-row items-center justify-center gap-8 p-8">
    <!-- Imagen a la izquierda - 1/3 del ancho y sticky -->
    <div class="w-full lg:w-1/3 flex justify-center lg:sticky lg:top-24 lg:self-start">
      <img v-lazy="{src: imgProyecto}" alt="Logo de Misión Paz y Ciudadanía" class="max-w-full h-auto rounded-2xl shadow-lg object-cover max-h-[70vh]" />
    </div>

    <!-- Contenido a la derecha - 2/3 del ancho -->
    <div class="w-full lg:w-2/3 flex flex-col gap-6 justify-center">
      <p class="leading-relaxed text-lg text-left">
        El Proyecto <strong>Misión Paz – Líderes Juveniles Multiplicadores de Paz</strong> tiene el objetivo de "Fortalecer el liderazgo
        juvenil desarrollando competencias y habilidades en jóvenes líderes, empoderándolos como formadores y multiplicadores de Paz quienes
        contribuyen a la transformación de sus entornos comunitarios y aportan en la construcción de paz en el departamento de Santander".
      </p>
      <p class="leading-relaxed text-lg text-left">
        Para lograrlo, se parte de la convocatoria y selección de aquellos jóvenes líderes con el perfil y el interés manifiesto de
        proyectarse como agentes de cambio, fortaleciendo sus conocimientos, habilidades y competencias en construcción de paz, prevención,
        resolución de conflictos, transferencia de saberes y afianzamiento de prácticas.
      </p>
      <p class="leading-relaxed text-lg text-left">
        Este proyecto es financiado desde la <strong>Fundación Bolívar Davivienda</strong> y busca impactar de manera directa a
        <strong>100 jóvenes</strong>, los cuales son formados como líderes multiplicadores de paz, con una labor importante de generar
        iniciativas sociales que contribuyan a la transformación social de las comunidades.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
