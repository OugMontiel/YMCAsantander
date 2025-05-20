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
  <section class="card-proyectos">
    <header class="card-proyectos__header">
      <h2>Proyectos</h2>
      <p>Estos son algunos de los proyectos que hemos realizado en YMCA.</p>
    </header>

    <div class="card-proyectos__container">
      <article class="card-proyectos__item" v-for="(proyecto, index) in proyectos" :key="index">
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
.proyectos-card {
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1rem;
  color: #555;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: #fff;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
}

.card__image {
  width: 100%;
  height: 140px;
  object-fit: cover;
}

.card__body {
  padding: 1rem;
}

.card__title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card__description {
  font-size: 0.9rem;
  color: #666;
}
</style>
