<script>
import testimoniosRaw from "@/data/testimonios/testimoniosPLP.js";
import TestimonioCard from "@/components/proyectos/pazaLaPaz/TestimonioCard.vue";
import VideoModal from "@/components/proyectos/pazaLaPaz/VideoModal.vue";

export default {
  name: "TestimoniosPLP",
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
        wrapper: 'gap-[1em]',
      }"
      :autoplay="{delay: 2000}"
      loop
      indicators
      class="px-4"
    >
      <template #default="{item: testimonio}">
        <TestimonioCard
          id="videoModal"
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
  background-color: var(--color-fondo);
}

.pazTestimonios h2 {
  margin-bottom: 2rem;
  color: var(--color-texto-secundario);
}

/* xxl - Pantallas grandes */
@media (min-width: 1201px) {
}

/* xl - Laptops / desktops medianos */
@media (max-width: 1200px) {
}

/* lg - Laptops pequeñas */
@media (max-width: 992px) {
  .pazTestimonios {
    padding: 1.5rem;
  }
}

/* md - Tablets */
@media (max-width: 768px) {
  .pazTestimonios {
    padding: 1rem;
  }
}

/* sm - Teléfonos estándar */
@media (max-width: 576px) {
  .pazTestimonios h2 {
    font-size: 2rem;
  }
}

/* xs - Teléfonos pequeños */
@media (max-width: 480px) {
}
</style>
