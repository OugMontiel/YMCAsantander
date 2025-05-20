<script>
import imgProyectos from "@/assets/img/proyectos/proyectos.jpg";

export default {
  name: "InicioProyectos",
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
      <h1>Proyectos <strong>YMCA</strong></h1>
      <p>Aquí podrás encontrar todos los proyectos que hemos realizado en YMCA, desde el año 2018 hasta la fecha.</p>
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
  text-align: center;
}
</style>
