<script>
import imgProyectos from "@/assets/img/proyectos/proyectos.jpg";
import Cards from "@/components/proyectos/cards.vue";

export default {
  name: "InicioProyectos",
  components: {
    Cards,
  },
  data() {
    return {
      imgProyectos,
    };
  },
};
</script>
<template>
  <section class="inicioProyecto">
    <img :src="imgProyectos" alt="" srcset="" />
    <div class="incioContenido">
      <h1>Proyectos YMCA</h1>
      <p>Aquí podrás encontrar todos los proyectos que hemos realizado en YMCA, desde el año 2018 hasta la fecha.</p>
      <!-- cars de los proyectos -->
      <div class="ProyectosInicioCards">
        <Cards />
      </div>
    </div>
  </section>
</template>

<style>
.inicioProyecto {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.incioContenido {
  position: absolute;
  top: 3em;
  z-index: 10;

  background-color: var(--color-fondo-texto);
  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

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
  .ProyectosInicioCards {
    display: none;
  }
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
  .ProyectosInicioCards {
    display: block;
  }
}
</style>
