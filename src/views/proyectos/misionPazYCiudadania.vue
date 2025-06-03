<script>
import MisionDescripcion from "@/components/proyectos/misionPazYCiudadania/descripcion.vue";
import ImpactoIniciativas from "@/components/proyectos/misionPazYCiudadania/impactoIniciativas.vue";
import Testimonios from "@/components/proyectos/misionPazYCiudadania/testimonios.vue";

export default {
  name: "PazYCiudadania",
  components: {
    MisionDescripcion,
    ImpactoIniciativas,
    Testimonios,
  },
};
</script>
<template>
  <div class="pazYCiudadania">
    <h2 class="section-title">MISIÓN, PAZ y CIUDADANÍA</h2>

    <MisionDescripcion />
    <ImpactoIniciativas />
    <Testimonios />
  </div>
</template>
