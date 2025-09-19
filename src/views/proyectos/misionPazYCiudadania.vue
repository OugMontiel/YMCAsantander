<script>
import TituloCiudadania from "@/components/sections/proyectos/misionPazYCiudadania/tituloPYC.vue";
import MisionDescripcion from "@/components/sections/proyectos/misionPazYCiudadania/descripcion.vue";
import ImpactoIniciativas from "@/components/sections/proyectos/misionPazYCiudadania/impactoIniciativas.vue";
import Testimonios from "@/components/sections/proyectos/misionPazYCiudadania/testimoniosPYC.vue";

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
