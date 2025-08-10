<template>
  <UButton
    square
    variant="ghost"
    color="gray"
    class="fixed bottom-6 right-6 w-20 h-20 bg-transparent shadow-none rounded-full"
    @click="abrirChat"
  >
      <UIcon
        name="logos:whatsapp-icon"
        class="w-14 h-14 transition-transform transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.7)]"
      />
  </UButton>
</template>

<script setup>
const abrirChat = () => {
  window.open("https://wa.me/573168291918", "_blank")
}
</script>
