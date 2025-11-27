<script>
export default {
  props: {
    nombre: {type: String, required: true},
    cita: {type: String, required: true},
    videoUrl: {type: String, required: true},
    foto: {type: String, required: true},
  },
};
</script>

<template>
  <div class="card">
    <img class="foto" v-lazy="{src: foto}" :alt="`Foto de ${nombre}`" />
    <h3>{{ nombre }}</h3>
    <p class="cita">"{{ cita }}"</p>
    <button
      class="btn"
      @click="$emit('ver-video', videoUrl)"
      :aria-label="`Ver video de ${nombre}`"
      aria-haspopup="dialog"
      aria-controls="videoModal"
    >
      ▶ Ver video
    </button>
  </div>
</template>

<style scoped>
.card {
  background: var(--color-fondo-secundario);
  padding: 2rem;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  width: 18rem;
  max-width: 100%;
  overflow: hidden;
  box-shadow: 0 4px 12px var(--color-fondo-shadow);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 auto;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 6px 16px var(--color-fondo-shadow);
}

.card h3 {
  margin: 0;
  font-size: 1.25rem;
  color: var(--color-texto-secundario);
  text-align: center;
}

.card p {
  text-align: center;
  margin: 0;
  font-style: italic;
  line-height: 1.5;
}

.foto {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-hover-primario);
  box-shadow: 0 2px 8px var(--color-fondo-shadow);
}

.btn {
  background-color: var(--color-botones-primario);
  color: var(--color-texto-principal-blanco);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 1.5rem;
  margin-top: 0.5rem;
  cursor: pointer;
  font-weight: var(--peso-bold);
  font-size: 0.9rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn:hover {
  background-color: var(--color-hover-primario);
  transform: scale(1.05);
}

.btn:focus {
  outline: 2px dashed var(--color-hover-primario);
  outline-offset: 3px;
}

.btn:active {
  transform: scale(0.98);
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
  .card {
    width: 20rem;
  }
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
  .card {
    width: 18rem;
  }
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
  .card {
    width: 16rem;
    padding: 1.5rem;
  }
  
  .foto {
    width: 80px;
    height: 80px;
  }
}

/* md - Tablets */
@media (max-width: 768px) {
  .card {
    width: 14rem;
    padding: 1.25rem;
  }
  
  .card h3 {
    font-size: 1.1rem;
  }
  
  .foto {
    width: 70px;
    height: 70px;
  }
  
  .btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
  .card {
    width: 12rem;
    padding: 1rem;
    gap: 0.75rem;
  }
  
  .card h3 {
    font-size: 1rem;
  }
  
  .card p {
    font-size: 0.9rem;
  }
  
  .foto {
    width: 60px;
    height: 60px;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
  .card {
    width: 11rem;
  }
}
</style>
