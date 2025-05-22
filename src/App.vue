<script setup>
import {RouterView} from "vue-router";
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
</script>

<template>
  <div class="appContainer">
    <Header />
    <main class="mainContent">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.appContainer {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.mainContent {
  flex: 1;
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
