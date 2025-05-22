<script>
import {testimonios} from "@/data/testimonios/testimonios.js";
import TestimonioCard from "@/components/proyectos/pazaLaPaz/TestimonioCard.vue";
import VideoModal from "@/components/proyectos/pazaLaPaz/VideoModal.vue";

export default {
  components: {
    TestimonioCard,
    VideoModal,
  },
  data() {
    return {
      modalVisible: false,
      videoActual: "",
      testimonios,
    };
  },
  methods: {
    abrirModal(url) {
      this.videoActual = url;
      this.modalVisible = true;
    },
  },
};
</script>

<template>
  <section class="pazTestimonios">
    <h2>Testimonios</h2>
    <div class="pazGrid">
      <TestimonioCard
        v-for="testimonio in testimonios"
        :key="testimonio.id"
        :nombre="testimonio.nombre"
        :cita="testimonio.cita"
        :foto="testimonio.foto"
        :videoUrl="testimonio.videoUrl"
        @ver-video="abrirModal"
      />

      <VideoModal :visible="modalVisible" :videoUrl="videoActual" @cerrar="modalVisible = false" />
    </div>
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
</style>
