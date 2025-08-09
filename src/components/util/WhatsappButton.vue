<template>
  <UButton
    icon="i-logos-whatsapp"
    size="xl"
    color="green"
    square
    class="fixed bottom-4 right-4 shadow-lg rounded-full"
    @click="abrirChat"
  />
</template>

<script setup>
const abrirChat = () => {
  window.open("https://wa.me/573168291918", "_blank") // tu número de WhatsApp
}
</script>
