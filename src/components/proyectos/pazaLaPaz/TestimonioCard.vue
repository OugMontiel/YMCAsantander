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
    <img class="foto" :src="foto" :alt="`Foto de ${nombre}`" />
    <h3>{{ nombre }}</h3>
    <p class="cita">"{{ cita }}"</p>
    <button class="btn" @click="$emit('ver-video', videoUrl)" role="button" :aria-label="`Ver video de ${nombre}`">▶ Ver video</button>
  </div>
</template>

<style scoped>
.card {
  background: var(--color-fondo-secundario);

  padding: 2rem;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  box-shadow: 0 2px 8px var(--color-fondo-shadow);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: transform 0.2s ease;
}
.card:hover {
  transform: translateY(-5px);
}
.card p {
  text-align: center;
}
.foto {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.btn {
  background-color: var(--color-botones-primario);
  color: var(--color-texto-principal-blanco);

  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1em;
  margin-top: 0.5rem;

  cursor: pointer;
}
.btn:hover {
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  transform: translateY(-5px);
  background-color: var(--color-hover-primario);
}
.btn:focus {
  outline: 2px dashed var(--color-hover-primario);
  outline-offset: 3px;
}
</style>
