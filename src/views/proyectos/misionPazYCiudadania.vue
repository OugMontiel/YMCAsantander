<script>
import TituloCiudadania from "@/components/proyectos/misionPazYCiudadania/tituloPYC.vue";
import MisionDescripcion from "@/components/proyectos/misionPazYCiudadania/descripcion.vue";
import ImpactoIniciativas from "@/components/proyectos/misionPazYCiudadania/impactoIniciativas.vue";

export default {
  name: "PazYCiudadania",
  components: {
    TituloCiudadania,
    MisionDescripcion,
    ImpactoIniciativas,
  },
};
</script>

<template>
  <main class="w-full min-h-screen bg-[var(--color-fondo)]">
    <section class="titulo">
      <TituloCiudadania />
    </section>

    <section class="descripcion">
      <MisionDescripcion />
    </section>

    <section class="impacto">
      <ImpactoIniciativas />
    </section>
  </main>
</template>

<style scoped></style>

