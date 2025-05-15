<script setup lang="js">
import img1 from "@/assets/img/carousel/fotoCarousel1.jpg";
import img2 from "@/assets/img/carousel/fotoCarousel2.jpg";
import img3 from "@/assets/img/carousel/fotoCarousel3.jpg";
import img4 from "@/assets/img/carousel/fotoCarousel4.jpg";
import img5 from "@/assets/img/carousel/fotoCarousel5.jpg";

const items = [img1, img2, img3, img4, img5];
</script>

<template>
  <section class="bienvenida" aria-label="Bienvenida YMCA Santander">
    <UCarousel v-slot="{item}" loop auto-scroll :items="items" :ui="{item: 'basis-full shrink-0'}" class="homeCarousel">
      <img :src="item" alt="Imagen del carrusel YMCA" class="w-full aspect-[16/9] object-cover" />
    </UCarousel>

    <div class="homeBienvenidaContent">
      <h1>YMCA SANTANDER</h1>
      <p>
        <strong>YMCA</strong> Santander forma parte del movimiento mundial de la Asociación Cristiana de Jóvenes (ACJ-YMCA), fundada en 1844
        por George Williams. En <strong>Santander</strong> llega en 1994 y desde entonces, ha trabajado en el desarrollo juvenil, la
        inclusión social y la construcción de comunidades solidarias.
      </p>
    </div>
  </section>
</template>

<style scoped>
.bienvenida {
  position: relative;
  width: 100%;
}

.homeCarousel {
  width: 100%;
  aspect-ratio: 16 / 9; /* Mantiene proporción uniforme */
  z-index: -1;
}

.homeCarousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Texto */
.homeBienvenidaContent {
  position: absolute;
  bottom: 2rem; 
  right: 2rem;
  width: 45%;
  padding: 2rem;
  background-color: var(--color-fondo-texto);
  color: var(--color-texto-principal);
  border-radius: 1rem;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  text-align: center;
}

.homeBienvenidaContent h1 {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-texto-secundario);
  text-shadow: 1px 1px 4px var(--color-fonde-shadow);
}

.homeBienvenidaContent p {
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;
}

.homeBienvenidaContent strong {
  color: var(--color-texto-secundario);
  font-weight: bold;
}

/* Responsivo */
@media (max-width: 800px) {
  .homeBienvenidaContent {
    width: 90%;
    padding: 1.5rem;
    bottom: 1rem;
  }

  .homeBienvenidaContent h1 {
    font-size: 2rem;
  }
}
@media (min-width: 1024px) {
  .homeBienvenidaContent{
    bottom: auto;
    top: 10rem;
    
  }
}

</style>
