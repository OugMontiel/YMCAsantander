<script>
import titulo from "@/components/proyectos/pazaLaPaz/titulo.vue";
import descripsion from "@/components/proyectos/pazaLaPaz/descripsion.vue";
import metodologia from "@/components/proyectos/pazaLaPaz/metodologia.vue";
import aliados from "@/components/proyectos/pazaLaPaz/aliados.vue";
import testimonios from "@/components/proyectos/pazaLaPaz/testimonios.vue";

export default {
  name: "pazaLaPaz",
  components: {
    descripsion,
    titulo,
    metodologia,
    aliados,
    testimonios,
  },
};
</script>
<template>
  <main class="pazaLaPaz">
    <section class="titulo">
      <titulo />
    </section>

    <section class="Descripcion">
      <descripsion />
    </section>

    <section class="metodologia">
      <metodologia />
    </section>

    <section class="aliados">
      <aliados />
    </section>

    <section class="testimonios">
      <testimonios />
    </section>
  </main>
</template>

<style scoped></style>
