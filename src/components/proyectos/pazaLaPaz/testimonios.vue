<script>
import testimoniosRaw from "@/data/testimonios/testimonios.js";
import TestimonioCard from "@/components/proyectos/pazaLaPaz/TestimonioCard.vue";
import VideoModal from "@/components/proyectos/pazaLaPaz/VideoModal.vue";

export default {
  components: {
    TestimonioCard,
    VideoModal,
  },
  data() {
    return {
      testimonios: this.mezclarTestimonios([...testimoniosRaw]),
      modalVisible: false,
      videoActual: "",
    };
  },
  methods: {
    abrirModal(url) {
      this.videoActual = url;
      this.modalVisible = true;
    },
    mezclarTestimonios(array) {
      return array.sort(() => 0.5 - Math.random());
    },
  },
};
</script>

<template>
  <section class="pazTestimonios">
    <h2>Testimonios</h2>

    <UCarousel 
    :items="testimonios" 
     :ui="{
    item: 'flex justify-center basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4',
    wrapper: 'gap-[1em]'
  }"
    :autoplay="{delay: 2000}" 
    loop 
    indicators 
    class="px-4">
      <template #default="{item: testimonio}">
        <TestimonioCard
          :nombre="testimonio.nombre"
          :cita="testimonio.cita"
          :foto="testimonio.foto"
          :videoUrl="testimonio.videoUrl"
          @ver-video="abrirModal"
        />
      </template>
    </UCarousel>

    <VideoModal :visible="modalVisible" :videoUrl="videoActual" @cerrar="modalVisible = false" />
  </section>
</template>

<style scoped>
.pazTestimonios {
  padding: 2rem;
  text-align: center;
  overflow: hidden;
}
.pazGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
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
