<script setup>
import { Icon } from "@iconify/vue";
import  beneficios  from '@/data/proyectos/beneficiosPrograma.js'
</script>

<template>
  <section class="pazBeneficios">
    <div class="beneficiosHeader">
      <h2>¿Por qué ser parte del programa?</h2>
    </div>
    <div class="beneficiosGrid">
      <div
        class="beneficioCard"
        v-for="(beneficio, index) in beneficios"
        :key="index"
      >
        <Icon :icon="beneficio.icono" :alt="beneficio.alt" class="iconoImg" />
        <p>{{ beneficio.texto }}</p>
      </div>
    </div>
  </section>
</template>


<style scoped>
.beneficiosHeader {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;

  margin-bottom: 2rem;
  padding: 2rem;

  text-align: center;
}

.logoBeneficiosHeader {
  width: 60px;
  height: auto;
}

.beneficiosGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
}

.beneficioCard {
  background-color: var(--color-fondo-secundario);
  padding: 1rem;
  border-left: 5px solid var(--color-hover-primario);
  border-radius: 1em;

  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  box-shadow: 0 2px 6px var(--color-fondo-shadow);
  transition: transform 0.2s ease;
}

.beneficioCard:hover {
  transform: translateY(-5px);
}

.iconoImg {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
}

.beneficioCard p {
  text-align: left;
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
}

/* md - Tablets */
@media (max-width: 768px) {
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
}
</style>
