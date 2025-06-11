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
    <div class="proyectosCardContenido">
      <router-link class="proyectosCardItem" v-for="proyecto in proyectos" :key="proyecto.id || proyecto.titulo" :to="proyecto.to">
        <img :src="proyecto.img" :alt="`Imagen del proyecto: ${proyecto.titulo}`" class="proyectoImagen" />
        <div class="proyectosCardItemContenido">
          <h2>{{ proyecto.titulo }}</h2>
          <p>{{ proyecto.descripcion }}</p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.proyectosCard {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.proyectosCardContenido {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.proyectosCardItem {
  display: flex;
  flex-direction: row; /* importante: imagen y contenido en línea */
  align-items: stretch;
  border-radius: 16px;
  box-shadow: 0 10px 20px var(--color-fondo-shadow);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  width: 100%;
  max-width: 900px;
  overflow: hidden;
  animation: fadeUp 1s ease;
  cursor: pointer;
  background: white;
  text-decoration: none;
}

.proyectosCardItem:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 24px var(--color-hover-secundario);
}

.proyectoImagen {
  width: 300px;
  height: auto;
  object-fit: cover;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.proyectosCardItem:hover .proyectoImagen {
  transform: scale(1.05);
}

.proyectosCardItemContenido {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1; /* toma el espacio restante */
}

.proyectosCardItemContenido h2 {
  margin-bottom: 0.5rem;
}
/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
}

/* md - Tablets */
@media (max-width: 768px) {
  .proyectosCardItem {
    flex-direction: column;
  }
  .proyectoImagen {
    width: 100%;
    height: 200px;
  }
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
  .proyectosCardContenido {
    flex-direction: row;
  }
}
</style>
