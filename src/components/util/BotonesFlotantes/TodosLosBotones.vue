<script setup>
import WhatsappButton from "@/components/util/BotonesFlotantes/WhatsappButton.vue";
import BancoAvVillas from "@/components/util/BotonesFlotantes/BancoAvVillas.vue";
</script>

<template>
  <div class="fixed z-[100] inset-0 pointer-events-none">
    <div class="pointer-events-auto">
      <WhatsappButton />
      <BancoAvVillas />
    </div>
  </div>
</template>
