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

    <section class="descripcion">
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

<style scoped>
.pazaLaPaz {
  min-height: 100vh;
  background-color: var(--color-fondo);
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
}

/* md - Tablets */
@media (max-width: 768px) {
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
}
</style>
