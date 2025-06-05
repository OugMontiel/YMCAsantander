<script>
import TituloCiudadania from "@/components/proyectos/misionPazYCiudadania/tituloPYC.vue";
import MisionDescripcion from "@/components/proyectos/misionPazYCiudadania/descripcion.vue";
import ImpactoIniciativas from "@/components/proyectos/misionPazYCiudadania/impactoIniciativas.vue";
import Testimonios from "@/components/proyectos/misionPazYCiudadania/testimoniosPYC.vue";

export default {
  name: "PazYCiudadania",
  components: {
    MisionDescripcion,
    ImpactoIniciativas,
    Testimonios,
    TituloCiudadania,
  },
};
</script>

<template>
  <div class="pazYCiudadania">
    <TituloCiudadania />
    <MisionDescripcion />
    <ImpactoIniciativas />
    <Testimonios />
  </div>
</template>
