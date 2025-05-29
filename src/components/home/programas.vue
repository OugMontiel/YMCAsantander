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
  <!-- Presentación de programas -->
  <section class="programas">
    <div class="programasTitulo">
      <h1>Nuestros Programas</h1>
      <p>
        Descubre las iniciativas que promovemos para construir una sociedad más justa y pacífica, impulsando la inclusión, el liderazgo
        juvenil y el compromiso comunitario.
      </p>
    </div>
    <div class="programasContenido">
      <article class="programa" v-for="proyecto in proyectos" :key="proyecto.id || proyecto.titulo">
        <img :src="proyecto.img" :alt="`Imagen del proyecto: ${proyecto.titulo}`" class="proyectoImagen" />
        <div class="proyectosCardItemContenido">
          <h2>{{ proyecto.titulo }}</h2>
          <p>{{ proyecto.descripcion }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.programas {
  padding: 2rem;
  background-color: var(--color-fondo-secundario);
  color: var(--color-texto-principal);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.programasTitulo {
  text-align: center;
}
.programasTitulo h1 {
  margin-bottom: 0.5rem;
}

.programasTitulo p {
  margin-bottom: 2rem;
}

.programasContenido {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;

  width: 100%;
}

.programa {
  background: var(--color-fondo-texto);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px var(--color-fondo-shadow);
  flex: 1 1 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 460px;
}
.proyectoImagen {
  max-height: 620px;
}

.programa h2 {
  margin-bottom: 0.5rem;
}
</style>
