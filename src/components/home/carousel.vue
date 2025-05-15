<script setup lang="js">
import img1 from "@/assets/img/carousel/fondoAzulOpc1.png";
import img2 from "@/assets/img/carousel/fondoMoradoOpc1.png";
import img3 from "@/assets/img/carousel/fondoNaranjaOpc1.png";
import img4 from "@/assets/img/carousel/fondoAzulOpc1.png";
import img5 from "@/assets/img/carousel/fondoMoradoOpc1.png";
import img6 from "@/assets/img/carousel/fondoNaranjaOpc1.png";

const items = [img1, img2, img3, img4, img5, img6];
</script>

<template>
  <section class="bienvenida">
    <UCarousel
      v-slot="{item}"
      loop
      arrows
      auto-scroll
      :items="items"
      :ui="{
        item: 'basis-1/3 shrink-0',
      }"
      class="homeCarousel"
    >
      <img :src="item" />
    </UCarousel>
    <div class="homeBinvenida">
      <h1>YMCA SANTANDER</h1>
      <H2>bienvenidos </H2>
      <p>
        <strong>YMCA</strong> es un movimiento mundial con <strong>173 años de historia</strong>. y 30 años en Santander. respresentando a
        las santanderianos de una forma unica y exclusica
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Estilo Carousel */
.homeCarousel {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1; /* Fondo */
}

.homeCarousel img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.homeBinvenida {
  position: relative;
  width: 45%;

  margin: 4rem 4rem 0 auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 0.4em;

  background-color: var(--color-fondo-texto);
  color: var(--color-texto-principal);
  border-radius: 1rem;
  z-index: 1;
}

.homeBinvenida h1 {
  font-size: 3rem; /* Super grande */
  font-weight: 800; /* Bien negrita */
  color: var(--color-texto-secundario);
  text-shadow: 1px 1px 4px var(--color-fonde-shadow);
}

.homeBinvenida h2 {
  font-size: 1.5rem; /* Un poco más pequeño que h1 */
  font-weight: 600;
  color: var(--color-texto-secundario);
}

/* Estilo del párrafo */
.homeBinvenida p {
  font-size: 1rem; /* Tamaño normal */
  line-height: 1.6;
  text-align: justify;
}

.homeBinvenida strong {
  color: var(--color-texto-secundario);
  font-weight: bold;
}
</style>
