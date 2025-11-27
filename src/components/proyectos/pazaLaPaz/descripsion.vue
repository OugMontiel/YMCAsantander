<script>
import imgProyecto from "@/assets/img/proyectos/pazaLaPaz/pazaLaPaz.webp";
import beneficios from "@/components/proyectos/pazaLaPaz/beneficios.vue";

export default {
  name: "PazaLaPazDescripcion",
  components: {
    beneficios,
  },
  data() {
    return {
      imgProyecto,
    };
  },
};
</script>
<template>
  <div class="flex flex-col lg:flex-row items-start gap-8 p-8">
    <!-- Imagen a la izquierda - 1/3 del ancho y sticky -->
    <div class="w-full lg:w-1/3 flex justify-center lg:justify-start lg:sticky lg:top-24 lg:self-start">
      <img v-lazy="{src: imgProyecto}" alt="Logo de Paza la Paz" class="max-w-full h-auto rounded-2xl shadow-lg object-cover max-h-[70vh]" />
    </div>

    <!-- Contenido (Texto + Beneficios) a la derecha - 2/3 del ancho -->
    <div class="w-full lg:w-2/3 flex flex-col gap-8">
      <div class="bg-[var(--color-fondo-texto)] p-8 rounded-2xl">
        <p class="leading-relaxed text-lg text-left">
          Es un proyecto dirigido a jóvenes entre <strong>14 y 28 años</strong> en situación de vulnerabilidad social. Su objetivo es
          contribuir a la construcción de paz y a la transformación del conflicto social en Colombia, generando oportunidades de
          empoderamiento e inclusión para los jóvenes en <strong>Bucaramanga</strong> y su área metropolitana.
        </p>
      </div>
      
      <beneficios />
    </div>
  </div>
</template>

<style scoped></style>
