<template>
  <div class="p-6 bg-gray-100 rounded-lg">
    <h2 class="text-xl font-bold mb-4">Síguenos en redes</h2>
    <SocialLinks
      :links="socialLinks"
      size="32"
      default-color="#333"
    />
  </div>
</template>

<script setup>
import SocialLinks from '@/components/ui/SocialLinks.vue'

const socialLinks = [
  { name: 'Facebook', icon: 'mdi:facebook', url: 'https://facebook.com/tuPagina', color: '#1877F2' },
  { name: 'Instagram', icon: 'mdi:instagram', url: 'https://instagram.com/tuPerfil', color: '#E4405F' },
  { name: 'X (Twitter)', icon: 'mdi:twitter', url: 'https://twitter.com/tuCuenta', color: '#1DA1F2' },
  { name: 'YouTube', icon: 'mdi:youtube', url: 'https://youtube.com/tuCanal', color: '#FF0000' },
  { name: 'WhatsApp', icon: 'mdi:whatsapp', url: 'https://wa.me/573001234567', color: '#25D366' }
]
0</script>
