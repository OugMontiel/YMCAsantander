<script>
import QueSomos from "@/components/about/queSomos.vue";
import MisionYVision from "@/components/about/misionYVision.vue";
import Historia from "@/components/about/historia.vue";

export default {
  name: "About",
  components: {
    QueSomos,
    MisionYVision,
    Historia,
  },
};
</script>
<template>
  <div class="about">
    <!-- Que es la YMCA -->
    <section class="aboutQueSomos">
      <QueSomos />
    </section>

    <!-- Mision y vision -->
    <section class="aboutMisionYVision">
      <MisionYVision />
    </section>

    <!-- Historias -->
    <section class="aboutHistoria">
      <Historia />
    </section>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
