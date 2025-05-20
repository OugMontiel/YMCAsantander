<script>
import {ref, onMounted} from "vue";
import proyectosData from "@/data/proyectos/proyectosData.js";

export default {
  name: "ProyectosCard",
  setup() {
    const proyectos = ref([]);

    onMounted(() => {
      proyectos.value = proyectosData;
    });

    return {
      proyectos,
    };
  },
};
</script>

<template>
  <section class="proyectosCard">
    <div class="proyectosCardTitulo">
      <h1>Proyectos</h1>
      <p>Estos son algunos de los proyectos que hemos realizado en YMCA.</p>
    </div>

    <div class="proyectosCardContenido">
      <article class="proyectosCardItem" v-for="(proyecto, index) in proyectos" :key="index">
        <figure>
          <img :src="proyecto.img" :alt="`Imagen del proyecto: ${proyecto.titulo}`" />
          <figcaption>
            <h3>{{ proyecto.titulo }}</h3>
            <p>{{ proyecto.descripcion }}</p>
          </figcaption>
        </figure>
      </article>
    </div>
  </section>
</template>

<style scoped>
.proyectosCard {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.proyectosCardTitulo{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.proyectosCardContenido {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 3em;
}

.proyectosCardItem {
  width: 15em;
}
</style>
