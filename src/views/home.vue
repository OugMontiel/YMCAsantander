<script setup lang="js">
import img1 from "@/assets/fondos/fondoAzulOpc1.png";
import img2 from "@/assets/fondos/fondoMoradoOpc1.png";
import img3 from "@/assets/fondos/fondoNaranjaOpc1.png";
import img4 from "@/assets/fondos/fondoAzulOpc1.png";
import img5 from "@/assets/fondos/fondoMoradoOpc1.png";
import img6 from "@/assets/fondos/fondoNaranjaOpc1.png";

const items = [img1, img2, img3, img4, img5, img6];
</script>

<template>
  <div class="home">
    <UCarousel
      v-slot="{item}"
      loop
      arrows
      auto-scroll
      :items="items"
      :ui="{
        item: 'basis-1/3 shrink-0',
      }"
    >
      <img :src="item" />
    </UCarousel>
  </div>
</template>

<style scoped>
.home img {
  height: 40em;
}
</style>
