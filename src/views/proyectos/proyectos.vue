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

<style>
/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
}

/* md - Tablets */
@media (max-width: 768px) {
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
  .ProyectosCards {
    display: block;
  }
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
  .ProyectosCards {
    display: none;
  }
}
</style>
