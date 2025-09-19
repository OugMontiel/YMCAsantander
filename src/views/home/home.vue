<script>
import Carousel from "@/components/sections/home/carousel.vue";
import Programas from "@/components/sections/home/programas.vue";
import Video from "@/components/sections/home/video.vue";

export default {
  name: "HomeBienvenida",
  components: {
    Carousel,
    Programas,
    Video,
  },
};
</script>

<template>
  <div id="home" class="home">
    <!-- Carrusel -->
    <section class="bienvenida">
      <Carousel />
    </section>

    <!-- Presentación de programas -->
    <section class="programas">
      <Programas />
    </section>

    <!-- Video -->
    <section class="video">
      <Video />
    </section>
  </div>
</template>

<style scoped>
.home {
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
