<script>
import imgProyectos from "@/assets/img/proyectos/proyectos.jpg";

export default {
  name: "Inicio",
  data() {
    return {
      imgProyectos,
    };
  },
};
</script>
<template>
  <section class="inicio">
    <img :src="imgProyectos" alt="" srcset="" />

    <h1>Proyectos <strong>YMCA</strong></h1>
    <p>Aquí podrás encontrar todos los proyectos que hemos realizado en YMCA, desde el año 2018 hasta la fecha.</p>
  </section>
</template>
