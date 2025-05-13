<script setup>
import {RouterView} from "vue-router";
import Header from "@/components/header.vue";
import Footer from "@/components/Footer.vue";
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
</style>
