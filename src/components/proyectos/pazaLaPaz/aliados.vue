<script>
import {aliados} from "@/data/proyectos/aliados.js";

export default {
  name: "Aliados",
  data() {
    return {
      aliados,
    };
  },
};
</script>

<template>
  <section class="pazAliados">
    <h2>Aliados Estratégicos</h2>
    <div class="logos">
      <img v-for="(aliado, index) in aliados" :key="index" :src="aliado.logo" :alt="aliado.nombre" />
    </div>
  </section>
</template>

<style scoped>
.pazAliados {
  text-align: center;
  padding: 2rem;
  background-color: var(--color-fondo-texto);
}

.logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
}

.logos img {
  width: 100px;
  height: 100px;

  padding: 1rem;
  border-radius: 1em;
  transition: transform 0.2s ease;
}

.logos img:hover {
  box-shadow: 0 2px 6px var(--color-fondo-shadow);
  transform: scale(1.05);
}
</style>
