<script>
import titulo from "@/components/sections/proyectos/pazaLaPaz/titulo.vue";
import descripsion from "@/components/sections/proyectos/pazaLaPaz/descripsion.vue";
import metodologia from "@/components/sections/proyectos/pazaLaPaz/metodologia.vue";
import aliados from "@/components/sections/proyectos/pazaLaPaz/aliados.vue";
import testimonios from "@/components/sections/proyectos/pazaLaPaz/testimonios.vue";

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
