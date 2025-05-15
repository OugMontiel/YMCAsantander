<script>
import Carousel from "@/components/home/carousel.vue";
import Programas from "@/components/home/programas.vue";
import Video from "@/components/home/video.vue";

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
  <div class="home">
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
