<script>
import Inicio from "@/components/proyectos/inicio.vue";
import Cards from "@/components/proyectos/cards.vue";
import Estadisticas from "@/components/proyectos/estadisticas.vue";

export default {
  name: "Proyectos",
  components: {
    Inicio,
    Cards,
    Estadisticas,
  },
  data() {
    return {
      // Aquí puedes agregar datos si es necesario
    };
  },
  mounted() {
    // Aquí puedes agregar lógica si es necesario
  },
};
</script>
<template>
  <main class="proyectos">
    <!-- img con texto de fondo -->
    <div class="ProyectosInicio">
      <Inicio />
    </div>

    <!-- cars de los proyectos -->
    <div class="ProyectosCards">
      <Cards />
    </div>

    <!-- Estadisticas Generales -->
    <div class="ProyectosEstadisticas">
      <Estadisticas />
    </div>
  </main>
</template>
